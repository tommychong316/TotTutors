import React from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Reviews = (props) => {
  const [user, token] = useAuth();

 
  return (
    <div>
      {props.reviews.map((el) => {
         
          return (
            <div className="replies-box" key={el.id}>
              <div style={{ display: "flex"}}>
                <p><div>{el.username}</div> <div>{el.review}</div></p>
              </div>
              <hr/>
            </div>
          );
        
      })}
    </div>
  );
};

export default Reviews;