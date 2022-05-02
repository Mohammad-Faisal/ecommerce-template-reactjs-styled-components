import React , {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {
    selectProductCategoryTableData,
} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import CategoryAction from "../../../stores/category/CategoryAction";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";

import ModalDeleteConfirmation from "../../modals/ModalDeleteConfirmation";
import ReqDeleteCategory from "../../../stores/category/request/ReqDeleteCategory";
import {AvatarImage, GreenTag, RedTag} from "../../components/Tags";
import ModalActionConfirmation from "../../modals/ModalActionConfirmation";
import VendorAction from "../../../stores/vendor/VendorAction";
import ReqUpdateCategoryStatus from "../../../stores/category/request/ReqUpdateCategoryStatus";

export default function TableProductCategories(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectProductCategoryTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [CategoryAction.REQUEST_GET_PRODUCT_CATEGORIES]));
    const isFinished = useSelector(state => selectFinished(state, [CategoryAction.REQUEST_CREATE_PRODUCT_CATEGORY]));
    const isFinishedUpdate = useSelector(state => selectFinished(state, [CategoryAction.REQUEST_UPDATE_ACTIVE_STATUS]));

    useEffect( () => {dispatch(CategoryAction._requestGetProductCategories())} , [ isFinished , isFinishedUpdate])


    const columns = [
        {
            title: 'Image',
            render : (record) => <AvatarImage  src={record.logo}/>
        },
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Description',
            dataIndex :'description'
        },
        {
            title: 'IsActive',
            render : (record) =>{
                if(record.isActive) return <GreenTag>Active </GreenTag>
                else return <RedTag>In Active </RedTag>
            }
        },
        {
            title: 'Action',
            render : (record) => <ModalDeleteConfirmation
                message={"Do you want to delete this category?"}
                onConfirm={() => dispatch(CategoryAction._requestDeleteProductCategory( new ReqDeleteCategory(record.id )))}
            />
        },
        {
            title: 'Change Status',
            render : (record) => <ModalActionConfirmation
                actionName={"Change Status"}
                message={"Do you want to change status of this Category?"}
                onConfirm={() => dispatch(CategoryAction._requestUpdateProductCategoryStatus( new ReqUpdateCategoryStatus(record )))}
            />
        }
    ];


    return <TableComponent
        tableData ={tableData}
        tableTitle={"Product Categories"}
        columns={columns}
        loading={isRequesting}
    />

}
