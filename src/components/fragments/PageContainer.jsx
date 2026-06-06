import Card from "../elements/card";
import Breadcrumb from "../elements/Breadcrumb";
import { useLogin } from "../../hooks/useLogin";

const PageContainer = ({ title, children }) => {
    const username = useLogin();
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
