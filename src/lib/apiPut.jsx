import apiClient from "./apiClient";

const apiPut = async ({ url, data = {}, headers = {} }) => {
    try {
        const response = await apiClient.put(url, data, {
            headers,
        });

        return response.data;
    } catch (error) {
        console.error("PUT API Error:", error);
        throw error;
    }
};

export default apiPut;
