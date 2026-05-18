import { useState, useRef, useEffect } from "react";
import { LogOut, Settings, User } from "lucide-react";
import profile from "../../assets/images/best_mentri.jpg";

const AvatarDropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const email = localStorage.getItem("email");

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
                <img src={profile} className="w-11 h-11 rounded-full" />
                <div>
                    <p className="text-sm font-semibold">{email}</p>
                    <p className="text-xs text-gray-500">Admin</p>
                </div>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2">
                    <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-purple-100">
                        <User size={16} /> Profile
                    </button>
                    <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-purple-100">
                        <Settings size={16} /> Settings
                    </button>
                    <hr className="my-2" />
                    <button
                        className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-50"
                        onClick={handleLogout}
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default AvatarDropdown;
