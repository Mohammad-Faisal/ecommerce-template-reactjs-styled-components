import MiscAction from "../misc/MiscAction";
import SubCategoryAction from "./SubCategoryAction";

const SubCategoryPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case SubCategoryAction.REQUEST_CREATE_SERVICE_SUB_CATEGORY_FINISHED:
            case SubCategoryAction.REQUEST_CREATE_PRODUCT_SUB_CATEGORY_FINISHED:
                next(MiscAction._showModalSuccess("SubCategory Created Successfully"));
                break;
            case SubCategoryAction.REQUEST_DELETE_PRODUCT_SUB_CATEGORY_FINISHED:
            case SubCategoryAction.REQUEST_DELETE_SERVICE_SUB_CATEGORY_FINISHED:
                next(MiscAction._showModalSuccess("SubCategory Deleted Successfully"));
                break;
        }
    }

    next(action);
};

export default SubCategoryPostEffect;
