import BaseRequestBody from '../../../models/BaseRequestBody';

export default class ProductForOrderRequest extends  BaseRequestBody {

    productId = 1;
    productName  ="";
    productImage  = "";
    quantity  = 0;
    productPrice  =0;

    constructor(data , quantity){
        super();
        this.update(data);
        this.productPrice = parseInt(data.price);
        this.productId = data.id;
        this.productName = data.name;
        //this.productImage = data.image;
        this.productImage = "https://rokkhi.s3-us-west-1.amazonaws.com/products/028s56xfYURsAJWCEWpc/image";
        this.quantity = quantity;
    }
}