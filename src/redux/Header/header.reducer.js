import headerTypes from "./header.types";

const INITIAL_STATE = {
    mobileMenu: null
}

const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case headerTypes.SET_HEADER_MOBILE_MENU:
            return {
                ...state,
                mobileMenu: action.payload
            }
            
        default:
            return state;
    }
}

export default headerReducer;