import axios from 'axios';
import HttpErrorResponseModel from '../models/HttpErrorResponseModel';

const RequestMethod = {
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
    Delete: 'DELETE',
    Options: 'OPTIONS',
    Head: 'HEAD',
    Patch: 'PATCH'
}


export default class HttpUtility {

    static async get(endpoint, params, requestConfig) {
        
        const paramsConfig = params ? { params } : undefined;
        return HttpUtility._request(
            {
                url: endpoint,
                method: RequestMethod.Get,
            }
            ,
            {
                ...paramsConfig,
                ...requestConfig,
            }
        );
    }

    static async post(endpoint, data) {
        const config = data ? { data } : undefined;

        return HttpUtility._request(
            {
                url: endpoint,
                method: RequestMethod.Post,
            },
            config
        );
    }

    static async put(endpoint, data) {
        const config = data ? { data } : undefined;

        return HttpUtility._request(
            {
                url: endpoint,
                method: RequestMethod.Put,
            },
            config
        );
    }

    static async delete(endpoint) {
        return HttpUtility._request({
            url: endpoint,
            method: RequestMethod.Delete,
        });
    }


    static async _request(restRequest, config) {
        if (!Boolean(restRequest.url)) {
            console.error(`Received ${restRequest.url} which is invalid for a endpoint url`);
        }

        
        try {
            
            const axiosRequestConfig = {
                ...config.data,
                method: restRequest.method,
                url: restRequest.url,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin' : '*' ,
                    ...config.data.headers,
                },
            };


            const [axiosResponse] = await Promise.all([axios(axiosRequestConfig), HttpUtility._delay()]);
            const { status, data, request } = axiosResponse;

            if (data.status !== "success") {
                console.log("error occured   " , data.message);
                return HttpUtility._fillInErrorWithDefaults(
                    {
                        status,
                        // message: data.errors.join(' - '),
                        message: data.message,
                        errors: data.errors,
                        url: request ? request.responseURL : restRequest.url,
                        raw: axiosResponse,
                    },
                    restRequest
                );
            }
            return {
                ...axiosResponse,
            };
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                const { data } = error.response;
                return HttpUtility._fillInErrorWithDefaults(
                    {
                        status : data.status,
                        //message: (data.error? data.error.message : "") ,
                        message: (data.message? data.message : "") ,
                        code: (data.error? data.error.code : "") ,
                        errors : data.errors,
                        url: error.request.responseURL,
                        raw: error.response,
                    },
                    restRequest
                );
            } else if (error.request) {
                // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of 
                //http.ClientRequest in node.js
                const { status, statusText, responseURL } = error.request;

                return HttpUtility._fillInErrorWithDefaults(
                    {
                        status,
                        message: statusText,
                        errors: [statusText],
                        url: responseURL,
                        raw: error.request,
                    },
                    restRequest
                );
            }

            // Something happened in setting up the request that triggered an Error
            return HttpUtility._fillInErrorWithDefaults(
                {
                    status: 0,
                    message: error.message,
                    errors: [error.message],
                    url: restRequest.url,
                    raw: error,
                },
                restRequest
            );
        }
    }

    static _fillInErrorWithDefaults(error, request) {
        const model = new HttpErrorResponseModel();

        model.status = error.status || 0;
        model.message = error.message || 'Error requesting data';
        model.code = error.code || 'none';
        // model.errors = error.errors.length ? error.errors : ['Error requesting data'];
        model.url = error.url || request.url;
        model.raw = error.raw;

        // Remove anything with undefined or empty strings.
        model.errors = model.errors.filter(Boolean);

        return model;
    }

    _handleUpload = () => {
        const formData = new FormData();
        formData.append("image", this.props.imageFile);
        formData.append("folder"   , "what");
        formData.append("subfolder", "the");
        formData.append("filename" , "fuck");
        fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
            .then(jsondata => console.log(jsondata))
    };

    static _delay(duration = 250) {
        return new Promise((resolve) => setTimeout(resolve, duration));
    }
}