import EffectUtility from '../../utils/EffectUtility';
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";


export default class ServiceEffect {


    static async _requestUpdateServicePackageStatus(body) {
        const endPoint = ApiEndpoint.service.updateServicePackageStatus;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestUpdateServiceStatus(body) {
        const endPoint = ApiEndpoint.service.updateServiceStatus;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestCreateNewService(body) {
        const endPoint = ApiEndpoint.service.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestDeleteService(body) {
        const endPoint = ApiEndpoint.service.deleteById;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetAllServices(body) {
        const endPoint = ApiEndpoint.service.getAll;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetServicesBySubCategory(body) {
        const endPoint = ApiEndpoint.service.getBySubCategory;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    static async _requestGetServicesByVendor(body) {
        const endPoint = ApiEndpoint.service.getByVendor;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }

    //--------package--------

    static async _requestCreateServicePackage(body) {
        const endPoint = ApiEndpoint.service.createNewPackage;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }
    static async _requestDeleteServicePackage(body) {
        const endPoint = ApiEndpoint.service.deletePackageById;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }
    static async _requestGetAllServicePackages(body) {
        const endPoint = ApiEndpoint.service.getAllPackage;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }
    static async _requestGetPackagesByService(body) {
        const endPoint = ApiEndpoint.service.getPackagesByService;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


}
