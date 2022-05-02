import { createSelector } from 'reselect';



export const _selectOrdersOfUser = createSelector(
    state => state.order.productOrdersOfUserList ,
    (allData ) =>(allData ? allData.data : [])
)
