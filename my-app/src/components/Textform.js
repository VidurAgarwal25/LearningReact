import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text here");
  const handleUpperCaseClick = () => {
    console.log("functio uppercase clicked");
    var newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("UPPERCASE Function Used", "success");
    setInterval(() => {
      document.title = "Learning React";
    }, 1500);
    setInterval(() => {
      document.title = "Changed Title";
    }, 2000);
  };
  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("LOWERCASE Function Used", "success");
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
    props.showAlert("Captitalizing First Word Function Used", "success");
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCaseClick}
        >
          CONVERT TO UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleLowerCaseClick}
        >
          convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
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
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <h3>Average Reading time for this (125 words/minute):-</h3>

        <p>
          {(1 / 125) *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
