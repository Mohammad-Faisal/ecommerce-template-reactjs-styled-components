import BaseRequestBody from '../../../models/BaseRequestBody';

export default class AddDeliveryInfoRequest extends  BaseRequestBody {

    userId = "";
    title = "";
    address = "";


    constructor(data){
        super();
        this.update(data);
    }
}