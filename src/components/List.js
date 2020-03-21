import React from "react";
import ListItem from "./ListItem";

import { ListWrapper } from "../styles/listStyles";

const List = ({ articles }) => (
  <ListWrapper>
    {articles.map(article => (
      <ListItem article={article} key={article.url} />
    ))}
  </ListWrapper>
);

export default List;
