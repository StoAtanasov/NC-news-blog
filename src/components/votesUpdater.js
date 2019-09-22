import React, { Component } from "react";
import * as api from "./api";

class VoteUpdater extends Component {
  state = {
    votesChange: 0
  };
  render() {
    const { votesChange } = this.state;
    const { article_id, comment_id, votes } = this.props.data;
    return (
      <>
        <p>Votes: {votes + votesChange}</p>
        <button
          className="like"
          onClick={() => this.updateVotes(1, article_id, comment_id)}
          disabled={votesChange === 1}
        >
          <img src="/images/like_PNG35.png" alt="like button" />
        </button>
        <button
          className="dislike"
          onClick={() => this.updateVotes(-1, article_id, comment_id)}
          disabled={votesChange === -1}
        >
          {" "}
          <img src="/images/dislike_PNG69.png" alt="dislike button" />
        </button>
      </>
    );
  }

  updateVotes = (voteDifference,article_id, comment_id) => {
    this.setState(currentState => {
      return { votesChange: currentState.votesChange + voteDifference };
    });

    if (comment_id) {
      return api.patchCommentVotes(voteDifference, comment_id);
    } else {
      return api.patchArticleVotes(voteDifference, article_id);
    }
  };
}

export default VoteUpdater;
