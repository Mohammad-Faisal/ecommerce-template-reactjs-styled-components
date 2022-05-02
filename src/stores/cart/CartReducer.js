import BaseReducer from '../../utils/BaseReducer';
import CartAction from './CartAction';
import _ from 'lodash';

export default class CartReducer extends BaseReducer {

    initialState = {
        productsInCart: [],
        servicesInCart: [],
    };

    [CartAction.ADD_PRODUCT_TO_CART](state, action) {
        const product  =  {...action.payload};
        const productsInCart = state.productsInCart ? state.productsInCart : [];
        let currentCartItems = productsInCart.concat([product]);
        return { ...state, productsInCart: currentCartItems };
    }

    [CartAction.REMOVE_PRODUCT_FROM_CART](state, action) {

        const product  =  {...action.payload};
        const productsInCart = state.productsInCart;
        let currentCartItems =[];
        let flag = true;
        for(let i=0; i<productsInCart.length ;i++){
            const item = productsInCart[i];
            if(item.id !== product.id)currentCartItems.push(item);
            else if(item.id === product.id) {
                if(flag) flag = false;
                else currentCartItems.push(item);
            }
        }
        return { ...state, productsInCart: currentCartItems };
    }


    [CartAction.CLEAR_PRODUCT_CART](state, action) {
        return {
            ...state,
            productsInCart: [],
        };
    }


    [CartAction.ADD_SERVICE_TO_CART](state, action) {
        const service  =  {...action.payload};
        const servicesInCart = state.servicesInCart ? state.servicesInCart : [];
        let currentCartItems = servicesInCart.concat([service]);
        return {
            ...state,
            servicesInCart: currentCartItems,
        };
    }

    [CartAction.REMOVE_SERVICE_FROM_CART](state, action) {

        const service  =  {...action.payload};
        const servicesInCart = state.servicesInCart;
        let currentCartItems =[];
        let flag = true;
        for(let i=0;i<servicesInCart.length ;i++){
            const item = servicesInCart[i];
            if(item.id !== service.id)currentCartItems.push(item);
            else if(item.id === service.id) {
                if(flag) flag = false;
                else currentCartItems.push(item);
            }
        }
        return {
            ...state,
            servicesInCart: currentCartItems,
        };
    }


    [CartAction.CLEAR_SERVICE_CART](state, action) {
        return {
            ...state,
            servicesInCart: [],
        };
    }


}