import BaseReducer from '../../utils/BaseReducer';
import SubCategoryAction from "./SubCategoryAction";


export default class SubCategoryReducer extends BaseReducer {

    initialState = {
        productSubCategoryList: null ,
        serviceSubCategoryList: null ,
    };

    [SubCategoryAction.REQUEST_GET_PRODUCT_SUB_CATEGORIES_FINISHED](state, action) {
        return {
            ...state,
            productSubCategoryList: action.payload,
        };
    }

    [SubCategoryAction.REQUEST_GET_PRODUCT_SUB_CATEGORIES_BY_CATEGORY_FINISHED](state, action) {
        return {
            ...state,
            productSubCategoryList: action.payload,
        };
    }

    [SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES_FINISHED](state, action) {
        return {
            ...state,
            serviceSubCategoryList: action.payload,
        };
    }

    [SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY_FINISHED](state, action) {
        return {
            ...state,
            serviceSubCategoryList: action.payload,
        };
    }


}