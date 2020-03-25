export const selectFields = ({ url, title, source, publishedAt } = {}) => ({
  url,
  title,
  source: source.name,
  publishedAt: [publishedAt.slice(0, 10), publishedAt.slice(11, 19)]
});

export const filterArticles = articles => {
  return [...new Set(articles.map(article => JSON.stringify(article)))].map(s => JSON.parse(s));
};

export const selectCoordinates = ({
  id,
  coordinates,
  country_code,
  country,
  province,
  last_updated,
  latest
} = []) => ({
  id,
  lat: coordinates.latitude,
  long: coordinates.longitude,
  country_code,
  country,
  province,
  last_updated,
  confirmed: latest.confirmed,
  deaths: latest.deaths,
  recovered: latest.recovered
});

export const selectCounties = ({ id, coordinates, country_code, country, county, province, last_updated, latest} = []) => ({
  id,
  lat: coordinates.latitude,
  long: coordinates.longitude,
  country_code,
  country,
  county,
  province,
  last_updated,
  confirmed: latest.confirmed,
  deaths: latest.deaths,
  recovered: latest.recovered
})
