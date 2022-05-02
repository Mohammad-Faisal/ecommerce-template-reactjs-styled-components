import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector, useStore} from 'react-redux';
import {useAlert} from "react-alert";
import ToastsAction from "../../../stores/special/toasts/ToastsAction";

export default function Toasts (props) {

    const toasts = useSelector(state => state.toasts.items )

    return (
        <div>
            {toasts.map((model) => (
                <ToastCard key={model.id} item={model} />
            ))}
        </div>
    );
}

function ToastCard (props) {

    const alert = useAlert()
    const dispatch = useDispatch()

    useEffect(() => {
        const { item } = props;
        openNotification(item.type , item.message  )
        dispatch(ToastsAction.removeById(item.id));
    }, [])

    const openNotification = (type , message) => {
        const key = `open${Date.now()}`;
        alert.show(message , {
            type:"error" ,
            key
        })
    }

    return  <div></div>
}
