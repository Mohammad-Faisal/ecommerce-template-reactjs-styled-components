import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
//import useInputValidation from "../../hooks/useInputValidation";
import {useFormInputValidation} from "react-ant-form-validation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput, ComponentInputTextArea} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import {CheckBoxConstants} from "../../../assets/constants/GeneralConstants";
import ComponentCheckbox from "../../components/input/ComponentCheckbox";
import ProductAction from "../../../stores/product/ProductAction";
import CreateProductRequest from "../../../stores/product/request/CreateProductRequest";

const INITIAL_STATE = {
    name:"" ,
    description:"",
    price:"",
    image:"",
    categoryIdList:[],
    subCategoryIdList: []
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Product Name is required') ,
    price : Yup.number().required('Price is required').typeError("Price must be a number") ,
    categoryIdList : Yup.array().required('You Must Select at least one ProductCategory') ,
});

export default function FormCrateProduct(props) {

    const dispatch = useDispatch();


    const {handleInputChange,touched  , resetData, handleSubmit, values, errors} = useFormInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);

    const isRequesting = useSelector(state => selectRequesting(state, [ProductAction.REQUEST_CREATE_NEW_PRODUCT]));
    const isFinished = useSelector(state => selectFinished(state, ProductAction.REQUEST_CREATE_NEW_PRODUCT));

    const submitData = async () => {
        dispatch(ProductAction._requestCreateNewProduct(new CreateProductRequest(values)))
    };

    useEffect(() => resetData() , [isFinished]);

    return (

        <div style={{textAlign:"start"}}>
            <Message attached header='Create Product' />
            <Form style={{width:"100%" ,padding:"20px" , marginBottom:"20px"}} className='attached fluid segment' >
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Product Name"} onChange={handleInputChange} icon={"align center"} touched={touched.name}  error={errors.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Price"} onChange={handleInputChange} icon={"align center"} touched={touched.price} error={errors.price} value={values.price} name={"price"}/>

                </Form.Group>
                <ComponentInput label={"Product Image"} onChange={handleInputChange} icon={"image"} touched={touched.image} error={errors.image} value={values.image} name={"image"}/>

                <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr"}}>
                    <ComponentCheckbox checkBoxTitle ={"Available Categories (select at least one)"} checkBoxFor ={CheckBoxConstants.TYPE_PRODUCT_CATEGORY  }
                                       onChange={handleInputChange}  value={values.categoryIdList}  name={"categoryIdList"} />

                    <ComponentCheckbox checkBoxTitle ={"Available Sub Categories (select at least one)"} checkBoxFor ={CheckBoxConstants.TYPE_PRODUCT_SUBCATEGORY  }
                                       onChange={handleInputChange}  value={values.subCategoryIdList}  name={"subCategoryIdList"} />

                </div>

                <ComponentInputTextArea label={"Product Description"} onChange={handleInputChange} icon={"mobile alternate"} error={errors.description} value={values.description} name={"description"}/>
                <Button style={{width:"100%" , marginTop:"20px"}} loading={isRequesting} onClick={() => handleSubmit(submitData)}>Submit</Button>
            </Form>
        </div>



    )
}
