
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useProductStatusInCart from '../../hooks/useProductStatusInCart';
import CartAction from '../../../stores/cart/CartAction';
import {  PlusIconMedium, MinusIconMedium } from '../../components/IconsProvider';
import {ItemType} from "../../../assets/constants/GeneralConstants";


const ButtonChangeQuantityInCart = (props) => {

    const dispatch = useDispatch();

    const { itemCount } = useProductStatusInCart(props.item.id , props.itemType);

    const addItemToCart = useCallback(() => {
        if(props.itemType === ItemType.PRODUCT)dispatch(CartAction._addProductToCart(props.item));
        else dispatch(CartAction._addServiceToCart(props.item));
    })

    const removeItemFromCart = useCallback(() => {
        if(props.itemType === ItemType.PRODUCT)dispatch(CartAction._removeProductFormCart(props.item));
        else dispatch(CartAction._removeServiceFormCart(props.item));
    })

    return (
        <div className="container-add-to-cart-quantity-vertical">
            <div onClick={addItemToCart}> <PlusIconMedium /> </div>
            <div> {itemCount}</div>
            <div onClick={removeItemFromCart}> <MinusIconMedium /> </div>
        </div>
    )
}

export default ButtonChangeQuantityInCart;