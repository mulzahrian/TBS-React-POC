import apiGet from "../lib/apiGet";
import apiPost from "../lib/apiPost";
import apiPut from "../lib/apiPut";
import apiClient from "../lib/apiClient";

import { API_URL, ENDPOINTS } from "../lib/endpoint";

export const getUserTypes = async ({ page = 1, limit = 10, search = "" }) => {
    const token = localStorage.getItem("token");
    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.USERTYPE.GETUSERTYPE}`,
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

export const createUserType = async (payload) => {
    const token = localStorage.getItem("token");
    const response = await apiPost({
        url: `${API_URL}${ENDPOINTS.USERTYPE.GETUSERTYPE}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const getUserTypeById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.USERTYPE.GETUSERTYPE}/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateUserType = async (id, payload) => {
    const token = localStorage.getItem("token");

    const response = await apiPut({
        url: `${API_URL}${ENDPOINTS.USERTYPE.GETUSERTYPE}/${id}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response;
};

export const deleteUserType = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiClient.delete(`${API_URL}${ENDPOINTS.USERTYPE.GETUSERTYPE}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
