import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqDeleteCategory extends  BaseRequestBody {

    categoryId  ="";
    constructor(categoryId , categoryFor){
        super();
        this.categoryId = categoryId;
    }
}