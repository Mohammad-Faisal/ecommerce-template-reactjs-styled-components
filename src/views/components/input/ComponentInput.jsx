import { Form } from 'semantic-ui-react'
import React from "react";

export function ComponentInput(props) {
    return (
        <Form.Input
            fluid
            label= {props.label}
            value={props.value}
            icon={props.icon}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(props.name , e.target.value)}
            error={ props.touched? props.error? { content: props.error } : null : null}
        />
    )
}

export function ComponentInputTextArea(props) {
    return (
        <Form.TextArea
            //fluid
            label= {props.label}
            value={props.value}
            icon={props.icon}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(props.name , e.target.value)}
            error={ props.touched? props.error? { content: props.error } : null : null}
        />
    )
}

