import BaseReducer from '../../utils/BaseReducer';
import OrderAction from "./OrderAction";


export default class OrderReducer extends BaseReducer {

    initialState = {
        allProductOrdersList: null ,
        allServiceOrdersList: null ,
        productOrdersOfUserList: null ,
        serviceOrdersOfUserList: null ,
        contactInfoOfUser: null ,
        deliveryInfoOfUser: null ,
        selectedDeliveryInfo: null ,
        selectedContactInfo: null ,
    };

    [OrderAction.REQUEST_GET_PRODUCT_ORDERS_OF_USER_FINISHED](state, action) {
        return {
            ...state,
            productOrdersOfUserList: action.payload,
        };
    }

    [OrderAction.REQUEST_GET_SERVICE_ORDERS_OF_USER_FINISHED](state, action) {
        return {
            ...state,
            serviceOrdersOfUserList: action.payload,
        };
    }

    [OrderAction.REQUEST_GET_ALL_PRODUCT_ORDERS_FINISHED](state, action) {
        return {
            ...state,
            allProductOrdersList: action.payload,
        };
    }

        [OrderAction.REQUEST_GET_ALL_SERVICE_ORDERS_FINISHED](state, action) {
        return {
            ...state,
            allServiceOrdersList: action.payload,
        };
    }


    [OrderAction.REQUEST_GET_CONTACT_INFO_FINISHED](state, action) {
        return {
            ...state,
            contactInfoOfUser: action.payload,
        };
    }

    [OrderAction.REQUEST_GET_DELIVERY_INFO_FINISHED](state, action) {
        return {
            ...state,
            deliveryInfoOfUser: action.payload,
        };
    }
    [OrderAction.SELECT_DELIVERY_ADDRESS](state, action) {
        return {
            ...state,
            selectedDeliveryInfo: action.payload,
        };
    }
    [OrderAction.SELECT_CONTACT_INFO](state, action) {
        return {
            ...state,
            selectedContactInfo: action.payload,
        };
    }


}