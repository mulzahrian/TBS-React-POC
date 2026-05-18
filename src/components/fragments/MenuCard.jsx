const MenuCard = ({ title, children }) => {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-sm p-4 mb-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">{title}</h3>
            <div className="space-y-1">{children}</div>
        </div>
    );
};

export default MenuCard;
