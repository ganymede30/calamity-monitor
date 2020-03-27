export const expressionsCovid19 = [
  {
    id: "All",
    expression: "confirmed_cases > 0"
  },
  {
    id: "50,000+",
    expression: "confirmed_cases > 50000"
  },
  {
    id: "10,000-50,000",
    expression: "confirmed_cases > 10000 AND confirmed_cases <= 50000"
  },
  {
    id: "1,000-10,000",
    expression: "confirmed_cases > 1000 AND confirmed_cases <= 10000"
  },
  {
    id: "100-1,000",
    expression: "confirmed_cases > 100 AND confirmed_cases <= 1000"
  },
  {
    id: "1-100",
    expression: "confirmed_cases > 10 AND confirmed_cases <= 100"
  }
]
