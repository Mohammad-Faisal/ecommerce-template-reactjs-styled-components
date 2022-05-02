
import React, { useState, useEffect } from 'react'
import {  useSelector } from 'react-redux';
import {
    selectTotalCostOfProduct,
    selectTotalCostOfService, selectTotalProductItemCount, selectTotalServiceCountInCart
} from '../../../stores/cart/CartSelector';
import _ from 'lodash';
import ProductInOrder from '../product/ProductInOrder';
import {Message, Table} from "semantic-ui-react";
import {ItemType} from "../../../assets/constants/GeneralConstants";
import {useParams} from "react-router";


const OrderPreview = (props) => {

    const {itemType} = useParams();
    const productsInCart = useSelector(state => state.cart.productsInCart);
    const servicesInCart = useSelector(state => state.cart.servicesInCart);

    const [cartIndividualItems, setCartIndividualItems] = useState([])

    const totalCostOfProduct = useSelector(selectTotalCostOfProduct);
    const totalCostOfService = useSelector(selectTotalCostOfService);

    const totalProductItem = useSelector(selectTotalProductItemCount);
    const totalServiceItem = useSelector(selectTotalServiceCountInCart);



    useEffect(() => {

        const distinctItems = itemType=== ItemType.PRODUCT?
            _.uniqBy(productsInCart, (item) => item.id) :
            _.uniqBy(servicesInCart, (item) => item.id);
        setCartIndividualItems(Array.from(distinctItems));
    }, [productsInCart ,servicesInCart ])


    return (
        <div className="container-order-details segment">
            <div style={{fontSize:"16px", textAlign:"start" , color:"#009E7F"}}> Order Details</div>
            <div className='attached fluid segment' style={{overflow:"auto"}}>
                {cartIndividualItems.map(item => <ProductInOrder key={item.id} item={item} itemType={itemType}/>)}
            </div>


            <Table definition >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={10}>Total Amount</Table.Cell>
                        <Table.Cell textAlign={"right"}>৳ {itemType===ItemType.PRODUCT? totalCostOfProduct : totalCostOfService}</Table.Cell>
                    </Table.Row>

                    {itemType=== ItemType.PRODUCT &&
                        <Table.Row >
                            <Table.Cell>Shipping Cost</Table.Cell>
                            <Table.Cell textAlign={"right"}>৳ {60}</Table.Cell>
                        </Table.Row>
                    }

                    <Table.Row>
                        <Table.Cell>Amount to be paid</Table.Cell>
                        <Table.Cell textAlign={"right"}>৳ {itemType===ItemType.PRODUCT ?parseInt(totalCostOfProduct) + 60 :parseInt(totalCostOfService) }</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

        </div>
    )
}

export default OrderPreview;