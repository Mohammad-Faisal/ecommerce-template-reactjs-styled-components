import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput, ComponentInputTextArea} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import {CheckBoxConstants} from "../../../assets/constants/GeneralConstants";
import VendorAction from "../../../stores/vendor/VendorAction";
import CreateVendorRequest from "../../../stores/vendor/request/CreateVendorRequest";
import ComponentCheckbox from "../../components/input/ComponentCheckbox";

const INITIAL_STATE = {
    name:"" ,
    address:"",
    contact:"",
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Vendor Name is required') ,
    contact : Yup.string().required('Contact Info is required') ,
});

export default function FormCreateVendor(props) {

    const dispatch = useDispatch();
    const {handleInputChange,handleSubmit,hasError  , resetData, touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);

    const isRequesting = useSelector(state => selectRequesting(state, [VendorAction.REQUEST_CREATE_VENDOR]));
    const isFinished = useSelector(state => selectFinished(state, VendorAction.REQUEST_CREATE_VENDOR));

    const onSubmit = async () => {
        dispatch(VendorAction._requestCreateNewVendor(new CreateVendorRequest(values)))
    };

    useEffect(() => resetData() , [isFinished]);

    return (

        <div style={{textAlign:"start"}}>
            <Message attached header='Create Vendor' />
            <Form style={{width:"100%" ,padding:"20px" ,marginBottom:"20px",  textAlign:"start"}} className='attached fluid segment'>
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Vendor Name"} onChange={handleInputChange} icon={"align center"} error={errors.name} touched={touched.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Vendor Contact"} onChange={handleInputChange} icon={"mobile alternate"} touched={touched.contact} error={errors.contact} value={values.contact} name={"contact"}/>
                </Form.Group>
                <ComponentInput label={"Vendor Image"} onChange={handleInputChange} icon={"image"} touched={touched.image} error={errors.image} value={values.image} name={"image"}/>
                <ComponentInputTextArea label={"Vendor Address"} onChange={handleInputChange} icon={"misc alternate outline"} error={errors.address} value={values.address} name={"address"}/>
                <Button style={{width:"100%",marginTop:"20px"}} loading={isRequesting} onClick={() => handleSubmit(onSubmit)}>Submit</Button>
            </Form>
        </div>
    )
}
