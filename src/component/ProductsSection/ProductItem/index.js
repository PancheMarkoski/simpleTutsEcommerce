import React from 'react'
import './styles.scss'

const ProductItem = () => {
    return (
        <div className="Product-item">
            <img className="Product-img" alt="Product"
            src="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBoot_Brown_45_1024x1024@2x.jpg?v=1609974837"/>
            <h4 className="Product-title">Startup evolve orange</h4>
            <p className="Product-price">$88.25</p>
        </div>
    )
}

export default ProductItem
