import React, { Component } from 'react';
import * as api from './api';
class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const {comments} = this.state;
    return ( <section>
      {comments.map(comment =>{
        return (
          <ul key={comment.comment_id}>
            <li>Author: {comment.author}</li>
            <li>{comment.body}</li>
            <li>Date: { new Date(comment.created_at).toLocaleString()}</li>
          </ul>
        );
      })}
    </section> );
  }
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = () => {
    const { article_id } = this.props;
    api.getArtcilceComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
}
 
export default ArticleComments;