// export const worldRenderer = {
//   type: "simple", // autocasts as new SimpleRenderer()
//   symbol: {
//     // autocasts as new SimpleMarkerSymbol()
//     type: "simple-marker",
//     color: "red",
//     outline: {
//       // autocasts as new SimpleLineSymbol()
//       color: "white"
//     }
//   },
//   visualVariables: [
//     {
//       type: "size",
//       field: "confirmed_cases",
//       stops: [
//         {
//           value: 0,
//           size: "0px"
//         },
//         {
//           value: 100,
//           size: "15px"
//         },
//         {
//           value: 100000,
//           size: "120px"
//         }
//       ]
//     },
//     {
//       type: "opacity",
//       field: "confirmed_cases",
//       stops: [
//         {
//           value: 0,
//           opacity: 0.4
//         }
//       ]
//     }
//   ]
// };
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
          value: 50,
          size: "10px"
        },
        // {
        //   value: 100,
        //   size: "20px"
        // },
        {
          value: 1000,
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
