import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {selectProductOrderTableData,} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import OrderAction from "../../../stores/order/OrderAction";
import ModalActionConfirmation from "../../modals/ModalActionConfirmation";
import VendorAction from "../../../stores/vendor/VendorAction";
import UpdateVendorStatusRequest from "../../../stores/vendor/request/UpdateVendorStatusRequest";
import ModalUpdateOrderStatus from "../../modals/ModalUpdateOrderStatus";

export default function TableProductOrders(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectProductOrderTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [OrderAction.REQUEST_GET_ALL_PRODUCT_ORDERS]));

    useEffect( () => {dispatch(OrderAction._requestGetAllProductOrders())} , [])

    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Product Orders"}
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
        title: 'User Name',
        dataIndex: 'userName'
    },
    {
        title: 'User Contact',
        dataIndex: 'userContact'
    },
    {
        title: 'User Address',
        dataIndex: 'userAddress'
    },
    {
        title: 'Order Status',
        dataIndex :'orderStatus'
    },
    {
        title: 'Payment Status',
        dataIndex :'paymentStatus'
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
    {
        title: 'Update Status',
        render : (record) => <ModalUpdateOrderStatus
            orderData = {record}
            // actionName={"Change Status"}
            // message={"Do you want to change status of this vendor?"}
            // onConfirm={() => dispatch(VendorAction._requestUpdateVendorStatus( new UpdateVendorStatusRequest(record )))}
        />
    }
];
