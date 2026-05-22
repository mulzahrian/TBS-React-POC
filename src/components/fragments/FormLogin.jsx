import { useState } from "react";
import Button from "../elements/Button";
import InputForm from "../elements/Input";
import login from "../../services/auth.service";
import Alert from "../elements/Alert";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const [errorKey, setErrorKey] = useState(0);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const credentials = {
            USER_NAME: e.target.name.value,
            USER_PASSWORD: e.target.password.value,
        };
        login(credentials, (status, res) => {
            if (status) {
                console.log("Login successful:", res.data.data.token);
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("email", credentials.USER_NAME);
                navigate("/dashboard");
            } else {
                setLoginFailed(res.response.data || "Login failed");
                setErrorKey((prev) => prev + 1);
                console.error("Login failed:", res.response.data);
            }
        });
    };
    return (
        <form onSubmit={handleLogin}>
            {loginFailed && (
                <Alert
                    key={errorKey}
                    variant="error"
                    size="sm"
                    title="Login Failed"
                    message={loginFailed}
                />
            )}
            <InputForm
                label="Name"
                name="name"
                type="text"
                placeholder="Enter Globalnet ID or SAP ID"
            />
            <InputForm
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
            />
            <Button className="w-full" type="submit">
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
