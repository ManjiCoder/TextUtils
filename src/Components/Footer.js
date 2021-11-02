import React from 'react'
import PropTypes from 'prop-types'
// import gitImg from '../images/github.png'

export default function Footer(props) {
    let footerStyle = {
        color: props.mode === "light" ? "black" : "white"
    }
    return (
        <footer className="footer" style={props.purpleStyle}>
            <span id="footerText" style={footerStyle}>TextUtils | 2018 - 2021 &copy; All rights reserved</span>
            <div className="footerImg" style={{ filter: props.mode === "dark" ? "invert(1)" : "invert(0)" }}>
                <a href="https://github.com/ManjiCoder/TextUtils" rel="noreferrer" target="_blank">
                    {/* <img src={gitImg} alt="" className="icon" /> */}
                    <img src={require('../images/github.png').default} alt="" className="icon" />
                </a>
                <a href="https://github.com/">
                    <img src={require('../images/whatsapp.png').default} alt="" className="icon" />
                </a>
                <a href="https://github.com/">
                    <img src={require('../images/facebook.png').default} alt="" className="icon" />
                </a>
                <a href="https://github.com/">
                    <img src={require('../images/instagram.png').default} alt="" className="icon" />
                </a>
            </div>
        </footer>
    )
}


Footer.protoType = {
    title: PropTypes.string,
    mode: PropTypes.string
}