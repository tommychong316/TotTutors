import React from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DisplayReplies from '../Replies/DisplayReplies';

const Comments = (props) => {
  const [user, token] = useAuth();

 
  return (
    <div>
      {props.comments.map((el) => {
         
          return (
            <div className="replies-box" key={el.id}>
              <div style={{ display: "flex"}}>
                <p><div>{el.username}</div> <div>{el.text}</div></p>
              </div>
              <hr/>
              <div>
                <DisplayReplies commentId={el.id} />
              </div>
            </div>
          );
        
      })}
    </div>
  );
};

export default Comments;