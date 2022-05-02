import BaseRequestBody from '../../../models/BaseRequestBody';

export default class DeleteSubCategoryRequest extends  BaseRequestBody {

    subCategoryId  ="";
    constructor(subCategoryId ){
        super();
        this.subCategoryId = subCategoryId;
    }
}