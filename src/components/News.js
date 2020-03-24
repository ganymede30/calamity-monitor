import React, { useState, useEffect } from "react";
import { getEverything } from "../services/apiFuncs";
import { Wrapper, Title, TitleWrapper } from "../styles/newsStyles";
import { ListWrapper } from "../styles/listStyles";
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

export default News;
