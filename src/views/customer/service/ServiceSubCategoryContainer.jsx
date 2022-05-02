import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import '../product/product.scss';
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";
import ServiceSubCategorySummary from "./ServiceSubCategorySummary";
import {selectServiceSubCategoryTableData} from "../../../selectors/TableDataSelector";
import './service.scss'
import SubCategorySkeleton from "../../components/placeholder/SubCategorySkeleton";
import {selectCheckBoxItems} from "../../../selectors/CheckBoxDataSelector";
import {CheckBoxConstants} from "../../../assets/constants/GeneralConstants";
import GetSubCategoriesOfCategoryRequest from "../../../stores/subcategory/request/GetSubCategoriesOfCategoryRequest";
import {useParams} from "react-router";

export const ServiceSubCategoryContainer = (props) => {

    const dispatch = useDispatch();
    let { categoryId } = useParams();
    const isRequesting = useSelector(state => selectRequesting(state, [SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES ,
        SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES_BY_CATEGORY]));

    const subCategoryList = useSelector(state => selectServiceSubCategoryTableData(state));

    useEffect(() => {
        if(categoryId)dispatch(SubCategoryAction._requestGetServiceSubCategoriesByCategory(new GetSubCategoriesOfCategoryRequest(categoryId)))
    }, [categoryId])

    const subcategorySkeletonList = [];
    for(let i=0;i<10;i++) subcategorySkeletonList.push(<SubCategorySkeleton key={Math.random()}/>)

    return (
        <div className={"service-subcategory-list-container"}>
            {isRequesting ?subcategorySkeletonList :
                subCategoryList.map(serviceSubCategoryItem => <ServiceSubCategorySummary key={serviceSubCategoryItem.id} serviceSubCategoryItem={serviceSubCategoryItem}/>)}
        </div>
    )
}


