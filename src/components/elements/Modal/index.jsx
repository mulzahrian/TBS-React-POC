import { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({
    open = false,
    onClose = () => {},
    title = "Modal",
    children,
    width = "max-w-3xl",
}) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!open) return null;

    return (
        <div
            onClick={onClose}
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/40 backdrop-blur-sm
                p-4
            "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative
                    w-full
                    ${width}
                    overflow-visible
                `}
            >
                <div
                    className="
                        rounded-[30px]
                        bg-white
                        shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                    "
                >
                    {/* Header */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-t-[30px]
                            bg-[#045db0]
                            px-8 py-6
                        "
                    >
                        <div
                            className="
                                absolute -top-10 -right-10
                                h-40 w-40
                                bg-white/10
                                rounded-full
                                blur-2xl
                            "
                        />

                        <div className="relative flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {title}
                                </h2>

                                <p className="text-blue-100 text-sm mt-1">
                                    Fill all required information
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="
                                    h-11 w-11 rounded-2xl
                                    flex items-center justify-center
                                    bg-white/10
                                    hover:bg-white/20
                                    text-white
                                    transition-all duration-200
                                "
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div
                        className="
                            px-8 py-7
                            overflow-visible
                        "
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
