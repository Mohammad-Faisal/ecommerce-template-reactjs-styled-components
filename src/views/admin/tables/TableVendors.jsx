import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { selectVendorTableData} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import VendorAction from "../../../stores/vendor/VendorAction";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import ModalDeleteConfirmation from "../../modals/ModalDeleteConfirmation";
import UpdateVendorStatusRequest from "../../../stores/vendor/request/UpdateVendorStatusRequest";
import ModalActionConfirmation from "../../modals/ModalActionConfirmation";
import {AvatarImage, BlueTag, GreenTag, RedTag} from "../../components/Tags";

export default function TableVendors(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectVendorTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [VendorAction.REQUEST_GET_VENDORS]));
    const isFinished = useSelector(state => selectFinished(state, [VendorAction.REQUEST_CREATE_VENDOR]));
    const isFinishedUpdate = useSelector(state => selectFinished(state, [VendorAction.REQUEST_UPDATE_VENDOR_STATUS]));

    useEffect( () => {dispatch(VendorAction._requestGetVendors())} , [])

    useEffect( () => {
        dispatch(VendorAction._requestGetVendors())
    } , [isFinished , isFinishedUpdate])


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
        // {
        //     title: 'Image',
        //     dataIndex: 'image'
        // },
        {
            title: 'Address',
            dataIndex :'address'
        },
        {
            title: 'Contact Information',
            dataIndex :'contact'
        },
        {
            title: 'Verification Status',
            render : (record) =><BlueTag>{record.verificationStatus} </BlueTag>
        },
        {
            title: 'IsActive',
            render : (record) =>{
                if(record.isActive) return <GreenTag>Active </GreenTag>
                else return <RedTag>In Active </RedTag>
            }
        },
        {
            title: 'Change Status',
            render : (record) => <ModalActionConfirmation
                actionName={"Change Status"}
                message={"Do you want to change status of this vendor?"}
                onConfirm={() => dispatch(VendorAction._requestUpdateVendorStatus( new UpdateVendorStatusRequest(record )))}
            />
        }

    ];

    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Vendors"}
            columns={columns}
            loading={isRequesting}
        />
    )

}

