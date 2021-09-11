import { put, call, takeLatest, all } from 'redux-saga/effects'
import filterProductTypes from './filterProduct.types'
// import { handleAddProduct, handleFatchProducts, handleDeleteProduct, handleEditProduct, handleFatchProduct} from '../Product/product.helpers'
// import { auth } from "./../../firebase/utils"
import {addFilterCollectionProduct} from './filterProduct.action'

export function* filterCollectionProduct({payload}) {
    yield put(
        addFilterCollectionProduct(payload)
        )
}

export function* onAddFilterCollectionProduct() {
    yield takeLatest(filterProductTypes.ADD_FILTER_COLLECTION_PRODUCT, filterCollectionProduct)
}

export default function* filterProductSagas() {
    yield all([
        call(onAddFilterCollectionProduct)
    ])
}