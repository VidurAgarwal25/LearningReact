import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  constructor() {
    super();
    // console.log("News js file");
    this.state = {
      articles: [],
      page: 1,
      loading: true,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0356d6d0c49242be8b98a8ac542cf702&page=1&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handleOnPrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=0356d6d0c49242be8b98a8ac542cf702&page=${
      this.state.page - 1
    }&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleOnNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=0356d6d0c49242be8b98a8ac542cf702&page=${
      this.state.page + 1
    }&pageSize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  render() {
    // console.log("vidur 1");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top HeadLines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
            }
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
