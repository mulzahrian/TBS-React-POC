import Button from "../../components/elements/Button";

export const businessUnitColumns = ({ page, limit, onEdit }) => [
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
                    px-3 py-1 rounded-full text-xs font-semibold
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
        render: (row) => (
            <div className="flex items-center gap-2">
                <Button className="h-8 text-xs px-4" onClick={() => onEdit(row.BU_ID)}>
                    Detail
                </Button>

                <Button variant="danger" className="h-8 text-xs px-4">
                    Delete
                </Button>
            </div>
        ),
    },
];
