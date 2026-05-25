import InfoModal from "./InfoModal";
import Button from "../Button/index";

import { useAuth } from "../../../context/AuthContext";

const GlobalTokenExpiredModal = () => {
    const { tokenExpiredModal, message, logout } = useAuth();

    return (
        <InfoModal open={tokenExpiredModal} title="Session Expired" variant="danger">
            <div className="space-y-5">
                <p className="text-gray-700 text-sm leading-relaxed">{message}</p>

                <div className="flex justify-end">
                    <Button variant="danger" className="px-5" onClick={logout}>
                        Login Again
                    </Button>
                </div>
            </div>
        </InfoModal>
    );
};

export default GlobalTokenExpiredModal;
