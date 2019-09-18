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
          onClick={() => this.updateVotes(1, article_id, comment_id)}
          disabled={votesChange === 1}
        >
          Like
        </button>
        <button
          onClick={() => this.updateVotes(-1, article_id, comment_id)}
          disabled={votesChange === -1}
        >
          Dislike
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
