const Toggle = ({ checked = false, onChange = () => {}, label = "", name = "" }) => {
    return (
        <label
            className="
                flex items-center gap-3
                cursor-pointer
                select-none
            "
        >
            {/* Hidden Input */}
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="hidden"
            />

            {/* Toggle */}
            <div
                className={`
                    relative w-12 h-6
                    rounded-full
                    transition-all duration-300

                    ${checked ? "bg-[#045db0]" : "bg-gray-300"}
                `}
            >
                <div
                    className={`
                        absolute top-1 left-1
                        w-4 h-4 rounded-full
                        bg-white shadow-md
                        transition-all duration-300

                        ${checked ? "translate-x-6" : ""}
                    `}
                />
            </div>

            {/* Label */}
            <span className="text-sm text-gray-700">{label}</span>
        </label>
    );
};

export default Toggle;
