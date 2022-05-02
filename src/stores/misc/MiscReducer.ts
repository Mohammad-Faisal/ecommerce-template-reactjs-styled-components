import MiscAction from './MiscAction';
import BaseReducer from '../../utils/BaseReducer';

export default class MiscReducer extends BaseReducer {

    initialState = {
        modalStatus: null,
        triggerShowSignInModal: null,
        authStatus:false ,

    };

    [MiscAction.SET_AUTH_STATUS](state, action) {
        return {
            ...state,
            authStatus: action.payload,
        };
    }

    [MiscAction.SHOW_SIGN_IN_MODAL](state, action) {
        return {
            ...state,
            triggerShowSignInModal: action.payload,
        };
    }

    [MiscAction.SET_MODAL_STATUS](state, action) {
        return {
            ...state,
            modalStatus: action.payload,
        };
    }



}