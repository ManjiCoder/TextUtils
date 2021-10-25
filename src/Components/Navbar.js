// import React, { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types' // impts
import { Link } from 'react-router-dom';



export default function Navbar(props) {
    let navbarStyle = {
        background: props.mode === "dark" ? "linear-gradient(6deg, #00378a, hsl(263 90% 51% / 1))" : "white"
    }
    // const color1 = () => {
    //     // console.log("btn is clicked");
    //     document.body.style.backgroundColor = "black"
    //     document.body.style.color = "white"
    //     document.getElementById("mybox").style.backgroundColor = "black"
    //     // console.log(document.getElementById("mybox").style.backgroundColor = `${clr}`);
    //     document.getElementById("mybox").style.borderColor = "white"
    //     document.getElementById("mybox").style.color = "white"
    //     document.getElementById("resultBox").style.borderColor = "white"
    //     document.getElementById("circle1").style.border = "2px solid white"
    //     document.getElementById("circle2").style.border = "2px solid white"
    //     document.getElementById("circle3").style.border = "2px solid white"
    //     document.getElementById("circle4").style.border = "2px solid white"
    // }
    // const color2 = () => {
    //     // console.log("btn is clicked");
    //     document.body.style.backgroundColor = "darkgreen"
    //     document.body.style.color = "white"
    //     document.getElementById("mybox").style.backgroundColor = "darkgreen"
    //     // console.log(document.getElementById("mybox").style.backgroundColor = `${clr}`);
    //     document.getElementById("mybox").style.borderColor = "white"
    //     document.getElementById("mybox").style.color = "white"
    //     document.getElementById("resultBox").style.borderColor = "white"
    //     document.getElementById("circle1").style.border = "2px solid white"
    //     document.getElementById("circle2").style.border = "2px solid white"
    //     document.getElementById("circle3").style.border = "2px solid white"
    //     document.getElementById("circle4").style.border = "2px solid white"
    // }
    // const color3 = () => {
    //     // console.log("btn is clicked");
    //     let colour = "navy"
    //     document.body.style.backgroundColor = colour
    //     document.body.style.color = "white"
    //     document.getElementById("mybox").style.backgroundColor = colour
    //     // console.log(document.getElementById("mybox").style.backgroundColor = `${clr}`);
    //     document.getElementById("mybox").style.borderColor = "white"
    //     document.getElementById("mybox").style.color = "white"
    //     document.getElementById("resultBox").style.borderColor = "white"
    //     document.getElementById("circle1").style.border = "2px solid white"
    //     document.getElementById("circle2").style.border = "2px solid white"
    //     document.getElementById("circle3").style.border = "2px solid white"
    //     document.getElementById("circle4").style.border = "2px solid white"
    // }
    // const color4 = () => {
    //     // console.log("btn is clicked");
    //     document.body.style.backgroundColor = "maroon"
    //     document.body.style.color = "white"
    //     document.getElementById("mybox").style.backgroundColor = "maroon"
    //     // console.log(document.getElementById("mybox").style.backgroundColor = `${clr}`);
    //     document.getElementById("mybox").style.borderColor = "white"
    //     document.getElementById("mybox").style.color = "white"
    //     document.getElementById("resultBox").style.borderColor = "white"
    //     document.getElementById("circle1").style.border = "2px solid white"
    //     document.getElementById("circle2").style.border = "2px solid white"
    //     document.getElementById("circle3").style.border = "2px solid white"
    //     document.getElementById("circle4").style.border = "2px solid white"
    // }
    return (
        <div >
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} p-2`} style={navbarStyle}>
                {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} p-1`} style={{ backgroundColor: props.mode === "dark" ? "hsl(216 100% 27% / 1)" : "white" }}> */}
                {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} p-0`} style={{ backgroundColor: props.mode === "dark" ? "red" : "white" }}> */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                    <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                                {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                            </li>
                        </ul>
                        {/* For Color Plate use the below */}
                        {/* Color Plate */}
                        {/* <div className="nav-item d-flex ml-5" style={{ marginRight: "2rem" }}>
                            <span className="circle nav-link btn" onClick={color1} id="circle1" style={{ height: "40px", width: "40px", border: "2px solid #6c757d", borderRadius: "50%", backgroundColor: "black" }}></span>
                            <span className="circle nav-link btn mx-2" onClick={color2} id="circle2" style={{ height: "40px", width: "40px", border: "2px solid #6c757d", borderRadius: "50%", backgroundColor: "darkgreen" }}></span>
                            <span className="circle nav-link btn" onClick={color3} id="circle3" style={{ height: "40px", width: "40px", border: "2px solid #6c757d", borderRadius: "50%", backgroundColor: "navy" }}></span>
                            <span className="circle nav-link btn mx-2" onClick={color4} id="circle4" style={{ height: "40px", width: "40px", border: "2px solid #6c757d", borderRadius: "50%", backgroundColor: "maroon" }}></span>
                        </div> */}
                        {/* For Color Plate use the below */}
                        {/* <div className="nav-item my-3 d-flex">
                            <input type="color" id="colors" onChange={props.colorPicker} /> */}
                        {/* One Liner <input type="color" id="colors" onChange={e => setColor(e.target.value)} /> */}
                        {/* <label className="form-check-label mx-2" htmlFor="color" >Set Color</label>
                        </div> */}

                        {/* Toggle Mode Btn */}
                        <div className={`form-check form-switch d-flex mb-3 mb-lg-0 text-${props.mode === "light" ? "dark" : "light"}`} >
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="modeSwitch" />
                            <label className="form-check-label mx-2" htmlFor="modeSwitch" >{props.btnText}</label>
                        </div>
                        {/* Search btn with icon */}
                        {/* <form className="d-flex">
                            <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Specifies the values for props:
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //.isRequired give error when return undefined value
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string,
    btnText: PropTypes.string,
    toggleMode: PropTypes.func
};

// Specifies the default values for props:
// Navbar.defaultProps = {
//     title: 'Title-Text',
//     aboutText: 'About'
// }