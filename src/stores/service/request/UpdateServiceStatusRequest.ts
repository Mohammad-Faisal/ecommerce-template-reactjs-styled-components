import BaseRequestBody from '../../../models/BaseRequestBody';

export default class UpdateServiceStatusRequest extends  BaseRequestBody {

    serviceId = "";
    isActive = true;

    constructor(data){
        super();
        this.serviceId = data.id;
        this.isActive = !data.isActive;
    }
}