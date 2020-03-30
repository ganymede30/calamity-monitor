export const graphicsWorldMap = {
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
}
