const Card = ({
    children,
    className = "",
    title,
    footer,
    size = "full", // sm | md | lg | full
}) => {
    const sizeClass = {
        sm: "max-w-xs",
        md: "max-w-md",
        lg: "max-w-2xl",
        full: "max-w-full",
    };
    return (
        <div
            className={`w-full ${sizeClass[size]} bg-white rounded-2xl shadow-sm p-5 ${className}`}
        >
            {title && <h2 className="text-gray-500 text-sm mb-2">{title}</h2>}

            <div>{children}</div>

            {footer && <div className="mt-4 pt-3 border-t text-sm text-gray-500">{footer}</div>}
        </div>
    );
};

export default Card;
