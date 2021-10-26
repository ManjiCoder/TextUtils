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
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-4">
                    <textarea className="form-control " value={text} style={props.toggleStyle} id="mybox" onChange={handleOnChange} rows="8" placeholder="Enter Your Text Here"></textarea>
                    {/* <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8" placeholder="Enter Your Text Here"></textarea> */}
                </div>
            </div>
            <div className="container btn-container">
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleLwcase}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleRemoveExSpace}>Remove Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleCapCase}>Convert to Capitalize</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleCopyToClipboard}>Copy To Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleClearAll}>Clear All</button>
                {/* { 1 Liner Code} */}
                {/* <button disabled={text.length===0} className="btn btn-primary" onClick={() => navigator.clipboard.writeText(text)}>Copy To Clipboard</button> */}

            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2 className="my-4 mb-3">Text Summary</h2>
                <div><span className="highlight">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span> words <span className="highlight">{text.length}</span> characters</div>
                <div><span className="highlight"> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</span> Minutes Read</div>
                <h2 className="my-3">Live Preview</h2>
                <div className="p-3 mb-5" style={props.toggleStyle} id="resultBox">{text.length > 0 ? text : "Nothing to preview"}</div>
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
    heading: "TextUtlits"
}
