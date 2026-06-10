import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import SearchInput from "../../components/elements/Input/searchInput";
import Button from "../../components/elements/Button";
import Table from "../../components/elements/Table";
import Alert from "../../components/elements/Alert";
import FormModal from "../../components/fragments/FormModal";
import ConfirmModal from "../../components/fragments/ConfirmModal";
import { FileSpreadsheet } from "lucide-react";
import useDrivers from "../../hooks/useDriver";
import { driverColumns } from "./drivers.columns";
import { driverFields } from "./drivers.fields";

const Drivers = () => {
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
    } = useDrivers();

    return (
        <MainLayout>
            <PageContainer title="Drivers">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-2xl font-bold text-gray-800">Drivers List</h1>

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
                        placeholder="Search drivers..."
                        onChange={(e) => {
                            setSearch(e.target.value);

                            setPage(1);
                        }}
                    />
                </div>

                {/* Table */}
                <Table
                    columns={driverColumns({
                        page,
                        limit,
                        onEdit: handleEdit,
                        onDelete: handleDelete,
                    })}
                    data={data}
                    loading={loading}
                    rowKey="driver_id"
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
                    key={selectedData?.driver_id || "create"}
                    open={openModal}
                    onClose={resetForm}
                    title={formMode === "create" ? "Add Driver" : "Edit Driver"}
                    fields={driverFields}
                    formMode={formMode}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    defaultValues={
                        selectedData
                            ? {
                                  driver_nik: selectedData.driver_nik,
                                  driver_name: selectedData.driver_name,
                                  phone_number: selectedData.phone_number,
                                  address: selectedData.address,
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
                    title="Delete Driver"
                    message="Are you sure want to delete this driver?"
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

export default Drivers;
