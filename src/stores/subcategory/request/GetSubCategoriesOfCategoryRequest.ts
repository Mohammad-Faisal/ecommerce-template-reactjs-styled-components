import BaseRequestBody from '../../../models/BaseRequestBody';

export default class GetSubCategoriesOfCategoryRequest extends  BaseRequestBody {

    categoryId = "";
    constructor(categoryId){
        super();
        this.categoryId = categoryId;
    }
}