import React from "react";

import { Item, Title, Link, Source, Date } from "../styles/listStyles";

const LINK_REL = "noopener noreferrer nofollow";

const ListItem = ({ article }) => {
  return (
    <Item>
      <Link href={article.url} rel={LINK_REL} target="_blank">
        <Title>{article.title}</Title>
      </Link>
      <Date>Date: {article.publishedAt[0]}</Date>
      <Date>
        {" | "}
        Time: {article.publishedAt[1]}
      </Date>
      <Source>
        {" "}
        {" | "} By: {article.source}
      </Source>
    </Item>
  );
};

export default ListItem;
