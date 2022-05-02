import {createSelector} from "reselect";
import { DropDownConstants} from "../assets/constants/GeneralConstants";
import DropdownItemModel from "../models/DropdownItemModel";

export class DropdownDataSelector{

    static _getDropDownItemsArrayByType = (state , dropDownFor) => {
        switch(dropDownFor){
            case DropDownConstants.TYPE_PRODUCT_CATEGORY : return _getCategoryListAsDropDown(state.category.productCategoryList);
            case DropDownConstants.TYPE_PRODUCT_SUBCATEGORY : return _getCategoryListAsDropDown(state.subcategory.productSubCategoryList);
            case DropDownConstants.TYPE_SERVICE_CATEGORY : return _getCategoryListAsDropDown(state.category.serviceCategoryList);
            case DropDownConstants.TYPE_SERVICE_SUBCATEGORY : return _getCategoryListAsDropDown(state.subcategory.serviceSubCategoryList);
            case DropDownConstants.TYPE_SERVICE : return _getCategoryListAsDropDown(state.service.allServices);
            case DropDownConstants.TYPE_PRODUCT : return _getCategoryListAsDropDown(state.product.allProducts);
            case DropDownConstants.TYPE_VENDOR : return _getVendorsListAsDropDownItems(state.vendor.vendorList);
            default : return []
        }
    }

}

const _getCategoryListAsDropDown = (checkBoxData) => {
    if(checkBoxData)return checkBoxData.data.map(item => new  DropdownItemModel(item.name , item.id) )
    else return []
}

const _getVendorsListAsDropDownItems = (checkBoxData) => {
    if(checkBoxData)return checkBoxData.data.map(item => new  DropdownItemModel(item.name , item.id) )
    else return []
}


export const selectDropDownItems = createSelector(
    (state , dropDownFor) => DropdownDataSelector._getDropDownItemsArrayByType(state , dropDownFor) ,
    (state , dropDownFor) => dropDownFor ,
    (allData , dropDownFor ) => allData
)



