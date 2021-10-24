import React, { useState } from 'react'
import PropTypes from 'prop-types' // impts

export default function Navbar(props) {
    // Change Color
    const [color, setColor] = useState(null);
    console.log("color-Picker ", color);

    const changeColor = (extract) => {
        setColor(extract.target.value)
        //   console.log(setColor);
        //   console.log("onchange is click");
    }
    return (
        <div >
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} p-0`}>
                <div className="container-fluid p-2">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        {/* <div className="nav-item"></div> */}
                        <div className="nav-item mb-3">
                            <input type="color" id="colors" onChange={changeColor} />
                            {/* <input type="color" id="colors" onChange={e => setColor(e.target.value)} /> */}
                            <label className="form-check-label mx-2" htmlFor="color" >Set Color</label>
                        </div>
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