import BaseRequestBody from '../../../models/BaseRequestBody';

export default class UpdateVendorStatusRequest extends  BaseRequestBody {

    vendorId = 0;
    isActive = true;

    constructor(data){
        super();
        this.vendorId = data.id
        this.isActive = !data.isActive

        console.log(!data.isActive);
    }
}