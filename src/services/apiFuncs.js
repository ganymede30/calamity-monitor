import axios from "axios";
import { selectFields, filterArticles } from "../utils/utils";

export const getTopHeadlines = async (country, category) => {
  let baseRoute = `api/topHeadlines`;
  if (country) baseRoute += `/${country}`;
  if (category) baseRoute += `/${category}`;
  return await axios
    .get(baseRoute)
    .then(({ data }) => data.map(article => selectFields(article)))
    .then(articles => filterArticles(articles));
};
