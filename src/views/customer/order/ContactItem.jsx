import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import './order.scss'
import OrderAction from "../../../stores/order/OrderAction";
import GetUserInfoRequest from "../../../stores/order/request/GetUserInfoRequest";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import DeleteContactInfoRequest from "../../../stores/order/request/DeleteContactInfoRequest";
import Zoom from "react-reveal/Zoom";

export default function ContactItem(props) {

    const selectedContactInfoId = useSelector(state => state.order.selectedContactInfo);
    const userId = useSelector(state => state.user.userId);
    const dispatch = useDispatch();


    useEffect(() => {
        if (userId) dispatch(OrderAction._requestGetDeliveryInfo(new GetUserInfoRequest({userId: userId})))
    }, [userId])

    return (
        <Zoom>
            <div
                onClick={() => dispatch(OrderAction._selectContactInformation(props.item.id))}
                className={"delivery-contact-info-details"}
                style={ (selectedContactInfoId === props.item.id) ? hoverEffectStyle : {}}
            >
                <div style={{display:"grid" , gridTemplateColumns :"1fr auto"}}>
                    <h4 >{props.item.title} </h4>
                    <div onClick={() => dispatch(OrderAction._requestDeleteContactInfo(new DeleteContactInfoRequest(props.item.id)))}> <Icon  name={"close"} /> </div>
                </div>
                <div>{props.item.contact}</div>
            </div>
        </Zoom>

    )

}



const hoverEffectStyle = {
    border: "1px solid #009E7F",
    background: "#fff"
}

