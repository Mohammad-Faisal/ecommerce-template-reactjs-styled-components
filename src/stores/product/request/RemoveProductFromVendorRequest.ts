import BaseRequestBody from '../../../models/BaseRequestBody';

export default class RemoveProductFromVendorRequest extends  BaseRequestBody {

    vendorProductId = "";

    constructor(vendorProductId){
        super();
        this.vendorProductId = vendorProductId;
    }

}