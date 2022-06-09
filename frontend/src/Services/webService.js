import axios from 'axios';
import { getLocalData } from '../util/helper'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_DOMAIN

export default class WebService {

    static async post(action, params) {
        let response = await axios.post(action, params)
        return response.data
    }

    static async put(action, params) {
        let response = await axios.put(action, params)
        return response.data
    }

    static async get(action) {
        let response = await axios.get(action)
        return response.data
    }

    static async delete(action) {
        let response = await axios.delete(action)
        return response.data
    }

    static async patch(action, params) {
        let response = await axios.patch(action, params)
        return response.data
    }
}

axios.interceptors.request.use(async (config) => {
    config.baseURL = BASE_URL;
    const token = await getLocalData("token");
    config.headers.common['Authorization'] = token ? 'Bearer ' + token : '';
    return config;
}, (error) => {
    return Promise.reject(error);
});


axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;
    // const originalRequest = config;

    if (response.status === 401 || response.status === 404) {
        return Promise.reject(error);
    }
    else {
        return Promise.reject(error);
    }
});



/*
import WebService from '../../util/webService';

let response = await WebService.post(action, param);

*/