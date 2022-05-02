import ActionUtility from '../../utils/ActionUtility';
import CategoryEffect from "./CategoryEffect";

export default class CategoryAction {


    
    static REQUEST_GET_PRODUCT_CATEGORIES = 'REQUEST_GET_PRODUCT_CATEGORIES';
    static REQUEST_GET_PRODUCT_CATEGORIES_FINISHED = 'REQUEST_GET_PRODUCT_CATEGORIES_FINISHED';

    static REQUEST_UPDATE_ACTIVE_STATUS = 'REQUEST_UPDATE_ACTIVE_STATUS';
    static REQUEST_UPDATE_ACTIVE_STATUS_FINISHED = 'REQUEST_UPDATE_ACTIVE_STATUS_FINISHED';

    static REQUEST_CREATE_PRODUCT_CATEGORY = 'REQUEST_CREATE_PRODUCT_CATEGORY';
    static REQUEST_CREATE_PRODUCT_CATEGORY_FINISHED = 'REQUEST_CREATE_PRODUCT_CATEGORY_FINISHED';

    static REQUEST_DELETE_PRODUCT_CATEGORY = 'REQUEST_DELETE_PRODUCT_CATEGORY';
    static REQUEST_DELETE_PRODUCT_CATEGORY_FINISHED = 'REQUEST_DELETE_PRODUCT_CATEGORY_FINISHED';


    static _requestUpdateProductCategoryStatus(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_UPDATE_ACTIVE_STATUS, CategoryEffect._requestUpdateProductCategoryStatus, request )
        }
    }
    static _requestGetProductCategories(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_GET_PRODUCT_CATEGORIES, CategoryEffect._requestGetProductCategories, request )
        }
    }

    static _requestCreateNewProductCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_CREATE_PRODUCT_CATEGORY, CategoryEffect._requestCreateNewProductCategory, request )
        }
    }

    static _requestDeleteProductCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_DELETE_PRODUCT_CATEGORY, CategoryEffect._requestDeleteProductCategory, request )
        }
    }


    static REQUEST_GET_SERVICE_CATEGORIES = 'REQUEST_GET_SERVICE_CATEGORIES';
    static REQUEST_GET_SERVICE_CATEGORIES_FINISHED = 'REQUEST_GET_SERVICE_CATEGORIES_FINISHED';

    static REQUEST_CREATE_SERVICE_CATEGORY = 'REQUEST_CREATE_SERVICE_CATEGORY';
    static REQUEST_CREATE_SERVICE_CATEGORY_FINISHED = 'REQUEST_CREATE_SERVICE_CATEGORY_FINISHED';

    static REQUEST_DELETE_SERVICE_CATEGORY = 'REQUEST_DELETE_SERVICE_CATEGORY';
    static REQUEST_DELETE_SERVICE_CATEGORY_FINISHED = 'REQUEST_DELETE_SERVICE_CATEGORY_FINISHED';


    static _requestUpdateServiceCategoryStatus(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_UPDATE_ACTIVE_STATUS, CategoryEffect._requestUpdateServiceCategoryStatus, request )
        }
    }

    static _requestGetServiceCategories(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_GET_SERVICE_CATEGORIES, CategoryEffect._requestGetServiceCategories, request )
        }
    }

    static _requestCreateNewServiceCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_CREATE_SERVICE_CATEGORY, CategoryEffect._requestCreateNewServiceCategory, request )
        }
    }

    static _requestDeleteServiceCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CategoryAction.REQUEST_DELETE_SERVICE_CATEGORY, CategoryEffect._requestDeleteServiceCategory, request )
        }
    }


}