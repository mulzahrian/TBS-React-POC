const TableHead = ({ columns }) => {
    return (
        <thead className="bg-gray-100 text-gray-700">
            <tr>
                {columns.map((column) => (
                    <th key={column.accessor} className="px-4 py-3 font-semibold whitespace-nowrap">
                        {column.header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
