import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import VendorAction from "../../../stores/vendor/VendorAction";
import VendorSummary from "./VendorSummary";
import '../product/product.scss';
import {selectVendorByProductCategory, selectVendorTableData} from "../../../selectors/TableDataSelector";
import VendorSkeleton from "../../components/placeholder/VendorSkeleton";
import {useParams} from "react-router";
import GetVendorsOfCategoryRequest from "../../../stores/vendor/request/GetVendorsOfCategoryRequest";

export const VendorContainer = (props) => {

    const dispatch = useDispatch();
    let {  categoryId } = useParams();

    let isRequesting = useSelector(state => selectRequesting(state, [VendorAction.REQUEST_GET_VENDORS,VendorAction.REQUEST_GET_VENDORS_BY_PRODUCT_CATEGORY]));
    const vendorList = useSelector(state => selectVendorByProductCategory(state));

    useEffect(() => {
        if(categoryId)dispatch(VendorAction._requestGetVendorsByProductCategory(new GetVendorsOfCategoryRequest(categoryId)))
    }, [categoryId]);


    const vendorSkeletonList = [];
    for(let i=0;i<10;i++) vendorSkeletonList.push(<VendorSkeleton key={Math.random()}/>)

    return (
        <div className={"vendor-list-container"}>
            {isRequesting ? vendorSkeletonList:
                vendorList.map(vendorItem => <VendorSummary key={vendorItem.id} vendorItem={vendorItem}/>)}
        </div>
    )

}


