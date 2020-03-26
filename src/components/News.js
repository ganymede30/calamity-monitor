import React, { useState, useEffect } from "react";
import { getTopHeadlines } from "../services/apiFuncs";
import { Wrapper, Title, SubWrapper } from "../styles/newsStyles";
import List from "./List";
import { useInfiniteScroll } from "../utils/hooks/useInfiniteScroll";
import DialogSelect from "./NewsSidebar";

const News = () => {
  const { count } = useInfiniteScroll();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getTopHeadlines("us", "health").then(articles => setNews(articles));
  }, []);
  // [] = newsUpdate (true/false), will re-render if changed to true, setTimeout to change it. re renders everytime whats inside [] chnages

  return (
    <>
      <Wrapper>
        <SubWrapper>
          <Title>News Feed</Title>
          <DialogSelect />
        </SubWrapper>
        <List articles={news.slice(0, count)} />
      </Wrapper>
    </>
  );
};

export default News;
