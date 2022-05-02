import ActionUtility from '../../utils/ActionUtility';
import VendorEffect from "./VendorEffect";

export default class VendorAction {


    static REQUEST_GET_VENDORS = 'REQUEST_GET_VENDORS';
    static REQUEST_GET_VENDORS_FINISHED = 'REQUEST_GET_VENDORS_FINISHED';

    static REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY = 'REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY';
    static REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY_FINISHED = 'REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY_FINISHED';


    static REQUEST_CREATE_VENDOR = 'REQUEST_CREATE_VENDOR';
    static REQUEST_CREATE_VENDOR_FINISHED = 'REQUEST_CREATE_VENDOR_FINISHED';

    static REQUEST_UPDATE_VENDOR_STATUS = 'REQUEST_UPDATE_VENDOR_STATUS';
    static REQUEST_UPDATE_VENDOR_STATUS_FINISHED = 'REQUEST_UPDATE_VENDOR_STATUS_FINISHED';

   
    static _requestUpdateVendorStatus(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, VendorAction.REQUEST_UPDATE_VENDOR_STATUS, VendorEffect._requestUpdateVendorStatus, request )
        }
    }
    static _requestGetVendors(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, VendorAction.REQUEST_GET_VENDORS, VendorEffect._requestGetVendors, request )
        }
    }

    static _requestGetVendorsByProductCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, VendorAction.REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY, VendorEffect._requestGetVendorsByProductCategory, request )
        }
    }

    static _requestCreateNewVendor(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, VendorAction.REQUEST_CREATE_VENDOR, VendorEffect._requestCreateNewVendor ,  request )
        }
    }

 
}