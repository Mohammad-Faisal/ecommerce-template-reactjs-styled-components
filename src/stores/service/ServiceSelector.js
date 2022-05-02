import {createSelector} from "reselect";



export const selectServiceCategoryList = createSelector(
    state => state.category.serviceCategoryList ,
    (allData ) =>(allData ? allData.data : [])
)


export const selectActiveServiceCategoryList = createSelector(
    state => state.category.serviceCategoryList ,
    (allData ) => {
        const dataList = [];
        if(allData)allData.data.forEach(item => {if(item.isActive)dataList.push(item)})
        return dataList;
    }
)