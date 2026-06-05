import Card from "../elements/card";
import Breadcrumb from "../elements/Breadcrumb";

const PageContainer = ({ title, children }) => {
    return (
        <div>
            <div className="mb-3">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <Breadcrumb />
            </div>
            <Card className="">{children}</Card>
        </div>
    );
};

export default PageContainer;
