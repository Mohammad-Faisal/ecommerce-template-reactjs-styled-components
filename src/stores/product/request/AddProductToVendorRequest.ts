import BaseRequestBody from '../../../models/BaseRequestBody';

export default class AddProductToVendorRequest extends  BaseRequestBody {

    vendorId = "";
    productId = ""

    constructor(data){
        super();
        this.update(data);
    }
}