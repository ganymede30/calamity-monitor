import React, { useEffect, Component } from "react";
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
      "http://newsapi.org/v2/top-headlines?apiKey=d9e78da03e4e419a881c2a2f9f1f746c&category=health&q=coronavirus";

    const { data } = await axios.get(url);
    this.setState({
      news: data.articles
    }); 
  }

  render() {
    const { news } = this.state;
    return (
      <div>
        <NewsRenderer articles={news} />
      </div>
    );
  }
}
