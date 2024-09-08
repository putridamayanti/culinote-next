import axios from "axios";
import {getAuthToken} from "./token";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`;
axios.defaults.withCredentials = false;

export const apiInstance = (headers) => {
    return axios.create({
        headers: {
            ...headers
        }
    });
};

export const appInstance = (headers = {}) => {
    let token = getAuthToken();

    return apiInstance({
        Authorization: `Bearer ${token}`,
        ...headers
    });
};

export const fetcher = ({endpoint, params, isProtected = true}) => {
    if (isProtected) {
        return appInstance().get(endpoint, {params}).then(res => res?.data);
    }

    return apiInstance().get(endpoint, {params}).then(res => res?.data);
};