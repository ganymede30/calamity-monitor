import React, { useState } from "react";
import Navbar from "./Navbar";
import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "../styles/palette";

const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(stored === "true" ? true : false);

  const toggler = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? colorsDark : colorsLight}>
        <GlobalStyles />
        <Navbar theme={isDarkMode} setTheme={toggler} />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;


const featureLayer = new FeatureLayer({
  source: graphics,
  renderer: {
    type: "simple", // autocasts as new SimpleRenderer()
    symbol: {
      // autocasts as new SimpleMarkerSymbol()
      type: "simple-marker",
      color: "red",
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: "white"
      }
    },
    visualVariables: [
      {
        type: "size",
        field: "confirmed_cases",
        legendOptions: {
          title:
            "Data provided by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE)"
        },
        stops: [
          {
            value: 0,
            size: "0px"
          },
          {
            value: 1,
            size: "1px"
          },
          {
            value: 10,
            size: "5px"
          },
          {
            value: 100,
            size: "10px"
          },
          {
            value: 1000,
            size: "25px"
          },
          {
            value: 10000,
            size: "50px"
          }
        ]
      }
    ]
  },
  title: "COVID-19 Cases Globally",
  popupTemplate: {
    // autocasts as new PopupTemplate()
    title: "COVID-19",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "country",
            label: "Country",
            visible: true
          },
          {
            fieldName: "province",
            label: "Province",
            visible: true
          },
          {
            fieldName: "last_updated",
            label: "Last Updated",
            visible: true
          },
          {
            fieldName: "confirmed_cases",
            label: "Confirmed Cases",
            visible: true
          },
          {
            fieldName: "recovered",
            label: "Recovered",
            visible: true
          },
          {
            fieldName: "deaths",
            label: "Deaths",
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
