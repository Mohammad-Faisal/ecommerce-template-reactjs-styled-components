import React , {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {selectServiceTableData} from "../../../selectors/TableDataSelector";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import TableComponent from "../../components/table/ComponentTable";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import ServiceAction from "../../../stores/service/ServiceAction";
import {GreenTag, RedTag} from "../../components/Tags";
import ModalActionConfirmation from "../../modals/ModalActionConfirmation";
import UpdateServiceStatusRequest from "../../../stores/service/request/UpdateServiceStatusRequest";

export default function TableServices(props) {

    const dispatch = useDispatch();
    const tableData = useSelector(state => selectServiceTableData(state));
    const isRequesting = useSelector(state => selectRequesting(state, [ServiceAction.REQUEST_GET_ALL_SERVICES]));
    const isFinishedCreate = useSelector(state => selectFinished(state, [ServiceAction.REQUEST_CREATE_NEW_SERVICE]));
    const isFinishedUpdate = useSelector(state => selectFinished(state, [ServiceAction.REQUEST_UPDATE_SERVICE_STATUS]));


    useEffect( () => {
        dispatch(ServiceAction._requestGetAllServices())
    } , [isFinishedCreate , isFinishedUpdate])


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
                message={"Do you want to change status of this Service?"}
                onConfirm={() => dispatch(ServiceAction._requestUpdateServiceStatus( new UpdateServiceStatusRequest(record )))}
            />
        }

    ];

    return (
        <TableComponent
            tableData ={tableData}
            tableTitle={"Services"}
            columns={columns}
            loading={isRequesting}
        />
    )

}


