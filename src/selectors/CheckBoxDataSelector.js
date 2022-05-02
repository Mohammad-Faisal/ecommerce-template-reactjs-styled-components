import {createSelector} from "reselect";
import SelectionItemModel from "../models/SelectionItemModel";
import {CheckBoxConstants} from "../assets/constants/GeneralConstants";

export class CheckBoxDataSelector{

    static _getCheckboxItemsArrayByType = (state , checkBoxFor) => {
        switch(checkBoxFor){
            case CheckBoxConstants.TYPE_PRODUCT_CATEGORY : return _getListAsCheckBoxItems(state.category.productCategoryList);
            case CheckBoxConstants.TYPE_PRODUCT_SUBCATEGORY : return _getListAsCheckBoxItems(state.subcategory.productSubCategoryList);
            case CheckBoxConstants.TYPE_SERVICE_CATEGORY : return _getListAsCheckBoxItems(state.category.serviceCategoryList);
            case CheckBoxConstants.TYPE_VENDOR : return _getListAsCheckBoxItems(state.vendor.vendorList);
            default : return []
        }
    }

}

const _getListAsCheckBoxItems = (checkBoxData) => {
    const dataList = [];
    if(checkBoxData) {
        checkBoxData.data.forEach(item => {
            if(item.isActive)dataList.push( new  SelectionItemModel(item.name , item.id) )
        })
    }
    return dataList;
}


export const selectCheckBoxItems = createSelector(
    (state , checkBoxFor) => CheckBoxDataSelector._getCheckboxItemsArrayByType(state , checkBoxFor) ,
    (state , checkBoxFor) => checkBoxFor ,
    (allData , checkBoxFor ) => allData
)