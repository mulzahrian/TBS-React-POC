import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = (props) => {
    const { type, placeholder, name } = props;

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="relative">
            <input
                type={isPassword ? (showPassword ? "text" : "password") : type}
                id={name}
                name={name}
                className="
                    text-sm border rounded-full py-2 px-5
                    text-slate-700 placeholder:opacity-50
                    w-full pr-12
                "
                placeholder={placeholder}
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                        absolute right-4 top-1/2
                        -translate-y-1/2 text-slate-500
                    "
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    );
};

export default Input;
