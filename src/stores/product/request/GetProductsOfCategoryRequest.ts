import BaseRequestBody from '../../../models/BaseRequestBody';

export default class GetProductsOfCategoryRequest extends  BaseRequestBody {

    categoryId = 0;

    constructor(id){
        super();
        console.log(id)
        this.categoryId = id
    }
}