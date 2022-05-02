import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {selectProductTableData} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import ProductAction from "../../../stores/product/ProductAction";
import {AvatarImage} from "../../components/Tags";

export default function TableProducts(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectProductTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [ProductAction.REQUEST_GET_ALL_PRODUCTS]));
    const isFinished = useSelector(state => selectFinished(state, [ProductAction.REQUEST_CREATE_NEW_PRODUCT]));

    useEffect( () => {dispatch(ProductAction._requestGetAllProducts())} , [])

    useEffect( () => {
        dispatch(ProductAction._requestGetAllProducts())
    } , [isFinished])

    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Products"}
            columns={columns}
            loading={isRequesting}
        />
    )

}

const columns = [
    {
        title: 'Image',
        render : (record) => <AvatarImage  src={record.image}/>
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
        title: 'Price',
        dataIndex :'price'
    },
    {
        title: 'Available Quantity',
        dataIndex :'availableQuantity'
    },
    {
        title: 'Is In Stock',
        dataIndex :'inStock'
    },
    {
        title: 'Rating',
        dataIndex :'rating'
    }

];
