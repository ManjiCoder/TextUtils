import './App.css';
import React, { useState } from 'react'
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');  // Wheather Mode is Dark or Light
  const [btnText, setBtnText] = useState("Enable Dark Mode"); // Text to change Mode Dark or Light
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setBtnText("Enable Light Mode")
      showAlert("Dark Mode Is Enable", "success")
      document.body.style.backgroundColor = "hsl(216 98% 8% / 1)"
      document.body.style.color = "white"
      document.getElementById("mybox").style.backgroundColor = "hsl(216 98% 8% / 1)"
      document.getElementById("mybox").style.borderColor = "white"
      document.getElementById("mybox").style.color = "white"
      document.getElementById("resultBox").style.borderColor = "white"
    }
    else {
      setMode('light')
      setBtnText("Enable Dark Mode")
      showAlert("Light Mode Is Enable", "danger")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("mybox").style.backgroundColor = "white"
      document.getElementById("mybox").style.borderColor = "grey"
      document.getElementById("mybox").style.color = "black"
      document.getElementById("resultBox").style.borderColor = "grey"
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} colorPicker={setColor} /> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      {/* <Alert alert={"This is Alert"}/> */}
      <TextForm heading="Enter the text here to analyze" />
      {/* <About aboutText="About TextUtils" /> */}
    </>
  );
}

export default App;
