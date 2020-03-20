import React, { Component } from "react";
import { NewsRenderer } from "./NewsRenderer";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  async componentDidMount() {
    const url =
      "http://newsapi.org/v2/everything?q=coronavirus&from=2020-03-20&pageSize=100&apiKey=d9e78da03e4e419a881c2a2f9f1f746c";

    const { data } = await axios.get(url);
    this.setState({
      news: data.articles
    });
  }

  render() {
    return this.state.news.map(article => (
      <NewsRenderer article={article} key={article.source.id} />
    ));
  }
}
