
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './order.scss'
import OrderAction from "../../../stores/order/OrderAction";
import GetUserInfoRequest from "../../../stores/order/request/GetUserInfoRequest";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import DeleteDeliveryInfoRequest from "../../../stores/order/request/DeleteDeliveryInfoRequest";
import Zoom from "react-reveal/Zoom";

export default function DeliveryItem(props) {

    const selectedDeliveryInfoId = useSelector(state => state.order.selectedDeliveryInfo);
    const userId = useSelector(state => state.user.userId);
    const dispatch = useDispatch();


    useEffect(() => {
        if(userId)dispatch(OrderAction._requestGetDeliveryInfo(new GetUserInfoRequest({userId : userId})))
    } , [userId])

    return (

        <Zoom>
            <div
                onClick={() => dispatch(OrderAction._selectDeliveryInformation(props.item.id)) }
                className={"delivery-contact-info-details"}
                style={ (selectedDeliveryInfoId === props.item.id) ? hoverEffectStyle : {}}
            >
                <div style={{display:"grid" , gridTemplateColumns :"1fr auto"}}>
                    <h4 >{props.item.title} </h4>
                    <div onClick={() => dispatch(OrderAction._requestDeleteDeliveryInfo(new DeleteDeliveryInfoRequest(props.item.id)))}> <Icon  name={"close"} /> </div>
                </div>

                <div >{props.item.address}</div>
            </div>
        </Zoom>

    )

}


const hoverEffectStyle = {
    border:"1px solid #009E7F" ,
    background:"#fff"
}

