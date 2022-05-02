import BaseRequestBody from '../../../models/BaseRequestBody';

export default class DeleteServiceRequest extends  BaseRequestBody {

    serviceId = "";

    constructor(serviceId){
        super();
        this.update();
        this.serviceId = serviceId;
    }
}