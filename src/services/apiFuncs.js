import axios from "axios";
import { selectFields, filterArticles } from "../utils/utils";

export const baseUrl = "http://newsapi.org/v2/";

export const getTopHeadlines = async (country, category) => {
  let baseRoute = `api/topHeadlines`;
  if (country) baseRoute += `/${country}`;
  if (category) baseRoute += `/${category}`;
  const result = await axios
    .get(baseRoute)
    .then(({ data }) => data.map(article => selectFields(article)))
    .then(articles => filterArticles(articles));
  return result;
};
