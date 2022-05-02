import React, { useState, useEffect} from 'react'
import '../customer/product/product.scss';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import OrderAction from "../../stores/order/OrderAction";
import GetUserInfoRequest from "../../stores/order/request/GetUserInfoRequest";
import {_selectOrdersOfUser} from "../../stores/order/OrderSelector";
import OrderDetails from "../customer/order/OrderDetails";

export const PagePreviousOrders = (props) => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false)
    let { itemType } = useParams();
    const userId = useSelector(state => state.user.userId);
    const productOrders = useSelector(_selectOrdersOfUser);


    useEffect(() => {
        console.log(productOrders);
    } , [productOrders])

    useEffect(() => {
        if(userId)dispatch(OrderAction._requestGetProductOrdersOfUser(new GetUserInfoRequest({userId})))
    }, [userId])

    return (
        <div style={{marginTop:"100px"}} >

            {productOrders.map(orderItem => <OrderDetails orderItem={orderItem} /> )}

        </div>

    )

}


