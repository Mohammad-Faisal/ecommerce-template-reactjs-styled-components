import { invalid } from "moment";
import React from 'react';
import _ from 'lodash';
import {message, Modal} from "antd";

export default class DataValidationUtility {

    static _checkIfPropsNotNullAndDiff(nextProps, prevState, propKeys) {
        const tempObject = {};
        for (const item of propKeys) {
            const key = item.toString();
            if (nextProps[key] && !_.isEqual(nextProps[key], prevState[key])) tempObject[item] = nextProps[key]
        }
        return tempObject;
    }

    static _checkIfCurrentStateAndPrevStateValueDiff(prevState , currentState  , keys) {
        for(const item of keys){
            const key = item.toString();
            if( !_.isEqual(prevState[key], currentState[key]))return true;
        }
        return false;
    }


    static _isInputValidNumber(value){
        const reg = /^-?[0-9]*(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') return true;
        else message.warning("Input must be a valid number");
    }


}



function handleInvalidDataWithModal(errorMessage) {
    Modal.error({ title: errorMessage })
    return false;
}

function handleInvalidDataWithToast(errorMessage) {
    message.error( errorMessage);
    return false;
}

function _isFieldEmpty(field) {
    return field === "" || field === null || field === invalid || field === undefined ;

}

function _isAmountInvalid(amount) {
    if (amount.length === 0) return true
    return isNaN(amount);

}

function _isFieldNull(field) {
    return field === null || field === invalid;
}

function _areFieldsNotSame(field1  , field2 ) {
    return field1 !== field2;
}

function _isEmailInvalid(mail) {
    return !/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

function _isMobileNoInvalid(phoneNo) {
    return !/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(phoneNo);
}

