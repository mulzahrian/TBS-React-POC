import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";

const Table = ({
    columns = [],
    data = [],
    loading = false,
    paging = null,
    onPageChange = () => {},
}) => {
    return (
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <TableHead columns={columns} />

                    <TableBody columns={columns} data={data} loading={loading} />
                </table>
            </div>

            {paging && <Pagination paging={paging} onPageChange={onPageChange} />}
        </div>
    );
};

export default Table;
