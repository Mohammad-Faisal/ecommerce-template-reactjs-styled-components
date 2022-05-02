import { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import {ItemStatusInCart, ItemType} from "../../assets/constants/GeneralConstants";


export default function useProductStatusInCart(itemId , itemType) {

    const productsInCart = useSelector(state => state.cart.productsInCart);
    const servicesInCart = useSelector(state => state.cart.servicesInCart);

    const [itemStatus, setItemStatus] = useState(ItemStatusInCart.NOT_IN_CART);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {

        let itemsList = itemType === ItemType.PRODUCT ? productsInCart : servicesInCart;

        let itemCount = 0;
        if(itemsList){
            itemsList.forEach(element => {
                if(element.id === itemId ) itemCount++;
            });
        }

        if(itemCount> 0) {
            setItemCount(itemCount)
            setItemStatus(ItemStatusInCart.IN_CART);
        }
        else {
            setItemCount(itemCount)
            setItemStatus(ItemStatusInCart.NOT_IN_CART);
        }        
    } , [productsInCart , servicesInCart]);

    return {itemCount , itemStatus};
}