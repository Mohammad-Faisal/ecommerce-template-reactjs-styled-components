import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import ErrorReducer from './special/error/ErrorReducer';
import RequestingReducer from './special/requesting/RequestingReducer';
import ToastsReducer from './special/toasts/ToastsReducer';
import FinishedReducer from "./special/finished/FinishedReducer";
import MiscReducer from './misc/MiscReducer';
import CartReducer from './cart/CartReducer'
import ProductReducer from './product/ProductReducer';
import CategoryReducer from "./category/CategoryReducer";
import VendorReducer from "./vendor/VendorReducer";
import OrderReducer from "./order/OrderReducer";
import SubCategoryReducer from "./subcategory/SubCategoryReducer";
import ServiceReducer from "./service/ServiceReducer";
import UserReducer from "./user/UserReducer";


export default (history) => {
    const reducerMap = {
        error: ErrorReducer.reducer,
        requesting: RequestingReducer.reducer,
        finished: FinishedReducer.reducer,
        
        router: connectRouter(history),

        toasts: new ToastsReducer().reducer,
        misc: new MiscReducer().reducer,
        
        cart: new CartReducer().reducer,
        product: new ProductReducer().reducer,
        category: new CategoryReducer().reducer,
        subcategory: new SubCategoryReducer().reducer,
        vendor: new VendorReducer().reducer,
        service: new ServiceReducer().reducer,
        order: new OrderReducer().reducer,
        user: new UserReducer().reducer,
    };

    return combineReducers(reducerMap);
};
