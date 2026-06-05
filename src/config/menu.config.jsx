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

export const menuItems = [
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
