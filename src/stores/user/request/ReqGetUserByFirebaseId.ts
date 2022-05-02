import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ReqGetUserByFirebaseId extends  BaseRequestBody {

    firebaseId = "";


    constructor(firebaseId){
        super();
        this.firebaseId = firebaseId;
    }
}