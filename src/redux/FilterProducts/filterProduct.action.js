import filterProductType from "./filterProduct.types";

export const addFilterCollectionProduct = (data) => ({
    type: filterProductType.ADD_FILTER_COLLECTION_PRODUCT,
    payload: data
})

export const setFilterProduct = (product) => ({
    type: filterProductType.SET_FILTER_PRODUCT,
    payload: product
})