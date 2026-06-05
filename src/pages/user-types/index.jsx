import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import SearchInput from "../../components/elements/Input/searchInput";
import Button from "../../components/elements/Button";
import Table from "../../components/elements/Table";
import Alert from "../../components/elements/Alert";
import FormModal from "../../components/fragments/FormModal";
import ConfirmModal from "../../components/fragments/ConfirmModal";
import { FileSpreadsheet } from "lucide-react";
import useUserTypes from "../../hooks/useUserType";
import { userTypeColumns } from "./userType.columns";
import { userTypeFields } from "./userType.fields";

const UserTypes = () => {
    const {
        data,
        loading,
        page,
        setPage,
        limit,
        setLimit,
        setSearch,
        paging,
        openModal,
        deleteModal,
        setDeleteModal,
        deleteLoading,
        alert,
        setAlert,
        selectedData,
        formMode,
        isActive,
        setIsActive,
        openCreateModal,
        resetForm,
        handleEdit,
        handleSubmit,
        handleDelete,
        confirmDelete,
        handleExportExcel,
    } = useUserTypes();

    return (
        <MainLayout>
            <PageContainer title="User Types">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-2xl font-bold text-gray-800">User Type List</h1>

                    <div className="flex items-center gap-3">
                        <Button
                            onClick={handleExportExcel}
                            className="
                                h-9 px-3
                                flex items-center gap-2
                            "
                        >
                            <FileSpreadsheet size={16} />
                        </Button>

                        <Button
                            onClick={openCreateModal}
                            className="
                                px-4 flex items-center gap-2
                            "
                        >
                            <span className="text-lg leading-none">+</span>
                            Add
                        </Button>
                    </div>
                </div>

                {/* Search */}
                <div className="max-w-sm mb-5">
                    <SearchInput
                        placeholder="Search user type..."
                        onChange={(e) => {
                            setSearch(e.target.value);

                            setPage(1);
                        }}
                    />
                </div>

                {/* Table */}
                <Table
                    columns={userTypeColumns({
                        page,
                        limit,
                        onEdit: handleEdit,
                        onDelete: handleDelete,
                    })}
                    data={data}
                    loading={loading}
                    rowKey="usertype_id"
                    paging={paging}
                    limit={limit}
                    onPageChange={setPage}
                    onLimitChange={(value) => {
                        setLimit(value);

                        setPage(1);
                    }}
                />

                {/* Form Modal */}
                <FormModal
                    key={selectedData?.usertype_id || "create"}
                    open={openModal}
                    onClose={resetForm}
                    title={formMode === "create" ? "Add User Type" : "Edit User Type"}
                    fields={userTypeFields}
                    formMode={formMode}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    defaultValues={
                        selectedData
                            ? {
                                  usertype_code: selectedData.usertype_code,

                                  usertype_name: selectedData.usertype_name,
                              }
                            : {}
                    }
                    onSubmit={handleSubmit}
                />

                {/* Confirm Delete */}
                <ConfirmModal
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    onConfirm={confirmDelete}
                    loading={deleteLoading}
                    title="Delete User Type"
                    message="Are you sure want to delete this user type?"
                />

                {/* Alert */}
                {alert.open && (
                    <Alert
                        variant={alert.variant}
                        title={alert.title}
                        message={alert.message}
                        onClose={() =>
                            setAlert((prev) => ({
                                ...prev,
                                open: false,
                            }))
                        }
                    />
                )}
            </PageContainer>
        </MainLayout>
    );
};

export default UserTypes;
