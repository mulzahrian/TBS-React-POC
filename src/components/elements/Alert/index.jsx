import { useEffect, useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

const Alert = ({
    variant = "success", // success | error
    size = "md", // sm | md | lg
    title = "",
    message = "",
    onClose,
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
            onClose && onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!visible) return null;

    const variantStyle = {
        success: "bg-green-100 text-green-700 border-green-300",
        error: "bg-red-100 text-red-700 border-red-300",
    };

    const sizeStyle = {
        sm: "max-w-xs text-sm",
        md: "max-w-md text-base",
        lg: "max-w-lg text-lg",
    };

    const icons = {
        success: <CheckCircle className="w-5 h-5" />,
        error: <XCircle className="w-5 h-5" />,
    };

    return (
        <div className="w-full flex justify-center fixed top-5 left-0 z-50 px-4">
            <div
                className={`w-full ${sizeStyle[size]} border rounded-xl shadow-md p-4 ${variantStyle[variant]} bg-white`}
            >
                <div className="flex justify-between items-start gap-3">
                    {/* Icon */}
                    <div>{icons[variant]}</div>

                    {/* Content */}
                    <div className="flex-1">
                        {title && <p className="font-semibold">{title}</p>}
                        <p>{message}</p>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setVisible(false)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
