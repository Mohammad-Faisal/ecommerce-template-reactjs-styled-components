import React, {useEffect} from 'react'
import './service.scss';
import {Routes} from "../../../assets/constants/routes";
import {useParams, withRouter} from "react-router";
import {AvatarImage} from "../../components/Tags";
import {ItemType} from "../../../assets/constants/GeneralConstants";
import {useSelector} from "react-redux";
import {selectServiceSubCategoryTableData} from "../../../selectors/TableDataSelector";

const ServiceSubCategorySummary = (props) => {

    const {categoryId ,itemType , subCategoryId} = useParams();
    const subCategoryList = useSelector(state => selectServiceSubCategoryTableData(state));

    const handleSubCategoryClick = () => {
        props.history.push(`${Routes.SERVICE}/${categoryId}/subCategories/${props.serviceSubCategoryItem.id}`)
    }

    useEffect(() => {
        if(subCategoryList && subCategoryList.length>0 && itemType === ItemType.SERVICE){
            props.history.push(`${Routes.SERVICE}/${categoryId}/subCategories/${subCategoryList[0].id}`)
        }
    }, [subCategoryList]);


    return (
        <div
            onClick={handleSubCategoryClick}
            className="container-vendor-summary"
            style={ ( parseInt(subCategoryId) === props.serviceSubCategoryItem.id) ? hoverEffectStyle : {}}
        >
            <AvatarImage src={props.serviceSubCategoryItem.logo} />
            <div>{props.serviceSubCategoryItem.name}</div>
        </div>
    )
}

export default withRouter(ServiceSubCategorySummary);

const hoverEffectStyle = {
    border:"0.5px solid #009E7F" ,
    background:"#fff"
}

