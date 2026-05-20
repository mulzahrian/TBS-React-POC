const TableBody = ({ columns, data, loading }) => {
    if (loading) {
        return (
            <tbody>
                <tr>
                    <td colSpan={columns.length} className="text-center py-10">
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
                    <td colSpan={columns.length} className="text-center py-10 text-gray-500">
                        No Data
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
            {data.map((row, index) => (
                <tr key={row.user_id || index} className="border-t hover:bg-gray-50">
                    {columns.map((column) => (
                        <td key={column.accessor} className="px-4 py-3">
                            {column.render ? column.render(row, index) : row[column.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
