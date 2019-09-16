import React, { Component } from "react";
import * as api from "./api";

class ArticlesList extends Component {
  state = {
    articles: [],
    topic: [],
    isLoading: true,
    error: null
  };
  render() {
    const { articles } = this.state;
    return (
      <main>
        {articles.map(article => {
          return (
            <ul key={article.article_id}>
              <li>Author: {article.author}</li>
              <li>Title: {article.title}</li>
              <li>Topic: {article.topic}</li>
              <li>Data: {new Date(article.created_at).toLocaleString()}</li>
              <li>Comments: {article.comment_count}</li>
            </ul>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps,prevState){

    console.log("props",prevProps)
if (this.props.topic !== prevProps.topic) {
  this.fetchArticles();
}
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api.getAllArticles(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
