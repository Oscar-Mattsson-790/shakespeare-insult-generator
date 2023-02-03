import React from "react";
import { useState } from "react";

import "./AddInsult.css";

function AddInsult({ insult, play, handleClick, insultArray }) {
  const [customInsult, setCustomInsult] = useState("");
  const [customPlay, setCustomPlay] = useState("");

  function addInsult() {
    insultArray.push({ insult: customInsult, play: customPlay });

    setCustomInsult("");
    setCustomPlay("");
  }

  return (
    <div className="header_wrapper">
      <h1>Insult generator</h1>
      <button className="btn" onClick={handleClick}>
        Random insult
      </button>
      <div className="added_insult_box">
        <p>{insult}</p>
        <p>{play}</p>
      </div>
      <input
        className="input_field"
        type="text"
        placeholder="Enter insult"
        value={customInsult}
        onChange={(event) => setCustomInsult(event.target.value)}
      />
      <input
        className="input_field"
        type="text"
        placeholder="Enter play"
        value={customPlay}
        onChange={(event) => setCustomPlay(event.target.value)}
      />
      <div className="added_insult_box">
        <p>{customInsult}</p>
        <p>{customPlay}</p>
      </div>
      <button className="btn" onClick={addInsult}>
        Add Insult
      </button>
    </div>
  );
}

export default AddInsult;
