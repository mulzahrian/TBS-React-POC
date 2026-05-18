import { useState, useEffect } from "react";

export const useLogin = () => {
    const [username, setUsername] = useState("");
    useEffect(() => {
        const name = localStorage.getItem("email");
        if (name) {
            setUsername(name);
        } else {
            window.location.href = "/login";
        }
    }, []);

    return username;
};
