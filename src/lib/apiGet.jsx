import apiClient from "./apiClient";

const apiGet = async ({ url, params = {}, headers = {} }) => {
    try {
        const response = await apiClient.get(url, {
            params,
            headers,
        });

        return response.data;
    } catch (error) {
        console.error("GET API Error:", error);
        throw error;
    }
};

export default apiGet;
