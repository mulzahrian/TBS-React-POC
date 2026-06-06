import { useEffect, useState } from "react";
import { exportToExcel } from "../utils/exportExcel";

import {
    getSystemValues,
    createSystemValue,
    updateSystemValue,
    getSystemValueById,
    deleteSystemValue,
} from "../services/systemValues.service";

const useSystemValues = () => {
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

    const fetchSystemValues = async () => {
        try {
            setLoading(true);
            const response = await getSystemValues({
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
        fetchSystemValues();
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
            const response = await getSystemValueById(id);
            setSelectedData(response);
            setIsActive(response.is_active === "true");
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
                sysvalue_name: formData.get("sysvalue_name"),
                value: formData.get("value"),
                is_active: isActive,
            };
            let response;
            if (formMode === "create") {
                response = await createSystemValue(payload);
            } else {
                response = await updateSystemValue(selectedData.sysvalue_id, payload);
            }
            await fetchSystemValues();
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
            const response = await deleteSystemValue(selectedId);
            await fetchSystemValues();
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

    const handleExportExcel = () => {
        const exportData = data.map((item, index) => ({
            No: (page - 1) * limit + index + 1,
            "System Value Name": item.sysvalue_name,
            "System Value": item.value,
            "Created By": item.created_by_name,
            Status: item.is_active === "true" ? "Active" : "Inactive",
        }));

        exportToExcel(exportData, "SystemValues");
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
        handleExportExcel,
        refetch: fetchSystemValues,
    };
};

export default useSystemValues;
