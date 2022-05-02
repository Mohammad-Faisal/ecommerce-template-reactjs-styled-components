import BaseRequestBody from '../../../models/BaseRequestBody';

export default class UpdateOrderStatusRequest extends  BaseRequestBody {

    userId = "";
    orderId = "";
    note = "";
    currentStatus = "";

    constructor(data){
        super();
        this.update(data);
    }
}