import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const DisplayReviews = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/reviews/all/"
        );
        setReviews(response.data);
        console.log("setReviews", setReviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, []);
  return (
    <div className="comments">
      <h3 className="comments-title">Reviews!</h3>
      <div className="comments-container">
     
        {reviews &&
          reviews.map((review) => (
              
            <p key={review.id}>{review.username}
            {review.text}</p>
          ))}
      </div>
    </div>
  );
};

export default DisplayReviews;