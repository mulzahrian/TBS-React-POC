import { Menu } from "lucide-react";
import AvatarDropdown from "./AvatarDropdown";

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="h-16 bg-white flex justify-between items-center px-6">
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar}>
                    <Menu />
                </button>
            </div>
            <AvatarDropdown />
        </div>
    );
};

export default Navbar;
