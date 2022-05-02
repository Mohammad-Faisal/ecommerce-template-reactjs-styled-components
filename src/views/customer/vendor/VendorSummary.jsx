import React, {useEffect} from 'react'
import './vendos.scss';
import {useLocation, useParams} from "react-router";
import {withRouter} from "react-router-dom";
import {Routes} from "../../../assets/constants/routes";
import {AvatarImage} from "../../components/Tags";
import {ItemType} from "../../../assets/constants/GeneralConstants";
import VendorAction from "../../../stores/vendor/VendorAction";
import GetVendorsOfCategoryRequest from "../../../stores/vendor/request/GetVendorsOfCategoryRequest";
import {useSelector} from "react-redux";
import {selectVendorByProductCategory} from "../../../selectors/TableDataSelector";

const VendorSummary = (props) => {

    let {  categoryId , vendorId , itemType } = useParams();
    const vendorList = useSelector(state => selectVendorByProductCategory(state));

    const handleVendorClick = () => {
        props.history.push(`${Routes.PRODUCT}/${categoryId}/vendors/${props.vendorItem.id}`)
    }

    useEffect(() => {
        if(vendorList && vendorList.length>0 && itemType === ItemType.PRODUCT){
            props.history.push(`${Routes.PRODUCT}/${categoryId}/vendors/${vendorList[0].id}`)
        }
    }, [vendorList]);


    return (
        <div
            onClick={handleVendorClick}
            className="container-vendor-summary"
            style={ ( parseInt(vendorId) === props.vendorItem.id) ? hoverEffectStyle : {}}
        >
            <AvatarImage src={props.vendorItem.image}/>
            <div className="container-vendor-info">
                <div>{props.vendorItem.name}</div>
            </div>
        </div>
    )
}

export default withRouter(VendorSummary)

const hoverEffectStyle = {
    border:"0.5px solid #009E7F" ,
    background:"#fff"
}

