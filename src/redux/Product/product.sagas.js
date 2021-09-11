import { put, call, takeLatest, all } from 'redux-saga/effects'
import productTypes from './product.types'
import { handleAddProduct, handleFatchProducts, handleDeleteProduct, handleEditProduct, handleFatchProduct} from '../Product/product.helpers'
import { auth } from "./../../firebase/utils"
import {setProducts, fatchProductsStart, setProduct} from './product.action'

export function* addProduct({payload: {
  title,
  img,
  price,
  category,
  collection
}}) {
  const timestamp = new Date();
  const poduct = {
    productTitle: title,
    productImg: img,
    productPrice: price,
    productCategory: category,
    productCollection: collection,
    productAdminUserUID: auth.currentUser.uid,
    createdDate: timestamp
  }
  yield call(handleAddProduct, poduct)
  
  yield put(
    fatchProductsStart()
  )
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_PRODUCT_START, addProduct)
}

export function* fatchProducts() {
  const products = yield handleFatchProducts()
  yield put(
    setProducts(products)
  )
}

export function* onFatchProductsStart() {
  yield takeLatest(productTypes.FATCH_PRODUCTS_START, fatchProducts)
}

export function* deleteProduct( {payload} ) {
  yield handleDeleteProduct(payload)
  yield put(
    fatchProductsStart()
  )
}

export function* onDeleteProductStart() {
  yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct)
}

export function* editProduct({ payload : {
  title,
  img,
  price,
  category,
  collection,
  docId
}}) {

  const timestamp = new Date();
  const editProduct = {
    productTitle: title,
    productImg: img,
    productPrice: price,
    productCategory: category,
    productCollection: collection,
    productAdminUserUID: auth.currentUser.uid,
    createdDate: timestamp
  }
  yield handleEditProduct(editProduct, docId)
  yield put(
    fatchProductsStart()
  )
}

export function* onEditProductStart() {
  yield takeLatest(productTypes.EDIT_PRODUCT_START, editProduct)
}

export function* fatchProduct(payload) {
  const product = yield handleFatchProduct(payload)
  yield put(
    setProduct(product)
  )
}

export function* onFatchProductStart() {
  yield takeLatest(productTypes.FATCH_PRODUCT_START, fatchProduct)
}

export default function* productSagas() {
    yield all([
      call(onAddProductStart),
      call(onFatchProductsStart),
      call(onDeleteProductStart),
      call(onEditProductStart),
      call(onFatchProductStart)
    ])
  }