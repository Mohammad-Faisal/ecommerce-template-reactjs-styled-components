import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {Button, Form, Message} from "semantic-ui-react";
import { DropDownConstants} from "../../../assets/constants/GeneralConstants";
import ComponentDropdown from "../../components/input/ComponentDropdown";
import ProductAction from "../../../stores/product/ProductAction";
import AddProductToVendorRequest from "../../../stores/product/request/AddProductToVendorRequest";
import GetProductsOfVendorRequest from "../../../stores/product/request/GetProductsOfVendorRequest";

const INITIAL_STATE = {
    //vendorId:"" ,
    productId:"",
};

const VALIDATION_SCHEMA = Yup.object({
    vendorId : Yup.string().required('Select Vendor to Assign') ,
    productId : Yup.string().required('Select Product to Assign') ,
});

export default function FormAddProductToVendor(props) {

    const dispatch = useDispatch();
    const {handleInputChange,handleSubmit,resetData, touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);

    const isRequesting = useSelector(state => selectRequesting(state, [ProductAction.REQUEST_ADD_PRODUCT_TO_VENDOR]));
    const isFinishedCreating = useSelector(state => selectFinished(state, ProductAction.REQUEST_ADD_PRODUCT_TO_VENDOR));
    const isFinishedRemoving = useSelector(state => selectFinished(state, ProductAction.REQUEST_REMOVE_PRODUCT_FROM_VENDOR));

    const onSubmit = async () => {
        dispatch(ProductAction._requestAddProductToVendor(new AddProductToVendorRequest(values)))
    };

    useEffect(() => resetData() , [isFinishedCreating ]);

    useEffect(() => {
        if(values.vendorId)dispatch(ProductAction._requestGetProductsByVendor(new GetProductsOfVendorRequest(values.vendorId)))
    } , [values.vendorId , isFinishedRemoving , isFinishedCreating]);

    return (

        <div style={{textAlign:"start"}}>
            <Message attached header='Assign Product to Vendor' />
            <Form style={{width:"100%" ,padding:"20px" ,marginBottom:"20px",  textAlign:"start"}} className='attached fluid segment'>
                <Form.Group  widths='equal'>

                    <ComponentDropdown
                        dropDownFor={DropDownConstants.TYPE_VENDOR}
                        label={"Select Vendor"}
                        onChange={handleInputChange}
                        touched={touched.vendorId}
                        name={"vendorId"}
                        error={errors.vendorId}
                        value={values.vendorId}
                    />

                    <ComponentDropdown
                        dropDownFor={DropDownConstants.TYPE_PRODUCT}
                        label={"Select Product"}
                        onChange={handleInputChange}
                        touched={touched.productId}
                        name={"productId"}
                        error={errors.productId}
                        value={values.productId}
                    />

                </Form.Group>
                <Button style={{width:"100%",marginTop:"20px"}} loading={isRequesting} onClick={() => handleSubmit(onSubmit)}>Submit</Button>
            </Form>
        </div>
    )
}
