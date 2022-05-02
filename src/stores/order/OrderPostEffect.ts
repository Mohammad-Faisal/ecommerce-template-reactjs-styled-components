import MiscAction from "../misc/MiscAction";
import OrderAction from "./OrderAction";

const OrderPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case OrderAction.REQUEST_PLACE_PRODUCT_ORDER_FINISHED:
            case OrderAction.REQUEST_PLACE_SERVICE_ORDER_FINISHED:
                next(MiscAction._showOrderConfirmationModal(action.payload.data[0].id));
                break;
            case OrderAction.REQUEST_ADD_CONTACT_INFO_FINISHED:
                next(MiscAction._showModalSuccess("Contact Info added Successfully!"));
                break;
            case OrderAction.REQUEST_ADD_DELIVERY_INFO_FINISHED:
                next(MiscAction._showModalSuccess("Delivery Info added Successfully!"));
                break;
            case OrderAction.REQUEST_DELETE_DELIVERY_INFO_FINISHED:
                next(MiscAction._showModalSuccess("Delivery Info deleted Successfully!"));
                break;
            case OrderAction.REQUEST_DELETE_CONTACT_INFO_FINISHED:
                next(MiscAction._showModalSuccess("Contact Info deleted Successfully!"));
                break;
            case OrderAction.REQUEST_UPDATE_ORDER_STATUS_FINISHED:
                next(MiscAction._showModalSuccess("Order Status Updated!"));
                break;
        }
    }

    next(action);
};

export default OrderPostEffect;
