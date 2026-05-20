import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
                key: "business-units",
                label: "Business Units",
                icon: Building2,
                path: "/business-units",
            },
            {
                key: "departments",
                label: "Departments",
                icon: Briefcase,
                path: "/departments",
            },
            {
                key: "user-types",
                label: "User Types",
                icon: UserCog,
                path: "/user-types",
            },
            {
                key: "privilages",
                label: "Privilages",
                icon: ShieldCheck,
                path: "/privilages",
            },
            {
                key: "role",
                label: "Role",
                icon: Users,
                path: "/role",
            },
            {
                key: "system-values",
                label: "System Values",
                icon: Settings,
                path: "/system-values",
            },
        ],
    },
    {
        key: "dispatcher",
        label: "Dispatcher",
        icon: Bell,
        children: [
            {
                key: "employees",
                label: "Employees",
                icon: Users,
                path: "/employees",
            },
            {
                key: "vehicles",
                label: "Vehicles",
                icon: Car,
                path: "/vehicles",
            },
            {
                key: "drivers",
                label: "Drivers",
                icon: IdCard,
                path: "/drivers",
            },
            {
                key: "schedules-bus",
                label: "Schedules Bus",
                icon: CalendarDays,
                path: "/schedules-bus",
            },
            {
                key: "schedules-airport",
                label: "Schedules Airport",
                icon: PlaneTakeoff,
                path: "/schedules-airport",
            },
            {
                key: "manifest-bus",
                label: "Manifest Bus",
                icon: ClipboardList,
                path: "/manifest-bus",
            },
            {
                key: "manifest-airport",
                label: "Manifest Airport",
                icon: PlaneLanding,
                path: "/manifest-airport",
            },
        ],
    },
    {
        key: "booking",
        label: "My Booking",
        icon: Bus,
        path: "/booking",
    },
    {
        key: "departure",
        label: "Departure",
        icon: PlaneTakeoff,
        children: [
            {
                key: "departure-bus",
                label: "Bus Weekend",
                icon: Bus,
                path: "/departure-bus",
            },
            {
                key: "departure-airport",
                label: "Airport",
                icon: PlaneTakeoff,
                path: "/departure-airport",
            },
        ],
    },
    {
        key: "arrival",
        label: "Arrival",
        icon: PlaneLanding,
        children: [
            {
                key: "arrival-bus",
                label: "Bus Weekend",
                icon: Bus,
                path: "/arrival-bus",
            },
            {
                key: "arrival-airport",
                label: "Airport",
                icon: PlaneLanding,
                path: "/arrival-airport",
            },
        ],
    },
];

const Sidebar = ({ isOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [openMenu, setOpenMenu] = useState(null);

    // ACTIVE BERDASARKAN URL
    const activePath = location.pathname;

    // AUTO OPEN PARENT MENU
    useEffect(() => {
        menuItems.forEach((item) => {
            if (item.children) {
                const hasActiveChild = item.children.some((child) => child.path === activePath);

                if (hasActiveChild) {
                    setOpenMenu(item.key);
                }
            }
        });
    }, [activePath]);

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

                            const isMainActive =
                                item.path === activePath ||
                                item.children?.some((child) => child.path === activePath);

                            const isOpenMenu = openMenu === item.key;

                            return (
                                <div
                                    key={item.key}
                                    className="border-b border-[#dbe7f3] pb-2 mb-2 last:border-b-0"
                                >
                                    {/* MAIN MENU */}
                                    <button
                                        onClick={() => {
                                            if (item.children) {
                                                toggleMenu(item.key);
                                            }

                                            if (item.path) {
                                                navigate(item.path);
                                            }
                                        }}
                                        className={`flex items-center justify-between w-full p-3 rounded-xl transition-all
                                        ${
                                            isMainActive
                                                ? "bg-[#045db0] text-white shadow-md"
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
                                            {item.children.map((child) => {
                                                const ChildIcon = child.icon;

                                                const isChildActive = child.path === activePath;

                                                return (
                                                    <button
                                                        key={child.key}
                                                        onClick={() => navigate(child.path)}
                                                        className={`flex items-center gap-3 w-full p-2 rounded-lg text-sm transition-all
                                                        ${
                                                            isChildActive
                                                                ? "bg-[#dbeafe] text-[#045db0] font-semibold"
                                                                : "text-gray-600 hover:bg-[#e6f0fa] hover:text-[#045db0]"
                                                        }`}
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

                            const isMainActive =
                                item.path === activePath ||
                                item.children?.some((child) => child.path === activePath);

                            return (
                                <div
                                    key={i}
                                    onClick={() => {
                                        if (item.path) {
                                            navigate(item.path);
                                        }

                                        if (item.children) {
                                            toggleMenu(item.key);
                                        }
                                    }}
                                    className={`p-3 rounded-xl cursor-pointer transition-all hover:scale-110
                                    ${isMainActive ? "bg-[#045db0]" : "hover:bg-[#e6f0fa]"}`}
                                >
                                    <Icon
                                        size={20}
                                        className={`${
                                            isMainActive ? "text-white" : "text-[#045db0]"
                                        }`}
                                    />
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
