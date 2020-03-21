export const selectFields = ({ url, title, source, publishedAt } = {}) => ({
  url,
  title,
  source: source.name,
  publishedAt: [publishedAt.slice(0, 10), publishedAt.slice(11, 19)]
});
