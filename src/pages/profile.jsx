import { useLogin } from "../hooks/useLogin";

const Profile = () => {
    const username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome, {username}!</p>
        </div>
    );
};

export default Profile;
