import React, { Component } from "react";
import { loadModules } from "esri-loader";
import { getMapData } from "../services/mapAPIFuncs";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    getMapData().then(countries => this.setState({ countries }));
    //this.setState({countries}))
    //console.log("getMapData()", getMapData())
    console.log("this.state", this.state);

    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/Graphic"], {
      css: true
    }).then(([Map, MapView, FeatureLayer, Graphic]) => {
      //map is the container, all my layers are added to map
      const map = new Map({
        basemap: "dark-gray"
      });

      console.log("Right before graphics:", this.state.countries);
      const graphics = this.state.countries.map(point => {
        return new Graphic({
          attributes: {
            ObjectId: point.id,
            cases: point.confirmed
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
        renderer: {
          type: "simple", // autocasts as new SimpleRenderer()
          symbol: {
            // autocasts as new SimpleMarkerSymbol()
            type: "simple-marker",
            color: "#102A44",
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: "#598DD8",
              width: 2
            }
          }
        },
        popupTemplate: {
          // autocasts as new PopupTemplate()
          title: "COIVD-19",
          content: [
            {
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "cases",
                  label: "Cases",
                  visible: true
                }
              ]
            }
          ]
        },
        objectIdField: "ObjectID", // This must be defined when creating a layer from `Graphic` objects
        fields: [
          {
            name: "ObjectID",
            alias: "ObjectID",
            type: "oid"
          },
          {
            name: "cases",
            alias: "cases",
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
