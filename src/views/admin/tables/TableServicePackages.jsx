import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {
    selectServicePackageTableData,
} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import ServiceAction from "../../../stores/service/ServiceAction";
import { GreenTag, RedTag} from "../../components/Tags";
import ModalActionConfirmation from "../../modals/ModalActionConfirmation";
import UpdatePackageStatusRequest from "../../../stores/service/request/UpdatePackageStatusRequest";

export default function TableServicePackages(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectServicePackageTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [ServiceAction.REQUEST_GET_ALL_SERVICE_PACKAGES]));
    const isFinished = useSelector(state => selectFinished(state, [ServiceAction.REQUEST_CREATE_SERVICE_PACKAGE]));

    useEffect( () => {
        dispatch(ServiceAction._requestGetAllServicePackages())
    } , [isFinished])



    const columns = [
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
                message={"Do you want to change status of this Package?"}
                onConfirm={() => dispatch(ServiceAction._requestUpdateServicePackageStatus( new UpdatePackageStatusRequest(record )))}
            />
        }

    ];

    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Service Packages"}
            columns={columns}
            loading={isRequesting}
        />
    )

}

