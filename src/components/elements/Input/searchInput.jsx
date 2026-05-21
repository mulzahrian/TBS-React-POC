import { Search } from "lucide-react";

const SearchInput = (props) => {
    const { placeholder = "Search...", name, value, onChange } = props;

    return (
        <div className="relative w-72">
            <div
                className="
                    flex items-center
                    h-10
                    px-3
                    rounded-xl
                    border border-gray-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-gray-300
                    focus-within:border-[#045db0]
                    focus-within:ring-2
                    focus-within:ring-[#045db0]/10
                "
            >
                <Search size={16} className="text-gray-400 mr-2" />

                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="
                        w-full
                        bg-transparent
                        outline-none
                        text-sm
                        text-gray-700
                        placeholder:text-gray-400
                    "
                />
            </div>
        </div>
    );
};

export default SearchInput;
