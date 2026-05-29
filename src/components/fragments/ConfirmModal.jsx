import Modal from "../elements/Modal";
import Button from "../elements/Button";

const ConfirmModal = ({
    open,
    onClose,
    onConfirm,
    title = "Confirmation",
    message = "Are you sure?",
    loading = false,
}) => {
    return (
        <Modal open={open} onClose={onClose} title={title}>
            <div className="space-y-6">
                {/* Message */}
                <p className="text-sm text-gray-600">{message}</p>

                {/* Footer */}
                <div
                    className="
                        flex justify-end gap-3
                        pt-4 border-t border-gray-100
                    "
                >
                    <Button
                        type="button"
                        variant="secondary"
                        className="h-11 px-5"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        variant="danger"
                        className="h-11 px-5"
                        onClick={onConfirm}
                        disabled={loading}
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
