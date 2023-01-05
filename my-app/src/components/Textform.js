import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpperCaseClick = () => {
    console.log("functio uppercase clicked");
    var newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    console.log("function handleonchange is called");
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCaseClick}>
        CONVERT TO UPPERCASE
      </button>
    </div>
  );
}
