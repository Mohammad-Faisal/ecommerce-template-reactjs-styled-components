import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqCreateNewUser extends  BaseRequestBody {

    firebaseId = "";
    name = "";
    phone = "";
    address = "";

    constructor(data){
        super();
        this.update(data);
    }
}