import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuCard from "./MenuCard";

import {
    Home,
    Users,
    ChevronDown,
    Bell,
    Bus,
    PlaneTakeoff,
    PlaneLanding,
    Building2,
    ShieldCheck,
    UserCog,
    Settings,
    Briefcase,
    CalendarDays,
    Car,
    IdCard,
    ClipboardList,
} from "lucide-react";

const menuItems = [
    {
        key: "dashboard",
        label: "Home",
        icon: Home,
        path: "/dashboard",
    },
    {
        key: "administrator",
        label: "Administrator",
        icon: Users,
        children: [
            {
                label: "Business Units",
                icon: Building2,
                path: "/business-units",
            },
            {
                label: "Departments",
                icon: Briefcase,
            },
            {
                label: "User Types",
                icon: UserCog,
            },
            {
                label: "Privilages",
                icon: ShieldCheck,
            },
            {
                label: "Role",
                icon: Users,
            },
            {
                label: "System Values",
                icon: Settings,
            },
        ],
    },
    {
        key: "dispatcher",
        label: "Dispatcher",
        icon: Bell,
        children: [
            {
                label: "Employees",
                icon: Users,
            },
            {
                label: "Vehicles",
                icon: Car,
            },
            {
                label: "Drivers",
                icon: IdCard,
            },
            {
                label: "Schedules Bus",
                icon: CalendarDays,
            },
            {
                label: "Schedules Airport",
                icon: PlaneTakeoff,
            },
            {
                label: "Manifest Bus",
                icon: ClipboardList,
            },
            {
                label: "Manifest Airport",
                icon: PlaneLanding,
            },
        ],
    },
    {
        key: "booking",
        label: "My Booking",
        icon: Bus,
    },
    {
        key: "departure",
        label: "Departure",
        icon: PlaneTakeoff,
        children: [
            {
                label: "Bus Weekend",
                icon: Bus,
            },
            {
                label: "Airport",
                icon: PlaneTakeoff,
            },
        ],
    },
    {
        key: "arrival",
        label: "Arrival",
        icon: PlaneLanding,
        children: [
            {
                label: "Bus Weekend",
                icon: Bus,
            },
            {
                label: "Airport",
                icon: PlaneLanding,
            },
        ],
    },
];

const Sidebar = ({ isOpen }) => {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(null);
    const [active, setActive] = useState("dashboard");

    const toggleMenu = (key) => {
        setOpenMenu(openMenu === key ? null : key);
    };

    return (
        <div
            className={`h-screen ${
                isOpen ? "w-64" : "w-20"
            } bg-gradient-to-b from-white to-[#eef5fc] border-r border-[#d6e6f5] transition-all duration-300 flex flex-col`}
        >
            {/* LOGO */}
            <div className="p-4 flex items-center justify-center">
                <span className="text-[#045db0] font-extrabold text-xl">
                    {isOpen ? "POLL TRANSPORT" : "TBS"}
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
                                <div
                                    key={item.key}
                                    className="border-b border-[#dbe7f3] pb-2 mb-2 last:border-b-0"
                                >
                                    {/* MAIN MENU */}
                                    <button
                                        onClick={() => {
                                            setActive(item.key);

                                            if (item.children) {
                                                toggleMenu(item.key);
                                            }

                                            if (item.path) {
                                                navigate(item.path);
                                            }
                                        }}
                                        className={`flex items-center justify-between w-full p-3 rounded-xl transition-all
                                        ${
                                            isActive
                                                ? "bg-[#045db0] text-white"
                                                : "hover:bg-[#e6f0fa] text-gray-700"
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <Icon size={18} />
                                            {item.label}
                                        </span>

                                        {item.children && (
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${
                                                    isOpenMenu ? "rotate-180" : ""
                                                }`}
                                            />
                                        )}
                                    </button>

                                    {/* CHILD MENU */}
                                    {item.children && isOpenMenu && (
                                        <div className="ml-6 mt-2 space-y-1">
                                            {item.children.map((child, idx) => {
                                                const ChildIcon = child.icon;

                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => navigate(child.path)}
                                                        className="flex items-center gap-3 w-full p-2 rounded-lg text-sm text-gray-600 hover:bg-[#e6f0fa] hover:text-[#045db0] transition-all"
                                                    >
                                                        <ChildIcon size={16} />
                                                        {child.label}
                                                    </button>
                                                );
                                            })}
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
                                    className="p-3 rounded-xl hover:bg-[#e6f0fa] cursor-pointer transition-all hover:scale-110"
                                >
                                    <Icon size={20} className="text-[#045db0]" />
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
