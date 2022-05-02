import BaseReducer from '../../utils/BaseReducer';
import ProductAction from './ProductAction';


export default class ProductReducer extends BaseReducer {

    initialState = {
        allProducts:null ,
        productsByCategory:null ,
        productsByVendor: null ,
    };

    [ProductAction.CLEAR_PRODUCTS_BY_VENDOR](state, action) {
        return {
            ...state,
            productsByVendor: null,
        };
    }

    [ProductAction.REQUEST_GET_ALL_PRODUCTS_FINISHED](state, action) {
        return {
            ...state,
            allProducts: action.payload,
        };
    }

    [ProductAction.REQUEST_GET_PRODUCTS_BY_CATEGORY_FINISHED](state, action) {
        return {
            ...state,
            allProducts: action.payload,
        };
    }

    [ProductAction.REQUEST_GET_PRODUCTS_BY_VENDOR_FINISHED](state, action) {
        return {
            ...state,
            productsByVendor: action.payload,
        };
    }

}