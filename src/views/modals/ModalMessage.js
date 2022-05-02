import React, {Component, useEffect, useState} from 'react';
import {Icon, Modal} from 'semantic-ui-react';
import { useSelector} from 'react-redux';
import {ModalTypeConstants} from "../../assets/constants/GeneralConstants";
import {Zoom} from "react-reveal";


export default function ModalMessage () {

    const [isOpen , setIsOpen] = useState(false)
    const [message , setMessage] = useState("")
    const modalStatus = useSelector(state => state.misc.modalStatus);

    useEffect(() => {
        console.log(modalStatus);
        if(modalStatus && modalStatus.modalData && modalStatus.modalFor === ModalTypeConstants.TYPE_SUCCESS){
            let message = modalStatus.modalData.message;
            setIsOpen(true);
            setMessage(message);
        }
    }, [modalStatus])

    return (
        <Zoom>
            <Modal size={"tiny"} open={isOpen} onClose={() => setIsOpen(false)}>
                <Modal.Header style={{textAlign:"center"}}><Icon color={"green"} name={"check"}/> Successful</Modal.Header>
                <Modal.Content>
                    <p style={{textAlign:"center"}}>{message}</p>
                </Modal.Content>
            </Modal>
        </Zoom>

    )
}



