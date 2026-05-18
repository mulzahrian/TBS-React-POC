import Card from "../elements/card";
const PageContainer = ({ title, children }) => {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            </div>
            <Card className="">{children}</Card>
        </div>
    );
};

export default PageContainer;
