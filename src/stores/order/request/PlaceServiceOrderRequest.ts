import BaseRequestBody from '../../../models/BaseRequestBody';

export default class PlaceServiceOrderRequest extends  BaseRequestBody {

    userId = 1;
    packages  =[]; //
    deliveryCharge  = 0;
    deliveryInfoId  = "";
    contactInfoId  ="";


    constructor(data){
        super();
        this.update(data);
        //this.deliveryCharge = parseInt(data.deliveryCharge);
    }
}