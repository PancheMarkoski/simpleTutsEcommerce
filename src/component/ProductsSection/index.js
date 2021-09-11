import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import ProductItem from './ProductItem'
import "./styles.scss"
// Redux
import {useSelector, useDispatch} from 'react-redux'
// Redux Action
import {fatchProductsStart} from '../../redux/Product/product.action'

const mapState = ({product}) => ({
    productData: product.products
})

const ProductSection = ({title, linkName}) => {

    const dispatch = useDispatch()
    const {productData} = useSelector(mapState)
    useEffect(() => {
        console.log("PRODUCTS")
        dispatch(fatchProductsStart())
    }, [])
    return (
        <div className="Products">
            <div className="Products-header">
                <h2>{title}</h2>
                <Link to="#">{linkName}</Link>
            </div>
            <div className="Products-list">
                {productData.map(product => {
                    return (
                        <ProductItem key={product.docID} data={product}/>
                    )
                })}
            </div>            
        </div>
    )
}

export default ProductSection
