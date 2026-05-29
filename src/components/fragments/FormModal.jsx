import Modal from "../elements/Modal";
import InputForm from "../../components/elements/Input/input";
import Button from "../elements/Button/";
import Toggle from "../elements/Toggle";

const FormModal = ({
    open,
    onClose,
    title,
    fields = [],
    onSubmit,
    defaultValues = {},
    formMode,
    isActive,
    setIsActive,
}) => {
    return (
        <Modal open={open} onClose={onClose} title={title}>
            <form onSubmit={onSubmit} className="space-y-6">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {fields.map((field, index) => {
                        const isLastOdd = fields.length % 2 !== 0 && index === fields.length - 1;

                        return (
                            <div key={index} className={isLastOdd ? "md:col-span-2" : ""}>
                                <InputForm
                                    label={field.label}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    defaultValue={defaultValues?.[field.name] || ""}
                                />
                            </div>
                        );
                    })}
                </div>
                {/* Toggle Active */}
                {formMode === "edit" && (
                    <div className="pt-2">
                        <Toggle
                            name="is_active"
                            checked={isActive}
                            onChange={setIsActive}
                            label={isActive ? "Active" : "Inactive"}
                        />
                    </div>
                )}

                {/* Footer */}
                <div
                    className="
                        flex items-center justify-end gap-3
                        pt-5 border-t border-gray-100
                    "
                >
                    <Button
                        type="button"
                        variant="secondary"
                        className="
                            h-11 px-5 rounded-xl
                        "
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        className="
                            h-11 px-6 rounded-xl
                            shadow-lg shadow-blue-500/20
                        "
                    >
                        Save Data
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default FormModal;
