import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, ChevronDown, Check } from "lucide-react";

const Input = (props) => {
    const { type, placeholder, name, defaultValue, options = [] } = props;

    const [showPassword, setShowPassword] = useState(false);

    const [openSelect, setOpenSelect] = useState(false);

    const [selectedOption, setSelectedOption] = useState(
        options.find((o) => o.value === defaultValue) || null
    );

    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setOpenSelect(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isPassword = type === "password";

    if (type === "select") {
        return (
            <div ref={selectRef} className="relative w-full">
                <button
                    type="button"
                    onClick={() => setOpenSelect(!openSelect)}
                    className="
                        w-full
                        rounded-full
                        border border-slate-300
                        bg-white
                        px-5 py-3

                        flex items-center justify-between

                        text-sm text-slate-700

                        hover:border-blue-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500

                        transition-all
                    "
                >
                    <span>{selectedOption?.label || `Select ${name}`}</span>

                    <ChevronDown
                        size={18}
                        className={`
                            transition-transform
                            ${openSelect ? "rotate-180" : ""}
                        `}
                    />
                </button>

                <input type="hidden" name={name} value={selectedOption?.value || ""} />

                {openSelect && (
                    <div
                        className="
                            absolute
                            top-full
                            left-0
                            mt-2

                            w-full
                            z-[9999]

                            overflow-hidden

                            rounded-3xl
                            border border-slate-200
                            bg-white

                            shadow-xl
                        "
                    >
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    setSelectedOption(option);
                                    setOpenSelect(false);
                                }}
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between

                                    px-5 py-3

                                    text-left
                                    text-sm

                                    hover:bg-blue-300
                                    transition-colors
                                "
                            >
                                <span>{option.label}</span>

                                {selectedOption?.value === option.value && <Check size={16} />}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative">
            <input
                type={isPassword ? (showPassword ? "text" : "password") : type}
                id={name}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="
                    w-full

                    rounded-full
                    border border-slate-300

                    px-5 py-3

                    text-sm
                    text-slate-700

                    placeholder:opacity-50

                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500

                    pr-12
                "
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2

                        text-slate-500
                    "
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    );
};

export default Input;
