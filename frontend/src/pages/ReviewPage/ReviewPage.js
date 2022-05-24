import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayReviews from "../../components/DisplayReviews/DisplayReviews";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewForm from "../../components/DisplayReviews/ReviewForm";


const ReviewPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    getReviews();
  }, []);

  // do axios call here for reviews
  const getReviews = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/reviews/all/");
      setReviews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addReview = async (addNew) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/reviews/", addNew, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      getReviews();
    } catch (error) {
      console.log(addNew);
      console.log(error.message);
    }
  };

  const deleteReview = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/reviews/${id}/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      getReviews();
    } catch (error) {
      console.log(id);
      console.log(error.message);
    }
  }; 

  const updateReview = async (review, id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/reviews/${id}/`, review, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      getReviews();
    } catch (error) {
      console.log(review, id);
      console.log(error.message);
    }
  };  

  return (
    <div className="container">
    <div className="row">
      <h3 style={{"margin-top": "1em"}}>Tutor
      <small className="text-muted">Reviews</small></h3>
    <div className="col-md-6">
      <div className="border-box">
      <ReviewForm user={user} addReview={addReview} />      </div>
      </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="border-box">
    <DisplayReviews user={user} parentReviews={reviews} addReview={addReview} getReviews={getReviews}/>
      </div>
  </div>
  </div>
  

</div>
  );
}

export default ReviewPage;