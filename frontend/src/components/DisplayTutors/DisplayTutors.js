import axios from "axios";
import React from "react";

const DisplayTutors = ({ searchTerm, parentTutors, setTutors }) => {

  const filterTutors = (tutor) => {
    console.log("tutor spot:", tutor)
    let filteredTutors = parentTutors.filter(tut => tut.location == tutor)
    setTutors(filteredTutors)
  };


  return (
   <div className="container">
    <h3>Tutors</h3>
    <table className="table table-bordered">
        
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {parentTutors.filter(tut=>tut.location.includes(searchTerm)).map(tutor => {
          return (
            <tr>
              <td>{tutor.username}</td>
              <td>{tutor.first_name}</td>
              <td>{tutor.email}</td>
              <td>{tutor.location}</td>
              
              <td>
                <button onClick={()=>filterTutors(tutor.location)}>Tutor Info</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default DisplayTutors;