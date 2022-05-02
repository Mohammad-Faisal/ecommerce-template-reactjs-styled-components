import EffectUtility from '../../utils/EffectUtility';
import BaseResponse from "../../models/BaseResponse";
import BaseRequest from "../../models/BaseRequest";
import {ApiEndpoint} from "../../assets/constants/ApiEndpoint";


export default class UserEffect {


    static async _requestGetUserWithFirebaseId(body) {
        const endPoint = ApiEndpoint.user.getWithFirebaseId;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


    static async _requestCreateNewUser(body) {
        const endPoint = ApiEndpoint.user.createNew;
        return EffectUtility._postToModel(BaseResponse, endPoint, new BaseRequest(body));
    }


}
