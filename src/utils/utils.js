export const selectFields = ({ url, title, source, publishedAt } = {}) => ({
  url,
  title,
  source: source.name,
  publishedAt: [publishedAt.slice(0, 10), publishedAt.slice(11, 19)]
});

export const selectCoordinates = ({ id, coordinates, country_code, latest} = []) => ({
  id,
  lat: coordinates.latitude,
  long: coordinates.longitude,
  country_code,
  confirmed: latest.confirmed
})



// {locations: [
//   {1: {
//     lat: fslkvjndfskljvn,
//     long: sjkfndnvsldfknv,
//     death:
//     confirmed:
//   }}
// ]}
