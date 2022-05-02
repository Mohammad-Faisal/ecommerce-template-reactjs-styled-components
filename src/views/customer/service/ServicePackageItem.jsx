import React from 'react'
import './service.scss';
import ButtonAddToCart from "../cart/ButtonAddToCart";
import {ItemType} from "../../../assets/constants/GeneralConstants";

const ServicePackageItem = (props) => {

    return (
        <div className="container-service-package-item">

            <div className={"container-service-package-info"}>
                <div className="container-product-name">{props.packageItem.name}</div>
                <div className="container-product-price">$ {props.packageItem.price}</div>
            </div>
            <div style={{alignSelf:"center"}}>
                <ButtonAddToCart item={props.packageItem} itemType={ItemType.SERVICE}/>
            </div>

        </div>
    )
}

export default ServicePackageItem;