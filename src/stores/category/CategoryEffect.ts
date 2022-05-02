import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class CategoryEffect {



    static async _requestUpdateProductCategoryStatus(body) {
        const endPoint = ApiEndpoint.productCategory.updateActiveStatus;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetProductCategories(body) {
        const endPoint = ApiEndpoint.productCategory.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestCreateNewProductCategory(body) {
        const endPoint = ApiEndpoint.productCategory.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestDeleteProductCategory(body) {
        const endPoint = ApiEndpoint.productCategory.deleteById;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }



    //service

    static async _requestUpdateServiceCategoryStatus(body) {
        const endPoint = ApiEndpoint.serviceCategory.updateActiveStatus;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetServiceCategories(body) {
        const endPoint = ApiEndpoint.serviceCategory.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestCreateNewServiceCategory(body) {
        const endPoint = ApiEndpoint.serviceCategory.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestDeleteServiceCategory(body) {
        const endPoint = ApiEndpoint.serviceCategory.deleteById;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }



}
