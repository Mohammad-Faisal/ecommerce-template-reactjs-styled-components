
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './order.scss'
import ModalAddDeliveryInformation from "../../modals/ModalAddDeliveryInformation";
import OrderAction from "../../../stores/order/OrderAction";
import GetUserInfoRequest from "../../../stores/order/request/GetUserInfoRequest";
import DeliveryItem from "./DeliveryItem";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";

export default function DeliveryInformation(props) {

    const userId = useSelector(state => state.user.userId);
    const deliveryInfoList = useSelector(state => state.order.deliveryInfoOfUser);
    const isFinishedCreatingDeliveryAddress = useSelector(state => selectFinished(state, OrderAction.REQUEST_ADD_DELIVERY_INFO));
    const isFinishedDeletingDeliveryAddress = useSelector(state => selectFinished(state, OrderAction.REQUEST_DELETE_DELIVERY_INFO));
    const dispatch = useDispatch();


    useEffect(() => {
        if(userId)dispatch(OrderAction._requestGetDeliveryInfo(new GetUserInfoRequest({userId : userId})))
    } , [userId , isFinishedCreatingDeliveryAddress , isFinishedDeletingDeliveryAddress])

    return (
        <div className="container-order-details order-details-layout segment">
            <div className={"container-delivery-info-topbar"}>
                <div style={{fontSize:"16px", textAlign:"start" , color:"#009E7F"}}> Delivery Info</div>
                <ModalAddDeliveryInformation />
            </div>

            <div className={"delivery-info-container"}>
                {deliveryInfoList? deliveryInfoList.data.map(item => <DeliveryItem  key={item.id} item={item}/>) :
                    <div> No info Found</div>}
            </div>

        </div>
    )
}

