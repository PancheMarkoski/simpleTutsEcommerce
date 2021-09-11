import productTypes from "./product.types";

export const addProductStart = (data) => ({
    type: productTypes.ADD_PRODUCT_START,
    payload: data
})

export const fatchProductsStart = () => ({
    type: productTypes.FATCH_PRODUCTS_START
})

export const setProducts = (products) => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
})

export const deleteProductStart = (productID) => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productID
})

export const editProductStart = (editProductData) => ({
    type: productTypes.EDIT_PRODUCT_START,
    payload: editProductData
})

export const fatchProductStart = (id) => ({
    type: productTypes.FATCH_PRODUCT_START,
    payload: id
})

export const setProduct = (product) => ({
    type: productTypes.SET_PRODUCT,
    payload: product
})
