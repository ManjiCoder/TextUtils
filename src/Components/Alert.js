import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    // Function to capitalize First letter
    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (props.alert && <div className={`d-flex align-items-center alert alert-${props.alert.type} alert-dismissible fade show`} style={{ height: "40px" }} id="alert" role="alert">
        <strong>{capitalize(props.alert.type)}:&nbsp; </strong>{props.alert.msg}
    </div>
    )
}

// Specifies the values for props:
Alert.protoTypes = {
    alert: PropTypes.func
}
