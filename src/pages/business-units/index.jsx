import { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import SearchInput from "../../components/elements/Input/searchInput";
import Button from "../../components/elements/Button";
import Table from "../../components/elements/Table";
import Alert from "../../components/elements/Alert";
import { FileSpreadsheet } from "lucide-react";
import useBusinessUnits from "../../hooks/useBusinessUnits";
import FormModal from "../../components/fragments/FormModal";
import { businessUnitColumns } from "./businessUnit.columns";
import { businessUnitFields } from "./businessUnit.fields";
import { createBusinessUnit } from "../../services/businessUnit.service";

const BusinessUnits = () => {
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
        setOpenModal,
        refetch,
    } = useBusinessUnits();

    const [alert, setAlert] = useState({
        open: false,
        variant: "success",
        title: "",
        message: "",
    });

    return (
        <MainLayout>
            <PageContainer title="Business Units">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-2xl font-bold text-gray-800">Business Unit List</h1>

                    <div className="flex items-center gap-3">
                        <Button
                            className="
                                h-9 px-3
                                flex items-center gap-2
                            "
                        >
                            <FileSpreadsheet size={16} />
                        </Button>

                        <Button
                            onClick={() => setOpenModal(true)}
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
                        placeholder="Search business unit..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                    />
                </div>

                {/* Table */}
                <Table
                    columns={businessUnitColumns({
                        page,
                        limit,
                    })}
                    data={data}
                    loading={loading}
                    rowKey="BU_ID"
                    paging={paging}
                    limit={limit}
                    onPageChange={setPage}
                    onLimitChange={(value) => {
                        setLimit(value);
                        setPage(1);
                    }}
                />

                {/* Modal */}
                <FormModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    title="Add Business Unit"
                    fields={businessUnitFields}
                    onSubmit={async (e) => {
                        e.preventDefault();

                        try {
                            const formData = new FormData(e.target);

                            const payload = {
                                bu_code: formData.get("BU_CODE"),
                                bu_name: formData.get("BU_NAME"),
                                bu_desc: formData.get("BU_DESC"),
                            };

                            const response = await createBusinessUnit(payload);

                            refetch();

                            setAlert({
                                open: true,
                                variant: "success",
                                title: "Success",
                                message: response.message,
                            });

                            setOpenModal(false);
                        } catch (error) {
                            console.error(error);

                            setAlert({
                                open: true,
                                variant: "error",
                                title: "Error",
                                message: error?.response?.data?.message || "Something went wrong",
                            });
                        }
                    }}
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

export default BusinessUnits;
