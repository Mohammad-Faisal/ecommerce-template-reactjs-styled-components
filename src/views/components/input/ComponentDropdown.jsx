import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form , Select } from 'semantic-ui-react'
import {DropDownConstants} from "../../../assets/constants/GeneralConstants";
import VendorAction from "../../../stores/vendor/VendorAction";
import CategoryAction from "../../../stores/category/CategoryAction";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";
import GetSubCategoriesOfCategoryRequest from "../../../stores/subcategory/request/GetSubCategoriesOfCategoryRequest";
import ServiceAction from "../../../stores/service/ServiceAction";
import ProductAction from "../../../stores/product/ProductAction";
import { selectDropDownItems } from '../../../selectors/DropdownDataSelector';


export default function ComponentDropdown (props) {


    const dispatch = useDispatch();
    const dropDownItems = useSelector(state => selectDropDownItems(state , props.dropDownFor));

    useEffect(() => {
        switch (props.dropDownFor) {
            case DropDownConstants.TYPE_VENDOR: dispatch(VendorAction._requestGetVendors());break;
            case DropDownConstants.TYPE_SERVICE: dispatch(ServiceAction._requestGetAllServices());break;
            case DropDownConstants.TYPE_PRODUCT: dispatch(ProductAction._requestGetAllProducts());break;
            case DropDownConstants.TYPE_PRODUCT_CATEGORY: dispatch(CategoryAction._requestGetProductCategories());break;
            case DropDownConstants.TYPE_SERVICE_CATEGORY: dispatch(CategoryAction._requestGetServiceCategories());break;
        }
    } , [])

    useEffect(() => {
        switch (props.dropDownFor) {
            case DropDownConstants.TYPE_PRODUCT_SUBCATEGORY: dispatch(SubCategoryAction._requestGetProductSubCategoriesByCategory(new GetSubCategoriesOfCategoryRequest(props.categoryId)));break;
            case DropDownConstants.TYPE_SERVICE_SUBCATEGORY: dispatch(SubCategoryAction._requestGetServiceSubCategoriesByCategory(new GetSubCategoriesOfCategoryRequest(props.categoryId)));break;
        }
    } , [props.categoryId])

    return (

        <Form.Select
            options={dropDownItems}
            label={props.label}
            // placeholder={props.title}
            value={props.value}
            onChange={(e , data) => props.onChange(props.name , data.value)}
            search
            error={props.error? { content: props.error } : null}
        />
    )

}



