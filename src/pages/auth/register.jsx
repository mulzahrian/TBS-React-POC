import AuthLayouts from "../../components/layout/AuthLayouts";
import FormRegister from "../../components/fragments/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Forgot Password" type="register">
            <FormRegister />
        </AuthLayouts>
    );
};

export default RegisterPage;
