import BaseRequestBody from '../../../models/BaseRequestBody';

export default class CreateProductSubCategoryRequest extends  BaseRequestBody {

    name = "";
    description  ="";
    logo  ="";
    categoryIdList = []

    constructor(data){
        super();
        this.update(data);
    }
}