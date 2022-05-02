import BaseRequestBody from '../../../models/BaseRequestBody';

export default class UpdatePackageStatusRequest extends  BaseRequestBody {

    packageId = "";
    isActive = true;

    constructor(data){
        super();
        this.packageId = data.id;
        this.isActive = !data.isActive;
    }
}