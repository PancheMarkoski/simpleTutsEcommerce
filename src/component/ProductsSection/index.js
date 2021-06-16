import React from 'react'
import {Link} from 'react-router-dom'
import ProductItem from './ProductItem'
import "./styles.scss"

const ProductSection = ({title, linkName}) => {
    return (
        <div className="Products">
            <div className="Products-header">
                <h2>{title}</h2>
                <Link to="#">{linkName}</Link>
            </div>
            <div className="Products-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>            
        </div>
    )
}

export default ProductSection
