//EndPoint list
export const API_URL = "http://localhost:9999/api";

export const ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password/",
        SEND_OTP: "/auth/verify-otp",
        SESSION: "/auth/:id",
    },
    PRODUCT: {
        GETPRODUCT: "/products",
    },
    HRBUSINESSUNIT: {
        GETBUSINESSUNIT: "/hr-business-units",
    },
    DEPARTMENT: {
        GETDEPARTMENT: "/hr-departments",
    },
    USERTYPE: {
        GETUSERTYPE: "/user-types",
    },
};
