import './TextForm.css'; //Importing Custom CSS
import React, { useState } from 'react' // Importing useState form React
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleOnChange = (extract) => {
        setText(extract.target.value)
        // setText('change')
        // props.showAlert("Converted to UpperCase", "success")
    }
    const handleLwcase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleCapCase = () => {
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) // This line credit goes to freecode.org
        setText(newText)
        props.showAlert("Converted to Capitalize", "success")
        // console.log(newText);
    }
    const handleCopyToClipboard = () => {
        let copyText = text;
        navigator.clipboard.writeText(copyText)
        setText(copyText)
        props.showAlert("Text is copied to clipboard", "success")

    }
    const handleRemoveExSpace = () => {
        let removeSpace = text.replace(/\s+/g, ' ').trim();
        setText(removeSpace)
        props.showAlert("Extra space is remove", "success")
        // let removeSpace = text.split(/[ ]+/);
        // setText(removeSpace.join(""))
    }
    const handleClearAll = () => {
        setText('')
        props.showAlert("Text Cleared", "danger")
    }
    const [text, setText] = useState("Enter Your Text Here"); // use this line for development
    // const [text, setText] = useState(""); // use this line for deployment

    // text = 'this is text'    // Wrong way to change state
    // setText('this is text')  // Correct way to change state 
    return (
        <>
            <div className="container my-3">
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-4">
                    <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8" placeholder="Enter Your Text Here"></textarea>
                </div>
            </div>
            <div className="container btn-container">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={handleLwcase}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleRemoveExSpace}>Remove Spaces</button>
                <button className="btn btn-primary" onClick={handleCapCase}>Convert to Capitalize</button>
                <button className="btn btn-primary" onClick={handleCopyToClipboard}>Copy To Clipboard</button>
                {/* { 1 Liner Code} */}
                {/* <button className="btn btn-primary" onClick={() => navigator.clipboard.writeText(text)}>Copy To Clipboard</button> */}
                <button className="btn btn-primary" onClick={handleClearAll}>Clear All</button>

            </div>
            <div className="container">
                <h2 className="my-4 mb-3">Text Summary</h2>
                {/* <p><span className="highlight">{() => { if (!text === '') { text.split(" ").length } }}</span> newText <span className="highlight">{text.length}</span> Length</p> */}
                <p><span className="highlight">{text.split(" ").length}</span> Words <span className="highlight">{text.length}</span> Length</p>
                <p><span className="highlight"> {0.008 * text.split(" ").length}</span> Minutes Read</p>
                <h2 className="my-3">Live Preview</h2>
                <div className="p-3 mb-5" id="resultBox">{text.length > 0 ? text : "Nothing to preview"}</div>
            </div>
        </>
    )
}

// Type-Check
TextForm.prototype = {
    heading: PropTypes.string,
    showAlert: PropTypes.func
}

// Default Props 
TextForm.defaultProps = {
    heading: "This is form"
}
