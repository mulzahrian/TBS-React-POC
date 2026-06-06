import apiGet from "../lib/apiGet";
import apiPost from "../lib/apiPost";
import apiPut from "../lib/apiPut";
import apiClient from "../lib/apiClient";

import { API_URL, ENDPOINTS } from "../lib/endpoint";

export const getSystemValues = async ({ page = 1, limit = 10, search = "" }) => {
    const token = localStorage.getItem("token");
    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.SYSTEMVALUES.GETSYSTEMVALUES}`,
        params: {
            page,
            limit,
            search,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const createSystemValue = async (payload) => {
    const token = localStorage.getItem("token");
    const response = await apiPost({
        url: `${API_URL}${ENDPOINTS.SYSTEMVALUES.GETSYSTEMVALUES}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const getSystemValueById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.SYSTEMVALUES.GETSYSTEMVALUES}/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateSystemValue = async (id, payload) => {
    const token = localStorage.getItem("token");

    const response = await apiPut({
        url: `${API_URL}${ENDPOINTS.SYSTEMVALUES.GETSYSTEMVALUES}/${id}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response;
};

export const deleteSystemValue = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiClient.delete(
        `${API_URL}${ENDPOINTS.SYSTEMVALUES.GETSYSTEMVALUES}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};
