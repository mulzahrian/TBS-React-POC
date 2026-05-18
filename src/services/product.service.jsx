import axios from "axios";
import { ENDPOINTS } from "../lib/endpoint";

const API_URL = import.meta.env.VITE_API_HOST;

export const getProducts = (callback) => {
    axios
        .get(API_URL + ENDPOINTS.PRODUCT.GETPRODUCT)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
};

export const getDetailProducts = (id, callback) => {
    axios
        .get(`${API_URL + ENDPOINTS.PRODUCT.GETPRODUCT}/${id}`)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
};
