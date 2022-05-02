import React, {Component, useEffect} from 'react';
import {Select} from 'antd';
import {connect, useSelector} from 'react-redux';
import {_makeSelectDropDownItems, _makeSelectSelectedDropDownItem} from '../../../selectors/DropdownSelector';
import DropdownConstants from "../../../constants/DropdownConstants";
import TrnProfileAction from "../../../stores/transaction-profile/TrnProfileAction";
import EmptyRequest from "../../../models/EmptyRequest";
import CommissionAction from "../../../stores/commission/CommissionAction";
import BankAction from "../../../stores/bank/BankAction";
import FeeProfileAction from "../../../stores/fee-profile/FeeProfileAction";
import RATAction from "../../../stores/rat/RATAction";
import SetupAction from "../../../stores/setup/SetupAction";
import {Form} from "antd";
import UsersAction from "../../../stores/user/UsersAction";
import GetMFSUsersOfParent from "../../../stores/user/models/GetMFSUsersUnderParent";
import {UserTypeConstants} from "../../../constants/GeneralConstants";
import GetBankAgentsList from "../../../stores/user/models/GetBankAgentsList";

const {Option} = Select;

const makeMapStateToProps = () => {
  const _selectDropDownItems = _makeSelectDropDownItems();
  return (state, props) => ({
    dropDownItems: _selectDropDownItems(state, props),
  });
};



export default function FormInputDropdown (props) {


  useEffect(() => {

  }, [])


  const isTouched = this.props.control.touched[`${this.props.name}`];
  const error = this.props.control.errors[`${this.props.name}`];
  const value = this.props.control.values[`${this.props.name}`];

  return (
    <Form.Item
      label={this.props.label}
      hasFeedback
      validateStatus={(isTouched ?  error? "error": "success" : "")}
      help={isTouched ? error: ""}
    >
      <Select
        //showSearch
        style={{ width: "100%" }}
        optionFilterProp="children"
        size={"large"}
        value={value}
        onChange={(selectedValue) => this.props.control.handleInputChange(this.props.name , selectedValue)}
        // filterOption={(input, option) =>
        //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
      >
        {this.props.dropDownItems.map(item => <Option key={item.value} value={item.value}>{item.label}</Option> )}
      </Select>
    </Form.Item>
  )
}

export { FormInputDropdown as Unconnected }
export default connect(makeMapStateToProps)(FormInputDropdown);


