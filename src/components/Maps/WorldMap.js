import React, { Component } from "react";
import { loadModules } from "esri-loader";
import { fetchWorldData, fetchUSData } from "../../services/worldMapServices/mapAPIFuncs";
import { worldRenderer, usRenderer } from "../../services/worldMapServices/renderer";
import { worldPopupTemplate, usPopupTemplate } from "../../services/worldMapServices/popupTemplate";
import { worldFields, usFields } from "../../services/worldMapServices/fields";
import { expressionsCovid19 } from "../../services/worldMapServices/expressions";
import { actionSectionsCovid19 } from "../../services/worldMapServices/actionSections";

export default class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      countries: [],
      counties: []
    };
  }

  async componentDidMount() {
    await fetchWorldData().then(countries => this.setState({ countries }));
    await fetchUSData().then(counties => this.setState({ counties }));

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
        const map = new Map({
          basemap: "dark-gray"
        });

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

        const worldFeatureLayer = new FeatureLayer({
          source: worldGraphics,
          outFields: ["*"],
          title: "Global COVID-19 Cases",
          renderer: worldRenderer,
          popupTemplate: worldPopupTemplate,
          objectIdField: "ObjectID",
          fields: worldFields
        });

        const usFeatureLayer = new FeatureLayer({
          source: usGraphics,
          title: "US COVID-19 Cases",
          renderer: usRenderer,
          popupTemplate: usPopupTemplate,
          objectIdField: "ObjectID",
          fields: usFields
        });

        usFeatureLayer.visible = false;

        map.add(usFeatureLayer);
        map.add(worldFeatureLayer);

        this.view = new MapView({
          container: this.mapRef.current,
          map: map,
          center: [-98, 36]
        });

        this.view.constraints = {
          minZoom: 3
        };

        const layerList = new LayerList({
          view: this.view,
          listItemCreatedFunction: createActions
        });

        const layerListExpand = new Expand({
          content: layerList
        });
        this.view.ui.add(layerListExpand, "top-right");

        const expressions = new Collection(expressionsCovid19);

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
          item.actionsOpen = true;
          item.actionsSections = actionSectionsCovid19;
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
