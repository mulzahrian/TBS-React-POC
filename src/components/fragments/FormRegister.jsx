import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Name" name="name" type="text" placeholder="Enter your name" />
            <InputForm label="Email" name="email" type="email" placeholder="Enter your email" />
            <InputForm
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
            />
            <InputForm
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
            />
            <Button className="bg-purple-400 w-full" type="submit">
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
