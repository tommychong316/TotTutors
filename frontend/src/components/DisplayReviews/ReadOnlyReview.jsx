import React from 'react';

const ReadOnlyReview = ({review}) => {
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
}
 
export default ReadOnlyReview;