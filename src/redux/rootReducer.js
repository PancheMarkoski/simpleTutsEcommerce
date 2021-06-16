import {combineReducers} from 'redux'

import userReducer from "./User/user.reducer"
import headerReducer from './Header/header.reducer'

export default combineReducers({
    user: userReducer,
    header: headerReducer
});