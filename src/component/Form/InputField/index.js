import React from 'react'
import "./styles.scss"

const InputField = ({fontSize = 1.4, label, handleChange, ...otherProps}) => {
    return (
        <div className="InputField">
            {label && 
            <label
            style={{fontSize: `${fontSize}rem`}} 
            className="InputField-label">
                {label}
            </label>}
            <input className="InputField-input" {...otherProps} autoComplete="off"/>
        </div>
    )
}

export default InputField
