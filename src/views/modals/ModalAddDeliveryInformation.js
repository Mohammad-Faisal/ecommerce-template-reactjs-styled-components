import React, {useEffect, useState} from 'react'
import {Button, Form, Header, Icon, Modal} from 'semantic-ui-react'
import {ComponentInput, ComponentInputTextArea} from "../components/input/ComponentInput";
import useInputValidation from "../hooks/useInputValidation";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {selectRequesting} from "../../stores/special/requesting/RequestingSelector";
import ProductAction from "../../stores/product/ProductAction";
import {selectFinished} from "../../stores/special/finished/FinishedSelector";
import OrderAction from "../../stores/order/OrderAction";
import AddDeliveryInfoRequest from "../../stores/order/request/AddDeliveryInfoRequest";

const INITIAL_STATE = {
    title:"" ,
    address:""
};

const VALIDATION_SCHEMA = Yup.object({
    title : Yup.string().required('Title Cant be empty') ,
    address : Yup.string().required('Address Cant be empty') ,
});

export default function ModalDeleteConfirmation  (props) {

    const dispatch = useDispatch();
    const {handleInputChange,resetData ,handleSubmit , values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const [open , setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const userId = useSelector(state => state.user.userId);
    const isRequesting = useSelector(state => selectRequesting(state, [OrderAction.REQUEST_ADD_DELIVERY_INFO]));
    const isFinished = useSelector(state => selectFinished(state, OrderAction.REQUEST_ADD_DELIVERY_INFO));


    const submitData = () => {
        values["userId"] = userId;
        dispatch(OrderAction._requestAddDeliveryInfo(new AddDeliveryInfoRequest(values)))
    }

    useEffect( () => {
        closeModal();
        resetData();
    }, [isFinished])

    return <Modal open={open} trigger={<Button onClick={openModal}>Add New</Button>}  size='tiny'>

        <Header icon='archive' content='Add New Delivery Address' />

        <Modal.Content >
            <Form style={{textAlign:"start"}}>
                <ComponentInput label={"Title"} onChange={handleInputChange} icon={"align center"} error={errors.title} value={values.title} name={"title"}/>
                <ComponentInputTextArea label={"Delivery Address"} onChange={handleInputChange} icon={"align center"} error={errors.address} value={values.address} name={"address"}/>
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

