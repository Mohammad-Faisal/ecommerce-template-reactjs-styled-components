import {Form, Icon, Input} from "antd";
import React from "react";


export function FormInputText(props) {

  const isTouched = props.control.touched[`${props.name}`];
  const error = props.control.errors[`${props.name}`];
  const value = props.isControlledManually ? props.value : props.control.values[`${props.name}`];

  return (

    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={ (isTouched  ?  error? "error": ((value && value.length>0)? "success":"") : "")}
      help={isTouched ? error: ""}
    >

      <Input
        onChange={(e) => props.control.handleInputChange(props.name , e.target.value)}
        suffix={ props.suffixIcon ? <Icon type={props.suffixIcon}/> :  null   }
        value={value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />

    </Form.Item>
  )
}




