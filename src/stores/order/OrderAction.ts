import ActionUtility from '../../utils/ActionUtility';
import OrderEffect from "./OrderEffect";

export default class OrderAction {


    static REQUEST_PLACE_PRODUCT_ORDER = 'REQUEST_PLACE_PRODUCT_ORDER';
    static REQUEST_PLACE_PRODUCT_ORDER_FINISHED = 'REQUEST_PLACE_PRODUCT_ORDER_FINISHED';

    static REQUEST_PLACE_SERVICE_ORDER = 'REQUEST_PLACE_SERVICE_ORDER';
    static REQUEST_PLACE_SERVICE_ORDER_FINISHED = 'REQUEST_PLACE_SERVICE_ORDER_FINISHED';

    static REQUEST_GET_ALL_PRODUCT_ORDERS = 'REQUEST_GET_ALL_PRODUCT_ORDERS';
    static REQUEST_GET_ALL_PRODUCT_ORDERS_FINISHED = 'REQUEST_GET_ALL_PRODUCT_ORDERS_FINISHED';

    static REQUEST_GET_ALL_SERVICE_ORDERS = 'REQUEST_GET_ALL_SERVICE_ORDERS';
    static REQUEST_GET_ALL_SERVICE_ORDERS_FINISHED = 'REQUEST_GET_ALL_SERVICE_ORDERS_FINISHED';

    static REQUEST_GET_PRODUCT_ORDERS_OF_USER = 'REQUEST_GET_PRODUCT_ORDERS_OF_USER';
    static REQUEST_GET_PRODUCT_ORDERS_OF_USER_FINISHED = 'REQUEST_GET_PRODUCT_ORDERS_OF_USER_FINISHED';

    static REQUEST_GET_SERVICE_ORDERS_OF_USER = 'REQUEST_GET_SERVICE_ORDERS_OF_USER';
    static REQUEST_GET_SERVICE_ORDERS_OF_USER_FINISHED = 'REQUEST_GET_SERVICE_ORDERS_OF_USER_FINISHED';

    static REQUEST_UPDATE_ORDER_STATUS = 'REQUEST_UPDATE_ORDER_STATUS';
    static REQUEST_UPDATE_ORDER_STATUS_FINISHED = 'REQUEST_UPDATE_ORDER_STATUS_FINISHED';


    static _requestUpdateOrderStatus(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_UPDATE_ORDER_STATUS, OrderEffect._requestUpdateOrderStatus, request )
        }
    }
    static _requestPlaceProductOrder(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_PLACE_PRODUCT_ORDER, OrderEffect._requestPlaceProductOrder, request )
        }
    }
    static _requestPlaceServiceOrder(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_PLACE_SERVICE_ORDER, OrderEffect._requestPlaceServiceOrder, request )
        }
    }

    static _requestGetAllProductOrders(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_GET_ALL_PRODUCT_ORDERS, OrderEffect._requestGetAllProductOrders ,  request )
        }
    }
    static _requestGetAllServiceOrders(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_GET_ALL_SERVICE_ORDERS, OrderEffect._requestGetAllServiceOrders ,  request )
        }
    }

    static _requestGetProductOrdersOfUser(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_GET_PRODUCT_ORDERS_OF_USER, OrderEffect._requestGetProductOrdersOfUser ,  request )
        }
    }

    static _requestGetServiceOrdersOfUser(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_GET_SERVICE_ORDERS_OF_USER, OrderEffect._requestGetServiceOrdersOfUser ,  request )
        }
    }

    static REQUEST_ADD_DELIVERY_INFO = 'REQUEST_ADD_DELIVERY_INFO';
    static REQUEST_ADD_DELIVERY_INFO_FINISHED = 'REQUEST_ADD_DELIVERY_INFO_FINISHED';

    static REQUEST_DELETE_DELIVERY_INFO = 'REQUEST_DELETE_DELIVERY_INFO';
    static REQUEST_DELETE_DELIVERY_INFO_FINISHED = 'REQUEST_DELETE_DELIVERY_INFO_FINISHED';

    static REQUEST_GET_DELIVERY_INFO = 'REQUEST_GET_DELIVERY_INFO';
    static REQUEST_GET_DELIVERY_INFO_FINISHED = 'REQUEST_GET_DELIVERY_INFO_FINISHED';

    static REQUEST_ADD_CONTACT_INFO = 'REQUEST_ADD_CONTACT_INFO';
    static REQUEST_ADD_CONTACT_INFO_FINISHED = 'REQUEST_ADD_CONTACT_INFO_FINISHED';

    static REQUEST_DELETE_CONTACT_INFO = 'REQUEST_DELETE_CONTACT_INFO';
    static REQUEST_DELETE_CONTACT_INFO_FINISHED = 'REQUEST_DELETE_CONTACT_INFO_FINISHED';


    static REQUEST_GET_CONTACT_INFO = 'REQUEST_GET_CONTACT_INFO';
    static REQUEST_GET_CONTACT_INFO_FINISHED = 'REQUEST_GET_CONTACT_INFO_FINISHED';


    static _requestAddDeliveryInfo(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_ADD_DELIVERY_INFO, OrderEffect._requestAddDeliveryInfo, request )
        }
    }


    static _requestGetDeliveryInfo(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_GET_DELIVERY_INFO, OrderEffect._requestGetDeliveryInfo, request )
        }
    }

    static _requestDeleteDeliveryInfo(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_DELETE_DELIVERY_INFO, OrderEffect._requestDeleteDeliveryInfo, request )
        }
    }

    static _requestAddContactInfo(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_ADD_CONTACT_INFO, OrderEffect._requestAddContactInfo, request )
        }
    }

    static _requestDeleteContactInfo(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_DELETE_CONTACT_INFO, OrderEffect._requestDeleteContactInfo, request )
        }
    }

    static _requestGetContactInfo(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, OrderAction.REQUEST_GET_CONTACT_INFO, OrderEffect._requestGetContactInfo, request )
        }
    }

    static SELECT_DELIVERY_ADDRESS = 'SELECT_DELIVERY_ADDRESS';
    static SELECT_CONTACT_INFO = 'SELECT_CONTACT_INFO';


    static _selectDeliveryInformation(deliveryInfoId) {
        return ActionUtility._createAction( OrderAction.SELECT_DELIVERY_ADDRESS,  deliveryInfoId )
    }

    static _selectContactInformation(contactInfoId) {
        return ActionUtility._createAction( OrderAction.SELECT_CONTACT_INFO,  contactInfoId )
    }



}