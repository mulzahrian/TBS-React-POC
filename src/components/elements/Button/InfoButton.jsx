import { Info } from "lucide-react";

const InfoButton = ({
    children = "Important Information",
    onClick = () => {},
    className = "",
    variant = "primary",
}) => {
    const variants = {
        primary: "bg-blue-50 hover:bg-blue-100 text-blue-600",

        success: "bg-green-50 hover:bg-green-100 text-green-600",

        warning: "bg-yellow-50 hover:bg-yellow-100 text-yellow-600",

        danger: "bg-red-50 hover:bg-red-100 text-red-600",

        purple: "bg-purple-50 hover:bg-purple-100 text-purple-600",
    };

    return (
        <button
            onClick={onClick}
            className={`
                flex items-center gap-1.5
                px-3 py-1.5
                rounded-full
                text-xs
                transition duration-200
                ${variants[variant]}
                ${className}
            `}
        >
            <Info className="w-3.5 h-3.5" />

            <span className="font-medium">{children}</span>
        </button>
    );
};

export default InfoButton;
