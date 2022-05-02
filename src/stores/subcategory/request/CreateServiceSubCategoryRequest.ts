import BaseRequestBody from '../../../models/BaseRequestBody';

export default class CreateServiceSubCategoryRequest extends  BaseRequestBody {

    name = "";
    description  ="";
    logo  ="";
    categoryId = "";

    constructor(data){
        super();
        this.update(data);
    }

}