import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {selectProductTableData, selectVendorProductTableData} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import ProductAction from "../../../stores/product/ProductAction";
import ModalDeleteConfirmation from "../../modals/ModalDeleteConfirmation";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";
import DeleteSubCategoryRequest from "../../../stores/subcategory/request/DeleteSubCategoryRequest";
import RemoveProductFromVendorRequest from "../../../stores/product/request/RemoveProductFromVendorRequest";
import {AvatarImage} from "../../components/Tags";

export default function TableVendorProducts(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectVendorProductTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [ProductAction.REQUEST_GET_PRODUCTS_BY_VENDOR]));
    const isFinished = useSelector(state => selectFinished(state, [ProductAction.REQUEST_GET_PRODUCTS_BY_VENDOR]));

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
        },
        {
            title: 'IsActive',
            dataIndex :'isActive' ,
            render : (record) => <ModalDeleteConfirmation
                message={"Do you want to remove product from this vendor?"}
                onConfirm={() => dispatch(ProductAction._requestRemoveProductFromVendor( new RemoveProductFromVendorRequest(record.id )))}
            />
        }

    ];

    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Products of Vendor"}
            columns={columns}
            loading={isRequesting}
        />
    )

}


