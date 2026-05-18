import axios from "axios";
import { ENDPOINTS } from "../lib/endpoint";

const API_URL = import.meta.env.VITE_API_HOST;

const login = (credentials, callback) => {
    return axios
        .post(API_URL + ENDPOINTS.AUTH.LOGIN, credentials)
        .then((response) => {
            callback(true, response);
        })
        .catch((error) => {
            callback(false, error);
        });
};

export default login;
