export const fetchWorldData = () => {
  return fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu")
    .then(response => response.json())
    .then(data => {
      const { locations } = data;
      // latest: latest data from the whole world
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
        //recovered: location.latest.recovered
      }));
    });
};

export const fetchUSData = () => {
  return fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs")
    .then(response => response.json())
    .then(data => {
      const { locations } = data;
      // latest: latest data from the whole world
      return locations.map(location => ({
        id: location.id,
        lat: location.coordinates.latitude,
        long: location.coordinates.longitude,
        country_code: location.country_code,
        country: location.country,
        state: location.province,
        county: location.county,
        last_updated: location.last_updated,
        confirmed: location.latest.confirmed,
        deaths: location.latest.deaths,
        //recovered: location.latest.recovered
      }));
    });
};

// export const fetchLatestData = () => {
//   return fetch("https://coronavirus-tracker-api.herokuapp.com/v2/latest?source=jhu")
//         .then(data => {
            
//         })
// }
