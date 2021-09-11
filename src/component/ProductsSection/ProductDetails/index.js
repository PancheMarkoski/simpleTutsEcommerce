import React, {useEffect} from 'react'
import "./styles.scss"
// Product Action
import {fatchProductStart} from '../../../redux/Product/product.action'
// Redux
import {useDispatch, useSelector} from 'react-redux'
// Components
import Button from '../../Form/Button'

const mapState = ({product}) => ({
    productData: product.product
})

const ProductDetails = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch()
    useEffect(() => {
        if(match.params.id) {
            dispatch(fatchProductStart(id))
        }
    }, [id])
    const {productData} = useSelector(mapState)

    if(!productData) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div className="ProductDetails">
            <div className="ProductDetails-left">
                <img src={productData.productImg} alt="shoe" />
            </div>
            <div className="ProductDetails-right">
                <h1>{productData.productTitle}</h1>
                <p>${productData.productPrice}</p>
                <Button className="ProductDetails-right__btn">
                    Add to cart
                </Button>
            </div>
        </div>
    )
}

export default ProductDetails
