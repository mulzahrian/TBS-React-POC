import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import SearchInput from "../../components/elements/Input/searchInput";
import Button from "../../components/elements/Button";
import Table from "../../components/elements/Table";
import Alert from "../../components/elements/Alert";
import FormModal from "../../components/fragments/FormModal";
import ConfirmModal from "../../components/fragments/ConfirmModal";
import { FileSpreadsheet } from "lucide-react";
import useSystemValues from "../../hooks/useSystemValues";
import { systemValueColumns } from "./systemValues.columns";
import { systemValueFields } from "./systemValus.fields";

const SystemValues = () => {
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
    } = useSystemValues();

    return (
        <MainLayout>
            <PageContainer title="System Values">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-2xl font-bold text-gray-800">System Values List</h1>

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
                        placeholder="Search system value..."
                        onChange={(e) => {
                            setSearch(e.target.value);

                            setPage(1);
                        }}
                    />
                </div>

                {/* Table */}
                <Table
                    columns={systemValueColumns({
                        page,
                        limit,
                        onEdit: handleEdit,
                        onDelete: handleDelete,
                    })}
                    data={data}
                    loading={loading}
                    rowKey="sysvalue_id"
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
                    key={selectedData?.sysvalue_id || "create"}
                    open={openModal}
                    onClose={resetForm}
                    title={formMode === "create" ? "Add System Value" : "Edit System Value"}
                    fields={systemValueFields}
                    formMode={formMode}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    defaultValues={
                        selectedData
                            ? {
                                  sysvalue_name: selectedData.sysvalue_name,

                                  value: selectedData.value,
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
                    title="Delete System Value"
                    message="Are you sure want to delete this system value?"
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

export default SystemValues;
