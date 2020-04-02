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

export const fetchTimeData = async () => {
  return await fetch("https://coronavirus-tracker-api.herokuapp.com/all")
    .then(response => response.json())
    .then(data => {
      const { confirmed } = data;
      let counter = 0
      return confirmed.locations.map(location => {
        let dailyCases = Object.entries(location.history)
        let lat = location.coordinates.lat
        let long = location.coordinates.long
        let country_code = location.country_code
        let country = location.country
        let province = location.province

        //console.log("dailyCases", dailyCases)
        dailyCases.map(point => {
          counter++
          // console.log(counter)
          // console.log(lat)
          // console.log(point[0])
          return ({
            id: counter,
            lat: lat,
            long: long,
            country_code: country_code,
            country: country,
            province: province,
            date: point[0],
            cases: point[1]
          })
        })
    })
  })
};

