// components/elements/Table/TableBody.jsx

const TableBody = ({ columns, data, loading, rowKey, emptyMessage }) => {
    if (loading) {
        return (
            <tbody>
                <tr>
                    <td
                        colSpan={columns.length}
                        className="
                            text-center
                            py-14
                            text-gray-500
                        "
                    >
                        Loading...
                    </td>
                </tr>
            </tbody>
        );
    }

    if (data.length === 0) {
        return (
            <tbody>
                <tr>
                    <td
                        colSpan={columns.length}
                        className="
                            text-center
                            py-14
                            text-gray-400
                        "
                    >
                        {emptyMessage}
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
            {data.map((row, index) => (
                <tr
                    key={row[rowKey] || index}
                    className={`
                        transition-all duration-200
                        hover:bg-blue-100/60

                        ${index % 2 === 0 ? "bg-white" : "bg-blue-50/40"}
                    `}
                >
                    {columns.map((column, colIndex) => (
                        <td
                            key={column.accessor || colIndex}
                            className="
                                px-6 py-4
                                text-gray-700
                            "
                        >
                            {column.render ? column.render(row, index) : row[column.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
