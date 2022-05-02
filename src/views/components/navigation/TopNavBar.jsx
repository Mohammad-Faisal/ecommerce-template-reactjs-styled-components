import React from 'react'
import {Button, Icon, Input} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import MiscAction from "../../../stores/misc/MiscAction";
import firebase from '../../../utils/firebase';
import './navigation.scss';
import {Routes} from "../../../assets/constants/routes";
import {isMobile} from "react-device-detect";

function TopNavBar(props) {

    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.misc.authStatus);
    const userId = useSelector(state => state.user.userId);

    const signIn = () => dispatch(MiscAction._showSignInModal())
    const signOut = () => firebase.auth().signOut()

    const handleClickOnPreviousOrders = () => {
         if(isSignedIn)props.history.push(Routes.PREVIOUS_ORDERS)
        else dispatch(MiscAction._showSignInModal())
    }

    return (
        <div className="container-app-topbar">

            <h1 onClick={ () => props.history.push(Routes.PRODUCT)} className="topbar-text">  <b style={{color:"#00bd87"}}>Rokkhi</b> Bazar</h1>
            { !isMobile &&<Input style={{width:"300px"}} icon='search' placeholder='Search...' /> }
            { !isMobile &&<b className={"topbar-offer-text"} onClick={handleClickOnPreviousOrders}> <Icon name={"question circle"} /> Previous Orders </b>}
            {isSignedIn ? <Button style={{background:"#009E7F" , color:"#fff"}} onClick={() => signOut()} >Sign Out</Button>:
                <Button style={{background:"#009E7F" , color:"#fff"}} onClick={ () => signIn()}> Sign In </Button>
            }
        </div>
    )
}


export default withRouter(TopNavBar)