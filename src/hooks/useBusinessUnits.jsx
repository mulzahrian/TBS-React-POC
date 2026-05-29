import { useEffect, useState } from "react";

import {
    getBusinessUnits,
    getBusinessUnitById,
    createBusinessUnit,
    updateBusinessUnit,
    deleteBusinessUnit,
} from "../services/businessUnit.service";

const useBusinessUnits = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState("");
    const [selectedData, setSelectedData] = useState(null);
    const [formMode, setFormMode] = useState("create");
    const [isActive, setIsActive] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);
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

    const openCreateModal = () => {
        setFormMode("create");
        setSelectedData(null);
        setIsActive(true);
        setOpenModal(true);
    };

    const resetForm = () => {
        setOpenModal(false);
        setSelectedData(null);
        setFormMode("create");
        setIsActive(true);
    };

    const handleEdit = async (id) => {
        try {
            const response = await getBusinessUnitById(id);
            setSelectedData(response);
            setIsActive(response.IS_ACTIVE === "true");
            setFormMode("edit");
            setOpenModal(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const payload = {
                bu_code: formData.get("BU_CODE"),
                bu_name: formData.get("BU_NAME"),
                bu_desc: formData.get("BU_DESC"),
                is_active: isActive,
            };
            let response;
            if (formMode === "create") {
                response = await createBusinessUnit(payload);
            } else {
                response = await updateBusinessUnit(selectedData.BU_ID, payload);
            }
            await fetchBusinessUnits();
            setAlert({
                open: true,
                variant: "success",
                title: "Success",
                message: response.message,
            });
            resetForm();
        } catch (error) {
            console.error(error);
            setAlert({
                open: true,
                variant: "error",
                title: "Error",
                message: error?.response?.data?.message || "Something went wrong",
            });
        }
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            setDeleteLoading(true);
            const response = await deleteBusinessUnit(selectedId);
            await fetchBusinessUnits();
            setAlert({
                open: true,
                variant: "success",
                title: "Success",
                message: response.message,
            });
            setDeleteModal(false);
            setSelectedId(null);
        } catch (error) {
            console.error(error);
            setAlert({
                open: true,
                variant: "error",
                title: "Error",
                message: error?.response?.data?.message || "Something went wrong",
            });
        } finally {
            setDeleteLoading(false);
        }
    };

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
        deleteModal,
        setDeleteModal,
        selectedData,
        formMode,
        isActive,
        setIsActive,
        alert,
        setAlert,
        selectedId,
        deleteLoading,
        openCreateModal,
        resetForm,
        handleEdit,
        handleSubmit,
        handleDelete,
        confirmDelete,
        refetch: fetchBusinessUnits,
    };
};

export default useBusinessUnits;
