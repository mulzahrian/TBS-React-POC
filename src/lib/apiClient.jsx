import axios from "axios";

const apiClient = axios.create();

apiClient.interceptors.response.use(
    (response) => response,

    (error) => {
        const message = error?.response?.data?.message;

        if (message === "Token verification failed") {
            window.dispatchEvent(
                new CustomEvent("token-expired", {
                    detail: {
                        message: "Token expired, please login again.",
                    },
                })
            );
        }

        return Promise.reject(error);
    }
);

export default apiClient;
