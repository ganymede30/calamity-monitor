import React, { useEffect } from "react";
import { NewsRenderer } from "./NewsRenderer";

export const News = () => {
  useEffect(() => {
    const url =
      "http://newsapi.org/v2/top-headlines?apiKey=d9e78da03e4e419a881c2a2f9f1f746c&category=health&q=coronavirus";
    fetch(url).then(article => {
      console.log(article);
    });
  }, []);

  return (
    <div>
      <NewsRenderer />
    </div>
  );
};
