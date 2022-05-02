import BaseRequestBody from '../../../models/BaseRequestBody';

export default class CreateServicePackageRequest extends  BaseRequestBody {

    name = "";
    description  ="";
    price  ="";
    serviceId  = "";

    constructor(data){
        super();
        this.update(data);
    }
}