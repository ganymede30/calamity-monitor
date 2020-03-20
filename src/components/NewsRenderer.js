import React from "react";

export const NewsRenderer = ({ article }) => {
  // const { source, title, url, publishedAt } = props;
  return (
    <div>
      <a href={article.url}>
        <p>{article.title}</p>
      </a>
      By: <p>{article.source.name}</p>
      Posted: <p>{article.publishedAt}</p>
    </div>
  );
};
