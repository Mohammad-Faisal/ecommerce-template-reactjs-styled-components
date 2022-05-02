import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqUpdateCategoryStatus extends  BaseRequestBody {

    categoryId  ="";
    isActive  = true;
    constructor(data){
        super();
        this.categoryId = data.id;
        this.isActive = !data.isActive;
    }
}