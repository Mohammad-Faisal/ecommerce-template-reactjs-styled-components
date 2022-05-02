import React, {useEffect} from 'react'
import OrderPreview from '../customer/order/OrderPreview';
import DeliveryInformation from "../customer/order/DeliveryInformation";
import ContactInformation from "../customer/order/ContactInformation";
import {Button, Message} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {selectRequesting} from "../../stores/special/requesting/RequestingSelector";
import OrderAction from "../../stores/order/OrderAction";
import {selectFinished} from "../../stores/special/finished/FinishedSelector";
import PlaceProductOrderRequest from "../../stores/order/request/PlaceProductOrderRequest";
import {selectProductsForOrder, selectServicesForOrder} from "../../stores/cart/CartSelector";
import {ItemType} from "../../assets/constants/GeneralConstants";
import PlaceServiceOrderRequest from "../../stores/order/request/PlaceServiceOrderRequest";
import styled from "styled-components";
import ModalOrderConfirmation from "../modals/ModalOrderConfirmation";
import {useParams} from "react-router";

export const PageOrder = (props) => {


    const dispatch = useDispatch();
    const {itemType} = useParams();
    const selectedDeliveryInfoId = useSelector(state => state.order.selectedDeliveryInfo);
    const selectedContactInfoId = useSelector(state => state.order.selectedContactInfo);

    const userId = useSelector(state => state.user.userId);
    const isRequesting = useSelector(state => selectRequesting(state, [OrderAction.REQUEST_PLACE_PRODUCT_ORDER , OrderAction.REQUEST_PLACE_SERVICE_ORDER]));
    const isProductOrderPlaced = useSelector(state => selectFinished(state, OrderAction.REQUEST_PLACE_PRODUCT_ORDER));
    const isServiceOrderPlaced = useSelector(state => selectFinished(state, OrderAction.REQUEST_PLACE_SERVICE_ORDER));

    const products= useSelector(selectProductsForOrder);
    const packages = useSelector(selectServicesForOrder);

    useEffect(() => {
        console.log("Packages are " , packages);
    } , [packages])

    const placeOrder = () => {
        if(itemType === ItemType.PRODUCT) placeProductOrder()
        else placeServiceOrder();
    }

    const placeServiceOrder = () => {
        const orderRequest = new PlaceServiceOrderRequest();
        orderRequest.packages = packages;
        orderRequest.userId = userId;
        orderRequest.deliveryInfoId = selectedDeliveryInfoId;
        orderRequest.contactInfoId = selectedContactInfoId;
        console.log(orderRequest);
        dispatch(OrderAction._requestPlaceServiceOrder(orderRequest))
    }

    const placeProductOrder= () => {
        const orderRequest = new PlaceProductOrderRequest({});
        orderRequest.products = products;
        orderRequest.userId = userId;
        orderRequest.deliveryInfoId = selectedDeliveryInfoId;
        orderRequest.contactInfoId = selectedContactInfoId;
        console.log(orderRequest);
        dispatch(OrderAction._requestPlaceProductOrder(orderRequest))
    }

    return (
        <OrderPageContainer>
            <div className={"container-page-place-order"}>
                <DeliveryInformation />
                <ContactInformation />
                <OrderPreview />
            </div>
            <Button
                size='large'
                style={{backgroundColor:"#009E7F"}}
                loading={isRequesting}
                color="teal"
                onClick={ () => placeOrder() }
                content='Confirm Order'
                icon='checkmark' 
                labelPosition='right'
                style={{marginBottom:"100px"}}
            />
        </OrderPageContainer>
    )

}


const OrderPageContainer = styled.div`
   margin-top:80px;
   height: fit-content ;
   background:#eff1f1;
`;
