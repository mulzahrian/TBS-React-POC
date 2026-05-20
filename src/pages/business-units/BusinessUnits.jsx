import { Fragment } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";

import {
    Search,
    ChevronLeft,
    ChevronRight,
    FileSpreadsheet,
} from "lucide-react";

import Button from "../../components/elements/Button";

const BusinessUnits = () => {
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
        {
            id: 4,
            business_unit: "Asian Agri",
            division: "Palm",
            location: "Medan",
            status: true,
        },
        {
            id: 5,
            business_unit: "Apical",
            division: "Oleochemical",
            location: "Dumai",
            status: false,
        },
    ];

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
                    className={`
                        px-3 py-1 rounded-full
                        text-xs font-semibold
                        ${
                            row.status
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }
                    `}
                >
                    {row.status ? "Active" : "Inactive"}
                </span>
            ),
        },
        {
            header: "Action",
            render: () => (
                <div className="flex items-center gap-2">
                    <Button className="h-8 text-xs px-4">
                        Detail
                    </Button>

                    <Button
                        variant="danger"
                        className="h-8 text-xs px-4"
                    >
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
                            <h1 className="text-2xl font-bold text-gray-800">
                                Business Unit List
                            </h1>

                            <div className="flex items-center gap-3">

                                {/* Excel */}
                                <button
                                    className="
                                        h-10 w-10 rounded-lg
                                        bg-green-600 hover:bg-green-700
                                        text-white
                                        flex items-center justify-center
                                        transition
                                        shadow-sm
                                    "
                                >
                                    <FileSpreadsheet size={18} />
                                </button>

                                {/* Add */}
                                <Button
                                    className="
                                        px-4
                                        flex items-center gap-2
                                        shadow-sm
                                    "
                                >
                                    <span className="text-lg leading-none">
                                        +
                                    </span>

                                    Add
                                </Button>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="flex items-center justify-between">
                            <div className="relative w-full max-w-sm">
                                <Search
                                    size={18}
                                    className="
                                        absolute
                                        left-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                    "
                                />

                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="
                                        w-full
                                        h-10
                                        pl-10
                                        pr-4
                                        rounded-lg
                                        border
                                        bg-white
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#045db0]
                                    "
                                />
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">

                                <table className="min-w-full text-sm text-left">

                                    {/* Table Header */}
                                    <thead className="bg-[#045db0]">
                                        <tr>
                                            {columns.map(
                                                (column, index) => (
                                                    <th
                                                        key={index}
                                                        className="
                                                            px-6 py-4
                                                            text-white
                                                            font-semibold
                                                            whitespace-nowrap
                                                        "
                                                    >
                                                        {column.header}
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    </thead>

                                    {/* Table Body */}
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr
                                                key={row.id}
                                                className={`
                                                    transition
                                                    hover:bg-blue-50
                                                    ${
                                                        index % 2 === 0
                                                            ? "bg-white"
                                                            : "bg-gray-50/70"
                                                    }
                                                `}
                                            >
                                                {columns.map(
                                                    (column, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            className="
                                                                px-6 py-4
                                                                text-gray-700
                                                            "
                                                        >
                                                            {column.render
                                                                ? column.render(
                                                                      row,
                                                                      index
                                                                  )
                                                                : row[
                                                                      column.accessor
                                                                  ]}
                                                        </td>
                                                    )
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div
                                className="
                                    flex flex-col md:flex-row
                                    items-center justify-between
                                    gap-4
                                    px-6 py-4
                                    bg-white
                                "
                            >

                                {/* Show Entries */}
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>Show</span>

                                    <select
                                        className="
                                            h-9 px-3
                                            rounded-lg border
                                            bg-white
                                            outline-none
                                            focus:ring-2
                                            focus:ring-[#045db0]
                                        "
                                    >
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>

                                    <span>entries</span>
                                </div>

                                {/* Pagination */}
                                <div className="flex items-center gap-3">

                                    <button
                                        className="
                                            h-9 w-9
                                            rounded-lg border
                                            bg-white
                                            flex items-center justify-center
                                            hover:bg-gray-100
                                            transition
                                        "
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    <div
                                        className="
                                            text-sm font-medium
                                            text-gray-600
                                        "
                                    >
                                        1 / 10
                                    </div>

                                    <button
                                        className="
                                            h-9 w-9
                                            rounded-lg border
                                            bg-white
                                            flex items-center justify-center
                                            hover:bg-gray-100
                                            transition
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