import React, {useEffect, useState} from 'react'
import "./styles.scss"
// Components
import Header from "../../component/Collection/Header";
import SearchCollection from '../../component/Collection/SearchCollection'
import ProductItem from '../../component/ProductsSection/ProductItem';
// Action
import {fatchProductsStart} from "../../redux/Product/product.action"
// Redux
import { useDispatch, useSelector } from 'react-redux'

const mapState = ({product, filterProduct}) => ({
    productArr: product.products,
    collectionFilterTitle: filterProduct.collection
})

const Men = () => {

    const dispatch = useDispatch()
    const {collectionFilterTitle} = useSelector(mapState) 
    const {productArr} = useSelector(mapState) 

    useEffect(() => {
        dispatch(fatchProductsStart())
        FilterProductByCollection(collectionFilterTitle)
        FilterProductsBySort(collectionFilterTitle)
        FilterProductByPrice(collectionFilterTitle)
    }, [collectionFilterTitle])    
    
    const [ProductsObj, setProductsObj] = useState({
        Products: productArr,
        Sort: "",
        Collection: "",
    })

    const FilterProductByCollection = (collectionFilterTitle) => {
        if(!collectionFilterTitle || collectionFilterTitle.length === 0) {
            setProductsObj({
                Products: productArr,
                Collection: "",
                Sort: ""
            })
        } else {
            collectionFilterTitle.forEach(el => {
                setProductsObj({
                    Products: productArr.filter(product => product.productCollection.includes(el.title.toLowerCase())),
                    Collection: el.title
                })
            })
        }
    }

    const FilterProductsBySort = (collectionFilterTitle) => {
        if(!collectionFilterTitle || collectionFilterTitle.length === 0) {
            setProductsObj({
                Products: productArr,
                Collection: "",
                Sort: ""
            })
        } else {
            {collectionFilterTitle.forEach(el => {
                if(el.filter === "Price") {
                    setProductsObj({
                        Products: ProductsObj.Products.sort((a,b) => b.productPrice - a.productPrice ),
                        Sort: el.filter 
                    })
                }
                else if(el.filter === "A-Z") {
                    setProductsObj({
                        Products: ProductsObj.Products.sort((a,b) => {
                            const isReversed = (el.filter === "A-Z") ? 1 : -1
                            return isReversed * a.productTitle.localeCompare(b.productTitle)
                        }),
                        Sort: el.filter 
                    })
                }
            })}
        }
    }

    const FilterProductByPrice = (collectionFilterTitle) => {
        if(!collectionFilterTitle || collectionFilterTitle.length === 0) {
            setProductsObj({
                Products: productArr,
                Collection: "",
                Sort: ""
            })
        } else {
            collectionFilterTitle.forEach(el => {
                if(el.val) {
                    setProductsObj({
                        Products: ProductsObj.Products.filter(prod => {
                            if(prod.productPrice < el.val) {
                                return prod
                            }
                        }),
                        Collection: el.val,
                        Sort: el.val
                    })
                }
            })
        }
    }

    return (
        <div className="Men">
            {        console.log("FilterProductByCollection - ProductsObj", ProductsObj)
}
            <Header Img="https://cdn.shopify.com/s/files/1/1241/4530/collections/Landing_Hombre_2100x.jpg?v=1621284677"/>
            <h1 className="Men-title">Men</h1>
            <SearchCollection />    
            <div className="Men-products">
                <h1>Sneakers</h1>
                <div className="Men-products__item">

                    {ProductsObj.Products.filter(product => product.productCategory === "men" && product).map(product => {
                                 return (
                                        <ProductItem  style={{textAlign: "center", color: "black"}} key={product.docID} data={product}/>
                                 )
                             })}

                </div>
            </div>        
        </div>
    )
}

export default Men
