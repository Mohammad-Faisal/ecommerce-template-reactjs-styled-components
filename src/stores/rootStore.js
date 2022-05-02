import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';
import errorToastMiddleware from './special/error/ErrorToastMiddleware';
import storage from 'redux-persist/lib/storage';

import CartPostEffect from './cart/CartPostEffect';
import ProductPostEffect from './product/ProductPostEffect';
import CategoryPostEffect from './category/CategoryPostEffect';
import SubCategoryPostEffect from './subcategory/SubCategoryPostEffect';
import VendorPostEffect from './vendor/VendorPostEffect';
import ServicePostEffect from './service/ServicePostEffect';
import OrderPostEffect from './order/OrderPostEffect';
import UserPostEffect from './user/UserPostEffect';

const persistConfig = {
    key: "rokkhi-product-services",
    storage: storage,
    whitelist: ["cart"]
};


export default (initialState, history) => {

    const tempReducer = rootReducer(history)
    const persistedReducer = persistReducer(persistConfig, tempReducer);

    const store = createStore(persistedReducer, initialState,
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            errorToastMiddleware(),
            CartPostEffect(),
            ProductPostEffect(),
            CategoryPostEffect(),
            SubCategoryPostEffect(),
            VendorPostEffect(),
            OrderPostEffect(),
            ServicePostEffect(),
            UserPostEffect(),
        ));
    let persistor = persistStore(store)
    return { store, persistor };
};

