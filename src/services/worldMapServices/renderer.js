export const renderer = {
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
          value: 100,
          size: "5px"
        },
        {
          value: 100000,
          size: "100px"
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
}
