import React from 'react'
import "./styles.scss"

const CollectionHeader = ({Img}) => {
    return (
        <div className="CollectionHeader" style={{
            backgroundImage: `url(${Img})`
        }}>
            
        </div>
    )
}

export default CollectionHeader
