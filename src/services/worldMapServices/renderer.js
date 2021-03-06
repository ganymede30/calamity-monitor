export const covidCasesRenderer = {
  type: "simple",
  symbol: {
    type: "simple-marker",
    color: "red",
    outline: {
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
  type: "simple",
  symbol: {
    type: "simple-marker",
    color: "black",
    outline: {
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
