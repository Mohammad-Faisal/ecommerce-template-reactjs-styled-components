import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import {CheckBoxConstants, DropDownConstants} from "../../../assets/constants/GeneralConstants";
import ServiceAction from "../../../stores/service/ServiceAction";
import CreateServiceRequest from "../../../stores/service/request/CreateServiceRequest";
import ComponentDropdown from "../../components/input/ComponentDropdown";

const INITIAL_STATE = {
    name:"" ,
    description:"",
    categoryId :"",
    subcategoryId :"",
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('ServiceEntity Name is required') ,
    description : Yup.string().required('ServiceEntity details is required') ,
    subcategoryId : Yup.string().required('Sub Category id is is required') ,
});

export default function FormCreateService(props) {

    const dispatch = useDispatch();
    const {handleInputChange  ,handleSubmit , resetData, touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);

    const isRequesting = useSelector(state => selectRequesting(state, [ServiceAction.REQUEST_CREATE_NEW_SERVICE]));
    const isFinished = useSelector(state => selectFinished(state, ServiceAction.REQUEST_CREATE_NEW_SERVICE));

    const onSubmit = async () => {
        dispatch(ServiceAction._requestCreateNewService(new CreateServiceRequest(values)))
    };

    useEffect(() => resetData() , [isFinished]);

    return (

        <div style={{textAlign:"start"}}>
            <Message attached header='Create Service' />
            <Form style={{width:"100%" ,padding:"20px" ,marginBottom:"20px",  textAlign:"start"}} className='attached fluid segment'>
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Service Name"} onChange={handleInputChange} icon={"align center"} touched={touched.name} error={errors.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Service Description"} onChange={handleInputChange} icon={"mobile alternate"} touched={touched.description} error={errors.description} value={values.description} name={"description"}/>
                </Form.Group>
                <ComponentInput label={"Service Logo"} onChange={handleInputChange} icon={"image"} touched={touched.logo} error={errors.logo} value={values.logo} name={"logo"}/>

                <Form.Group  widths='equal'>
                    <ComponentDropdown dropDownFor={DropDownConstants.TYPE_SERVICE_CATEGORY} label={"Select Category"}
                                       onChange={handleInputChange} name={"categoryId"} error={errors.categoryId} value={values.categoryId}  />

                    <ComponentDropdown dropDownFor={DropDownConstants.TYPE_SERVICE_SUBCATEGORY} label={"Select Sub Category"} categoryId={values.categoryId}
                                       onChange={handleInputChange} name={"subcategoryId"} error={errors.subcategoryId} value={values.subcategoryId}  />

                </Form.Group>
                <Button style={{width:"100%",marginTop:"20px"}} loading={isRequesting} onClick={() => handleSubmit(onSubmit)}>Submit</Button>
            </Form>
        </div>
    )
}
