import React from 'react'
import "./styles.scss"

const ItemFilter = ({children, ...otherProps}) => {
    return (
        <div className="ItemFilter" {...otherProps}>
            {children}
        </div>
    )
}

export default ItemFilter
