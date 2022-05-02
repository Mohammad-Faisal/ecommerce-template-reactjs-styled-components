
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectTotalCostOfProduct,
    selectTotalCostOfService, selectTotalProductItemCount, selectTotalServiceCountInCart
} from '../../../stores/cart/CartSelector';
import {isMobile} from "react-device-detect";

import ItemInCart from './ItemInCart';
import _ from 'lodash';
import {useParams, withRouter} from "react-router";

import {  CloseIconMedium } from '../../components/IconsProvider';
import MiscAction from "../../../stores/misc/MiscAction";
import {Icon, Segment, Sidebar} from "semantic-ui-react";
import { ItemType} from "../../../assets/constants/GeneralConstants";
import {Routes} from "../../../assets/constants/routes";
import AnimatedNumber from "animated-number-react";
import Zoom from "react-reveal/Zoom";


const CartDetails = (props) => {

    const dispatch = useDispatch();
    const {itemType} = useParams();
    const productsInCart = useSelector(state => state.cart.productsInCart);
    const servicesInCart = useSelector(state => state.cart.servicesInCart);
    const userId = useSelector(state => state.user.userId);
    const [cartIndividualItems, setCartIndividualItems] = useState([])

    const totalCostOfProduct = useSelector(selectTotalCostOfProduct);
    const totalCostOfService = useSelector(selectTotalCostOfService);

    const totalProductItem = useSelector(selectTotalProductItemCount);
    const totalServiceItem = useSelector(selectTotalServiceCountInCart);


    useEffect(() => {
        const distinctItems = itemType === ItemType.PRODUCT ?
            _.uniqBy(productsInCart, (item) => item.id):
            _.uniqBy(servicesInCart, (item) => item.id);
        setCartIndividualItems(Array.from(distinctItems));
    }, [productsInCart , servicesInCart , itemType])

    const proceedToCheckout = () => {
        if(!userId)dispatch(MiscAction._showSignInModal())
        else {
            if(itemType === ItemType.PRODUCT) props.history.push(Routes.ORDER_PRODUCT);
            if(itemType === ItemType.SERVICE) props.history.push(Routes.ORDER_SERVICE);
        }
    }
    const formatValue = (value) => value.toFixed(0);
    return (


        <Sidebar
            style={isMobile ?
                { width: "100%", height: "50%", maxHeight:"500px" ,   background: "#fff" } :
                { width: "25%", minWidth:"400px", height: "100%", background: "#fff" }}
            icon='labeled'
            direction={ isMobile ? "bottom" : "right" }
            onHide={() => props.setVisible(false)}
            animation="scale down"
            visible={props.visible}
        >
            <div className="container-cart-details">
                <div className="container-cart-details-topbar">
                    <div className="cart-details-cart-items">
                        <Icon name={"shopping cart"}/>
                       { itemType === ItemType.PRODUCT ? totalProductItem : totalServiceItem} items
                    </div>
                    <div className="cart-details-cart-items" onClick={() => props.setVisible(false)}>   <Icon name={"delete"}/> </div>
                </div>

                <div className="container-cart-details-items">
                    {cartIndividualItems.map(item => <ItemInCart itemType={itemType} key={item.id} item={item} />)}
                </div>

                <div onClick={proceedToCheckout} className="checkout-button-cart-details">
                    <div className="checkout-text" style={{ color: "#fff", fontWeight: "bold" }}> Checkout </div>
                    <div className="checkout-round-text">
                        ৳ <AnimatedNumber
                        duration={500}
                        value={ itemType=== ItemType.PRODUCT? totalCostOfProduct : totalCostOfService}
                        formatValue={formatValue}
                    />
                    </div>
                </div>
            </div>
        </Sidebar>

    )
}

export default withRouter(CartDetails);