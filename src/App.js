import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import {Router} from '@reach/router'
import ArticlesList from "./components/artcilesList";
import SingleArticle from './components/singleArticle';
import "bootstrap/dist/css/bootstrap.min.css";
import TopicsList from './components/topicsList';
import ArticleComments from './components/artcileComments'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <ArticlesList path="/articles" />
        <SingleArticle path="/articles/:article_id" />
        <ArticlesList path="/topics/:topic" />
        <ArticleComments path="/articles/:article_id/comments" />
        <TopicsList path="/topics" />     
      </Router>
    </div>
  );
}

export default App;
