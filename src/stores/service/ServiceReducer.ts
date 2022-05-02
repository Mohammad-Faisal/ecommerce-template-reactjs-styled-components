import BaseReducer from '../../utils/BaseReducer';
import ServiceAction from "./ServiceAction";


export default class ServiceReducer extends BaseReducer {

    initialState = {
        allServices:null ,
        servicesBySubCategory:null ,
        servicesByCategory:null ,
        servicesByVendor:null ,

        allServicePackages:null ,
        packagesByService:null ,
    };

    [ServiceAction.REQUEST_GET_ALL_SERVICES_FINISHED](state, action) {
        return {
            ...state,
            allServices: action.payload,
        };
    }

    [ServiceAction.REQUEST_GET_SERVICES_BY_SUB_CATEGORY_FINISHED](state, action) {
        return {
            ...state,
            servicesBySubCategory: action.payload,
        };
    }
    [ServiceAction.REQUEST_GET_SERVICES_BY_VENDOR_FINISHED](state, action) {
        return {
            ...state,
            servicesByVendor: action.payload,
        };
    }

    [ServiceAction.REQUEST_GET_ALL_SERVICE_PACKAGES_FINISHED](state, action) {
        return {
            ...state,
            allServicePackages: action.payload,
        };
    }

    [ServiceAction.REQUEST_GET_PACKAGES_BY_SERVICE_FINISHED](state, action) {
        return {
            ...state,
            packagesByService: action.payload,
        };
    }


}