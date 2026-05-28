// components/elements/Table/TableHead.jsx

const TableHead = ({ columns }) => {
    return (
        <thead className="bg-[#045db0]">
            <tr>
                {columns.map((column, index) => (
                    <th
                        key={column.accessor || index}
                        className="
                            px-6 py-4
                            text-white
                            font-semibold
                            text-sm
                            whitespace-nowrap
                        "
                    >
                        {column.header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
