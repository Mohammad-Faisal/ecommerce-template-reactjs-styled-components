import ActionUtility from '../../utils/ActionUtility';
import SubCategoryEffect from "./SubCategoryEffect";

export default class SubCategoryAction {


    
    static REQUEST_GET_PRODUCT_SUB_CATEGORIES = 'REQUEST_GET_PRODUCT_SUB_CATEGORIES';
    static REQUEST_GET_PRODUCT_SUB_CATEGORIES_FINISHED = 'REQUEST_GET_PRODUCT_SUB_CATEGORIES_FINISHED';
    
    static REQUEST_GET_PRODUCT_SUB_CATEGORIES_BY_CATEGORY = 'REQUEST_GET_PRODUCT_SUB_CATEGORIES_BY_CATEGORY';
    static REQUEST_GET_PRODUCT_SUB_CATEGORIES_BY_CATEGORY_FINISHED = 'REQUEST_GET_PRODUCT_SUB_CATEGORIES_BY_CATEGORY_FINISHED';

    static REQUEST_CREATE_PRODUCT_SUB_CATEGORY = 'REQUEST_CREATE_PRODUCT_SUB_CATEGORY';
    static REQUEST_CREATE_PRODUCT_SUB_CATEGORY_FINISHED = 'REQUEST_CREATE_PRODUCT_SUB_CATEGORY_FINISHED';

    static REQUEST_DELETE_PRODUCT_SUB_CATEGORY = 'REQUEST_DELETE_PRODUCT_SUB_CATEGORY';
    static REQUEST_DELETE_PRODUCT_SUB_CATEGORY_FINISHED = 'REQUEST_DELETE_PRODUCT_SUB_CATEGORY_FINISHED';

  
    static _requestGetProductSubCategories(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_GET_PRODUCT_SUB_CATEGORIES, SubCategoryEffect._requestGetProductSubCategories, request )
        }
    }

    static _requestCreateNewProductSubCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_CREATE_PRODUCT_SUB_CATEGORY, SubCategoryEffect._requestCreateNewProductSubCategory, request )
        }
    }

    static _requestDeleteProductSubCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_DELETE_PRODUCT_SUB_CATEGORY, SubCategoryEffect._requestDeleteProductSubCategory, request )
        }
    }
    static _requestGetProductSubCategoriesByCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_GET_PRODUCT_SUB_CATEGORIES_BY_CATEGORY, SubCategoryEffect._requestGetProductSubCategoriesByCategory, request )
        }
    }


    static REQUEST_GET_SERVICE_SUB_CATEGORIES = 'REQUEST_GET_SERVICE_SUB_CATEGORIES';
    static REQUEST_GET_SERVICE_SUB_CATEGORIES_FINISHED = 'REQUEST_GET_SERVICE_SUB_CATEGORIES_FINISHED';

    static REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY = 'REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY';
    static REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY_FINISHED = 'REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY_FINISHED';


    static REQUEST_CREATE_SERVICE_SUB_CATEGORY = 'REQUEST_CREATE_SERVICE_SUB_CATEGORY';
    static REQUEST_CREATE_SERVICE_SUB_CATEGORY_FINISHED = 'REQUEST_CREATE_SERVICE_SUB_CATEGORY_FINISHED';

    static REQUEST_DELETE_SERVICE_SUB_CATEGORY = 'REQUEST_DELETE_SERVICE_SUB_CATEGORY';
    static REQUEST_DELETE_SERVICE_SUB_CATEGORY_FINISHED = 'REQUEST_DELETE_SERVICE_SUB_CATEGORY_FINISHED';


    static _requestGetServiceSubCategories(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES, SubCategoryEffect._requestGetServiceSubCategories, request )
        }
    }

    static _requestCreateNewServiceSubCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_CREATE_SERVICE_SUB_CATEGORY, SubCategoryEffect._requestCreateNewServiceSubCategory, request )
        }
    }

    static _requestDeleteServiceSubCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_DELETE_SERVICE_SUB_CATEGORY, SubCategoryEffect._requestDeleteServiceSubCategory, request )
        }
    }

    static _requestGetServiceSubCategoriesByCategory(request) {
        console.log(request);
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY, SubCategoryEffect._requestGetServiceSubCategoriesByCategory, request )
        }
    }




}