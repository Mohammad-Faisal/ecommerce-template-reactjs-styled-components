import ActionUtility from '../../utils/ActionUtility';
import UserEffect from "./UserEffect";

export default class UserAction {

    static SET_USER_ID = 'SET_USER_ID';
    static SET_FIREBASE_USER_ID = 'SET_FIREBASE_USER_ID';

    static REQUEST_GET_USER_WITH_FIREBASE_ID = 'REQUEST_GET_USER_WITH_FIREBASE_ID';
    static REQUEST_GET_USER_WITH_FIREBASE_ID_FINISHED = 'REQUEST_GET_USER_WITH_FIREBASE_ID_FINISHED';


    static REQUEST_CREATE_NEW_USER = 'REQUEST_CREATE_NEW_USER';
    static REQUEST_CREATE_NEW_USER_FINISHED = 'REQUEST_CREATE_NEW_USER_FINISHED';


    static _setUserId(userID) {
        return ActionUtility._createAction(UserAction.SET_USER_ID,userID);
    }

    static _setFirebaseUserId(userID) {
        return ActionUtility._createAction(UserAction.SET_FIREBASE_USER_ID,userID);
    }

    static _requestGetUserWithFirebaseId(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, UserAction.REQUEST_GET_USER_WITH_FIREBASE_ID, UserEffect._requestGetUserWithFirebaseId, request )
        }
    }

    static _requestCreateNewUser(request) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, UserAction.REQUEST_CREATE_NEW_USER, UserEffect._requestCreateNewUser, request )
        }
    }



}