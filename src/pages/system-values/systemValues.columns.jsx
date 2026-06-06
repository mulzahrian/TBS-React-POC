import Button from "../../components/elements/Button";
import { Pencil, Trash2 } from "lucide-react";

export const systemValueColumns = ({ page, limit, onEdit, onDelete }) => [
    {
        header: "No",
        render: (row, index) => (page - 1) * limit + index + 1,
    },
    {
        header: "System Value Name",
        accessor: "sysvalue_name",
    },
    {
        header: "System Value",
        accessor: "value",
    },
    {
        header: "Created By",
        accessor: "created_by_name",
    },
    {
        header: "Status",
        render: (row) => (
            <span
                className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${
                        row.is_active === "true"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }
                `}
            >
                {row.is_active === "true" ? "Active" : "Inactive"}
            </span>
        ),
    },
    {
        header: "Action",
        render: (row) => (
            <div className="flex items-center gap-2">
                <Button
                    className="h-7 min-w-7 px-2 text-xs flex items-center justify-center"
                    onClick={() => onEdit(row.sysvalue_id)}
                >
                    <Pencil size={14} />
                </Button>
                <Button
                    variant="danger"
                    className="h-7 min-w-7 px-2 text-xs flex items-center justify-center"
                    onClick={() => onDelete(row.sysvalue_id)}
                >
                    <Trash2 size={14} />
                </Button>
            </div>
        ),
    },
];
