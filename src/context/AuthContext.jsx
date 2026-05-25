import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [tokenExpiredModal, setTokenExpiredModal] = useState(false);

    const [message, setMessage] = useState("");

    const showTokenExpired = (msg = "Your session has expired. Please login again.") => {
        setMessage(msg);
        setTokenExpiredModal(true);
    };

    const logout = () => {
        localStorage.removeItem("token");

        setTokenExpiredModal(false);

        navigate("/login");
    };

    useEffect(() => {
        const handler = (event) => {
            showTokenExpired(event.detail.message);
        };

        window.addEventListener("token-expired", handler);

        return () => {
            window.removeEventListener("token-expired", handler);
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                tokenExpiredModal,
                message,

                showTokenExpired,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
