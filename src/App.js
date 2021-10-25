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

  // Change Color
  const [color, getColor] = useState(null);
  const colorPicker = (extract) => {
    let setColor = extract.target.value;
    // console.log(setColor); 
    getColor(setColor)
    // console.log("color-Picker ", color);
    // setColor(extract.target.value)
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  // const [colour, setColour] = useState(null)
  // setColour('this is setClr')
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setBtnText("Enable Light Mode")
      showAlert("Dark Mode Is Enable", "success") // Alert
      document.body.style.backgroundColor = "hsl(216 98% 8% / 1)"
      document.body.style.color = "white"
      document.getElementById("mybox").style.backgroundColor = "hsl(216 98% 8% / 1)"
      // console.log(document.getElementById("mybox").style.backgroundColor = `${clr}`);
      document.getElementById("mybox").style.borderColor = "white"
      document.getElementById("mybox").style.color = "white"
      document.getElementById("resultBox").style.borderColor = "white"
      document.getElementById("circle1").style.border = "2px solid white"
      document.getElementById("circle2").style.border = "2px solid white"
      document.getElementById("circle3").style.border = "2px solid white"
      document.getElementById("circle4").style.border = "2px solid white"
      document.title = "TextUlits - Dark"
    
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
    
    }
    else {
      setMode('light')
      setBtnText("Enable Dark Mode")
      showAlert("Light Mode Is Enable", "success") // Alert
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("mybox").style.backgroundColor = "white"
      document.getElementById("mybox").style.borderColor = "grey"
      document.getElementById("mybox").style.color = "black"
      document.getElementById("resultBox").style.borderColor = "grey"
      document.getElementById("circle1").style.border = "2px solid #6c757d"
      document.getElementById("circle2").style.border = "2px solid #6c757d"
      document.getElementById("circle3").style.border = "2px solid #6c757d"
      document.getElementById("circle4").style.border = "2px solid #6c757d"
      document.title = "TextUlits - Light"
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} colorPicker={setColor} /> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} colorPicker={colorPicker} />
      <Alert alert={alert} />
      {/* <Alert alert={"This is Alert"}/> */}
      <TextForm heading="Enter the text here to analyze" showAlert={showAlert} />
      {/* <About aboutText="About TextUtils" /> */}
    </>
  );
}

export default App;
