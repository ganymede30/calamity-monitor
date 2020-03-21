import React, { useState, useEffect } from "react";
import { getEverything } from "../services/apiFuncs";
import List from "./List";
import { Wrapper, Title } from "../styles/newsStyles";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getEverything("", "en", "publishedAt", "").then(articles => setNews(articles));
  }, []);
  // [] = newsUpdate (true/false), will re-render if changed to true, setTimeout to change it. re renders everytime whats inside [] chnages

  return (
    <div>
      <Wrapper>
        <Title>News Feed</Title>
        <List articles={news} />
      </Wrapper>
    </div>
  );
};

export default News;
