import React, { useState } from 'react'//    For GitHub
// import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types' // impts
// import { Link, NavLink, useLocation } from 'react-router-dom'; //* Router Specific Stuff */

import LoadingBar from 'react-top-loading-bar'

export default function Navbar(props) {
    // let location = useLocation();
    // useEffect(() => {
    //     console.log(location);    //  For Dev
    // }, [location]);

    const [progress, setProgress] = useState(0)

    return (
        <div >
            <LoadingBar
                color='#f11946'
                progress={progress}
                height={3.5}
                onLoaderFinished={() => setProgress(0)}
            />
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} p-2`} style={props.purpleStyle}>
                <div className="container-fluid">
                    {/* Router Specific Stuff  */}
                    {/* <Link className="navbar-brand" to="/" onClick={() => setProgress(100)}>{props.title}</Link> */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* Router Specific Stuff  */}
                                {/* <NavLink className={`nav-link ${location.pathname === '/' ? 'harry' : ''}`} aria-current="page" to="/" onClick={() => setProgress(100)}>Home</NavLink> */}
                                <a className="nav-link active harry" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* Router Specific Stuff  */}
                                {/* <NavLink className={`nav-link ${location.pathname === '/about' ? 'harry' : ''}`} to="/about" onClick={() => setProgress(100)}>{props.aboutText}</NavLink> */}
                                <a className="nav-link" href="#">{props.aboutText}</a>
                            </li>
                        </ul>
                        {/* Toggle Mode Btn */}
                        <div className={`form-check form-switch d-flex mb-3 mb-lg-0 text-${props.mode === "light" ? "dark" : "light"}`} >
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="modeSwitch" />
                            <label className="form-check-label mx-2" htmlFor="modeSwitch" >{props.btnText}</label>
                        </div>
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
    toggleMode: PropTypes.func,
    btnText: PropTypes.string
};

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Title-Text',
    aboutText: 'About'
}