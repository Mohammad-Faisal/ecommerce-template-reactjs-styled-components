import {useEffect, useState} from "react";
import {message} from "antd";

export default function useFormInputValidation (INITIAL_STATE , validationSchema ) {

  const [values , setValues] = useState(INITIAL_STATE);
  const [touched , setTouched] = useState({});
  const [hasError , setHasError] = useState(false);
  const [errors , setErrors] = useState({});

  const handleInputChange = (name , value) => {
    setValues({
        ...values , [name] :value
      }
    );
    setTouched( {
      ...touched , [name] :true
    })
  };

  const setAllValues = (newValues) => {
    setValues( newValues);
  };


  const setValue = (name , value) => {
    setValues({
        ...values , [name] :value
      }
    );
  };


  const handleSubmit = (onSubmit) => {
    if(!hasError){
      onSubmit();
    }
    else {
      const touched = {};
      Object.keys(INITIAL_STATE).map(key => {touched[key] = true});
      setTouched(touched);
      console.log(errors)
      message.error("Please fill up all the required fields")
    }
  };


  const handleImageChange = (name , imageFile) => {
    if(imageFile.status !== "error"){
      _getBase64(imageFile.originFileObj, binaryFile => {
        setValues({
          ...values ,
          [name] :binaryFile
        })
      });
    }
  };


  const _getBase64 = (img, callback)  => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  useEffect( () => {
    validateData()
  } , [values]);


  const validateData = () => {
    if(validationSchema.validate){
      validationSchema.validate(values , {abortEarly : false } ).then(() => {
        setErrors({});
        setHasError(false);
      }).catch(err => {
        const errorObject ={};
        err.inner.forEach(item =>errorObject[item.path] = item.message);
        setErrors(errorObject);
        setHasError(true);
      })
    }
  };


  const resetData = () => {
    setValues(INITIAL_STATE);
    setTouched({});
  };


  return {values ,hasError , errors  ,touched ,handleSubmit,
    handleInputChange , setValue , handleImageChange , resetData , setValues ,
    control : {
      values , handleSubmit ,handleInputChange , touched , errors , setValue , setAllValues , setValues , resetData

    }
  }

}