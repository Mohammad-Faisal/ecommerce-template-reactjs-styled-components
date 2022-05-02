
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './order.scss'
import OrderAction from "../../../stores/order/OrderAction";
import GetUserInfoRequest from "../../../stores/order/request/GetUserInfoRequest";
import ModalAddContactInformation from "../../modals/ModalAddContactInformation";
import ContactItem from "./ContactItem";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";

export default function ContactInformation(props) {

    const userId = useSelector(state => state.user.userId);
    const contactInfoList = useSelector(state => state.order.contactInfoOfUser);
    const isFinishedCreatingNew  = useSelector(state => selectFinished(state, OrderAction.REQUEST_ADD_CONTACT_INFO));
    const isFinishedDeleting  = useSelector(state => selectFinished(state, OrderAction.REQUEST_DELETE_CONTACT_INFO));

    const dispatch = useDispatch();

    useEffect(() => {
        if(userId)dispatch(OrderAction._requestGetContactInfo(new GetUserInfoRequest({userId : userId})))
    } , [userId , isFinishedCreatingNew , isFinishedDeleting])

    return (
        <div className="container-order-details segment">
            <div className={"container-delivery-info-topbar"}>
                <div style={{fontSize:"16px", textAlign:"start" , color:"#009E7F"}}> Contact Info</div>
                <ModalAddContactInformation />
            </div>

            <div className={"delivery-info-container"}>
                {contactInfoList? contactInfoList.data.map(contactItem => <ContactItem onClick={props.onClick} key={contactItem.id} item={contactItem}/>) : <div></div>}
            </div>

        </div>
    )
}

