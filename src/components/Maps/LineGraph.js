import React, { Component } from "react";
import { loadModules } from "esri-loader";
import WorldMap from "./WorldMap"
import { Chart } from '@esri/cedar';


const LineGraph = () => {

  const definiton = {
    type: "area",
    datasets: [
      {
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0",
        query: {
          orderByFields: "POPULATION DESC"
        }
      }
    ],
    series: [
      {
        category: { field: "STATE_NAME", label: "US State" },
        value: { field: "POPULATION", label: "Population" }
      }
    ]
  };

  const cedarChart = new cedar.Chart("chart", definition);
  cedarChart.show();

  // return {
  //   type: "area",
  //   datasets: [
  //     {url: "https://services5.arcgis.com/7nsPwEMP38bSkCjy/arcgis/rest/services/jhu_covid19_time_series/FeatureServer",
  //     query: {
  //       orderByFields: "Date DESC",
  //       outStatistics: [
  //         {
  //           statisticType: "sum",
  //           onStatisticField: "number_of_cases",
  //           outStatisticFieldName: "number_of_cases_SUM"
  //         },
  //         {
  //           statisticType: "sum",
  //           onStatisticField: "number_of_deaths",
  //           outStatisticFieldName: "number_of_deaths_SUM"
  //         }
  //       ]
  //     }

  //     }
  //   ]
  // }
}

export default LineGraph
