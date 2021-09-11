import {combineReducers} from 'redux'

import userReducer from "./User/user.reducer"
import headerReducer from './Header/header.reducer'
import productReducer from "./Product/product.reducer"
import filterProductReducer from './FilterProducts/filterProduct.reducer'

export default combineReducers({
    user: userReducer,
    header: headerReducer,
    product: productReducer,
    filterProduct: filterProductReducer
});