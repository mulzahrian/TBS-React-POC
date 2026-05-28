// components/elements/Table/Pagination.jsx

import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
    paging,
    onPageChange,

    limit,
    onLimitChange,
}) => {
    return (
        <div
            className="
                flex items-center
                justify-between
                px-6 py-4
                bg-white
            "
        >
            {/* Left */}
            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Show</span>

                <select
                    value={limit}
                    onChange={(e) => onLimitChange(Number(e.target.value))}
                    className="
                        h-10 px-3
                        rounded-xl
                        border border-gray-200
                        bg-white
                        text-sm
                        outline-none
                        focus:border-[#045db0]
                    "
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>

                <span className="text-sm text-gray-500">entries</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onPageChange(paging.page - 1)}
                    disabled={paging.page <= 1}
                    className="
                        h-10 w-10
                        rounded-xl
                        bg-gray-100
                        hover:bg-gray-200
                        transition
                        flex items-center justify-center
                        disabled:opacity-40
                    "
                >
                    <ChevronLeft size={18} />
                </button>

                <div
                    className="
                        text-sm font-semibold
                        text-gray-700
                    "
                >
                    {paging.page} / {paging.totalPages}
                </div>

                <button
                    onClick={() => onPageChange(paging.page + 1)}
                    disabled={paging.page >= paging.totalPages}
                    className="
                        h-10 w-10
                        rounded-xl
                        bg-[#045db0]
                        text-white
                        hover:opacity-90
                        transition
                        flex items-center justify-center
                        disabled:opacity-40
                    "
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
