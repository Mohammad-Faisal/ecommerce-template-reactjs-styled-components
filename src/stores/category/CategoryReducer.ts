import BaseReducer from '../../utils/BaseReducer';
import CategoryAction from "./CategoryAction";


export default class CategoryReducer extends BaseReducer {

    initialState = {
        productCategoryList: null ,
        serviceCategoryList: null ,
    };

    [CategoryAction.REQUEST_GET_PRODUCT_CATEGORIES_FINISHED](state, action) {
        return {
            ...state,
            productCategoryList: action.payload,
        };
    }

    [CategoryAction.REQUEST_GET_SERVICE_CATEGORIES_FINISHED](state, action) {
        return {
            ...state,
            serviceCategoryList: action.payload,
        };
    }


}