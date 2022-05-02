import BaseRequestBody from '../../../models/BaseRequestBody';

export default class DeleteContactInfoRequest extends  BaseRequestBody {

    contactInfoId = "";

    constructor(contactInfoId){
        super();
        this.contactInfoId = contactInfoId;
    }
}