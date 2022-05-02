import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartAction from '../../../stores/cart/CartAction';
import useProductStatusInCart from '../../hooks/useProductStatusInCart';
import { DeleteIconMedium } from '../../components/IconsProvider';

const ProductInOrder = (props) => {

    const dispatch = useDispatch();

    const { productStatus, itemCount } = useProductStatusInCart(props.item.id , props.itemType);

    const removeProductFromCart = useCallback(() => {
        dispatch(CartAction._removeProductFormCart(props.productItem));
    })

    return (
        <div className="container-product-in-order">

            <div className="product-in-cart-details">
                <div className="container-product-nam" style={{ textAlign: "start" }}>{props.item.name} * {itemCount}</div>
                 {/*<div className="container-product-price">৳ {props.productItem.price} * {productCount}</div>*/}
            </div>
             {/*<ButtonChangeQuantityInOrder productItem={props.productItem} />*/}
            <div style={{fontSize:"14px" }} >৳ {parseInt(props.item.price) * parseInt(itemCount)}</div>
            <div className="container-icon-delete" style={{ color: "#FC5C63" }} onClick={removeProductFromCart}><DeleteIconMedium /></div>

        </div>
    )
}

export default ProductInOrder;