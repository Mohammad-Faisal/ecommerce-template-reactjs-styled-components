import ActionUtility from '../../utils/ActionUtility';
import ProductEffect from './ProductEffect';

export default class ProductAction {


    
    static REQUEST_CREATE_NEW_PRODUCT = 'REQUEST_CREATE_NEW_PRODUCT' ;
    static REQUEST_CREATE_NEW_PRODUCT_FINISHED = 'REQUEST_CREATE_NEW_PRODUCT_FINISHED';


    static REQUEST_GET_ALL_PRODUCTS = 'REQUEST_GET_ALL_PRODUCTS';
    static REQUEST_GET_ALL_PRODUCTS_FINISHED = 'REQUEST_GET_ALL_PRODUCTS_FINISHED';


    static REQUEST_GET_PRODUCTS_BY_CATEGORY = 'REQUEST_GET_PRODUCTS_BY_CATEGORY';
    static REQUEST_GET_PRODUCTS_BY_CATEGORY_FINISHED = 'REQUEST_GET_PRODUCTS_BY_CATEGORY_FINISHED';


    static REQUEST_ADD_PRODUCT_TO_VENDOR = 'REQUEST_ADD_PRODUCT_TO_VENDOR';
    static REQUEST_ADD_PRODUCT_TO_VENDOR_FINISHED = 'REQUEST_ADD_PRODUCT_TO_VENDOR_FINISHED';


    static REQUEST_REMOVE_PRODUCT_FROM_VENDOR = 'REQUEST_REMOVE_PRODUCT_FROM_VENDOR';
    static REQUEST_REMOVE_PRODUCT_FROM_VENDOR_FINISHED = 'REQUEST_REMOVE_PRODUCT_FROM_VENDOR_FINISHED';


    static REQUEST_GET_PRODUCTS_BY_VENDOR = 'REQUEST_GET_PRODUCTS_BY_VENDOR';
    static REQUEST_GET_PRODUCTS_BY_VENDOR_FINISHED = 'REQUEST_GET_PRODUCTS_BY_VENDOR_FINISHED';

    static CLEAR_PRODUCTS_BY_VENDOR = "CLEAR_PRODUCTS_BY_VENDOR";

    static _requestCreateNewProduct(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_CREATE_NEW_PRODUCT, ProductEffect._requestCreateNewProduct, request )
        }
    }


    static _requestGetAllProducts(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_GET_ALL_PRODUCTS, ProductEffect._requestGetProducts, request )
        }
    }

    static _requestGetProductsByCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_GET_PRODUCTS_BY_CATEGORY, ProductEffect._requestGetProductsByCategory, request )
        }
    }

    static _requestAddProductToVendor(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_ADD_PRODUCT_TO_VENDOR, ProductEffect._requestAddProductToVendor, request )
        }
    }
    static _requestRemoveProductFromVendor(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_REMOVE_PRODUCT_FROM_VENDOR, ProductEffect._requestRemoveProductFromVendor, request )
        }
    }

    static _requestGetProductsByVendor(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_GET_PRODUCTS_BY_VENDOR, ProductEffect._requestGetProductsByVendor, request )
        }
    }

    static _clearProducts(){
        return ActionUtility._createAction( ProductAction.CLEAR_PRODUCTS_BY_VENDOR )
    }
    
 
}