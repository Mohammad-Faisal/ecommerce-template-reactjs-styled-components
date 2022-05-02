import MiscAction from "../misc/MiscAction";
import VendorAction from "./VendorAction";

const VendorPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case VendorAction.REQUEST_CREATE_VENDOR_FINISHED:
                next(MiscAction._showModalSuccess("Vendor Created Successfully"));
                break;
            case VendorAction.REQUEST_UPDATE_VENDOR_STATUS_FINISHED:
                next(MiscAction._showModalSuccess("Vendor Status Updated Successfully"));
                break;
        }
    }

    next(action);
};

export default VendorPostEffect;
