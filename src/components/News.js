import React, { useState, useEffect } from "react";
import { NewsRenderer } from "./NewsRenderer";
import { getEverything } from "../services/apiFuncs";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getEverything("", "en", "publishedAt").then(articles => setNews(articles));
  }, []);
  // [] = newsUpdate (true/false), will re-render if changed to true, setTimeout to change it. re renders everytime whats inside [] chnages

  return (
    <>
      <h1>News Feed</h1>
      {news.map(article => (
        <NewsRenderer article={article} key={article.url} />
      ))}
      ;
    </>
  );
};

export default News;
