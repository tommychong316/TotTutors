import axios from "axios";
import React from "react";

const DisplayTutees = ({ searchTerm, parentTutees, setTutees }) => {

  const filterTutees = (tutee) => {
    console.log("tutee spot:", tutee)
    let filteredTutees = parentTutees.filter(tee => tee.location == tutee)
    setTutees(filteredTutees)
  };


  return (
   <div className="container">
    <h3>Tutees</h3>
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
        {parentTutees.filter(tee=>tee.location.includes(searchTerm)).map(tutee => {
          return (
            <tr>
              <td>{tutee.username}</td>
              <td>{tutee.first_name}</td>
              <td>{tutee.email}</td>
              <td>{tutee.location}</td>
              
              <td>
                <button onClick={()=>filterTutees(tutee.location)}>Tutee Info</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default DisplayTutees;