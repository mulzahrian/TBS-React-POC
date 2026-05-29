import { useEffect, useState } from "react";
import { getBusinessUnits } from "../services/businessUnit.service";

const useBusinessUnits = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState("");
    const [selectedData, setSelectedData] = useState(null);
    const [formMode, setFormMode] = useState("create");
    const [alert, setAlert] = useState({
        open: false,
        variant: "success",
        title: "",
        message: "",
    });

    const [paging, setPaging] = useState({
        total: 0,
        totalPages: 1,
    });

    const fetchBusinessUnits = async () => {
        try {
            setLoading(true);

            const response = await getBusinessUnits({
                page,
                limit,
                search,
            });

            setData(response.rows);
            setPaging(response.paging);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBusinessUnits();
    }, [page, limit, search]);

    return {
        data,
        loading,

        page,
        setPage,

        limit,
        setLimit,

        search,
        setSearch,

        paging,

        openModal,
        setOpenModal,

        selectedData,
        setSelectedData,

        formMode,
        setFormMode,

        alert,
        setAlert,
        refetch: fetchBusinessUnits,
    };
};

export default useBusinessUnits;
