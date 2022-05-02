import ActionUtility from '../../utils/ActionUtility';

export default class CartAction {



    static ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
    static REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
    static CLEAR_PRODUCT_CART = 'CLEAR_PRODUCT_CART';

    static _addProductToCart(product) {
        return ActionUtility._createAction(CartAction.ADD_PRODUCT_TO_CART, product)
    }

    static _removeProductFormCart(product) {
        return ActionUtility._createAction(CartAction.REMOVE_PRODUCT_FROM_CART, product)
    }

    static _clearProductCart() {
        return ActionUtility._createAction(CartAction.CLEAR_PRODUCT_CART)
    }


    static ADD_SERVICE_TO_CART = 'ADD_SERVICE_TO_CART';
    static REMOVE_SERVICE_FROM_CART = 'REMOVE_SERVICE_FROM_CART';
    static CLEAR_SERVICE_CART = 'CLEAR_SERVICE_CART';

    static _addServiceToCart(serviceItem) {
        return ActionUtility._createAction(CartAction.ADD_SERVICE_TO_CART, serviceItem)
    }

    static _removeServiceFormCart(service) {
        return ActionUtility._createAction(CartAction.REMOVE_SERVICE_FROM_CART, service)
    }

    static _clearServiceCart() {
        return ActionUtility._createAction(CartAction.CLEAR_SERVICE_CART)
    }

 
}