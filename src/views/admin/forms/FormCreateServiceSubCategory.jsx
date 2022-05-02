import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import {DropDownConstants} from "../../../assets/constants/GeneralConstants";
import ComponentDropdown from "../../components/input/ComponentDropdown";
import CreateServiceSubCategoryRequest from "../../../stores/subcategory/request/CreateServiceSubCategoryRequest";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";

const INITIAL_STATE = {
    name:"" ,
    description:"",
    logo:"",
    categoryId:""
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Name is required') ,
    categoryId : Yup.string().required('Category Id is Required') ,
});

export default function FormCreateServiceSubCategory(props) {

    const dispatch = useDispatch();
    const {handleInputChange, handleSubmit ,hasError  , resetData, setValues,  touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const isRequesting = useSelector(state => selectRequesting(state, [SubCategoryAction.REQUEST_CREATE_SERVICE_SUB_CATEGORY]));
    const isFinished = useSelector(state => selectFinished(state, SubCategoryAction.REQUEST_CREATE_SERVICE_SUB_CATEGORY));

    const submitData = async () => {
        dispatch(SubCategoryAction._requestCreateNewServiceSubCategory(new CreateServiceSubCategoryRequest(values)))
    };

    useEffect(() => {
        resetData();
    }, [isFinished]);

    return (
        <div style={{textAlign:"start"}}>
            <Message attached header='Create Service SubCategory' />
            <Form style={{width:"100%" ,padding:"20px" , marginBottom:"20px"}} className='attached fluid segment' >
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Name"} onChange={handleInputChange} icon={"align center"} error={errors.name} touched={touched.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Description"} onChange={handleInputChange} icon={"misc alternate outline"} error={errors.description} touched={touched.description} value={values.description} name={"description"}/>
                    <ComponentDropdown dropDownFor={DropDownConstants.TYPE_SERVICE_CATEGORY} label={"Select Category"}
                                       onChange={handleInputChange} name={"categoryId"} error={errors.categoryId} value={values.categoryId}  />
                </Form.Group>
                <ComponentInput label={"Logo"} onChange={handleInputChange} icon={"image"} touched={touched.logo} error={errors.logo} value={values.logo} name={"logo"}/>

                <Button style={{width:"100%"}} loading={isRequesting} onClick={() => handleSubmit(submitData)}>Submit</Button>
            </Form>
        </div>
    )
}
