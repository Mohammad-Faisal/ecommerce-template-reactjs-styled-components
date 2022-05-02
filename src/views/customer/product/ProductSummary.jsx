
import React from 'react'
import ButtonAddToCart from '../cart/ButtonAddToCart';
import {ItemType} from "../../../assets/constants/GeneralConstants";
import {Fade} from "react-reveal";


const ProductSummary = (props) => {

    return (
        <Fade  >
            <div className="container-product-summary">
                <div className="container-product-summary-image">
                    <img alt={"test"} className="product-summary-image" src={`${props.productItem.image}`} />
                </div>

                <div className="container-product-name">{props.productItem.name}</div>
                <div className="container-product-summary-bottom">
                    <div className="container-product-price">৳ {props.productItem.price}</div>
                    <ButtonAddToCart item={props.productItem} itemType={ItemType.PRODUCT}/>
                </div>
                {/* <button onClick={removeProductFromCart}> Remove from cart</button> */}
            </div>
        </Fade>
    )
}

export default ProductSummary;