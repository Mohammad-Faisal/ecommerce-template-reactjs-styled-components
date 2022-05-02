import ActionUtility from '../../utils/ActionUtility';
import ModalStateModel from './model/ModalStateModel';
import { ModalTypeConstants } from '../../assets/constants/GeneralConstants';
import ProductEffect from "../product/ProductEffect";

export default class MiscAction {


    static SET_MODAL_STATUS = 'SET_MODAL_STATUS';
    static SET_AUTH_STATUS = 'SET_AUTH_STATUS';
    static SHOW_SIGN_IN_MODAL = 'SHOW_SIGN_IN_MODAL';


    static _showModalSuccess(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_SUCCESS, true, { message }))
    }

    static _showOrderConfirmationModal(orderId) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_ORDER_CONFIRMATION, true, { orderId }))
    }
    static _showRegistrationModal() {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_REGISTRATION, true, {  }))
    }

    static _showSignInModal() {
        return ActionUtility._createAction(MiscAction.SHOW_SIGN_IN_MODAL, Math.random());
    }


    static _showModalFailure(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_ERROR, true, { message }))
    }
    static _showModalInfo(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_INFO, true, { message }))
    }
    static _showModalWarning(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_WARNING, true, { message }))
    }

    static _setModalStatus(modalData) {
        return ActionUtility._createAction(MiscAction.SET_MODAL_STATUS, modalData);
    }

    static _setAuthStatus(status) {
        return ActionUtility._createAction(MiscAction.SET_AUTH_STATUS, status);
    }
}