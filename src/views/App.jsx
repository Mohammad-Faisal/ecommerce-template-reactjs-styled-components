import React, {useEffect, useState} from 'react';
import './App.scss';
import './pages/pages.scss';
import './components/components.scss'
import PageExplore from './pages/PageExplore';
import styled from 'styled-components';
import {Route, Switch, withRouter} from "react-router-dom";
import {PageOrder} from './pages/PageOrder';
import {ConnectedRouter} from 'connected-react-router'
import TopNavBar from './components/navigation/TopNavBar';
import {PageAdmin} from "./admin/PageAdmin";
import ModalMessage from "./modals/ModalMessage";
import Toasts from "./components/toasts/Toasts";
import ModalSignIn from "./modals/ModalSignIn";
import {Routes} from "../assets/constants/routes";
import AuthStateProvider from "./components/AuthStateProvider";
import ModalOrderConfirmation from "./modals/ModalOrderConfirmation";
import ModalRegisterUser from "./modals/ModalRegisterUser";
import {PagePreviousOrders} from "./pages/PagePreviousOrders";
import 'react-vertical-timeline-component/style.min.css';


function App(props) {



    return (
        <ConnectedRouter history={props.history}>
            <AppContainer>
                <TopNavBar/>


                <Switch>
                    <Route exact path={"/order/:itemType"} render={() => <PageOrder />}/>

                    <Route exact path={`/:itemType/categories`} render={() => <PageExplore />}/>
                    <Route exact path={`/:itemType/categories/:categoryId`} render={() => <PageExplore />}/>

                    <Route exact path={`/:itemType/categories/:categoryId/vendors`} render={() => <PageExplore />}/>
                    <Route exact path={`/:itemType/categories/:categoryId/vendors/:vendorId`} render={() => <PageExplore />}/>

                    <Route exact path={`/:itemType/categories/:categoryId/subCategories`} render={() => <PageExplore />}/>
                    <Route exact path={`/:itemType/categories/:categoryId/subCategories/:subCategoryId`} render={() => <PageExplore />}/>

                    <Route exact path={Routes.PREVIOUS_ORDERS} render={() => <PagePreviousOrders />}/>
                    <Route exact path={Routes.ADMIN_PANEL} render={() => <PageAdmin/>}/>

                </Switch>

                <ModalMessage/>
                <ModalOrderConfirmation />
                <ModalRegisterUser />
                <ModalSignIn/>
                <Toasts/>
                <AuthStateProvider />

            </AppContainer>
        </ConnectedRouter>
    );
}

export default (App);


const AppContainer = styled.div`
  text-align: center;
  display: grid;
  height:100vh;
  grid-template-rows: auto;
`;
