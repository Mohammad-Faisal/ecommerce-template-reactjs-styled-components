import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqCreateCategory extends  BaseRequestBody {

    name = "";
    description  ="";
    logo  ="";

    constructor(data){
        super();
        this.update(data);
    }
    
}