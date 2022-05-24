// import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import React from "react";

const DisplayReviews = ({parentReviews, setReviews}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
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
              <tr>
                {/* <CustomButton message="👍" />
                <CustomButton message="👎" /> */}
              </tr>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayReviews;
