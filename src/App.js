import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import {Router} from '@reach/router'
import ArticlesList from './components/artcilesList';

function App() {
  return (
    <div className="App">
      <Header />
    <Router>
      <Home path ="/"/>
      <ArticlesList path="/articles"/>
    </Router>
      Hello World
    </div>
  )
}

export default App;
