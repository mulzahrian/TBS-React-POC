import apiGet from "../lib/apiGet";
import apiPost from "../lib/apiPost";
import apiPut from "../lib/apiPut";
import apiClient from "../lib/apiClient";

import { API_URL, ENDPOINTS } from "../lib/endpoint";

export const getDrivers = async ({ page = 1, limit = 10, search = "" }) => {
    const token = localStorage.getItem("token");
    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.DRIVERS.GETDRIVERS}`,
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

export const createDriver = async (payload) => {
    const token = localStorage.getItem("token");
    const response = await apiPost({
        url: `${API_URL}${ENDPOINTS.DRIVERS.GETDRIVERS}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const getDriverById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.DRIVERS.GETDRIVERS}/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateDriver = async (id, payload) => {
    const token = localStorage.getItem("token");

    const response = await apiPut({
        url: `${API_URL}${ENDPOINTS.DRIVERS.GETDRIVERS}/${id}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response;
};

export const deleteDriver = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiClient.delete(`${API_URL}${ENDPOINTS.DRIVERS.GETDRIVERS}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
