// components/elements/Table/index.jsx

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";

const Table = ({
    columns = [],
    data = [],
    loading = false,

    paging = null,
    onPageChange = () => {},

    limit = 10,
    onLimitChange = () => {},

    rowKey = "id",

    emptyMessage = "No data found",

    className = "",
}) => {
    return (
        <div
            className={`
                bg-white
                rounded-2xl
                shadow-sm
                overflow-hidden
                ${className}
            `}
        >
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border-separate border-spacing-0">
                    <TableHead columns={columns} />

                    <TableBody
                        columns={columns}
                        data={data}
                        loading={loading}
                        rowKey={rowKey}
                        emptyMessage={emptyMessage}
                    />
                </table>
            </div>

            {paging && (
                <Pagination
                    paging={paging}
                    onPageChange={onPageChange}
                    limit={limit}
                    onLimitChange={onLimitChange}
                />
            )}
        </div>
    );
};

export default Table;
