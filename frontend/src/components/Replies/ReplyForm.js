import React, { useState } from "react";



const ReplyForm = (props) => {
  const [text, setText] = useState('');

  function handlesubmit(event) {
    event.preventDefault();
    let new_reply = {
      user: props.username,
      comment: props.commentId,
      text: text,
      user_id: props.user.id,
      comment_id: props.commentId,
    };
    props.addReply(new_reply);
    setText('');
  }
  return (
    <form onSubmit={handlesubmit} id="form">
      <div className="reply">
        <input
          type="text"
          className="input-search"
          value={text}
          placeholder="Enter text"
          onChange={(event) => setText(event.target.value)}
        />
        <button className="search-button" type="submit">
          Add Reply
        </button>
      </div>
    </form>
  );
};

export default ReplyForm;