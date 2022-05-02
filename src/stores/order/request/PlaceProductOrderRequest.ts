import BaseRequestBody from '../../../models/BaseRequestBody';

export default class PlaceProductOrderRequest extends  BaseRequestBody {

    userId = 1;
    products  =[]; //
    deliveryCharge  = 60;
    deliveryInfoId  = "";
    contactInfoId  ="";


    constructor(data){
        super();
        this.update(data);
    }
}