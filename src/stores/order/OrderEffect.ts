import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class OrderEffect {


    static async _requestUpdateOrderStatus(body) {
        const endPoint = ApiEndpoint.order.updateStatusOfOrder;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestPlaceProductOrder(body) {
        const endPoint = ApiEndpoint.order.placeProductOrder;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestPlaceServiceOrder(body) {
        const endPoint = ApiEndpoint.order.placeServiceOrder;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetAllProductOrders(body) {
        const endPoint = ApiEndpoint.order.getAllProductOrders;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }
    static async _requestGetAllServiceOrders(body) {
        const endPoint = ApiEndpoint.order.getAllServiceOrders;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetProductOrdersOfUser(body) {
        const endPoint = ApiEndpoint.order.getProductOrdersOfUser;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetServiceOrdersOfUser(body) {
        const endPoint = ApiEndpoint.order.getServiceOrdersOfUser;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestAddDeliveryInfo(body) {
        const endPoint = ApiEndpoint.user.addDeliveryInformation;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetDeliveryInfo(body) {
        const endPoint = ApiEndpoint.user.getDeliveryInformation;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }
    static async _requestDeleteDeliveryInfo(body) {
        const endPoint = ApiEndpoint.user.deleteDeliveryInfo;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestAddContactInfo(body) {
        const endPoint = ApiEndpoint.user.addContactInformation;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestDeleteContactInfo(body) {
        const endPoint = ApiEndpoint.user.deleteContactInfo;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetContactInfo(body) {
        const endPoint = ApiEndpoint.user.getContactInformation;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


}
