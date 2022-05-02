import React, {Component, useEffect, useState} from 'react';
import {Button, Icon, MessageHeader, Modal} from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';
import ReactConfetti from "react-confetti";
import {ModalTypeConstants} from "../../assets/constants/GeneralConstants";
import CartAction from "../../stores/cart/CartAction";
import {Routes} from "../../assets/constants/routes";
import {withRouter} from "react-router";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";



 function ModalOrderConfirmation (props) {
    const dispatch = useDispatch();
    const [isOpen , setIsOpen] = useState(false)
    const [message , setMessage] = useState("Your order id is #4")
    const modalStatus = useSelector(state => state.misc.modalStatus);

    useEffect(() => {
        if(modalStatus && modalStatus.modalData && modalStatus.modalFor === ModalTypeConstants.TYPE_ORDER_CONFIRMATION){
            let message = `Your order id is #${modalStatus.modalData.orderId} `;
            setIsOpen(true);
            setMessage(message);
        }
    }, [modalStatus]);

    const goToHome = () => {
        setIsOpen(false);
        props.history.push(Routes.PRODUCT)
        dispatch(CartAction._clearProductCart())
        dispatch(CartAction._clearServiceCart())
    }

    return (
        <Modal size={"tiny"} open={isOpen} >
            <Modal.Header style={{textAlign:"center"}}><Icon color={"green"} name={"check"}/> Successful</Modal.Header>
            <Modal.Content>
                <ReactConfetti width={550} height={150} />
                <Message success>
                    <MessageHeader  style={{textAlign:"center"}}>Thank you for your order</MessageHeader>
                </Message>

                <h2 style={{textAlign:"center"}}>{message}</h2>
                <Button fluid onClick={goToHome}> Take me back to Home </Button>
            </Modal.Content>
        </Modal>
    )
}

export default withRouter(ModalOrderConfirmation)

