import React, {Component, useEffect, useState} from 'react';
import {Icon, Modal} from 'semantic-ui-react';
import { useSelector} from 'react-redux';
import firebase from "../../utils/firebase";
import {StyledFirebaseAuth} from "react-firebaseui";


export default function ModalSignIn () {

    const [isOpen , setIsOpen] = useState(false)
    const modalStatus = useSelector(state => state.misc.triggerShowSignInModal);
    const userId = useSelector(state => state.user.userId);

    const uiConfig = {
        signInFlow: 'popup',
        //signInSuccessUrl: '/confirmOrder',
        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                defaultCountry: "BD"
            }
        ]
    };

    useEffect(() => {
        if(userId) setIsOpen(false);
    } , [userId])

    useEffect(() => {
        if(modalStatus)setIsOpen(true);
    }, [modalStatus])

    return (

        <Modal size={"tiny"} open={isOpen} onClose={() => setIsOpen(false)}>
            <Modal.Header style={{textAlign:"center"}}><Icon /> Please Sign in to continue</Modal.Header>
            <Modal.Content>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </Modal.Content>
        </Modal>
    )
}



