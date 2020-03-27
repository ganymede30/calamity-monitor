import React, {useEffect, useRef, useState} from 'react';
import {loadModules} from 'esri-loader';
import { fetchData } from '../services/worldMapServices/mapAPIFuncs'
import { worldMapRenderer } from '../services/worldMapServices/renderer'
import { popupTemplateCovid19 } from '../services/worldMapServices/popupTemplate'
import { fieldsCovid19 } from '../services/worldMapServices/fields'
import { expressionsCovid19 } from '../services/worldMapServices/expressions'
import { actionSectionsCovid19 } from '../services/worldMapServices/actionSections'

export const World_Map = () => {
  const mapRef = useRef();
  const [countries, setCountries] = useState([])

  useEffect(
    () => {
      fetchData().then(coordinates => setCountries(coordinates))

      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(
        [
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/FeatureLayer",
          "esri/Graphic",
          "esri/widgets/LayerList",
          "esri/core/Collection",
          "esri/widgets/BasemapToggle"
        ],
        {
          css: true
        }
      ).then(([Map, MapView, FeatureLayer, Graphic, LayerList, Collection, BasemapToggle]) => {

        const map = new Map({
          basemap: "dark-gray"
        });

        const graphics = this.state.countries.map(point => {
          console.log("graphic happened")
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
          renderer: worldMapRenderer,
          popupTemplate: popupTemplateCovid19,
          objectIdField: "ObjectID",
          fields: fieldsCovid19
        });

        map.add(featureLayer);
        console.log("featureLayer added")

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-98, 36],
          zoom: 3
        });
        console.log("new MapView set")

        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: createActions
        });
        this.view.ui.add(layerList, "top-right");
        console.log("graphic happened")

        const expressions = new Collection(expressionsCovid19);

        layerList.on("trigger-action", function(event) {
          const actionId = event.action.id;
          const layer = event.item.layer;
          //This expression below is what lets us filter the virus by case load
          const subExpression = expressions.find(function(item) {
            console.log("The item.id:", item.id)
            return item.id === actionId;
          }).expression;

          const definitionExpression = createDefinitionExpression(subExpression);
          layer.definitionExpression = definitionExpression;

          zoomToLayer(layer);
        });

        function createActions(event) {
          const item = event.item;
          item.actionsOpen = true;
          item.actionsSections = actionSectionsCovid19
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
            view.goTo(response.extent);
          });
        }

        const toggle = new BasemapToggle({
          view: view,
          nextBasemap: "gray"
        })
        view.ui.add(toggle, "bottom-right")


        return () => {
          if (view) {
            // destroy the map view
            view.container = null;
          }
        };
      });
    }
  );

  return <div className="webmap" ref={mapRef} />;
};
