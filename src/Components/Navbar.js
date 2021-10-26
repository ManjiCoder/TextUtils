import React from 'react'
import PropTypes from 'prop-types' // impts
// import { Link } from 'react-router-dom'; //* Router Specific Stuff */



export default function Navbar(props) {
    let navbarStyle = {
        background: props.mode === "dark" ? "linear-gradient(6deg, #00378a, hsl(263 90% 51% / 1))" : "white"
    }

    return (
        <div >
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} p-2`} style={navbarStyle}>
                <div className="container-fluid">
                    {/* Router Specific Stuff  */}
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* Router Specific Stuff  */}
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* Router Specific Stuff  */}
                                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
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