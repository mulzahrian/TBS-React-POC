import { useEffect, useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

const Alert = ({ variant = "success", size = "md", title = "", message = "", onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);

            onClose && onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);

    if (!visible) return null;

    const variants = {
        success: {
            container: "bg-green-50 border-green-200",
            icon: "text-green-600",
            title: "text-green-700",
            message: "text-green-600",
        },

        error: {
            container: "bg-red-50 border-red-200",
            icon: "text-red-600",
            title: "text-red-700",
            message: "text-red-600",
        },
    };

    const sizes = {
        sm: "max-w-xs",
        md: "max-w-md",
        lg: "max-w-lg",
    };

    const icons = {
        success: <CheckCircle className="w-5 h-5" />,

        error: <XCircle className="w-5 h-5" />,
    };

    return (
        <div
            className="
                fixed top-5 left-0
                w-full
                flex justify-center
                z-50
                px-4
            "
        >
            <div
                className={`
                    w-full
                    ${sizes[size]}
                    rounded-2xl
                    border
                    shadow-lg
                    p-4

                    ${variants[variant].container}
                `}
            >
                <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className={variants[variant].icon}>{icons[variant]}</div>

                    {/* Content */}
                    <div className="flex-1">
                        {title && (
                            <p
                                className={`
                                    font-semibold
                                    ${variants[variant].title}
                                `}
                            >
                                {title}
                            </p>
                        )}

                        <p
                            className={`
                                text-sm mt-1
                                ${variants[variant].message}
                            `}
                        >
                            {message}
                        </p>
                    </div>

                    {/* Close */}
                    <button
                        onClick={() => setVisible(false)}
                        className="
                            text-gray-400
                            hover:text-gray-600
                        "
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
