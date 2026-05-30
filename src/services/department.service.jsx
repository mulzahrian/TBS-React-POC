import apiGet from "../lib/apiGet";
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
