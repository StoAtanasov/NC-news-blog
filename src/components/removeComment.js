import React from 'react';

const RemoveComment = (props) => {
  const { removeCommentById, comment_id } = props;
  return (
    <button
      className="delete"
      onClick={() => {
        removeCommentById(comment_id);
      }}
    >
      {" "}
      <img src="/images/delete.png" alt="delete comment" />
    </button>
  );
}
 
export default RemoveComment;