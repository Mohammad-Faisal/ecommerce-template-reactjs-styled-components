
import React, { useState, useEffect } from 'react'
import ProductInPreviousOrder from "../product/ProductInPreviousOrder";
import {Table} from "semantic-ui-react";
import {ItemType} from "../../../assets/constants/GeneralConstants";

const OrderItemsSummary = (props) => {


    return (

        <div>
            {props.orderedItems.map(orderedItem => <ProductInPreviousOrder orderedProduct={orderedItem} />)}

            <Table definition >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={10}>Total Amount</Table.Cell>
                        <Table.Cell textAlign={"right"}>৳ {props.orderInvoice.basicAmount}</Table.Cell>
                    </Table.Row>

                    <Table.Row >
                        <Table.Cell>Shipping Cost</Table.Cell>
                        <Table.Cell textAlign={"right"}>৳ {props.orderInvoice.deliveryCharge}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Amount to be paid</Table.Cell>
                        <Table.Cell textAlign={"right"}>৳ {props.orderInvoice.totalPayable} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Paid </Table.Cell>
                        <Table.Cell textAlign={"right"}>৳ {props.orderInvoice.paidAmount }</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            {/*<div>Total Payable   {props.orderInvoice.totalPayable}</div>*/}
            {/*<div>Total Paid   {props.orderInvoice.paidAmount}</div>*/}
        </div>
    )
}

export default OrderItemsSummary;