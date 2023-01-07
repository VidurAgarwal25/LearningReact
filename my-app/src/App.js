import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="My-appLearningProps"
        about="About using props"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <Textform heading="Enter your text below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
