import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class SubCategoryEffect {


    static async _requestGetProductSubCategories(body) {
        const endPoint = ApiEndpoint.productSubCategory.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestCreateNewProductSubCategory(body) {
        const endPoint = ApiEndpoint.productSubCategory.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestDeleteProductSubCategory(body) {
        const endPoint = ApiEndpoint.productSubCategory.deleteById;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetProductSubCategoriesByCategory(body) {
        const endPoint = ApiEndpoint.productSubCategory.getByCategory;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


    static async _requestGetServiceSubCategories(body) {
        const endPoint = ApiEndpoint.serviceSubCategory.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestCreateNewServiceSubCategory(body) {
        const endPoint = ApiEndpoint.serviceSubCategory.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestDeleteServiceSubCategory(body) {
        const endPoint = ApiEndpoint.serviceSubCategory.deleteById;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetServiceSubCategoriesByCategory(body) {
        const endPoint = ApiEndpoint.serviceSubCategory.getByCategory;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }



}
