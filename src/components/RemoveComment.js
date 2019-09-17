import React from 'react';

const RemoveComment = (props) => {
  const { removeCommentById, comment_id } = props;
  return ( 
    <button onClick={() =>{
      removeCommentById(comment_id);
    }}>Delete</button>
   );
}
 
export default RemoveComment;