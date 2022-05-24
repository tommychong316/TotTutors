import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayReviews from "../../components/DisplayReviews/DisplayReviews";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewPage = () => {
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
    <div className="container">
    <div className="row">
      <h3 style={{"margin-top": "1em"}}>Tutor
      <small className="text-muted">Reviews</small></h3>
    <div className="col-md-6">
      <div className="border-box">
      <AddReviewForm addNewReviewProperty={addNewReview} />
      </div>
      </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="border-box">
    <DisplayReviews parentReviews={reviews} />
      </div>
  </div>
  </div>

</div>
  );
}

export default ReviewPage;