import React, {useEffect, useState} from 'react'
import {Button, Form, Header, Icon, Modal} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import useInputValidation from "../hooks/useInputValidation";
import {selectRequesting} from "../../stores/special/requesting/RequestingSelector";
import OrderAction from "../../stores/order/OrderAction";
import {selectFinished} from "../../stores/special/finished/FinishedSelector";
import AddDeliveryInfoRequest from "../../stores/order/request/AddDeliveryInfoRequest";
import {ComponentInput, ComponentInputTextArea} from "../components/input/ComponentInput";
import * as Yup from "yup";
import UpdateOrderStatusRequest from "../../stores/order/request/UpdateOrderStatusRequest";
import ComponentRadio from "../components/input/ComponentRadio";
import {RadioConstants} from "../../assets/constants/GeneralConstants";



const INITIAL_STATE = {
    note:"" ,
    currentStatus:""
};

const VALIDATION_SCHEMA = Yup.object({
    title : Yup.string().required('Title Cant be empty') ,
    currentStatus : Yup.string().required('Current Status Cant be empty') ,
});

export default function ModalUpdateOrderStatus  (props) {

    const dispatch = useDispatch();
    const {handleInputChange,resetData ,handleSubmit ,setValues , values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const [open , setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const userId = useSelector(state => state.user.userId);
    const isRequesting = useSelector(state => selectRequesting(state, [OrderAction.REQUEST_UPDATE_ORDER_STATUS]));
    const isFinished = useSelector(state => selectFinished(state, OrderAction.REQUEST_UPDATE_ORDER_STATUS));


    const submitData = () => {
        values["userId"] = userId;
        values["orderId"] = props.orderData.id;
        //console.log(new UpdateOrderStatusRequest(values));
        dispatch(OrderAction._requestUpdateOrderStatus(new UpdateOrderStatusRequest(values)))
    }

    useEffect( () => {
        closeModal();
        resetData();
    }, [isFinished])

    useEffect(() => {
        //setValues()
    } , [])

    return <Modal open={open} trigger={<Button onClick={openModal}>Update Status</Button>}  size='tiny'>

        <Header icon='clock' content='Update Order Status' />

        <Modal.Content >
            <Form style={{textAlign:"start"}}>
                <ComponentInput label={"Note"} onChange={handleInputChange} icon={"align center"} error={errors.note} value={values.note} name={"note"}/>
                <ComponentRadio radioFor={RadioConstants.TYPE_ORDER_STATUS} label={"Order Status"} onChange={handleInputChange} value={values.currentStatus} name={"currentStatus"}/>
            </Form>
        </Modal.Content>
        <Modal.Actions>

            <Button basic color='red'  onClick={closeModal}><Icon name='close' /> Cancel </Button>

            <Button loading={isRequesting} color='green'  onClick={submitData}>
                <Icon name='checkmark' /> Confirm
            </Button>

        </Modal.Actions>
    </Modal>
}

