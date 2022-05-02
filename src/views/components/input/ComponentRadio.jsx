import React, {useState} from 'react';
import { Form  } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {selectRadioItems} from "../../../selectors/RadioDataSelector";


export default function ComponentRadio (props) {

    const radioItems = useSelector(state => selectRadioItems(state , props.radioFor));

    const onChange = (e , data) => props.onChange(props.name , data.value)

    return (

        <Form.Group   inline >
            <label>{props.label}</label>
            {radioItems.map( item =>
                <Form.Radio
                    label={item.label}
                    value={item.value}
                    checked={props.value === item.value}
                    onChange={onChange}
                />
            )}
        </Form.Group>
    )



}



