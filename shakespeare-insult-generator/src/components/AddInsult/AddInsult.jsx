import React from "react";
import { useState } from "react";

import "./AddInsult.css";

function AddInsult({ insult, play, handleClick, insultArray }) {
  const [customInsult, setCustomInsult] = useState("");
  const [cumstomPlay, setCustomPlay] = useState("");

  function addInsult() {
    insultArray.push({ insult: customInsult, play: cumstomPlay });

    setCustomInsult("");
    setCustomPlay("");

    console.log(insultArray);
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
        value={cumstomPlay}
        onChange={(event) => setCustomPlay(event.target.value)}
      />
      <div className="added_insult_box">
        <p>{customInsult}</p>
        <p>{cumstomPlay}</p>
      </div>
      <button className="btn" onClick={addInsult}>
        Add Insult
      </button>
    </div>
  );
}

export default AddInsult;
