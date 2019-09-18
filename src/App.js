import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import { Router } from "@reach/router";
import ArticlesList from "./components/artcilesList";
import SingleArticle from "./components/singleArticle";
import "bootstrap/dist/css/bootstrap.min.css";
import TopicsList from "./components/topicsList";
import ArticleComments from "./components/artcileComments";
import CreateComment from "./components/createComment";
import RemoveComment from "./components/removeComment";

class App extends Component {
  state = {
    loggedInUser: "grumpy19"
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Router>
          <Home path="/" />
          <ArticlesList path="/articles" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
          <ArticlesList path="/topics/:topic" l />
          <ArticleComments
            path="/articles/:article_id/comments"
            loggedInUser={loggedInUser}
          />
          <TopicsList path="/topics" />
          <CreateComment path="/articles/:article_id/newcomment" />
          <RemoveComment path="/articles/:article_id/:comment_id" />
        </Router>
      </div>
    );
  }
}

export default App;
