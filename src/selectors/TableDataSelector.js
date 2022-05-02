import { createSelector } from 'reselect';
import { TableType} from '../assets/constants/GeneralConstants';


export class TableDataSelector {
    static _getTableDataFromStore(state, tableType) {
        switch (tableType) {
            case TableType.PRODUCT_CATEGORIES: return state.category.productCategoryList;
            case TableType.SERVICE_CATEGORIES: return state.category.serviceCategoryList;
            case TableType.PRODUCT_SUB_CATEGORIES: return state.category.serviceCategoryList;
            case TableType.SERVICE_SUBCATEGORIES: return state.category.serviceCategoryList;
            default: return [];
        }
    }
}


export const selectProductCategoryTableData = createSelector(
    state => state.category.productCategoryList ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectProductSubCategoryTableData = createSelector(
    state => state.subcategory.productSubCategoryList ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectServiceCategoryTableData = createSelector(
    state => state.category.serviceCategoryList ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectServiceSubCategoryTableData = createSelector(
    state => state.subcategory.serviceSubCategoryList ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectVendorTableData = createSelector(
    state => state.vendor.vendorList ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectVendorByProductCategory = createSelector(
    state => state.vendor.vendorsByCategory ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectServiceTableData = createSelector(
    state => state.service.allServices ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectServicesOfSubCategory = createSelector(
    state => state.service.servicesBySubCategory ,
    (allData ) =>(allData ? allData.data : [])
)

export const selectServicePackageTableData = createSelector(
    state => state.service.allServicePackages ,
    (allData ) =>(allData ? allData.data : [])
)


export const selectProductTableData = createSelector(
    state => state.product.allProducts ,
    (allData ) =>(allData ? allData.data : [])
)


export const selectVendorProductTableData = createSelector(
    state => state.product.productsByVendor ,
    (allData ) =>( allData ? allData.data.map(item => {
        return {
            id : item.id ,
            name : item.product.name,
            price : item.product.price,
            image : item.product.image,
            description : item.product.description,
        }
    }) : [])
)

export const selectProductOrderTableData = createSelector(
    state => state.order.allProductOrdersList ,
    (allData ) =>(allData ? allData.data.map(item => {

        return {
            id : item.id ,
            userId : item.userId ,
            currentStatus :item.orderStatus ,
            orderStatus :item.orderStatus ,
            paymentStatus :item.paymentStatus ,
            contactInfo : item.contactInfo?.contact ,
            deliveryAddress : item.deliveryInfo?.address ,
            orderInvoiceId : item.orderInvoice?.id ,
            orderDate : item.createdDate ,
            userName : item.user.name ,
            userContact : item.user.phone ,
            userAddress : item.user.address ,
        }
    }) : [])
)
export const selectServiceOrderTableData = createSelector(
    state => state.order.allServiceOrdersList ,
    (allData ) =>(allData ? allData.data.map(item => {
        return {
            id : item.id ,
            userId : item.userId ,
            currentStatus :item.currentStatus ,
            contactInfo : item.contactInfo?.contact ,
            deliveryAddress : item.deliveryInfo?.address,
            orderInvoiceId : item.orderInvoice?.id ,
            orderDate : item.createdDate
        }
    }) : [])
)

