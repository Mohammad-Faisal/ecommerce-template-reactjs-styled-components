import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import '../product/product.scss';
import ServiceSummary from "./ServiceSummary";
import ServiceSkeleton from "../../components/placeholder/ServiceSkeleton";
import {selectServicesOfSubCategory} from "../../../selectors/TableDataSelector";
import ServiceAction from "../../../stores/service/ServiceAction";
import {useParams} from "react-router";
import GetServiceBySubCategoryRequest from "../../../stores/service/request/GetServiceBySubCategoryRequest";

export const ServiceContainer = (props) => {

    const dispatch = useDispatch();
    let { subCategoryId } = useParams();

    const isRequestingServices = useSelector(state => selectRequesting(state, [ServiceAction.REQUEST_GET_SERVICES_BY_SUB_CATEGORY]));
    const serviceList = useSelector(state => selectServicesOfSubCategory(state));
    const [ activeServiceList , setActiveServiceList ]  = useState([]);



    useEffect(() => {
        dispatch(ServiceAction._requestGetServicesBySubCategory(new GetServiceBySubCategoryRequest(subCategoryId)))
    } , [subCategoryId])

    useEffect(() => {
        const temporaryServiceList = [];
        for(const serviceItem of serviceList) if(serviceItem.isActive) temporaryServiceList.push(serviceItem);
        setActiveServiceList(temporaryServiceList);
    } , [serviceList])


    const serviceSkeleton = [];
    for(let i=0;i<10;i++) serviceSkeleton.push(<ServiceSkeleton key={Math.random()}/>)

    return (
        <div className={"service-list-container"}>
            { isRequestingServices ?
                serviceSkeleton:
                activeServiceList.map(serviceItem => <ServiceSummary key={serviceItem.id} serviceItem={serviceItem}/>)}
        </div>
    )

}


