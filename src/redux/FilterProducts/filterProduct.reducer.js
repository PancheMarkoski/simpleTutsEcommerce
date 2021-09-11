import filterProductType from "./filterProduct.types";

const INITIAL_STATE = {
    collection: null
}

const filterProductReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case filterProductType.ADD_FILTER_COLLECTION_PRODUCT:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state
    }
}


export default filterProductReducer