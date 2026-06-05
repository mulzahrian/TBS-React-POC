import { menuItems } from "../../../config/menu.config";
import { Home, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { findBreadcrumb } from "../../../utils/findBreadcrumb";

const Breadcrumb = () => {
    const location = useLocation();

    const breadcrumbs = findBreadcrumb(location.pathname, menuItems);

    return (
        <nav className="flex items-center text-xs text-slate-500">
            <Link
                to="/dashboard"
                className="flex items-center hover:text-slate-700 transition-colors"
            >
                <Home size={14} />
            </Link>

            {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                    <div key={item.key} className="flex items-center">
                        <ChevronRight size={12} className="mx-2 text-slate-400" />

                        {isLast ? (
                            <span className="font-medium text-slate-700">{item.label}</span>
                        ) : (
                            <span className="text-slate-500">{item.label}</span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
