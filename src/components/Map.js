import React, {Component} from 'react';
import {loadModules} from 'esri-loader';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/layers/CSVLayer', 'esri/views/MapView'], {
      css: true,
    }).then(([Map, CSVLayer, MapView]) => {
      //map is the container, all my layers are added to map
      const map = new Map({
        basemap: 'dark-gray',
      });
      const renderer = {
        type: 'simple',
        field: 'mag',
        symbol: {
          type: 'simple-marker',
          color: 'red',
          outline: {
            color: 'white',
          },
        },
        visualVariables: [
          {
            type: 'size',
            field: 'mag',
            stops: [
              {
                value: 2.5,
                size: '4px',
              },
              {
                value: 8,
                size: '40px',
              },
            ],
          },
        ],
      };
      const csvLayer = new CSVLayer({
        url:
          'https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_19-covid-Confirmed.csv&filename=time_series_2019-ncov-Confirmed.csv',
        copyright: 'USGS Earthquakes',
        renderer: renderer,
      });
      map.add(csvLayer);
      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-98, 36],
        zoom: 3,
      });
      console.log("'webMapView.js' this.view: ", this.view);
      console.log("'webMapView.js' map: ", map);
      console.log("'webMapView.js' this.mapRef: ", this.mapRef);
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
