import React, { Component } from "react";
import * as api from './api';
import ArticleComments from "./artcileComments";
import VoteUpdater from "./votesUpdater";
import ErrorHandler from "./errorHandler";
import { Button} from "react-bootstrap";

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
      <main className="articleContainer">
        <ul className="article">
          <li className="articleList">Author: {article.author}</li>
          <li className="articleList articleTitle">Title: {article.title}</li>
          <li className="articleList articleText">{article.body}</li>
          <li className="articleList">
            Date: {new Date(article.created_at).toLocaleString()}
          </li>
          <VoteUpdater className="articleList" data={article} />
          <li className="articleList">Comments: {article.comment_count}</li>
        </ul>
        <Button variant="primary" type="submit" onClick={this.fetchAllComments}>
          Show comments
        </Button>
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
    }).catch(error => {
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
