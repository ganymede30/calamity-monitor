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
        "esri/widgets/Expand"
      ],
      {
        css: true
      }
    ).then(
      ([Map, MapView, FeatureLayer, Graphic, LayerList, Collection, BasemapToggle, Expand]) => {



        console.log("this.state", this.state.timeline)
        const timelineGraphics = this.state.timeline.map(point => {
          //console.log(point)
          //console.log(point.history)

          return new Graphic({
            attributes: {
              ObjectId: point.id,
              country: point.country,
              // history: point.history,
              date: point.date,
              cases: point.cases
            },
            geometry: {
              longitude: point.long,
              latitude: point.lat,
              type: "point"
            }
          })
        })

        const worldGraphics = this.state.countries.map(point => {
          return new Graphic({
            attributes: {
              ObjectId: point.id,
              country_code: point.country_code,
              country: point.country,
              province: point.province,
              last_updated: point.last_updated,
              confirmed_cases: point.confirmed,
              //recovered: point.recovered,
              deaths: point.deaths
            },
            geometry: {
              longitude: point.long,
              latitude: point.lat,
              type: "point"
            }
          });
        });

        const usGraphics = this.state.counties.map(point => {
          return new Graphic({
            attributes: {
              ObjectId: point.id,
              country_code: point.country_code,
              country: point.country,
              state: point.state,
              county: point.county,
              last_updated: point.last_updated,
              confirmed_cases: point.confirmed,
              //recovered: point.recovered,
              deaths: point.deaths
            },
            geometry: {
              longitude: point.long,
              latitude: point.lat,
              type: "point"
            }
          });
        });

        const timeLine = new FeatureLayer({
          source: timelineGraphics,
          visible: true,
          outFields: ["*"],
          title: "COVID-19 Timeline",
          renderer: covidCasesRenderer,
          popupTemplate: worldPopupTemplate,
          objectIdField: "ObjectID",
          fields: worldFields
        })


        const covidChoropleth = new FeatureLayer({
          url: "https://services7.arcgis.com/Ya9q8cnnxtYOu4WD/arcgis/rest/services/Choropleth2/FeatureServer",
          visible: false,
          outFields: ["*"],
          title: "Global COVID-19 Cases Choropleth",
          renderer: choroplethRenderer,
          popupTemplate: choroplethPopupTemplate,
          objectIdField: "JOIN_FID",
          fields: choroplethFields
        })

        const worldCovidCases = new FeatureLayer({
          source: worldGraphics,
          visible: false,
          outFields: ["*"],
          title: "Global COVID-19 Cases",
          renderer: covidCasesRenderer,
          popupTemplate: worldPopupTemplate,
          objectIdField: "ObjectID",
          fields: worldFields
        });

        const worldCovidDeaths = new FeatureLayer({
          source: worldGraphics,
          visible: false,
          outFields: ["*"],
          title: "Global COVID-19 Deaths",
          renderer: covidDeathsRenderer,
          popupTemplate: worldPopupTemplate,
          objectIdField: "ObjectID",
          fields: worldFields
        });

        const usCovidCases = new FeatureLayer({
          source: usGraphics,
          visible: false,
          outFields: ["*"],
          title: "US COVID-19 Cases",
          renderer: covidCasesRenderer,
          popupTemplate: usPopupTemplate,
          objectIdField: "ObjectID",
          fields: usFields
        });

        const usCovidDeaths = new FeatureLayer({
          source: usGraphics,
          visible: false,
          outFields: ["*"],
          title: "US COVID-19 Deaths",
          renderer: covidDeathsRenderer,
          popupTemplate: usPopupTemplate,
          objectIdField: "ObjectID",
          fields: usFields
        });

        const map = new Map({
          basemap: "dark-gray",
          layers: [covidChoropleth, usCovidCases, usCovidDeaths, worldCovidCases, worldCovidDeaths, timeLine]
        });

        this.view = new MapView({
          container: this.mapRef.current,
          map: map,
          center: [-98, 36],
          constraints: {minZoom: 3}
        });

        const layerList = new LayerList({
          view: this.view,
          listItemCreatedFunction: createActions
        });

        const layerListExpand = new Expand({
          content: layerList
        });
        this.view.ui.add(layerListExpand, "top-right");

        const expressions = new Collection(covidCasesExpressions);

        layerList.on("trigger-action", function(event) {
          const actionId = event.action.id;
          const layer = event.item.layer;
          //This expression below is what lets us filter the virus by case load
          const subExpression = expressions.find(function(item) {
            //console.log("The item.id:", item.id);
            return item.id === actionId;
          }).expression;

          const definitionExpression = createDefinitionExpression(subExpression);
          layer.definitionExpression = definitionExpression;
        });

        layerList.statusIndicatorsVisible = false;

        function createActions(event) {
          const item = event.item;
          // console.log("event:", event)
          item.actionsOpen = true;
          item.actionsSections = covidCasesGlobalActionSections;
        }

        function createDefinitionExpression(subExpression) {
          return subExpression;
        }

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
        "esri/widgets/Legend",
        "esri/layers/ImageryLayer"
      ],
      {
        css: true
      }
    ).then(
      ([Map, MapView, FeatureLayer, Graphic, LayerList, Collection, BasemapToggle, GeoJSONLayer, TimeSlider, Expand, Legend, ImageryLayer]) => {

        const timelineGraphics = this.state.timeline.map(point => {
          //console.log(point)
          return new Graphic({
            attributes: {
              ObjectId: point.id,
              country: point.country,
              date: point.date,
              confirmed_cases: point.cases
            },
            geometry: {
              longitude: point.long,
              latitude: point.lat,
              type: "point"
            }
          })
        })

        const timeLine = new FeatureLayer({
          source: timelineGraphics,
          visible: true,
          outFields: ["*"],
          title: "COVID-19 Timeline",
          renderer: covidCasesRenderer,
          popupTemplate: worldPopupTemplate,
          objectIdField: "ObjectID",
          fields: worldFields,
          timeInfo: {
            startField: "date", // name of the date field
            interval: {
              // set time interval to one day
              unit: "days",
              value: 1
            }
          },
        })

        const map = new Map({
          basemap: "dark-gray",
          layers: [timeLine]
        });

        this.view = new MapView({
          container: this.mapRef.current,
          map: map,
          center: [-98, 36],
          constraints: {minZoom: 3}
        });

        // time slider widget initialization
        const timeSlider = new TimeSlider({
          container: "timeSlider",
          mode: "instant",
          view: this.view
        });
        this.view.ui.add(timeSlider, "manual");

        this.view.whenLayerView(layer).then(function(lv) {
          const fullTimeExtent = layer.timeInfo.fullTimeExtent;

          // set up time slider properties
          timeSlider.fullTimeExtent = fullTimeExtent;
          timeSlider.stops = {
            interval: layer.timeInfo.interval
          };
        });

        const legend = new Legend({
          view: this.view
        });
        const legendExpand = new Expand({
          expandIconClass: "esri-icon-collection",
          expandTooltip: "Legend",
          view: this.view,
          expanded: true,
          content: legend,
          expanded: false
        });
        this.view.ui.add(legendExpand, "top-left");
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



// const timeSlider = new TimeSlider({
//   container: "timeSlider",
//   mode: "instant",
//   playRate: 50,
//   stops: {
//     interval: {
//       value: 1,
//       unit: "hours"
//     }
//   }
// });
// this.view.ui.add(timeSlider, "manual");

// // wait till the layer view is loaded
// this.view.whenLayerView(layer).then(function(lv) {
//   layerView = lv;

//   // start time of the time slider - 5/25/2019
//   const start = new Date(2020, 1, 22);
//   const end = new Date(2020, 4, 1)
//   // set time slider's full extent to
//   // 5/25/5019 - until end date of layer's fullTimeExtent
//   timeSlider.fullTimeExtent = {
//     start: start,
//     end: end
//   };

//   // We will be showing earthquakes with one day interval
//   // when the app is loaded we will show earthquakes that
//   // happened between 5/25 - 5/26.
//   //const end = new Date(start);
//   // end of current time extent for time slider
//   // showing earthquakes with one day interval
//   //end.setDate(end.getDate() + 1);

//   // Values property is set so that timeslider
//   // widget show the first day. We are setting
//   // the thumbs positions.
//   //timeSlider.values = [start, end];
// });
