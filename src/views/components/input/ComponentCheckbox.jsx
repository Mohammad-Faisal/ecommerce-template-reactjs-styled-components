import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Checkbox, Form, Select} from 'semantic-ui-react'
import {selectCheckBoxItems} from "../../../selectors/CheckBoxDataSelector";
import {CheckBoxConstants, DropDownConstants} from "../../../assets/constants/GeneralConstants";
import VendorAction from "../../../stores/vendor/VendorAction";
import CategoryAction from "../../../stores/category/CategoryAction";
import SubCategoryAction from "../../../stores/subcategory/SubCategoryAction";


export default function ComponentCheckbox(props) {

    const dispatch = useDispatch();
    const [selectedValues, setSelectedValues] = useState([])
    const checkBoxItems = useSelector(state => selectCheckBoxItems(state, props.checkBoxFor));

    useEffect(() => {
        switch (props.checkBoxFor) {
            case CheckBoxConstants.TYPE_VENDOR:
                dispatch(VendorAction._requestGetVendors());
                break;
            case CheckBoxConstants.TYPE_PRODUCT_CATEGORY:
                dispatch(CategoryAction._requestGetProductCategories());
                break;
            case CheckBoxConstants.TYPE_PRODUCT_SUBCATEGORY:
                dispatch(SubCategoryAction._requestGetProductSubCategories());
                break;
            case CheckBoxConstants.TYPE_SERVICE_CATEGORY:
                dispatch(CategoryAction._requestGetServiceCategories());
                break;
        }
    }, [])

    const handleChange = (e, data) => {
        const alreadySelectedItems = computeCurrentlySelectedItems(data);
        setSelectedValues(alreadySelectedItems);
        props.onChange(props.name, alreadySelectedItems)
    }

    const computeCurrentlySelectedItems = (data) => {
        const alreadySelectedItems = selectedValues;
        const index = alreadySelectedItems.indexOf(data.value);
        if (index === -1) alreadySelectedItems.push(data.value)
        else alreadySelectedItems.splice(index, 1);
        return alreadySelectedItems;
    }

    const checkIfChecked = (valueToCheck) => {
        let checked =false;
        selectedValues.forEach(value => {
            if(value === valueToCheck ) checked  = true
        })
        return checked;
    }

    return (


        <div style={{marginBottom:"10px"}}>
            <h4> {props.checkBoxTitle}</h4>
            {checkBoxItems.map(item => <Form.Field>
                <Checkbox
                    checked={checkIfChecked(item.value)}
                    label={item.label}
                    name={item.label}
                    value={item.value}
                    key={item.value}
                    onChange={handleChange}
                />
            </Form.Field>)
            }

        </div>

    )

}

