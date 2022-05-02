
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import useProductStatusInCart from '../../hooks/useProductStatusInCart';
import CartAction from '../../../stores/cart/CartAction';
import {  PlusIconMedium, MinusIconMedium } from '../../components/IconsProvider';
import {ItemStatusInCart, ItemType} from "../../../assets/constants/GeneralConstants";
import {Icon} from "semantic-ui-react";


const ButtonAddToCart = (props) => {

    const dispatch = useDispatch();
    const { itemStatus, itemCount } = useProductStatusInCart(props.item.id , props.itemType);

    const addItemToCart = useCallback(() => {
        if(props.itemType === ItemType.PRODUCT)dispatch(CartAction._addProductToCart(props.item));
        else dispatch(CartAction._addServiceToCart(props.item));
    })

    const removeItemFromCart = useCallback(() => {
        if(props.itemType === ItemType.PRODUCT)dispatch(CartAction._removeProductFormCart(props.item));
        else dispatch(CartAction._removeServiceFormCart(props.item));
    })

    return (

        <div>
            {itemStatus === ItemStatusInCart.IN_CART ?
                <div className="container-add-to-cart-quantity-horizontal" >
                    <div onClick={removeItemFromCart}> <MinusIconMedium /> </div>
                    <div> {itemCount}</div>
                    <div onClick={addItemToCart}> <PlusIconMedium /> </div>
                </div> :
                <div className="button-add-to-cart" onClick={addItemToCart}>
                    <Icon name={"shopping cart"}/>
                    {/*<div> Cart </div>*/}
                </div>
            }
        </div>

    )
}

export default ButtonAddToCart;