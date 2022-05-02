
import { BaseModel } from 'sjs-base-model';

export default class BaseRequestBody extends BaseModel{

    constructor(data){
        super(data);
        this.update(data);
    }

}
