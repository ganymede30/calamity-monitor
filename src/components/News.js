import React, { useState, useEffect } from "react";
import { NewsRenderer } from "./NewsRenderer";
import { getEverything } from "../apiFuncs";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getEverything("", "es", "publishedAt").then(({ articles }) => setNews(articles));
  }, []);

  return news.map(article => <NewsRenderer article={article} key={article.url} />);
};

export default News;
