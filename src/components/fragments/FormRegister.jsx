import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm
                label="Username"
                name="name"
                type="text"
                placeholder="Enter Globalnet ID or SAP ID"
            />
            <Button className="w-full" type="submit">
                Forgot Password
            </Button>
        </form>
    );
};

export default FormRegister;
