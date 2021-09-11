import React from 'react'
import "./styles.scss"

const Products = ({prod}) => {
    return (
        <div className="Products">
            <div className="products-img">
                <img src={prod.productImg} alt="Men Shoes"/>
            </div>
            <div className="Products-title">
                <p>
                    {prod.productTitle}
                </p>
            </div>
            <div className="Products-price">{prod.productPrice}</div>
        </div>
    )
}

export default Products
