import React, {useEffect, useState} from 'react'
import {Button, Form, Header, Icon, Modal} from 'semantic-ui-react'
import {ComponentInput, ComponentInputTextArea} from "../components/input/ComponentInput";
import useInputValidation from "../hooks/useInputValidation";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {selectRequesting} from "../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../stores/special/finished/FinishedSelector";
import OrderAction from "../../stores/order/OrderAction";
import AddContactInfoRequest from "../../stores/order/request/AddContactInfoRequest";
import UserAction from "../../stores/user/UserAction";
import {ModalTypeConstants} from "../../assets/constants/GeneralConstants";
import ReqCreateNewUser from "../../stores/user/request/ReqCreateNewUser";

const INITIAL_STATE = {
    name:"" ,
    phone:"" ,
    address:""
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Name Cant be empty') ,
    contact : Yup.string().required('Contact Info is Required') ,
    address : Yup.string().required('Address Info is Required') ,
});

export default function ModalRegisterUser  (props) {

    const dispatch = useDispatch();
    const [isOpen , setIsOpen] = useState(false)
    const {handleInputChange,resetData ,handleSubmit , values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const [open , setOpen] = useState(false);
    const userId = useSelector(state => state.user.userId);
    const firebaseUserId = useSelector(state => state.user.firebaseUserId);
    const isRequesting = useSelector(state => selectRequesting(state, [UserAction.REQUEST_CREATE_NEW_USER]));
    const isFinished = useSelector(state => selectFinished(state, UserAction.REQUEST_CREATE_NEW_USER));


    const modalStatus = useSelector(state => state.misc.modalStatus);

    useEffect(() => {
        if(modalStatus && modalStatus.modalData && modalStatus.modalFor === ModalTypeConstants.TYPE_REGISTRATION){
            const modalData = modalStatus.modalData;
            setIsOpen(true);
        }
    }, [modalStatus]);


    const submitData = () => {
        values["firebaseId"] = firebaseUserId;
        dispatch(UserAction._requestCreateNewUser(new ReqCreateNewUser(values)))
    }

    useEffect( () => {
        setIsOpen(false);
        resetData();
    }, [isFinished])

    return <Modal open={isOpen}  size='tiny'>

        <Header icon='user' content='Registration' />

        <Modal.Content >
            <Form style={{textAlign:"start"}}>
                <ComponentInput label={"Name"} onChange={handleInputChange} icon={"align center"} error={errors.name} value={values.name} name={"name"}/>
                <ComponentInput label={"Phone No"} onChange={handleInputChange} icon={"mobile"} error={errors.phone} value={values.phone} name={"phone"}/>
                <ComponentInputTextArea label={"Address"} onChange={handleInputChange} icon={"align center"} error={errors.address} value={values.address} name={"address"}/>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red'  onClick={() => setIsOpen(false)}><Icon name='close' /> Cancel</Button>
            <Button loading={isRequesting} color='green'  onClick={submitData}>
                <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
    </Modal>
}

