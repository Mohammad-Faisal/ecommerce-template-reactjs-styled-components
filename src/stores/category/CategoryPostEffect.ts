import MiscAction from "../misc/MiscAction";
import CategoryAction from "./CategoryAction";

const CategoryPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case CategoryAction.REQUEST_CREATE_PRODUCT_CATEGORY_FINISHED:
            case CategoryAction.REQUEST_CREATE_SERVICE_CATEGORY_FINISHED:
                next(MiscAction._showModalSuccess("Category Created Successfully"));
                break;
            case CategoryAction.REQUEST_DELETE_PRODUCT_CATEGORY_FINISHED:
            case CategoryAction.REQUEST_DELETE_SERVICE_CATEGORY_FINISHED:
                next(MiscAction._showModalSuccess("Category Deleted Successfully"));
                break;
            case CategoryAction.REQUEST_UPDATE_ACTIVE_STATUS_FINISHED:
                next(MiscAction._showModalSuccess("Status Updated Successfully"));
                break;
        }
    }

    next(action);
};

export default CategoryPostEffect;
