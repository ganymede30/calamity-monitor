import axios from "axios";
import APIKey from "../secrets";

 
import { selectFields } from "../utils/utils";

export const baseUrl = "http://newsapi.org/v2/";
// export const topHeadlines = `${baseUrl}top-headlines?apiKey=${APIKey}&q=coronavirus&pageSize=100`;
// export const topHeadlines = `${baseUrl}top-headlines?apiKey=${APIKey}&q=coronavirus`
export const getEverything = async (domains, language, sorting, page) => {
  let endPoint = `${baseUrl}everything?q=coronavirus&pageSize=100`;
  if (domains) endPoint += `&domains=${domains}`;
  if (language) endPoint += `&language=${language}`;
  if (sorting) endPoint += `&sortBy=${sorting}`;
  // pageSize 20, page 1-5 = 100 articles
  if (page) endPoint += `&page=${page}`;
 
  const result = await axios
    .get(`/topHeadlines`)
    console.log('This is the result in apiFuncs: ', result)
    // .then(({ data }) => /*data.articles.map(article => selectFields(article)) */ console.log(data));
  return result;
};
 
// export const getTopHeadlines =  async () => {
//    const result = await axios
//       .get(`/${topHeadlines}`)
//       .then(({ data }) => data.articles.map(article => article.title))
//     return result
// };

// setup category or q for corona virus everytime

// if everything
// params: domains, date(2020-03-21), language, sorting(relevancy, popularity, publishedAt(newer first))
// function to extract filtered data, maybe a switch for the url. like a builder

// top headlines
// params: country(code), category(general, health, science, technology, sports, business),
// filter by country, category
