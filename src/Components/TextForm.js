import './TextForm.css';
import React, { useState } from 'react' // Importing useState form React
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
        // console.log(newText);
        // console.log("Btn is clicked: " + text);
    }
    const handleOnChange = (extract) => {
        setText(extract.target.value)
        // setText('change')
        // console.log("Onchange is clicked");
    }
    const clearAll = () => {
        setText('')
        // console.log("ClearALl is click");
    }
    const handleLwcase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
        // console.log("Lowercase btn is clicked");
    }
    // const [text, setText] = useState("Enter Your Text Here"); // use this line for development
    const [text, setText] = useState(""); // use this line for deployment

    // text = 'this is text'    // Wrong way to change state
    // setText('this is text')  // Correct way to change state 
    return (
        <div className="container my-3">
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8" placeholder="Enter Your Text Here"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLwcase}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={clearAll}>Clear All</button>

            </div>
        </div>
    )
}

// Type-Check
TextForm.prototype = {
    heading: PropTypes.string
}

// Default Props 
TextForm.defaultProps = {
    heading: "This is form"
}
