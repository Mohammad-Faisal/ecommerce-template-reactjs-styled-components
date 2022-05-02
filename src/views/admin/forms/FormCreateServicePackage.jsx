import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput, ComponentInputTextArea} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import {CheckBoxConstants, DropDownConstants} from "../../../assets/constants/GeneralConstants";
import ComponentCheckbox from "../../components/input/ComponentCheckbox";
import ServiceAction from "../../../stores/service/ServiceAction";
import CreateServicePackageRequest from "../../../stores/service/request/CreateServicePackageRequest";
import ComponentDropdown from "../../components/input/ComponentDropdown";

const INITIAL_STATE = {
    name:"" ,
    description:"",
    price:"",
    serviceId:"",
};


const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Package Name is required') ,
    serviceId : Yup.string().required('Service is Required') ,
});

export default function FormCreateServicePackage(props) {

    const dispatch = useDispatch();
    const {handleInputChange  ,handleSubmit , resetData, touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);

    const isRequesting = useSelector(state => selectRequesting(state, [ServiceAction.REQUEST_CREATE_SERVICE_PACKAGE]));
    const isFinished = useSelector(state => selectFinished(state, ServiceAction.REQUEST_CREATE_SERVICE_PACKAGE));

    const onSubmit = async () => {
        dispatch(ServiceAction._requestCreateServicePackage(new CreateServicePackageRequest(values)))
    };

    useEffect(() => resetData() , [isFinished]);
    
    return (

        <div style={{textAlign:"start"}}>
            <Message attached header='Create Service Package' />
            <Form style={{width:"100%" ,padding:"20px" ,marginBottom:"20px",  textAlign:"start"}} className='attached fluid segment'>
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Package Name"} onChange={handleInputChange} icon={"align center"} touched={touched.name} error={errors.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Description"} onChange={handleInputChange} icon={"mobile alternate"}
                                    touched={touched.Description} error={errors.Description} value={values.Description} name={"Description"}/>
                    </Form.Group>
                <Form.Group widths='equal'>
                    <ComponentInput label={"price"} onChange={handleInputChange} icon={"mobile alternate"}
                                    touched={touched.price} error={errors.price} value={values.price} name={"price"}/>
                    <ComponentDropdown dropDownFor={DropDownConstants.TYPE_SERVICE} label={"Select Service"}
                                       onChange={handleInputChange} name={"serviceId"} error={errors.serviceId} value={values.serviceId}  />

                </Form.Group>
                <Button style={{width:"100%",marginTop:"20px"}} loading={isRequesting} onClick={() => handleSubmit(onSubmit)}>Submit</Button>
            </Form>
        </div>
    )
}
