import {createSelector} from "reselect";
import {RadioConstants} from "../assets/constants/GeneralConstants";

export class RadioDataSelector{
    static _getRadioItemsArrayByType = (state , dropDownFor) => {
        switch(dropDownFor){
            case RadioConstants.TYPE_CATEGORY_FOR : return RadioConstants.radioOptionsCategoryType;
            case RadioConstants.TYPE_ORDER_STATUS : return RadioConstants.radioOptionsOrderStatus;
            default : return []
        }
    }
}


export const selectRadioItems = createSelector(
    (state , dropDownFor) => RadioDataSelector._getRadioItemsArrayByType(state , dropDownFor) ,
    (state , radioFor) => radioFor ,
    (allData , dropDownFor ) => allData
)



