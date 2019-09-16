import React, { Component } from "react";
import * as api from "./api";
import {Link} from '@reach/router';

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
              <li>
                Title:{" "}
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>{" "}
              </li>
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
  componentDidUpdate(prevProps){
if (this.props.topic !== prevProps.topic) {
  this.fetchArticles();
}
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticlesByParams(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
