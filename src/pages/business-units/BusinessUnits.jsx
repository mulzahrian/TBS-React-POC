import { Fragment } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";

import Table from "../../components/elements/Table";
import Button from "../../components/elements/Button";

const BusinessUnits = () => {
    // dummy data sementara
    const data = [
        {
            id: 1,
            business_unit: "RAPP",
            division: "Paper",
            location: "Pekanbaru",
            status: true,
        },
        {
            id: 2,
            business_unit: "APRIL",
            division: "Board",
            location: "Jakarta",
            status: true,
        },
        {
            id: 3,
            business_unit: "RGE",
            division: "Forestry",
            location: "Bandung",
            status: false,
        },
    ];

    // columns table
    const columns = [
        {
            header: "No",
            render: (row, index) => index + 1,
        },
        {
            header: "Business Unit",
            accessor: "business_unit",
        },
        {
            header: "Division",
            accessor: "division",
        },
        {
            header: "Location",
            accessor: "location",
        },
        {
            header: "Status",
            render: (row) => (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                >
                    {row.status ? "Active" : "Inactive"}
                </span>
            ),
        },
        {
            header: "Action",
            render: (row) => (
                <div className="flex gap-2">
                    <Button className="h-8 text-xs px-4">Detail</Button>

                    <Button variant="danger" className="h-8 text-xs px-4">
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <MainLayout>
            <PageContainer title="Business Units">
                <Fragment>
                    <div className="space-y-5">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Business Unit List
                                </h1>

                                <p className="text-sm text-gray-500 mt-1">
                                    Manage all business unit data
                                </p>
                            </div>

                            <Button>+ Add Business Unit</Button>
                        </div>

                        {/* Filter */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border">
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="Search business unit..."
                                    className="w-full md:w-80 h-10 border rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#045db0]"
                                />

                                <select className="h-10 border rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#045db0]">
                                    <option>All Division</option>
                                    <option>Paper</option>
                                    <option>Board</option>
                                    <option>Forestry</option>
                                </select>

                                <Button variant="secondary">Reset</Button>
                            </div>
                        </div>

                        {/* Table */}
                        <Table
                            columns={columns}
                            data={data}
                            loading={false}
                            paging={{
                                page: 1,
                                totalPages: 5,
                            }}
                            onPageChange={(page) => console.log(page)}
                        />
                    </div>
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default BusinessUnits;
