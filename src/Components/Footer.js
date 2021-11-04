import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'  /* Router Specific Stuff  */
// import gitImg from '../images/github.png'

export default function Footer(props) {
    let footerStyle = {
        color: props.mode === "light" ? "black" : "white"
    }
    return (
        <footer className="footer" style={props.purpleStyle}>
            <span id="footerText" style={footerStyle}>
                 {/* Router Specific Stuff  */}
                <Link to="/" style={footerStyle}>TextUtils </Link>
                {/* <a href="/" style={footerStyle}>TextUtils </a> */}
                | 2018 - 2021 &copy; All rights reserved</span>
            <div className="d-flex display flex-column align-items-center">
                <span className="followUs" style={footerStyle}>Follow us...</span>

                <div className="footerImg" style={{ filter: props.mode === "dark" ? "invert(1)" : "invert(0)" }}>
                    <a href="https://github.com/ManjiCoder/TextUtils" rel="noreferrer" target="_blank">
                        {/* <img src={gitImg} alt="" className="icon" /> */}
                        <img src={require('../images/github.png').default} alt="" className="icon" />
                    </a>
                    <a href="https://chat.whatsapp.com/GN4N7Oa74n8ABWve1GxDgQ" rel="noreferrer" target="_blank">
                        <img src={require('../images/whatsapp.png').default} alt="" className="icon" />
                    </a>
                    <a href="https://facebook.com/" rel="noreferrer" target="_blank">
                        <img src={require('../images/facebook.png').default} alt="" className="icon" />
                    </a>
                    <a href="https://instagram.com/" rel="noreferrer" target="_blank">
                        <img src={require('../images/instagram.png').default} alt="" className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}


Footer.protoType = {
    title: PropTypes.string,
    mode: PropTypes.string
}