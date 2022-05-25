// import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import React, { useState, useEffect } from "react";

const DisplayReviews = ({ parentReviews }) => {
  const [reviews, setReviews] = useState([]);

  const deleteReview = (e) => {
    const id = e.target.getAttribute("id");
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const updateReview = (e) => {
    const editid = e.target.getAttribute("id");
    setReviews(reviews.push((review)=> review.id === editid));
  }

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Reviews</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {parentReviews.map((review) => {
          return (
            <tr key={review.id}>
              <tr>
                <td>{review.username}</td>
              </tr>
              <tr>
                <td>{review.review}</td>
              </tr>
              <td>
                <button id={review.id} onClick={deleteReview}>
                  Delete
                </button>
                <button id={review.id} onClick={updateReview}>
                  Edit
                  </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayReviews;
