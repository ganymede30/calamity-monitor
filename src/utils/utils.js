export const selectFields = ({ url, title, source, publishedAt } = {}) => ({
  url,
  title,
  source: source.name,
  publishedAt
});
