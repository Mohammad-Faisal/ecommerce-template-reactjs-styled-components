import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ServiceForOrderRequest extends  BaseRequestBody {

    servicePackageId = 1;
    serviceName  ="";
    packageName  = "";
    serviceImage  = "";
    quantity  =0;
    packagePrice  =0;

    constructor(data , quantity){
        super();
        this.update(data);
        this.packagePrice = parseInt(data.price);
        this.serviceName = data.name;
        this.packageName = data.name;
        this.servicePackageId = data.id;
        this.quantity = quantity;
    }
}