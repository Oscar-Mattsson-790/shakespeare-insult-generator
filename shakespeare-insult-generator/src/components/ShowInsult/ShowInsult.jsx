import React from "react";
import "./ShowInsult.css";

function ShowInsult({ insult, play }) {
  return (
    <div className="ShowInsult">
      <div className="wrapper"></div>
      <h1>{insult}</h1>
      <h2>{play}</h2>
    </div>
  );
}

export default ShowInsult;
