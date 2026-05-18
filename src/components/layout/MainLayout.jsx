import { useState } from "react";
import Sidebar from "../fragments/Sidebar";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex">
            <Sidebar isOpen={isOpen} />
            <div className="flex-1 bg-gray-100 min-h-screen">
                <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
