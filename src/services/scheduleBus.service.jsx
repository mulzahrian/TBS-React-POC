import apiGet from "../lib/apiGet";
import apiPost from "../lib/apiPost";
import apiPut from "../lib/apiPut";
import apiClient from "../lib/apiClient";

import { API_URL, ENDPOINTS } from "../lib/endpoint";

export const getScheduleBus = async ({ page = 1, limit = 10, search = "" }) => {
    const token = localStorage.getItem("token");
    const response = await apiGet({
        url: `${API_URL}${ENDPOINTS.SCHEDULES_BUS.GETSCHEDULES_BUS}`,
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

export const createScheduleBus = async (payload) => {
    const token = localStorage.getItem("token");
    const response = await apiPost({
        url: `${API_URL}${ENDPOINTS.SCHEDULES_BUS.GETSCHEDULES_BUS}`,
        data: payload,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

// export const getScheduleBusById = async (id) => {
//     const token = localStorage.getItem("token");

//     const response = await apiGet({
//         url: `${API_URL}${ENDPOINTS.SCHEDULES_BUS.GETSCHEDULES_BUS}/${id}`,
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });

//     return response.data;
// };

// export const updateScheduleBus = async (id, payload) => {
//     const token = localStorage.getItem("token");

//     const response = await apiPut({
//         url: `${API_URL}${ENDPOINTS.SCHEDULES_BUS.GETSCHEDULES_BUS}/${id}`,
//         data: payload,
//         headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//         },
//     });

//     return response;
// };

// export const deleteScheduleBus = async (id) => {
//     const token = localStorage.getItem("token");

//     const response = await apiClient.delete(
//         `${API_URL}${ENDPOINTS.SCHEDULES_BUS.GETSCHEDULES_BUS}/${id}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         }
//     );

//     return response.data;
// };
