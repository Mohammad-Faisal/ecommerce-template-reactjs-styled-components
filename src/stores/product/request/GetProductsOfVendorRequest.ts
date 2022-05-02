import BaseRequestBody from '../../../models/BaseRequestBody';

export default class GetProductsOfVendorRequest extends  BaseRequestBody {

    vendorId = 0;
    categoryId =5;
    pageId = 0;
    pageSize = 12;

    constructor(vendorId , categoryId , pageId){
        super();
        this.vendorId = parseInt(vendorId);
        this.categoryId = parseInt(categoryId);
        if(pageId)this.pageId = parseInt(pageId);
    }
}