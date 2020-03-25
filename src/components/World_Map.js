import React, {Component} from 'react';
import {loadModules} from 'esri-loader';
import { getCoordinateData } from '../services/mapAPIFuncs'

export default class World_Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      countries: []
    };
  }

  componentDidMount() {

    getCoordinateData().then(countries => this.setState({countries}))

    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/Graphic",
        "esri/widgets/LayerList",
        "esri/core/Collection"
      ],
      {
        css: true
      }
    ).then(([Map, MapView, FeatureLayer, Graphic, LayerList, Collection]) => {
      //map is the container, all my layers are added to map
      const map = new Map({
        basemap: "dark-gray"
      });

      // console.log("Right before graphics:", this.state.countries);
      const graphics = this.state.countries.map(point => {
        return new Graphic({
          attributes: {
            ObjectId: point.id,
            country_code: point.country_code,
            country: point.country,
            province: point.province,
            last_updated: point.last_updated,
            confirmed_cases: point.confirmed,
            recovered: point.recovered,
            deaths: point.deaths
          },
          geometry: {
            longitude: point.long,
            latitude: point.lat,
            type: "point"
          }
        });
      });

      const featureLayer = new FeatureLayer({
        source: graphics,
        outFields: ["*"],
        title: "COVID-19 Cases Globally",
        objectIdField: "ObjectID", // This must be defined when creating a layer from `Graphic` objects
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid"
          },
          {
            name: "country",
            alias: "Country",
            type: "string"
          },
          {
            name: "province",
            alias: "Province",
            type: "string"
          },
          {
            name: "last_updated",
            alias: "Last Updated",
            type: "string"
          },
          {
            name: "confirmed_cases",
            alias: "Confirmed Cases",
            type: "string"
          },
          {
            name: "recovered",
            alias: "Recovered",
            type: "string"
          },
          {
            name: "deaths",
            alias: "Deaths",
            type: "string"
          }
        ]
      });

      map.add(featureLayer);

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-98, 36],
        zoom: 3
      });

      const layerList = new LayerList({
        view: this.view,
        listItemCreatedFunction: createActions
      });
      this.view.ui.add(layerList, "top-right");

      const expressions = new Collection([
        {
          id: "100+",
          expression: "confirmed_cases > 100"
        },
        {
          id: "10-100",
          expression: "confirmed_cases > 10 AND confirmed_cases <= 100"
        },
        {
          id: "1",
          expression: "confirmed_cases < 10"
        },
      ]);

      layerList.on("trigger-action", function(event) {
        const actionId = event.action.id;
        const layer = event.item.layer;

        const subExpression = expressions.find(function(item) {
          return item.id === actionId;
        }).expression;

        const definitionExpression = createDefinitionExpression(subExpression);
        layer.definitionExpression = definitionExpression;

        zoomToLayer(layer);
      });

      function createActions(event) {
        const item = event.item;

        item.actionsOpen = true;
        item.actionsSections = [
          [
            {
              title: "100+",
              className: "esri-icon-zoom-out-fixed",
              id: "100+"
            },
            {
              title: "10-100",
              className: "esri-icon-zoom-out-fixed",
              id: "10-100"
            },
            {
              title: "25°-50°F",
              className: "esri-icon-zoom-out-fixed",
              id: "1"
            }
          ],
        ];
      }

      function createDefinitionExpression(subExpression) {


        return subExpression
      }

      // Zooms to the extent of the layer as defined by
      // its definitionExpression
      // This method will work for all FeatureLayers, even
      // those without a saved `fullExtent` on the service.

      function zoomToLayer(layer) {
        return layer.queryExtent().then(function(response) {
          this.view.goTo(response.extent);
        });
      }

    });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      //<h1>Map.js is rendering</h1>
      <div className="webmap" ref={this.mapRef} />
    );
  }
}
