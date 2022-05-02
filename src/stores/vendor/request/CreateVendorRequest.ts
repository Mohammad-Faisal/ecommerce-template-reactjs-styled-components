import BaseRequestBody from '../../../models/BaseRequestBody';

export default class CreateVendorRequest extends  BaseRequestBody {

    name = "";
    address  ="";
    contact  ="";
    image  ="";

    constructor(data){
        super();
        this.update(data);
    }
}