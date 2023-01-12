import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="LearningReact"
          about="About using props"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/"
            element={
              <Textform
                heading="Enter your text below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
