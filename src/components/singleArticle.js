import React, { Component } from "react";
import * as api from './api';
import ArticleComments from "./artcileComments";

class SingleArticle extends Component {
  state = {
    article: null,
    isLoading: true,
    showComments: false,
    error: null
  };
  render() {
    const { article, isLoading, showComments } = this.state;
    if(isLoading) return <p>Loading...</p>
    return (
      <main>
        <ul>
          <li>Author: {article.author}</li>
          <li>Title: {article.title}</li>
          <li>{article.body}</li>
          <li>Date: {new Date(article.created_at).toLocaleString()}</li>
          <li>Votes: {article.votes}</li>
          <li>Comments: {article.comment_count}</li>
        </ul>
        <button onClick={this.fetchAllComments}>Show comments</button>
        {showComments && <ArticleComments article_id={article.article_id} />}
      </main>
    );
  }
  
  componentDidMount(){
    this.fetchArticle();
  }
  
  fetchAllComments = () =>{
    this.setState(prevsate => {
      return {showComments : !prevsate.showComments}
    })

  }

  fetchArticle = () => {
    const {article_id} = this.props;
    api.getArticle(article_id).then(article => {
      this.setState({article, isLoading: false})
    });
  };
}

export default SingleArticle;
