import BaseRequestBody from '../../../models/BaseRequestBody';

export default class CreateServiceRequest extends  BaseRequestBody {

    name = "";
    description  ="";
    categoryId = "";
    subcategoryId = "";

    constructor(data){
        super();
        this.update(data);
    }
}