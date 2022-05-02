import BaseReducer from '../../utils/BaseReducer';
import VendorAction from "./VendorAction";


export default class VendorReducer extends BaseReducer {

    initialState = {
        vendorList: null ,
        vendorsByCategory : null
    };

    [VendorAction.REQUEST_GET_VENDORS_FINISHED](state, action) {
        return {
            ...state,
            vendorList: action.payload,
        };
    }

    [VendorAction.REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY_FINISHED](state, action) {
        return {
            ...state,
            vendorsByCategory: action.payload,
        };
    }


}