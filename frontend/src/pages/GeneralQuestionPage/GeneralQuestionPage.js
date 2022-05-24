import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/CommentForm";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Comments from "../../components/Comments/Comments";



const GeneralQuestionPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    getComments();
  }, []);

  // do axios call here for comments
  const getComments = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/comments/all/");
      setComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addComment = async (addNew) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/comments/", addNew, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      getComments();
    } catch (error) {
      console.log(addNew);
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h3 style={{ "margin-top": "1em" }}>
          Questions + Comments
        </h3>
        <div className="col-md-6">
          <div className="border-box">
            <CommentForm user={user} addComment={addComment} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="border-box">
            <Comments user={user} addComment={addComment} getComments={getComments} comments={comments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralQuestionPage;
