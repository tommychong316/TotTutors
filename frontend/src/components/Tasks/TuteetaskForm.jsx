import React, { useState } from "react";

const TuteetaskForm = (props) => {
  const [tuteetaskText, setTuteetaskText] = useState(' ');

  function handlesubmit(event) {
    event.preventDefault();
    let new_tuteetask = {
      user: props.user.id,
      task: tuteetaskText,
    };
    props.addTuteetask(new_tuteetask);
    setTuteetaskText(' ');
  }
  return (
    <form onSubmit={handlesubmit}>
     
      <input
        type="text"
        className="input-search"
        value={tuteetaskText}
        placeholder="Enter text"
        onChange={(event) => setTuteetaskText(event.target.value)}
      />
      <button className="search-button">Add Task</button>{" "}
    </form>
  );
};

export default TuteetaskForm;