import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import CategoryAction from "../../../stores/category/CategoryAction";
import {CheckBoxConstants} from "../../../assets/constants/GeneralConstants";
import ComponentCheckbox from "../../components/input/ComponentCheckbox";
import CreateProductSubCategoryRequest from "../../../stores/subcategory/request/CreateProductSubCategoryRequest";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";

const INITIAL_STATE = {
    name:"" ,
    description:"",
    logo:"",
    categoryIdList:[]
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Name is required') ,
});

export default function FormCreateProductSubCategory(props) {

    const dispatch = useDispatch();
    const {handleInputChange, handleSubmit ,hasError  , resetData, setValues,  touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);

    const isRequesting = useSelector(state => selectRequesting(state, [CategoryAction.REQUEST_CREATE_PRODUCT_CATEGORY]));
    const isFinished = useSelector(state => selectFinished(state, CategoryAction.REQUEST_CREATE_PRODUCT_CATEGORY));

    const submitData = async () => {
        dispatch(SubCategoryAction._requestCreateNewProductSubCategory(new CreateProductSubCategoryRequest(values)))
    };

    useEffect(() => resetData(), [isFinished]);

    return (
        <div style={{textAlign:"start"}}>
            <Message attached header='Create Product SubCategory' />
            <Form style={{width:"100%" ,padding:"20px" , marginBottom:"20px"}} className='attached fluid segment' >
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Name"} onChange={handleInputChange} icon={"align center"} error={errors.name} touched={touched.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Description"} onChange={handleInputChange} icon={"misc alternate outline"} error={errors.description} touched={touched.description} value={values.description} name={"description"}/>
                </Form.Group>
                <ComponentInput label={"Logo"} onChange={handleInputChange} icon={"image"} touched={touched.logo} error={errors.logo} value={values.logo} name={"logo"}/>

                <ComponentCheckbox checkBoxTitle ={"Available Categories (select at least one)"} checkBoxFor ={CheckBoxConstants.TYPE_PRODUCT_CATEGORY  }  onChange={handleInputChange}  value={values.categoryIdList}  name={"categoryIdList"} />
                <Button style={{width:"100%"}} loading={isRequesting} onClick={() => handleSubmit(submitData)}>Submit</Button>
            </Form>
        </div>
    )
}
