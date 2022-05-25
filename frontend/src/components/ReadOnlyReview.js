import React from "react";

const ReadOnlyReview = ({review}) => {
  return (
    <tr key={review.id}>
      <tr>
        <td>{review.username}</td>
      </tr>
      <tr>
        <td>{review.review}</td>
      </tr>
    </tr>
  );
};

export default ReadOnlyReview;
