import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartAction from '../../../stores/cart/CartAction';
import useProductStatusInCart from '../../hooks/useProductStatusInCart';
import { DeleteIconMedium } from '../../components/IconsProvider';

const ProductInPreviousOrder = (props) => {


    return (
        <div className="container-product-in-order">

            <div className="product-in-cart-details">
                <div className="container-product-nam" style={{ textAlign: "start" }}>
                    {props.orderedProduct.productName} * {props.orderedProduct.productQuantity}
                </div>
                 <div className="container-product-price">
                     ৳ {props.orderedProduct.unitPrice} * {props.orderedProduct.productQuantity}
                 </div>
            </div>

            <div style={{fontSize:"14px" }} >৳ {parseInt(props.orderedProduct.unitPrice) * parseInt(props.orderedProduct.productQuantity)}</div>

        </div>
    )
}

export default ProductInPreviousOrder;