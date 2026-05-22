import { useState } from "react";
import Sidebar from "../fragments/Sidebar";
import Navbar from "../fragments/Navbar";

const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isOpen} />
            <div className="flex-1 flex flex-col bg-gray-100">
                <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
                <div className="flex-1 overflow-y-auto p-6">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
