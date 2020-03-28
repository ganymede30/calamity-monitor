import axios from "axios";
import { selectFields, filterArticles } from "../utils/utils";

export const getTopHeadlines = async (country, category) => {
  let baseRoute = `api/topHeadlines`;
  if (country) baseRoute += `/${country}`;
  if (category) baseRoute += `/${category}`;
  const { data } = await axios.get(baseRoute);
  console.log("data", data);
  const select = data.map(article => selectFields(article));
  console.log("select", select);
  const filter = filterArticles(select);
  console.log("filter", Array.isArray(filter));
  return filter;
  // .then(res => res.data.map(article => selectFields(article)))
  // .then(articles => {
  //   console.log(articles);
  //   return filterArticles(articles);
  // });
};
