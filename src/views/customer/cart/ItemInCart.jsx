
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartAction from '../../../stores/cart/CartAction';
import useProductStatusInCart from '../../hooks/useProductStatusInCart';
import ButtonChangeQuantityInCart from './ButtonChangeQuantityInCart';
import {ItemType} from "../../../assets/constants/GeneralConstants";
import {Icon} from "semantic-ui-react";

const ItemInCart = (props) => {

    const dispatch = useDispatch();

    const { itemStatus, itemCount } = useProductStatusInCart(props.item.id , props.itemType);

    const removeItemFromCart = useCallback(() => {
        if(props.itemType === ItemType.PRODUCT)dispatch(CartAction._removeProductFormCart(props.item));
        else dispatch(CartAction._removeServiceFormCart(props.item));
    })

    return (
        <div className="container-product-in-cart">
            <ButtonChangeQuantityInCart  item={props.item} itemType={props.itemType} />

            {/*<div className="container-product-in-cart-image">*/}
            {/*    <img className="product-in-cart-image" src={props.item.image} />*/}
            {/*</div>*/}

            <div className="product-in-cart-details">
                <div className="container-product-name" style={{textAlign:"start"}}>{props.item.name}</div>
                <div className="container-product-price">৳ {props.item.price} * {itemCount}</div>
            </div>

            <div className="container-product-price">৳ { parseInt(props.item.price) * parseInt(itemCount)}</div>

            <div className="container-icon-delete" style={{color:"#FC5C63"}} onClick={() =>removeItemFromCart()}><Icon color={"red"} name={"trash alternate outline"}/></div>
        </div>
    )
}

export default ItemInCart;