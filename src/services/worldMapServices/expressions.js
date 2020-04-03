export const covidCasesExpressions = [
  {
    id: "All",
    expression: "confirmed_cases > 0"
  },
  {
    id: "100,000+",
    expression: "confirmed_cases > 100000"
  },
  {
    id: "10,000-100,000",
    expression: "confirmed_cases > 10000 AND confirmed_cases <= 100000"
  },
  {
    id: "1,000-10,000",
    expression: "confirmed_cases > 1000 AND confirmed_cases <= 10000"
  },
  {
    id: "1-1,000",
    expression: "confirmed_cases > 1 AND confirmed_cases <= 1000"
  }
]

export const covidDeathsExpressions = [
  {
    id: "All",
    expression: "deaths > 0"
  },
  {
    id: "10,000+",
    expression: "deaths > 10000"
  },
  {
    id: "1,000-10,000",
    expression: "deaths > 1000 AND deaths <= 10000"
  },
  {
    id: "1000-1,000",
    expression: "deaths > 100 AND deaths <= 1000"
  },
  {
    id: "1-100",
    expression: "deaths > 1 AND deaths <= 100"
  }
]
