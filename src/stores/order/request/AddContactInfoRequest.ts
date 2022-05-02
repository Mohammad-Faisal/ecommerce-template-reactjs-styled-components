import BaseRequestBody from '../../../models/BaseRequestBody';

export default class AddContactInfoRequest extends  BaseRequestBody {

    userId = "";
    title = "";
    contact = "";

    constructor(data){
        super();
        this.update(data);
    }
}