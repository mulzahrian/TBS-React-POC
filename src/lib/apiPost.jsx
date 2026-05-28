import apiClient from "./apiClient";

const apiPost = async ({ url, data = {}, headers = {} }) => {
    try {
        const response = await apiClient.post(url, data, {
            headers,
        });

        return response.data;
    } catch (error) {
        console.error("POST API Error:", error);
        throw error;
    }
};

export default apiPost;
