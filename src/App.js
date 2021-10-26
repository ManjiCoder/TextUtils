import './App.css';
import React, { useState } from 'react'
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';

// Router Specific Stuff
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // Wheather Mode is Dark or Light
  const [btnText, setBtnText] = useState("Enable Dark Mode"); // Text to change Mode Dark or Light
  const [alert, setAlert] = useState(null);   //  Alert
  // Function to set Alert 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1100);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setBtnText("Disable Dark Mode")
      showAlert("Dark Mode Is Enable", "success") // Alert
      document.body.style.backgroundColor = "hsl(216 98% 11% / 1)"
      // document.body.style.background = 'linear-gradient(90deg, rgb(0, 0, 71), rgb(50, 6, 121))' // DO NOT DELETE THIS 
      document.title = "TextUlits - Dark Mode"
    }
    else {
      setMode('light')
      setBtnText("Enable Dark Mode")
      showAlert(" Light Mode Is Enable", "success") // Alert
      document.body.style.backgroundColor = "white"
      document.title = "TextUlits - Light Mode"
    }
  }
  // Style for dark theme
  let toggleStyle = {
    backgroundColor: mode === "dark" ? "hsl(216 100% 20% / 1)" : "white",
    color: mode === "dark" ? "white" : "black",
    border: "2px solid",
    borderColor: mode === "dark" ? "white" : "hsl(0deg 0% 0% / 66%)",
    transition: "none"
  }
  return (
    <>
      {/* This is for GitHub */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <div className="container py-3" style={{ height: "50px" }}>
        <Alert alert={alert} />
      </div>
      <TextForm heading="Enter the text here to analyze" mode={mode} toggleStyle={toggleStyle} showAlert={showAlert} />
      {/* This is for GitHub */}

      {/* Router Specific Stuff */}
      {/* <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <div className="container py-3" style={{ height: "50px" }}>
          <Alert alert={alert} />
        </div>
        <Switch>
          <Route exact path="/">
            <TextForm heading="Try TextUtils - Word Counter, Character Counter & Many More" mode={mode} toggleStyle={toggleStyle} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About aboutText="About TextUtils" mode={mode} toggleStyle={toggleStyle} />
          </Route>
        </Switch>
      </Router> */}
      {/* Without exact in route
        /user --> Component 1
        /user/home --> Component 2 about component wala seen */}
    </>
  );
}

export default App;