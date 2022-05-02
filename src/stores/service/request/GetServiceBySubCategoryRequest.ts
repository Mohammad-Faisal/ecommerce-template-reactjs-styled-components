import BaseRequestBody from '../../../models/BaseRequestBody';

export default class GetServiceBySubCategoryRequest extends  BaseRequestBody {

    subCategoryId = "";

    constructor(subCategoryId){
        super();
        this.subCategoryId = subCategoryId;
    }

}