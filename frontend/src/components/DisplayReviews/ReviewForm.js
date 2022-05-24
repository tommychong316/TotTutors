import React, { useState } from "react";

const ReviewForm = (props) => {
  const [reviewText, setReviewText] = useState(' ');

  function handlesubmit(event) {
    event.preventDefault();
    let new_review = {
      user: props.user.id,
      review: reviewText,
    };
    props.addReview(new_review);
    setReviewText(' ');
  }
  return (
    <form onSubmit={handlesubmit}>
     
      <input
        type="text"
        className="input-search"
        value={reviewText}
        placeholder="Enter text"
        onChange={(event) => setReviewText(event.target.value)}
      />
      <button className="search-button">Add Review</button>{" "}
    </form>
  );
};

export default ReviewForm;