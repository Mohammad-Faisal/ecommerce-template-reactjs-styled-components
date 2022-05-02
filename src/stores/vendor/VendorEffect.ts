import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class VendorEffect {


    static async _requestUpdateVendorStatus(body) {
        const endPoint = ApiEndpoint.vendor.updateActiveStatus;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetVendors(body) {
        const endPoint = ApiEndpoint.vendor.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetVendorsByProductCategory(body) {
        const endPoint = ApiEndpoint.vendor.getByProductCategory;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestCreateNewVendor(body) {
        const endPoint = ApiEndpoint.vendor.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


}
