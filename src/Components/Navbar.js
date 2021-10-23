import React, { useState } from 'react' // rfc
import PropTypes from 'prop-types' // impts

export default function Navbar(props) {
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const [theme, setTheme] = useState({
        color: "black",
        backgroundColor: "white",
        transition: "none",
        // transitionDuration: "0.01s"
    })

    const toggleStyle = () => {
        if (theme.backgroundColor === "white") {
            setTheme({
                color: "white",
                backgroundColor: "#212529",
                transition: "none",
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setTheme({
                color: "black",
                backgroundColor: "white",
                transition: "none"
            })
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <div style={theme}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div className="container-fluid p-2" style={theme}>
                    <a className="navbar-brand" style={theme} href="/">{props.title}</a>
                    <button className="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={theme} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={theme} href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch d-flex mb-3 mb-lg-0" style={theme}>
                            <input className="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckChecked">{btnText}</label>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" style={theme} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Specifies the values for props:
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //.isRequired give error when return undefined value
    aboutText: PropTypes.string.isRequired
};

// Specifies the default values for props:
// Navbar.defaultProps = {
//     title: 'Title-Text',
//     aboutText: 'About'
// }