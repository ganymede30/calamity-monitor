export const covidCasesRenderer = {
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
      stops: [
        {
          value: 0,
          size: "0px"
        },
        {
          value: 50,
          size: "10px"
        },
        {
          value: 10000,
          size: "40px"
        },
        {
          value: 100000,
          size: "120px"
        }
      ]
    },
    {
      type: "opacity",
      field: "confirmed_cases",
      stops: [
        {
          value: 0,
          opacity: 0.4
        }
      ]
    }
  ]
};

export const covidDeathsRenderer = {
  type: "simple", // autocasts as new SimpleRenderer()
  symbol: {
    // autocasts as new SimpleMarkerSymbol()
    type: "simple-marker",
    color: "black",
    outline: {
      // autocasts as new SimpleLineSymbol()
      color: "white"
    }
  },
  visualVariables: [
    {
      type: "size",
      field: "deaths",
      stops: [
        {
          value: 0,
          size: "0px"
        },
        {
          value: 100,
          size: "10px"
        },
        {
          value: 10000,
          size: "40px"
        },
        {
          value: 100000,
          size: "120px"
        }
      ]
    },
    {
      type: "opacity",
      field: "deaths",
      stops: [
        {
          value: 0,
          opacity: 1
        }
      ]
    }
  ]
};

const less1000 = {
  type: "simple-fill", // autocasts as new SimpleFillSymbol()
  color: "#E57373",
  style: "solid",
  outline: {
    width: 0.2,
    color: [255, 255, 255, 0.5]
  }
}

const less10000 = {
  type: "simple-fill", // autocasts as new SimpleFillSymbol()
  color: "#F44336",
  style: "solid",
  outline: {
    width: 0.2,
    color: [255, 255, 255, 0.5]
  }
}

const less100000 = {
  type: "simple-fill", // autocasts as new SimpleFillSymbol()
  color: "#D32F2F",
  style: "solid",
  outline: {
    width: 0.2,
    color: [255, 255, 255, 0.5]
  }
}

const less1000000 = {
  type: "simple-fill", // autocasts as new SimpleFillSymbol()
  color: "#8B0000",
  style: "solid",
  outline: {
    width: 0.2,
    color: [255, 255, 255, 0.5]
  }
}

export const choroplethRenderer = {
  type: "class-breaks", // autocasts as new ClassBreaksRenderer()
  field: "number_of_cases",
  defaultSymbol: {
    type: "simple-fill", // autocasts as new SimpleFillSymbol()
    color: "black",
    style: "backward-diagonal",
    outline: {
      width: 0.5,
      color: [50, 50, 50, 0.6]
    }
  },
  defaultLabel: "no data",
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 1000,
      symbol: less1000,
      label: "< 35%"
    },
    {
      minValue: 1001,
      maxValue: 10000,
      symbol: less10000,
      label: "35 - 50%"
    },
    {
      minValue: 10001,
      maxValue: 100000,
      symbol: less100000,
      label: "50 - 75%"
    },
    {
      minValue: 100001,
      maxValue: 1000000,
      symbol: less1000000,
      label: "> 75%"
    }
  ]
}
