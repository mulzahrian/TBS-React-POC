import { useEffect, useState } from "react";
import { exportToExcel } from "../utils/exportExcel";

import {
    getUserTypes,
    createUserType,
    updateUserType,
    getUserTypeById,
    deleteUserType,
} from "../services/userType.service";

const useUserTypes = () => {
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

    const fetchUserTypes = async () => {
        try {
            setLoading(true);
            const response = await getUserTypes({
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
        fetchUserTypes();
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
            const response = await getUserTypeById(id);
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
                user_type_code: formData.get("user_type_code"),
                user_type_name: formData.get("user_type_name"),
                is_active: isActive,
            };
            let response;
            if (formMode === "create") {
                response = await createUserType(payload);
            } else {
                response = await updateUserType(selectedData.user_type_id, payload);
            }
            await fetchUserTypes();
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
            const response = await deleteUserType(selectedId);
            await fetchUserTypes();
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
            "User Type Code": item.user_type_code,
            "User Type Name": item.user_type_name,
            "Created By": item.created_by_name,
            Status: item.is_active === "true" ? "Active" : "Inactive",
        }));

        exportToExcel(exportData, "UserTypes");
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
        refetch: fetchUserTypes,
    };
};

export default useUserTypes;
