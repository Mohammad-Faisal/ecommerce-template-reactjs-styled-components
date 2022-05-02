import BaseRequestBody from '../../../models/BaseRequestBody';

export default class DeleteDeliveryInfoRequest extends  BaseRequestBody {

    deliveryInfoId = "";

    constructor(deliveryInfoId){
        super();
        this.deliveryInfoId = deliveryInfoId;
    }
}