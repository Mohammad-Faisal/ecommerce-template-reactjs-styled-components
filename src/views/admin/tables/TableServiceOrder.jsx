import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { selectServiceOrderTableData,} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import OrderAction from "../../../stores/order/OrderAction";

export default function TableServiceOrder(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectServiceOrderTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [OrderAction.REQUEST_GET_ALL_SERVICE_ORDERS]));

    useEffect( () => {dispatch(OrderAction._requestGetAllServiceOrders())} , [])


    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Service Orders"}
            columns={columns}
            loading={isRequesting}
        />
    )
}

const columns = [
    {
        title: 'Order Id',
        dataIndex: 'id'
    },
    {
        title: 'Order Invoice Id',
        dataIndex: 'orderInvoiceId'
    },
    {
        title: 'User ID',
        dataIndex: 'userId'
    },
    {
        title: 'Status',
        dataIndex :'currentStatus'
    },
    {
        title: 'Contact Info',
        dataIndex :'contactInfo'
    },
    {
        title: 'Delivery Address',
        dataIndex :'deliveryAddress'
    },
    {
        title: 'Order Date',
        dataIndex :'orderDate'
    },
];
