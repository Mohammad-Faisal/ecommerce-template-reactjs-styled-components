import {createSelector} from "reselect";



export const selectActiveProductCategoryList = createSelector(
    state => state.category.productCategoryList ,
    (allData ) => {
        const dataList = [];
        if(allData)allData.data.forEach(item => {if(item.isActive)dataList.push(item)})
        return dataList;
    }
)
