import { Fragment } from "react";

import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";

import SearchInput from "../../components/elements/Input/searchInput";
import Button from "../../components/elements/Button";

import { ChevronLeft, ChevronRight, FileSpreadsheet } from "lucide-react";
import useBusinessUnits from "../../hooks/useBusinessUnits";

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
    } = useBusinessUnits();

    const columns = [
        {
            header: "No",
            render: (row, index) => (page - 1) * limit + index + 1,
        },
        {
            header: "BU Code",
            accessor: "BU_CODE",
        },
        {
            header: "BU Name",
            accessor: "BU_NAME",
        },
        {
            header: "Description",
            accessor: "BU_DESC",
        },
        {
            header: "Created By",
            accessor: "CREATED_BY_NAME",
        },
        {
            header: "Status",
            render: (row) => (
                <span
                    className={`
                        px-3 py-1 rounded-full
                        text-xs font-semibold
                        ${
                            row.IS_ACTIVE === "true"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }
                    `}
                >
                    {row.IS_ACTIVE === "true" ? "Active" : "Inactive"}
                </span>
            ),
        },
        {
            header: "Action",
            render: () => (
                <div className="flex items-center gap-2">
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
                            <h1 className="text-2xl font-bold text-gray-800">Business Unit List</h1>

                            <div className="flex items-center gap-3">
                                <Button className="h-8 px-3 text-sm flex items-center gap-2 shadow-sm">
                                    <FileSpreadsheet size={16} />
                                </Button>
                                <Button className="px-4 flex items-center gap-2 shadow-sm">
                                    <span className="text-lg leading-none">+</span>
                                    Add
                                </Button>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="max-w-sm">
                            <SearchInput
                                name="search"
                                placeholder="Search business unit..."
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                            />
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm text-left">
                                    {/* Header */}
                                    <thead className="bg-[#045db0]">
                                        <tr>
                                            {columns.map((column, index) => (
                                                <th
                                                    key={index}
                                                    className="
                                                        px-6 py-4
                                                        text-white
                                                        font-semibold
                                                    "
                                                >
                                                    {column.header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    {/* Body */}
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td
                                                    colSpan={columns.length}
                                                    className="text-center py-10"
                                                >
                                                    Loading...
                                                </td>
                                            </tr>
                                        ) : data.length > 0 ? (
                                            data.map((row, index) => (
                                                <tr
                                                    key={row.BU_ID}
                                                    className={`
                                                        hover:bg-blue-50 transition
                                                        ${
                                                            index % 2 === 0
                                                                ? "bg-white"
                                                                : "bg-gray-50/70"
                                                        }
                                                    `}
                                                >
                                                    {columns.map((column, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            className="
                                                                    px-6 py-4
                                                                    text-gray-700
                                                                "
                                                        >
                                                            {column.render
                                                                ? column.render(row, index)
                                                                : row[column.accessor]}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={columns.length}
                                                    className="text-center py-10 text-gray-500"
                                                >
                                                    No data found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between px-6 py-4">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>Show</span>

                                    <select
                                        value={limit}
                                        onChange={(e) => {
                                            setLimit(Number(e.target.value));
                                            setPage(1);
                                        }}
                                        className="
                                            h-9 px-3 rounded-lg border
                                        "
                                    >
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                    </select>

                                    <span>entries</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        disabled={page === 1}
                                        onClick={() => setPage((prev) => prev - 1)}
                                        className="
                                            h-9 w-9 rounded-lg border
                                            flex items-center justify-center
                                        "
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    <div className="text-sm font-medium">
                                        {page} / {paging.totalPages}
                                    </div>

                                    <button
                                        disabled={page === paging.totalPages}
                                        onClick={() => setPage((prev) => prev + 1)}
                                        className="
                                            h-9 w-9 rounded-lg border
                                            flex items-center justify-center
                                        "
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default BusinessUnits;
