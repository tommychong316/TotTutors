import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Comment from "./Comment";
import axios from "axios";
import AddComment from "./AddCommentPage";

const DisplayComments = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [comments, setComments] = useState([]);
  
  function addNewComment(comment) {
    let tempComments = [...comments, comment];

    setComments(tempComments);
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/comments/all/"
        );
        setComments(response.data);
        console.log("setComments", setComments);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComments();
  }, []);
  return (
    <div className="comments">
      <h3 className="comments-title">Comments!</h3>
      <div className="comments-container">
     
        {comments &&
          comments.map((comment) => (
              
            <p key={comment.id}><div>UserName: {comment.username}</div>
            <div>{comment.text}</div>
            </p>
          ))}
      </div>
      <div className="border-box">
        <AddComment postNewComment={addNewComment} />
      </div>
    </div>
  );
};

export default DisplayComments;
