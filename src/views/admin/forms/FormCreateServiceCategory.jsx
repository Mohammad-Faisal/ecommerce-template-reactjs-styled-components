import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import useInputValidation from "../../hooks/useInputValidation";
import {selectRequesting} from "../../../stores/special/requesting/RequestingSelector";
import {selectFinished} from "../../../stores/special/finished/FinishedSelector";
import {ComponentInput} from "../../components/input/ComponentInput";
import {Button, Form, Message} from "semantic-ui-react";
import CategoryAction from "../../../stores/category/CategoryAction";
import {useAlert} from "react-alert";
import * as axios from "axios";
import useImageUpload from "../../hooks/useImageUpload";
import ReqCreateCategory from "../../../stores/category/request/ReqCreateCategory";
import ComponentRadio from "../../components/input/ComponentRadio";
import {RadioConstants} from "../../../assets/constants/GeneralConstants";

const INITIAL_STATE = {
    name:"" ,
    description:"",
    logo:"",
};

const VALIDATION_SCHEMA = Yup.object({
    name : Yup.string().required('Name is required') ,

});

export default function FormCreateServiceCategory(props) {

    const alert = useAlert()
    const dispatch = useDispatch();
    const {handleInputChange,handleSubmit ,hasError  , resetData, touched, values, errors} = useInputValidation(INITIAL_STATE, VALIDATION_SCHEMA);
    const {downloadUrl , uploadImage} = useImageUpload()

    const [imageFile  , setImageFile] = useState(null);
    const isRequesting = useSelector(state => selectRequesting(state, [CategoryAction.REQUEST_CREATE_SERVICE_CATEGORY]));
    const isFinished = useSelector(state => selectFinished(state, CategoryAction.REQUEST_CREATE_SERVICE_CATEGORY));

    const submitData = async () => {
        dispatch(CategoryAction._requestCreateNewServiceCategory(new ReqCreateCategory(values)))
    };


    useEffect(() => {
        if(downloadUrl){
            if(!hasError)dispatch(CategoryAction._requestCreateNewServiceCategory(new ReqCreateCategory(values)))
            else alert.show('Please Fill Up all the required fields');
        }
    },[downloadUrl])

    const onChangeHandler=event=>{
        setImageFile(event.target.files[0])
    }

    useEffect(() => resetData(), [isFinished]);

    return (
        <div style={{textAlign:"start"}}>
            <Message attached header='Create ServiceEntity Category' />
            <Form style={{width:"100%" ,padding:"20px" , marginBottom:"20px"}} className='attached fluid segment' >
                <Form.Group  widths='equal'>
                    <ComponentInput label={"Name"} onChange={handleInputChange} icon={"align center"} error={errors.name} value={values.name} name={"name"}/>
                    <ComponentInput label={"Description"} onChange={handleInputChange} icon={"misc alternate outline"} error={errors.description} value={values.description} name={"description"}/>
                </Form.Group>
                <ComponentInput label={"Category Logo"} onChange={handleInputChange} icon={"image"} touched={touched.logo} error={errors.logo} value={values.logo} name={"logo"}/>
                {/*<input type="file" name="image" onChange={onChangeHandler}/>*/}
                <Button style={{width:"100%"}} loading={isRequesting} onClick={() => handleSubmit(submitData)}>Submit</Button>
            </Form>
        </div>
    )
}
