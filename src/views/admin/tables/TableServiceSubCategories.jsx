import React , {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {
    selectServiceSubCategoryTableData,
} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import CategoryAction from "../../../stores/category/CategoryAction";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import ModalDeleteConfirmation from "../../modals/ModalDeleteConfirmation";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";
import DeleteSubCategoryRequest from "../../../stores/subcategory/request/DeleteSubCategoryRequest";
import {AvatarImage} from "../../components/Tags";

export default function TableServiceSubCategories(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectServiceSubCategoryTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [SubCategoryAction.REQUEST_GET_SERVICE_SUB_CATEGORIES]));
    const isFinished = useSelector(state => selectFinished(state, [SubCategoryAction.REQUEST_CREATE_SERVICE_SUB_CATEGORY]));

    useEffect( () => {dispatch(SubCategoryAction._requestGetServiceSubCategories())} , [])


    useEffect(() => {
        dispatch(SubCategoryAction._requestGetServiceSubCategories())
    } , [isFinished])

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
            dataIndex :'isActive' ,
            render : (record) => <ModalDeleteConfirmation
                message={"Do you want to delete this subcategory?"}
                onConfirm={() => dispatch(SubCategoryAction._requestDeleteServiceSubCategory( new DeleteSubCategoryRequest(record.id )))}
            />
        }
    ];


    return <TableComponent
        tableData ={tableData}
        tableTitle={"Service Sub Categories"}
        columns={columns}
        loading={isRequesting}
    />

}
