import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ReplyForm from "./ReplyForm";
import "./DisplayReplies.css";

const DisplayReplies = (props) => {
  const [user, token] = useAuth();
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    getReplies(props.commentId);
  }, []);

  async function addReply(new_answer) {
    try {
      await axios.post(`http://127.0.0.1:8000/api/replies/reply${props.commentId}/`, new_answer, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      console.log(new_answer);
      console.log(error.message);
    }
  }

  async function getReplies(id) {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/replies/${id}/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setReplies(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h4>Replies</h4>
      {replies.map((reply) => {
        if (replies !== []) {
          return (
            <div key={reply.id}>
              <p>
                <div>{reply.username}</div>
                <div>{reply.text}</div>
              </p>
            </div>
          );
        }
      })}

      <ReplyForm commentId={props.commentId} user={user} addReply={addReply} />
    </div>
  );
};

export default DisplayReplies;
