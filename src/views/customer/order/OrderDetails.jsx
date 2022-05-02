
import React, { useState, useEffect } from 'react'
import {useParams} from "react-router";
import OrderStatusHistory from "./OrderStatusHistory";
import OrderItemsSummary from "./OrderItemsSummary";


const OrderDetails = (props) => {

    const {itemType} = useParams();


    console.log(props.orderItem);

    return (
        <div className="container-previous-order-container">
            <h2> Order ID #{props.orderItem.id} </h2>
            <div className={"container-responsive-two"} >
                <OrderStatusHistory  statusHistory={props.orderItem.statusHistory}/>
                <OrderItemsSummary
                    orderedItems={props.orderItem.orderedProducts}
                    orderInvoice={props.orderItem.orderInvoice}
                />
            </div>
        </div>
    )
}

export default OrderDetails;