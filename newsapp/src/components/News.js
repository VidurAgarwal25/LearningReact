import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    // console.log("News js file");
    this.state = {
      articles: [],
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0356d6d0c49242be8b98a8ac542cf702&page=1&pageSize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleOnPrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0356d6d0c49242be8b98a8ac542cf702&page=${
      this.state.page - 1
    }&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);

    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };
  handleOnNext = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 15)) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0356d6d0c49242be8b98a8ac542cf702&page=${
        this.state.page + 1
      }&pageSize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      // console.log(parsedData.articles);

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    // console.log("vidur 1");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top HeadLines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  url={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark "
            onClick={this.handleOnPrevious}
            disabled={this.state.page <= 1}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleOnNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
