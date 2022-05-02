import MiscAction from "../misc/MiscAction";
import ServiceAction from "./ServiceAction";

const ServicePostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case ServiceAction.REQUEST_CREATE_NEW_SERVICE_FINISHED:
                next(MiscAction._showModalSuccess("New ServiceEntity Added"));
                break;
            case ServiceAction.REQUEST_DELETE_SERVICE_FINISHED:
                next(MiscAction._showModalSuccess("ServiceEntity Deleted Successfully"));
                break;
            case ServiceAction.REQUEST_DELETE_SERVICE_PACKAGE_FINISHED:
                next(MiscAction._showModalSuccess("Package Deleted Successfully"));
                break;
            case ServiceAction.REQUEST_UPDATE_SERVICE_STATUS_FINISHED:
                next(MiscAction._showModalSuccess("Service Status Changed Successfully"));
                break;
            case ServiceAction.REQUEST_UPDATE_SERVICE_PACKAGE_STATUS_FINISHED:
                next(MiscAction._showModalSuccess("Package Status Updated Successfully"));
                break;
        }
    }

    next(action);
};

export default ServicePostEffect;
