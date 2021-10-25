import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';
// Router Specific Stuff
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // Wheather Mode is Dark or Light
  const [btnText, setBtnText] = useState("Enable Dark Mode"); // Text to change Mode Dark or Light

  const [alert, setAlert] = useState(null);

  /* For Color Plate use the below */
  // const [color, getColor] = useState(null);
  // const colorPicker = (extract) => {
  //   let setColor = extract.target.value;
  //   getColor(setColor)
  // }

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
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
      // document.body.style.background = 'linear-gradient(90deg, hsl(240deg 100% 14%), hsl(263deg 90% 25%))' //// DO NOT DELETE THIS 
      // document.body.style.color = "white"
      // document.getElementById("mybox").style.backgroundColor = "hsl(216 98% 8% / 1)"
      // document.getElementById("mybox").style.borderColor = "white"
      // document.getElementById("mybox").style.color = "white"
      // document.getElementById("resultBox").style.borderColor = "white"
      document.title = "TextUlits - Dark Mode"
      /* For Color Plate use the below */
      // document.getElementById("circle1").style.border = "2px solid white"
      // document.getElementById("circle2").style.border = "2px solid white"
      // document.getElementById("circle3").style.border = "2px solid white"
      // document.getElementById("circle4").style.border = "2px solid white"
      /* 
        // This is not user friendly
        setInterval(() => {
          document.title = "TextUlits - is Amazing"
        }, 1500);
        setInterval(() => {
          document.title = "TextUlits - Install Now"
        }, 1000);
        setInterval(() => {
          document.title = "TextUlits - is Amazing"
        }, 1500);
      */
    }
    else {
      setMode('light')
      setBtnText("Enable Dark Mode")
      showAlert(" Light Mode Is Enable", "success") // Alert
      document.body.style.backgroundColor = "white"
      // document.body.style.color = "black"
      // document.getElementById("mybox").style.backgroundColor = "white"
      // document.getElementById("mybox").style.borderColor = "grey"
      // document.getElementById("mybox").style.color = "black"
      // document.getElementById("resultBox").style.borderColor = "grey"
      document.title = "TextUlits - Light Mode"
      /* For Color Plate use the below */
      // document.getElementById("circle1").style.border = "2px solid #6c757d"
      // document.getElementById("circle2").style.border = "2px solid #6c757d"
      // document.getElementById("circle3").style.border = "2px solid #6c757d"
      // document.getElementById("circle4").style.border = "2px solid #6c757d"
    }
  }
  // Style for dark theme
  let toggleStyle = {
    backgroundColor: mode === "dark" ? "hsl(216 100% 20% / 1)" : "white",
    color: mode === "dark" ? "white" : "black",
    border: mode === "dark" ? "1px solid white" : "1px solid hsl(0deg 0% 0% / 66%)",
    transition: "none"
  }
  return (
    <>
      {/* For Color Plate use the below */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} colorPicker={colorPicker} /> */}
      {/* <Alert alert={alert} /> */}
      {/* Router Specific Stuff */}
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <div className="container py-3" style={{ height: "50px" }}>
          <Alert alert={alert} />
        </div>
        <Switch>
          <Route path="/about">
            <About aboutText="About TextUtils" mode={mode} toggleStyle={toggleStyle} />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text here to analyze" mode={mode} toggleStyle={toggleStyle} showAlert={showAlert} />
            {/* <TextForm heading="Enter the text here to analyze" showAlert={showAlert} /> */}
          </Route>
        </Switch>
        {/* <Alert alert={"This is Alert"}/> */}
      </Router>
      {/* <About aboutText="About TextUtils" /> */}
    </>
  );
}

export default App;
