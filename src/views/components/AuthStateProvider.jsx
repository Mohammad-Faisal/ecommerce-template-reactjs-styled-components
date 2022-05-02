import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MiscAction from "../../stores/misc/MiscAction";
import firebase from "../../utils/firebase";
import UserAction from "../../stores/user/UserAction";
import ReqGetUserByFirebaseId from "../../stores/user/request/ReqGetUserByFirebaseId";
import {selectUserInfoOfFirebaseId} from "../../stores/user/UserSelector";


export default function AuthStateProvider() {

    const [isSignedIn , setIsSignedIn] = useState(false);
    const userInfo = useSelector(selectUserInfoOfFirebaseId);
    const firebaseUserId = useSelector(state => state.user.firebaseUserId);
    const dispatch = useDispatch();

    useEffect(() => {


        // dispatch(UserAction._setUserId(2))
        // dispatch(UserAction._setFirebaseUserId("PR9KiWRdFFclz8tQZnzvrt3rqju2"))
        //dispatch(MiscAction._setUserId(1234))

        firebase.auth().onAuthStateChanged(user => {
            if (user) dispatch(UserAction._setFirebaseUserId(user.uid))
            else dispatch(UserAction._setFirebaseUserId(null))
            dispatch(MiscAction._setAuthStatus(!!user));
            setIsSignedIn(!!user)
        });
    } , []);

    useEffect(() => {
        if(isSignedIn && firebaseUserId){
            dispatch(UserAction._requestGetUserWithFirebaseId(new ReqGetUserByFirebaseId(firebaseUserId)))
        }
    } , [isSignedIn , firebaseUserId])

    useEffect(() => {
        if(userInfo)dispatch(UserAction._setUserId(userInfo.id))
        else UserAction._setUserId(null)
    } , [userInfo])


    return <div></div>
}