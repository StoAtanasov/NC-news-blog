import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";
import SortBy from "./sortBy";
import VoteUpdater from './votesUpdater'
class ArticlesList extends Component {
  state = {
    articles: [],
    topic: [],
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <main>
        <SortBy fetchArticles={this.fetchArticles} />
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
              <VoteUpdater data={article} />
              <li>
                <Link to={`/articles/${article.article_id}/comments`}>
                  Comments: {article.comment_count}
                </Link>
              </li>
            </ul>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = sort_by => {
    const { topic } = this.props;
    api.getArticlesByParams(topic, sort_by).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
