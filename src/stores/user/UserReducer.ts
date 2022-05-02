import BaseReducer from '../../utils/BaseReducer';
import UserAction from "./UserAction";


export default class UserReducer extends BaseReducer {

    initialState = {
        userOfFirebaseId: null ,

        userId: null ,
        firebaseUserId : null
    };

    [UserAction.REQUEST_GET_USER_WITH_FIREBASE_ID_FINISHED](state, action) {
        return {
            ...state,
            userOfFirebaseId: action.payload,
        };
    }


    [UserAction.SET_FIREBASE_USER_ID](state, action) {
        return {
            ...state,
            firebaseUserId: action.payload,
        };
    }


    [UserAction.SET_USER_ID](state, action) {
        return {
            ...state,
            userId: action.payload,
        };
    }


}