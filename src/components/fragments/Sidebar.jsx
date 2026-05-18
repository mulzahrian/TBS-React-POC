import { useState } from "react";
import { Home, Users, Settings, ChevronDown } from "lucide-react";
import MenuCard from "./MenuCard";

const menuItems = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: Home,
        children: ["Overview", "Stats"],
    },
    {
        key: "users",
        label: "Users",
        icon: Users,
        children: ["List", "Roles"],
    },
    {
        key: "settings",
        label: "Settings",
        icon: Settings,
    },
];

const Sidebar = ({ isOpen }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [active, setActive] = useState("dashboard");

    const toggleMenu = (key) => {
        setOpenMenu(openMenu === key ? null : key);
    };

    return (
        <div
            className={`h-screen ${
                isOpen ? "w-64" : "w-20"
            } bg-gradient-to-b from-white to-purple-50 backdrop-blur-lg border-r border-purple-100 transition-all duration-300 flex flex-col shadow-[6px_0_30px_rgba(139,92,246,0.15)]`}
        >
            {/* LOGO */}
            <div className="p-4 flex items-center justify-center">
                <span className="text-purple-500 font-extrabold text-xl tracking-wide">
                    {isOpen ? "MyApp" : "M"}
                </span>
            </div>

            <div className="flex-1 p-3">
                {isOpen ? (
                    <MenuCard title="Main Menu">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = active === item.key;
                            const isOpenMenu = openMenu === item.key;

                            return (
                                <div key={item.key}>
                                    {/* MAIN BUTTON */}
                                    <button
                                        onClick={() => {
                                            setActive(item.key);
                                            if (item.children) toggleMenu(item.key);
                                        }}
                                        className={`flex items-center justify-between w-full p-3 rounded-xl transition-all
                      ${
                          isActive
                              ? "bg-purple-500 text-white shadow-md"
                              : "hover:bg-purple-100 text-gray-700"
                      }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <Icon size={18} />
                                            {item.label}
                                        </span>

                                        {item.children && (
                                            <ChevronDown
                                                size={16}
                                                className={`transition ${
                                                    isOpenMenu ? "rotate-180" : ""
                                                }`}
                                            />
                                        )}
                                    </button>

                                    {/* CHILD MENU */}
                                    {item.children && isOpenMenu && (
                                        <div className="ml-8 mt-2 space-y-1 text-sm">
                                            {item.children.map((child, idx) => (
                                                <p
                                                    key={idx}
                                                    className="hover:text-purple-500 cursor-pointer transition"
                                                >
                                                    {child}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </MenuCard>
                ) : (
                    <div className="flex flex-col items-center gap-5 mt-6">
                        {menuItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="p-3 rounded-xl hover:bg-purple-100 cursor-pointer transition-all hover:scale-110"
                                >
                                    <Icon size={20} className="text-purple-500" />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
