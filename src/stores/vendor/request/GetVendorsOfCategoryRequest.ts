import BaseRequestBody from '../../../models/BaseRequestBody';

export default class GetVendorsOfCategoryRequest extends  BaseRequestBody {

    productCategoryId = 0;

    constructor(id){
        super();
        this.productCategoryId = id
    }
}