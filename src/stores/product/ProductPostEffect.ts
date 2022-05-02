import MiscAction from "../misc/MiscAction";
import ProductAction from "./ProductAction";

const ProductPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case ProductAction.REQUEST_CREATE_NEW_PRODUCT_FINISHED:
                next(MiscAction._showModalSuccess("New Product Added"));
                break;
            case ProductAction.REQUEST_ADD_PRODUCT_TO_VENDOR_FINISHED:
                next(MiscAction._showModalSuccess("Product Added to Vendor"));
                break;
            case ProductAction.REQUEST_REMOVE_PRODUCT_FROM_VENDOR_FINISHED:
                next(MiscAction._showModalSuccess("Product removed from vendor"));
                break;
        }
    }

    next(action);
};

export default ProductPostEffect;
