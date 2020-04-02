import React, { Component } from "react";
import { loadModules } from "esri-loader";
import { fetchWorldData, fetchUSData, fetchTimeData } from "../../services/worldMapServices/mapAPIFuncs";
import { covidCasesRenderer, covidDeathsRenderer, choroplethRenderer } from "../../services/worldMapServices/renderer";
import { worldPopupTemplate, usPopupTemplate, choroplethPopupTemplate } from "../../services/worldMapServices/popupTemplate";
import { worldFields, usFields, choroplethFields } from "../../services/worldMapServices/fields";
import { covidCasesExpressions } from "../../services/worldMapServices/expressions";
import { covidCasesGlobalActionSections, covidCasesUSActionSections } from "../../services/worldMapServices/actionSections";

export default class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      countries: [],
      counties: [],
      timeline: []
    };
  }

  async componentDidMount() {
    await fetchWorldData().then(countries => this.setState({ countries }));
    await fetchUSData().then(counties => this.setState({ counties }));
    await fetchTimeData().then(timeline => this.setState({ timeline }))

    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/Graphic",
        "esri/widgets/LayerList",
        "esri/core/Collection",
        "esri/widgets/BasemapToggle",
        "esri/layers/GeoJSONLayer",
        "esri/widgets/TimeSlider",
        "esri/widgets/Expand",
        "esri/widgets/Legend"
      ],
      {
        css: true
      }
    ).then(
      ([Map, MapView, FeatureLayer, Graphic, LayerList, Collection, BasemapToggle, GeoJSONLayer, TimeSlider, Expand, Legend]) => {
        let layerView

        const layer = new GeoJSONLayer({
          url:
            "https://bsvensson.github.io/various-tests/geojson/usgs-earthquakes-06182019.geojson",
          copyright: "USGS Earthquakes",
          title: "USGS Earthquakes",
          // set the CSVLayer's timeInfo based on the date field
          timeInfo: {
            startField: "time", // name of the date field
            interval: {
              // set time interval to one day
              unit: "days",
              value: 1
            }
          },
          renderer: {
            type: "simple",
            field: "mag",
            symbol: {
              type: "simple-marker",
              color: "orange",
              outline: null
            },
            visualVariables: [
              {
                type: "size",
                field: "mag",
                stops: [
                  {
                    value: 1,
                    size: "5px"
                  },
                  {
                    value: 2,
                    size: "15"
                  },
                  {
                    value: 3,
                    size: "35"
                  }
                ]
              },
              {
                type: "color",
                field: "depth",
                stops: [
                  {
                    value: 2.5,
                    color: "#F9C653",
                    label: "<2km"
                  },
                  {
                    value: 3.5,
                    color: "#F8864D",
                    label: "3km"
                  },
                  {
                    value: 4,
                    color: "#C53C06",
                    label: ">4km"
                  }
                ]
              }
            ]
          },
          popupTemplate: {
            title: "{title}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "place",
                    label: "Location",
                    visible: true
                  },
                  {
                    fieldName: "mag",
                    label: "Magnitude",
                    visible: true
                  },
                  {
                    fieldName: "depth",
                    label: "Depth",
                    visible: true
                  }
                ]
              }
            ]
          }
        });

        const map = new Map({
          basemap: "dark-gray",
          layers: [layer]
        });

        this.view = new MapView({
          container: this.mapRef.current,
          map: map,
          center: [-98, 36],
          constraints: {minZoom: 3}
        });

        // create a new time slider widget
        // set other properties when the layer view is loaded
        // by default timeSlider.mode is "time-window" - shows
        // data falls within time range
        const timeSlider = new TimeSlider({
          container: "timeSlider",
          playRate: 50,
          stops: {
            interval: {
              value: 1,
              unit: "hours"
            }
          }
        });
        this.view.ui.add(timeSlider, "manual");

        // wait till the layer view is loaded
        this.view.whenLayerView(layer).then(function(lv) {
          layerView = lv;

          // start time of the time slider - 5/25/2019
          const start = new Date(2019, 4, 25);
          // set time slider's full extent to
          // 5/25/5019 - until end date of layer's fullTimeExtent
          timeSlider.fullTimeExtent = {
            start: start,
            end: layer.timeInfo.fullTimeExtent.end
          };

          // We will be showing earthquakes with one day interval
          // when the app is loaded we will show earthquakes that
          // happened between 5/25 - 5/26.
          const end = new Date(start);
          // end of current time extent for time slider
          // showing earthquakes with one day interval
          end.setDate(end.getDate() + 1);

          // Values property is set so that timeslider
          // widget show the first day. We are setting
          // the thumbs positions.
          timeSlider.values = [start, end];
        });

        // watch for time slider timeExtent change
        timeSlider.watch("timeExtent", function() {
          // only show earthquakes happened up until the end of
          // timeSlider's current time extent.
          layer.definitionExpression =
            "time <= " + timeSlider.timeExtent.end.getTime();

          // now gray out earthquakes that happened before the time slider's current
          // timeExtent... leaving footprint of earthquakes that already happened
          layerView.effect = {
            filter: {
              timeExtent: timeSlider.timeExtent,
              //geometry: this.view.extent
            },
            excludedEffect: "grayscale(20%) opacity(12%)"
          };

          // run statistics on earthquakes fall within the current time extent
          const statQuery = layerView.effect.filter.createQuery();
          statQuery.outStatistics = [
            magMax,
            magAvg,
            magMin,
            tremorCount,
            avgDepth
          ];

          layer
            .queryFeatures(statQuery)
            .then(function(result) {
              let htmls = [];
              statsDiv.innerHTML = "";
              if (result.error) {
                return result.error;
              } else {
                if (result.features.length >= 1) {
                  const attributes = result.features[0].attributes;
                  for (const name in statsFields) {
                    if (attributes[name] && attributes[name] != null) {
                      const html =
                        "<br/>" +
                        statsFields[name] +
                        ": <b><span> " +
                        attributes[name].toFixed(2) +
                        "</span></b>";
                      htmls.push(html);
                    }
                  }
                  const yearHtml =
                    "<span>" +
                    result.features[0].attributes["tremor_count"] +
                    "</span> earthquakes were recorded between " +
                    timeSlider.timeExtent.start.toLocaleDateString() +
                    " - " +
                    timeSlider.timeExtent.end.toLocaleDateString() +
                    ".<br/>";

                  if (htmls[0] == undefined) {
                    statsDiv.innerHTML = yearHtml;
                  } else {
                    statsDiv.innerHTML =
                      yearHtml + htmls[0] + htmls[1] + htmls[2] + htmls[3];
                  }
                }
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        });

        const avgDepth = {
          onStatisticField: "depth",
          outStatisticFieldName: "Average_depth",
          statisticType: "avg"
        };

        const magMax = {
          onStatisticField: "mag",
          outStatisticFieldName: "Max_magnitude",
          statisticType: "max"
        };

        const magAvg = {
          onStatisticField: "mag",
          outStatisticFieldName: "Average_magnitude",
          statisticType: "avg"
        };

        const magMin = {
          onStatisticField: "mag",
          outStatisticFieldName: "Min_magnitude",
          statisticType: "min"
        };

        const tremorCount = {
          onStatisticField: "mag",
          outStatisticFieldName: "tremor_count",
          statisticType: "count"
        };

        const statsFields = {
          Max_magnitude: "Max magnitude",
          Average_magnitude: "Average magnitude",
          Min_magnitude: "Min magnitude",
          Average_depth: "Average Depth"
        };

        // add a legend for the earthquakes layer
        const legendExpand = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Legend",
          view: this.view,
          content: new Legend({
            view: this.view
          }),
          expanded: false
        });
        this.view.ui.add(legendExpand, "top-left");

        const statsDiv = document.getElementById("statsDiv");
        const infoDiv = document.getElementById("infoDiv");
        const infoDivExpand = new Expand({
          collapsedIconClass: "esri-icon-collapse",
          expandIconClass: "esri-icon-expand",
          expandTooltip: "Expand earthquakes info",
          view: this.view,
          content: infoDiv,
          expanded: true
        });
        this.view.ui.add(infoDivExpand, "top-right");

        const toggle = new BasemapToggle({
          view: this.view,
          nextBasemap: "gray"
        });
        this.view.ui.add(toggle, "bottom-right");
      }
    );
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return <div className="webmap" ref={this.mapRef} theme={"light"} />;
  }
}
