import React from 'react';
import {Form, Radio} from "antd";
import {RadioConstants} from "../../../constants/GeneralConstants";


export default function FormInputRadio (props){


  const getRadioItems = () => {
    switch(props.radioFor){
      case RadioConstants.TYPE_GENDER : return RadioConstants.radioOptionsGender;
      case RadioConstants.TYPE_MC_STATUS : return RadioConstants.radioOptionsBankUserType;
      case RadioConstants.TYPE_FUND_MOVEMENT : return RadioConstants.radioOptionsFundMovementType;
      case RadioConstants.TYPE_APPLIED_FEE_OPTION : return RadioConstants.radioOptionAppliedFeeOption;
      case RadioConstants.TYPE_FEE_PAYER : return RadioConstants.radioOptionFeePayer;
      case RadioConstants.TYPE_APPLIED_COMMISSION_OPTION : return RadioConstants.radioOptionAppliedCommissionOption;
      case RadioConstants.TYPE_DEVICE_TYPE : return RadioConstants.radioOptionDeviceType;
      default : return []
    }
  };

  const radioItems = getRadioItems();


  const isTouched = props.control.touched[`${props.name}`];
  const error = props.control.errors[`${props.name}`];
  const value = props.isControlledManually ?props.value :  props.control.values[`${props.name}`];


  return(
    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={(isTouched ?  error? "error": "" : "")}
      help={isTouched ? error: ""}
    >

      <Radio.Group
        size={"large"}
        value={value }
        name={props.name}
        buttonStyle="solid"
        onChange={(e) => props.control.handleInputChange(props.name , e.target.value)}
      >
        {radioItems.map( item =>
          <Radio.Button key={item.value} value={item.value}> {item.label} </Radio.Button>)
        }
      </Radio.Group>
    </Form.Item>
  )

}




