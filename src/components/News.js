import React, { useState, useEffect, Component } from "react";
import { getTopHeadlines } from "../services/apiFuncs";
import { Wrapper, Title, TitleWrapper } from "../styles/newsStyles";
import { ListWrapper } from "../styles/listStyles";
import List from "./List";
import { useInfiniteScroll } from "../utils/hooks/useInfiniteScroll";

const News = () => {
  const { count } = useInfiniteScroll();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getTopHeadlines("", "health").then(articles => setNews(articles));
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

// class News extends Component {
//   state = {
//     articles: []
//   }

//   componentDidMount () {
//       fetch('/topHeadlines')
//        .then(res => res.json())
//        .then(articles => this.setState({ articles }))
//   }

//   render () {
//     console.log('This is the state: ', this.state)

//     return (
//      <div>
//         <h1>News</h1>
//         <ul>
//           {
//             this.state.articles.map(article =>
//             <li key={article.url} article={article}>{article.title}</li>
//               )
//           }
//         </ul>
//       </div>
//     )
//   }
// }

// export default News
