import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';
import Footer from './Components/Footer';

// Router Specific Stuff
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
    }
    else {
      setMode('light')
      setBtnText("Enable Dark Mode")
      showAlert(" Light Mode Is Enable", "success") // Alert
      document.body.style.backgroundColor = "white"
    }
  }
  // Style for dark theme
  let toggleStyle = {
    backgroundColor: mode === "dark" ? "hsl(216 100% 20% / 1)" : "white",
    color: mode === "dark" ? "white" : "black",
    border: "2px solid",
    borderColor: mode === "dark" ? "white" : "hsl(0deg 0% 0% / 66%)",
    transition: "none",
  }

  // Nav & Footer
  let purpleStyle = {
    background: mode === "dark" ? "linear-gradient(6deg, #00378a, hsl(263 90% 51% / 1))" : "white"
  }
  return (
    <>
      {/* This is for GitHub */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} purpleStyle={purpleStyle} />
      <Alert alert={alert} />
      <TextForm heading="Enter The Text Here To Analyze" mode={mode} toggleStyle={toggleStyle} showAlert={showAlert} />
      <Footer title="TextUtils" mode={mode} purpleStyle={purpleStyle} /> */}
      {/* This is for GitHub */}

      {/* Router Specific Stuff */}
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} purpleStyle={purpleStyle} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <TextForm heading="Enter The Text Here To Analyze" mode={mode} toggleStyle={toggleStyle} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About aboutText="About TextUtils" mode={mode} toggleStyle={toggleStyle} />
          </Route>
        </Switch>
        <Footer title="TextUtils" mode={mode} purpleStyle={purpleStyle} />
      </Router>
    </>
  );
}

export default App;