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
        "esri/widgets/Legend"
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
        outFields: ["*"],
        source: graphics,
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

      ])


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
