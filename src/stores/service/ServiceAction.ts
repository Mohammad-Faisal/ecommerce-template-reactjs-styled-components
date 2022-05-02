import ActionUtility from '../../utils/ActionUtility';
import ServiceEffect from "./ServiceEffect";

export default class ServiceAction {


    static REQUEST_UPDATE_SERVICE_STATUS = 'REQUEST_UPDATE_SERVICE_STATUS';
    static REQUEST_UPDATE_SERVICE_STATUS_FINISHED = 'REQUEST_UPDATE_SERVICE_STATUS_FINISHED';

    static REQUEST_UPDATE_SERVICE_PACKAGE_STATUS = 'REQUEST_UPDATE_SERVICE_PACKAGE_STATUS';
    static REQUEST_UPDATE_SERVICE_PACKAGE_STATUS_FINISHED = 'REQUEST_UPDATE_SERVICE_PACKAGE_STATUS_FINISHED';

    static REQUEST_CREATE_NEW_SERVICE = 'REQUEST_CREATE_NEW_SERVICE' ;
    static REQUEST_CREATE_NEW_SERVICE_FINISHED = 'REQUEST_CREATE_NEW_SERVICE_FINISHED';

    static REQUEST_DELETE_SERVICE = 'REQUEST_DELETE_SERVICE' ;
    static REQUEST_DELETE_SERVICE_FINISHED = 'REQUEST_DELETE_SERVICE_FINISHED';

    static REQUEST_GET_ALL_SERVICES = 'REQUEST_GET_ALL_SERVICES';
    static REQUEST_GET_ALL_SERVICES_FINISHED = 'REQUEST_GET_ALL_SERVICES_FINISHED';

    static REQUEST_GET_SERVICES_BY_SUB_CATEGORY = 'REQUEST_GET_SERVICES_BY_SUB_CATEGORY';
    static REQUEST_GET_SERVICES_BY_SUB_CATEGORY_FINISHED = 'REQUEST_GET_SERVICES_BY_SUB_CATEGORY_FINISHED';

    static REQUEST_GET_SERVICES_BY_VENDOR = 'REQUEST_GET_SERVICES_BY_VENDOR';
    static REQUEST_GET_SERVICES_BY_VENDOR_FINISHED = 'REQUEST_GET_SERVICES_BY_VENDOR_FINISHED';




    static _requestUpdateServicePackageStatus(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_UPDATE_SERVICE_PACKAGE_STATUS, ServiceEffect._requestUpdateServicePackageStatus, request )
        }
    }

    static _requestUpdateServiceStatus(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_UPDATE_SERVICE_STATUS, ServiceEffect._requestUpdateServiceStatus, request )
        }
    }

    static _requestCreateNewService(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_CREATE_NEW_SERVICE, ServiceEffect._requestCreateNewService, request )
        }
    }

    static _requestDeleteService(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_DELETE_SERVICE, ServiceEffect._requestDeleteService, request )
        }
    }

    static _requestGetAllServices(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_GET_ALL_SERVICES, ServiceEffect._requestGetAllServices, request )
        }
    }

    static _requestGetServicesBySubCategory(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_GET_SERVICES_BY_SUB_CATEGORY, ServiceEffect._requestGetServicesBySubCategory, request )
        }
    }

    static _requestGetServicesByVendor(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_GET_SERVICES_BY_VENDOR, ServiceEffect._requestGetServicesByVendor, request )
        }
    }



    static REQUEST_CREATE_SERVICE_PACKAGE = 'REQUEST_CREATE_SERVICE_PACKAGE' ;
    static REQUEST_CREATE_SERVICE_PACKAGE_FINISHED = 'REQUEST_CREATE_SERVICE_PACKAGE_FINISHED';

    static REQUEST_DELETE_SERVICE_PACKAGE = 'REQUEST_DELETE_SERVICE_PACKAGE' ;
    static REQUEST_DELETE_SERVICE_PACKAGE_FINISHED = 'REQUEST_DELETE_SERVICE_PACKAGE_FINISHED';

    static REQUEST_GET_ALL_SERVICE_PACKAGES = 'REQUEST_GET_ALL_SERVICE_PACKAGES';
    static REQUEST_GET_ALL_SERVICE_PACKAGES_FINISHED = 'REQUEST_GET_ALL_SERVICE_PACKAGES_FINISHED';

    static REQUEST_GET_PACKAGES_BY_SERVICE = 'REQUEST_GET_PACKAGES_BY_SERVICE';
    static REQUEST_GET_PACKAGES_BY_SERVICE_FINISHED = 'REQUEST_GET_PACKAGES_BY_SERVICE_FINISHED';


    static _requestCreateServicePackage(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_CREATE_SERVICE_PACKAGE, ServiceEffect._requestCreateServicePackage, request )
        }
    }

    static _requestDeleteServicePackage(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_DELETE_SERVICE_PACKAGE, ServiceEffect._requestDeleteServicePackage, request )
        }
    }

    static _requestGetAllServicePackages(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_GET_ALL_SERVICE_PACKAGES, ServiceEffect._requestGetAllServicePackages, request )
        }
    }

    static _requestGetPackagesByService(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ServiceAction.REQUEST_GET_PACKAGES_BY_SERVICE, ServiceEffect._requestGetPackagesByService, request )
        }
    }

}