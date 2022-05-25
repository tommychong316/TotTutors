import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import React from "react";

const DisplayTuteetasks = ({ parentTuteetasks }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Tasks</th>
          <th>IsComplete</th>
        </tr>
      </thead>
      <tbody>
        {parentTuteetasks.map((tuteetask) => {
          return (
            <tr key={tuteetask.id}>
              <tr>
                <td>{tuteetask.task}</td>
              </tr>
             
                <td>
                  <CustomButton message="✔️" />
                </td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayTuteetasks;
