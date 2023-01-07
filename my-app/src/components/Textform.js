import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpperCaseClick = () => {
    console.log("functio uppercase clicked");
    var newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    console.log("function handleonchange is called");
    setText(event.target.value);
  };
  const handleCapitalizedCaseClick = () => {
    var arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var newtext = arr.join(" ");
    setText(newtext);
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "light" ? "black" : "white",
              background: props.mode === "light" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-success mx-1" onClick={handleLowerCaseClick}>
          convert to lowercase
        </button>
        <button
          className="btn btn-success mx-1"
          onClick={handleCapitalizedCaseClick}
        >
          Convert To Capitalized Case
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3>Average Reading time for this (125 words/minute):-</h3>

        <p>{(1 / 125) * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
