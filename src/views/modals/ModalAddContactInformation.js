import React, {useEffect, useState} from 'react'
import {Button, Form, Header, Icon, Modal} from 'semantic-ui-react'
import {ComponentInput} from "../components/input/ComponentInput";
import useInputValidation from "../hooks/useInputValidation";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {selectRequesting} from "../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../stores/special/finished/FinishedSelector";
import OrderAction from "../../stores/order/OrderAction";
import AddContactInfoRequest from "../../stores/order/request/AddContactInfoRequest";

const INITIAL_STATE = {
    title:"" ,
    contact:""
};

const VALIDATION_SCHEMA = Yup.object({
    title : Yup.string().required('Title Cant be empty') ,
    contact : Yup.string().required('Contact Info Cant be empty') ,
});

export default function ModalAddContactInformation  (props) {

    const dispatch = useDispatch();
    const {handleInputChange,resetData ,handleSubmit , values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const [open , setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const userId = useSelector(state => state.user.userId);
    const isRequesting = useSelector(state => selectRequesting(state, [OrderAction.REQUEST_ADD_CONTACT_INFO]));
    const isFinished = useSelector(state => selectFinished(state, OrderAction.REQUEST_ADD_CONTACT_INFO));


    const submitData = () => {
        values["userId"] = userId;
        dispatch(OrderAction._requestAddContactInfo(new AddContactInfoRequest(values)))
    }

    useEffect( () => {
        closeModal();
        resetData();
    }, [isFinished])

    return <Modal open={open} trigger={<Button  onClick={openModal}>Add New</Button>}  size='tiny'>

        <Header icon='archive' content='Add New Contact' />

        <Modal.Content >
            <Form style={{textAlign:"start"}}>
                <ComponentInput label={"Title"} onChange={handleInputChange} icon={"align center"} error={errors.title} value={values.title} name={"title"}/>
                <ComponentInput label={"Contact Info"} onChange={handleInputChange} icon={"align center"} error={errors.contact} value={values.contact} name={"contact"}/>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red'  onClick={closeModal}><Icon name='close' /> Cancel</Button>
            <Button loading={isRequesting} color='green'  onClick={submitData}>
                <Icon name='checkmark' /> Confirm
            </Button>
        </Modal.Actions>
    </Modal>
}

