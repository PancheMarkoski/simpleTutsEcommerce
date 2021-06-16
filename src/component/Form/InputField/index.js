import React from 'react'
import "./styles.scss"

const InputField = ({label, handleChange, ...otherProps}) => {
    return (
        <div className="InputField">
            {label && <label className="InputField-label">{label}</label>}
            <input className="InputField-input" {...otherProps} autoComplete="off"/>
        </div>
    )
}

export default InputField
