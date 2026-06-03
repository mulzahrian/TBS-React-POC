import apiGet from "../lib/apiGet";
import apiPost from "../lib/apiPost";
import apiPut from "../lib/apiPut";

import { API_URL, ENDPOINTS } from "../lib/endpoint";

export const getDepartments = async ({ page = 1, limit = 10, search = "" }) => {
    const token = localStorage.getItem("token");
    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.DEPARTMENT.GETDEPARTMENT}`,
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

export const createDepartment = async (payload) => {
    const token = localStorage.getItem("token");
    const response = await apiPost({
        url: `${API_URL}${ENDPOINTS.DEPARTMENT.GETDEPARTMENT}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const getDepartmentById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.DEPARTMENT.GETDEPARTMENT}/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const updateDepartment = async (id, payload) => {
    const token = localStorage.getItem("token");

    const response = await apiPut({
        url: `${API_URL}${ENDPOINTS.DEPARTMENT.GETDEPARTMENT}/${id}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response;
};
