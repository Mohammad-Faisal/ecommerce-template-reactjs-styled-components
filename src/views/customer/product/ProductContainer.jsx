import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import ProductSummary from './ProductSummary';
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import './product.scss';
import ProductSkeleton from "../../components/placeholder/ProductSkeleton";
import ProductAction from "../../../stores/product/ProductAction";
import GetProductsOfVendorRequest from "../../../stores/product/request/GetProductsOfVendorRequest";
import {selectVendorProductTableData} from "../../../selectors/TableDataSelector";
import {useParams} from "react-router";
import {Button} from "semantic-ui-react";

export const ProductContainer = (props) => {

    const dispatch = useDispatch();
    let {  vendorId , categoryId } = useParams();

    const [pageId, setPageId] = useState(0);
    const isRequestingProducts = useSelector(state => selectRequesting(state, [ProductAction.REQUEST_GET_PRODUCTS_BY_VENDOR]));
    const productList = useSelector(state => selectVendorProductTableData(state));
    const [ aggregatedProductList , setAggregatedProductList] = useState([])


    useEffect(() => {
        if(categoryId){
            console.log(categoryId);
            setAggregatedProductList([])
            if(productList)dispatch(ProductAction._clearProducts())
        }
        if(vendorId)loadProductsOfVendor();
    } , [ categoryId , vendorId])

    useEffect(() => {
        loadProductsOfVendor();
    } , [pageId ])

    const loadProductsOfVendor =  () => {
        dispatch(ProductAction._requestGetProductsByVendor( new GetProductsOfVendorRequest(vendorId ,categoryId, pageId)));
    }

    useEffect(() => {
        console.log("products are ", productList);
        console.log("aggregated products are ", aggregatedProductList);
        setAggregatedProductList(aggregatedProductList.concat(productList))
    } , [productList])

    const productSkeleton = [];
    for(let i=0;i<10;i++) productSkeleton.push(<ProductSkeleton key={Math.random()}/>)

    return (
        <>
            <div className={"product-list-container"}>

                {aggregatedProductList.map(productItem =>
                <ProductSummary key={productItem.id} productItem={productItem}/>
                )}
                
                {/*{ (aggregatedProductList.length===0 || isRequestingProducts ) ?*/}
                {/*    productSkeleton :*/}
                {/*    aggregatedProductList.map(productItem =>*/}
                {/*        <ProductSummary key={productItem.id} productItem={productItem}/>*/}
                {/*        )*/}
                {/*}*/}
            </div>

            <Button
                loading={isRequestingProducts}
                style={{marginBottom:"100px" , marginTop:"50px", marginRight:"60px" , marginLeft:"60px"}}
                onClick={() => setPageId(pageId + 1) }>
                Load More
            </Button>
        </>


    )

}


