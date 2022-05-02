import EffectUtility from '../../utils/EffectUtility';
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";


export default class ProductEffect {



    static async _requestCreateNewProduct(body) {
        const endPoint = ApiEndpoint.product.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


    static async _requestGetProducts(body) {
        const endPoint = ApiEndpoint.product.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetProductsByCategory(body) {
        const endPoint = ApiEndpoint.product.getByCategory;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestAddProductToVendor(body) {
        const endPoint = ApiEndpoint.product.addToVendor;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestRemoveProductFromVendor(body) {
        const endPoint = ApiEndpoint.product.removeFromVendor;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetProductsByVendor(body) {
        const endPoint = ApiEndpoint.product.getByVendor;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


}
