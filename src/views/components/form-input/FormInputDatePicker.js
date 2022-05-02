import { DatePicker } from 'antd';
import React  from 'react';
import {ComponentWithLabel} from "../../forms/misc/InputWithLabel";
import * as moment from "moment";


export default function FormInputDatePicker(props) {


  const value = props.isControlledManually ?props.value :  props.control.values[`${props.name}`];

  return (

    <Form.Item
      label={props.label}
      hasFeedback
      validateStatus={(isTouched ?  error? "error": "" : "")}
      help={isTouched ? error: ""}
    >

      <DatePicker
        value={moment(value)}
        onChange={(date , dateString) => props.control.handleInputChange(props.name , dateString)}
        placeholder={props.placeholder}
        size={"default"}
      />
    </Form.Item>
  );
}


