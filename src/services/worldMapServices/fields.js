export const worldFields = [
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
    type: "integer"
  },
  // {
  //   name: "recovered",
  //   alias: "Recovered",
  //   type: "integer"
  // },
  {
    name: "deaths",
    alias: "Deaths",
    type: "integer"
  }
]

export const usFields = [
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
    name: "state",
    alias: "State",
    type: "string"
  },
  {
    name: "county",
    alias: "County",
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
    type: "integer"
  },
  // {
  //   name: "recovered",
  //   alias: "Recovered",
  //   type: "integer"
  // },
  {
    name: "deaths",
    alias: "Deaths",
    type: "integer"
  }
]

export const choroplethFields = [
  {
    name: "JOIN_FID",
    alias: "JOIN_FID",
    type: "oid"
  },
  {
    name: "COUNTRY",
    alias: "Country",
    type: "string"
  },
  {
    name: "Date",
    alias: "Last Updated",
    type: "string"
  },
  {
    name: "number_of_cases",
    alias: "Confirmed Cases",
    type: "integer"
  },
  // {
  //   name: "recovered",
  //   alias: "Recovered",
  //   type: "integer"
  // },
  {
    name: "number_of_deaths",
    alias: "Deaths",
    type: "integer"
  }
]
