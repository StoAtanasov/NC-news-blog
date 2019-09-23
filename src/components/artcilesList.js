import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";
import SortBy from "./sortBy";
import VoteUpdater from './votesUpdater';
import ErrorHandler from './errorHandler';


class ArticlesList extends Component {
  state = {
    articles: [],
    topic: [],
    sort_by: "created_at",
    order: "desc",
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading, error } = this.state;
    if (error) return <ErrorHandler error={error} />;
    if (isLoading) return <p>Loading...</p>;
    return (
      <main className="articlesContainer">
        <SortBy
          fetchArticles={this.fetchArticles}
        />

        {articles.map(article => {
          return (
            <ul className="articlesList" key={article.article_id}>
              <li className="articList">Author: {article.author}</li>
              <li className="articList articleTitle">
                Title:{" "}
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>{" "}
              </li>
              <li className="articList ">Topic: {article.topic}</li>
              <li className="articList">
                Data: {new Date(article.created_at).toLocaleString()}
              </li>
              <VoteUpdater data={article} />
              <li className="articList">
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

  fetchArticles = (sort_by, order) => {
    const { topic } = this.props;
    api
      .getArticlesByParams(topic, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        this.setState({
          error: {
            status: error.response.status,
            msg: error.response.data.msg
          },
          isLoading: false
        });
      });
  };
}

export default ArticlesList;
