export const fetchData = () => {
  return fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu")
    .then(response => response.json())
    .then(data => {
      const { locations, latest } = data;
      return locations.map(location => ({
        id: location.id,
        lat: location.coordinates.latitude,
        long: location.coordinates.longitude,
        country_code: location.country_code,
        country: location.country,
        province: location.province,
        last_updated: location.last_updated,
        confirmed: location.latest.confirmed,
        deaths: location.latest.deaths,
        recovered: location.latest.recovered
      }));
    });
};
