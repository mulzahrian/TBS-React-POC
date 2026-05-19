const InfoModal = ({
    open = false,
    onClose = () => {},
    title = "Important Information",
    children,
    variant = "primary",
}) => {
    if (!open) return null;

    const variants = {
        primary: {
            header: "bg-blue-600",
            accent: "text-blue-600",
        },

        success: {
            header: "bg-green-600",
            accent: "text-green-600",
        },

        warning: {
            header: "bg-yellow-500",
            accent: "text-yellow-600",
        },

        danger: {
            header: "bg-red-600",
            accent: "text-red-600",
        },

        purple: {
            header: "bg-purple-600",
            accent: "text-purple-600",
        },
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div
                    className={`${variants[variant].header} px-6 py-4 flex items-center justify-between`}
                >
                    <h2 className="text-white font-semibold text-lg">{title}</h2>

                    <button onClick={onClose} className="text-white text-2xl hover:opacity-80">
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};

export default InfoModal;
