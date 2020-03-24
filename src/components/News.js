import React, { useState, useEffect } from "react";
import { getEverything } from "../services/apiFuncs";
import { Wrapper, Title } from "../styles/newsStyles";
import List from "./List";
import { useInfiniteScroll } from "../utils/hooks/useInfiniteScroll";

const News = () => {
  const { count } = useInfiniteScroll();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getEverything("", "en", "publishedAt", "").then(articles => setNews(articles));
  }, []);
  // [] = newsUpdate (true/false), will re-render if changed to true, setTimeout to change it. re renders everytime whats inside [] chnages

  return (
    <>
      <Wrapper>
        <Title>News Feed</Title>
        <List articles={news.slice(0, count)} />
      </Wrapper>
    </>
  );
};
// filtering on the backend;
// debounce axios
// GET after clicking apply filters
// store filters in state.
// create a regular form with handleForm();
// proxy server for the api requests.
// front-end > proxy > api
// axios hits router.get(route) > router.get hits api
// create a blank model/class, this model has a class methods that hits the api

// cloud firebase functions so our axios hits that and that hits the api
export default News;
