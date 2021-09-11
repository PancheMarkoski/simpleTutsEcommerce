import React from 'react'
import './styles.scss'
// React Router
import {Link} from 'react-router-dom'

const ProductItem = ({data, ...ortherProps}) => {
    return (
        <div {...ortherProps} className="Product-item">
            <Link style={{textDecoration: "none"}} to={`/product/details/${data.docID}`}>
                <img className="Product-img" alt="Product"
                src={data.productImg}/>
                <h4 className="Product-title">{data.productTitle}</h4>
                <p className="Product-price">${data.productPrice}</p>
            </Link>
        </div>
    )
}

export default ProductItem
