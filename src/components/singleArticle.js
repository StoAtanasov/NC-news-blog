import React, { Component } from "react";
import * as api from './api';
import ArticleComments from "./artcileComments";
import VoteUpdater from "./votesUpdater";
import ErrorHandler from "./errorHandler";

class SingleArticle extends Component {
  state = {
    article: null,
    isLoading: true,
    showComments: false,
    error: null
  };
  render() {
    const { article, isLoading, showComments, error } = this.state;
    const { loggedInUser } = this.props;
    if(error) return <ErrorHandler error={error}/>
    if(isLoading) return <p>Loading...</p>
    return (
      <main>
        <ul>
          <li>Author: {article.author}</li>
          <li>Title: {article.title}</li>
          <li>{article.body}</li>
          <li>Date: {new Date(article.created_at).toLocaleString()}</li>
          <VoteUpdater data={article}/>
          <li>Comments: {article.comment_count}</li>
        </ul>
        <button onClick={this.fetchAllComments}>Show comments</button>
        {showComments && (
          <ArticleComments
            loggedInUser={loggedInUser}
            article_id={article.article_id}
          />
        )}
      </main>
    );
  }
  
  componentDidMount(){
    this.fetchArticle();
  }
  
  fetchAllComments = () =>{
    this.setState(prevSate => {
      return {showComments : !prevSate.showComments}
    })

  }

  fetchArticle = () => {
    const {article_id} = this.props;
    api.getArticle(article_id).then(article => {
      this.setState({article, isLoading: false})
    }).catch((error) => {
      this.setState({
        error: { 
          status: error.response.status, 
          msg: error.response.data.msg },
        isLoading: false
      });
    });
  };
}

export default SingleArticle;
