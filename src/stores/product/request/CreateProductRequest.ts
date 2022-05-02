import BaseRequestBody from '../../../models/BaseRequestBody';

export default class CreateProductRequest extends  BaseRequestBody {

    name = "";
    description  ="";
    price  = 0;
    image  = "";
    categoryIdList  =[];
    subCategoryIdList  =[];

    constructor(data){
        super();
        this.update(data);
        this.price = parseInt(data.price);
    }
}