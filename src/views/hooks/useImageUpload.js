import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as axios from "axios";


export default function useImageUpload() {

    const [downloadUrl, setDownloadUrl] = useState();

    const uploadImage = async (formData) => {

        // await setTimeout(() => {
        //     setDownloadUrl("test successful");
        // }, 1000)

        await axios({
            method: 'post',
            url: 'http://localhost:3001/api/v1/uploadImage',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                console.log(response);
                setDownloadUrl(response.data.data.url);
            })
            .catch(function (response) {
                console.log(response);
            });

    }

    return {uploadImage , downloadUrl};
}