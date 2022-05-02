import {createSelector} from "reselect";



export const selectUserInfoOfFirebaseId = createSelector(
    state => state.user.userOfFirebaseId ,
    (allData ) => {
        if(allData && allData.data && allData.data.length>0 ){
            return allData.data[0];
        }else{
            return null;
        }
    }
)
