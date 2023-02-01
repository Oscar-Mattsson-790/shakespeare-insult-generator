import React from "react";
import "./AddInsult.css";

function AddInsult({ handleClick }) {
  return (
    <div className="header_wrapper">
      <h1>Insult generator</h1>
      <input className="input_field" type="text" placeholder="Enter insult" />
      <input className="input_field" type="text" placeholder="Enter play" />
      <button className="btn" onClick={handleClick}>
        Show insults
      </button>
    </div>
  );
}

export default AddInsult;
