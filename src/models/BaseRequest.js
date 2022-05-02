import BaseRequestBody from './BaseRequestBody';
export default class BaseRequest{


    data = new BaseRequestBody() ;
    headers = {
        'authtoken' : localStorage.getItem("AUTH_TOKEN") ,
        'accept-language': "en",
        'Accept': 'application/json',
        'Content-Type': 'application/json' ,
    };


    constructor(data){
        if(data !== null && data !== undefined ){
            this.data = data;
        }
    }
}
