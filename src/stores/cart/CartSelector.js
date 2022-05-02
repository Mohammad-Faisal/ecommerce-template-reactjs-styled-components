import { createSelector } from 'reselect';
import _ from "lodash";
import ProductForOrderRequest from "../order/request/ProductForOrderRequest";
import ServiceForOrderRequest from "../order/request/ServiceForOrderRequest";

const productsFromStore = state => state.cart.productsInCart;
const servicesFromStore = state => state.cart.servicesInCart;


export const selectTotalCostOfProduct = createSelector(
    productsFromStore ,
    productsInCart => {
        let cost = 0;
        if(productsInCart)productsInCart.forEach(element => cost +=element.price);
        return cost;
    }
);
export const selectTotalCostOfService = createSelector(
    servicesFromStore ,
    servicesInCart => {
        let cost = 0;
        if(servicesInCart)servicesInCart.forEach(element => cost +=element.price);
        return cost;
    }
);

export const selectProductsForOrder = createSelector(
    productsFromStore ,
    productsInCart => {
        const distinctItems = _.uniqBy(productsInCart, (item) => item.id);
        const distinctArray = Array.from(distinctItems);
        const productsForOrderArray = [];
        distinctArray.forEach( distinctProduct => {
            let thisItemCount = 0;
            productsInCart.forEach(element => {
                if(element.id === distinctProduct.id ) thisItemCount++;
            });
            productsForOrderArray.push( new ProductForOrderRequest(distinctProduct , thisItemCount));
        })
        return productsForOrderArray;
    }
);

export const selectServicesForOrder = createSelector(
    servicesFromStore ,
    servicesInCart => {
        const distinctItems = _.uniqBy(servicesInCart, (item) => item.id);
        const distinctArray = Array.from(distinctItems);
        const serviceForOrderArray = [];
        console.log("services in cart  " , servicesInCart);
        distinctArray.forEach( distinctServicePackage => {
            let thisItemCount = 0;
            servicesInCart.forEach(element => {
                if(element.id === distinctServicePackage.id ) thisItemCount++;
            });
            serviceForOrderArray.push( new ServiceForOrderRequest(distinctServicePackage , thisItemCount));
        })
        return serviceForOrderArray;
    }
);

export const selectTotalProductItemCount = createSelector(
    productsFromStore ,
    productsInCart => {
        let mySet = new Set();
        if(productsInCart)productsInCart.forEach(element => mySet.add(element.id));
        return mySet.size;
    }
);

export const selectTotalServiceCountInCart = createSelector(
    servicesFromStore ,
    servicesInCart => {
        let mySet = new Set();
        if(servicesInCart)servicesInCart.forEach(element => mySet.add(element.id));
        return mySet.size;
    }
);



