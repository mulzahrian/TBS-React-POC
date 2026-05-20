import Button from "../Button";

const Pagination = ({ paging, onPageChange }) => {
    return (
        <div className="flex items-center justify-between p-4 border-t">
            <div className="text-sm text-gray-500">
                Page {paging.page} of {paging.totalPages}
            </div>

            <div className="flex gap-2">
                <Button
                    variant="secondary"
                    className="h-9"
                    onClick={() => onPageChange(paging.page - 1)}
                    disabled={paging.page <= 1}
                >
                    Prev
                </Button>

                <Button
                    className="h-9"
                    onClick={() => onPageChange(paging.page + 1)}
                    disabled={paging.page >= paging.totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Pagination;
