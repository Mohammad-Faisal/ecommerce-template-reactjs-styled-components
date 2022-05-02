
import React from 'react'
import {  useSelector } from 'react-redux';
import {
    selectTotalCostOfService,
    selectTotalCostOfProduct,
    selectTotalServiceCountInCart,
    selectTotalProductItemCount
} from '../../../stores/cart/CartSelector';
import './cart.scss';
import {ItemType} from "../../../assets/constants/GeneralConstants";

import AnimatedNumber from "animated-number-react";
import {Icon} from "semantic-ui-react";
import {useParams} from "react-router";

const CartPreview = (props) => {


    const {itemType} = useParams();

    const totalCostOfProduct = useSelector(selectTotalCostOfProduct);
    const totalCostOfService = useSelector(selectTotalCostOfService);

    const totalProductItem = useSelector(selectTotalProductItemCount);
    const totalServiceItem = useSelector(selectTotalServiceCountInCart);
    const formatValue = (value) => value.toFixed(0);
    return (
        <div className='container-cart-preview' >
            <div className="cart-preview-items">
                <Icon name={"shopping cart"}/>
                { itemType=== ItemType.PRODUCT? totalProductItem : totalServiceItem} items
            </div>
            <div className="cart-preview-amount">
                ৳ <AnimatedNumber
                duration={500}
                    value={ itemType=== ItemType.PRODUCT? totalCostOfProduct : totalCostOfService}
                    formatValue={formatValue}
                />
            </div>
        </div>
    )
}

export default CartPreview;