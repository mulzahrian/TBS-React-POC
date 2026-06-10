import { useEffect, useState } from "react";
import { exportToExcel } from "../utils/exportExcel";

import {
    getDrivers,
    createDriver,
    updateDriver,
    getDriverById,
    deleteDriver,
} from "../services/drivers.service";

const useDrivers = () => {
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

    const fetchDrivers = async () => {
        try {
            setLoading(true);
            const response = await getDrivers({
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
        fetchDrivers();
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
            const response = await getDriverById(id);
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
                driver_nik: formData.get("driver_nik"),
                driver_name: formData.get("driver_name"),
                phone_number: formData.get("phone_number"),
                address: formData.get("address"),
                is_active: isActive,
            };
            let response;
            if (formMode === "create") {
                response = await createDriver(payload);
            } else {
                response = await updateDriver(selectedData.driver_id, payload);
            }
            await fetchDrivers();
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
            const response = await deleteDriver(selectedId);
            await fetchDrivers();
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
            "Driver NIK": item.driver_nik,
            "Driver Name": item.driver_name,
            "Phone Number": item.phone_number,
            "Created By": item.created_by_name,
            Status: item.is_active === "true" ? "Active" : "Inactive",
        }));

        exportToExcel(exportData, "Drivers");
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
        refetch: fetchDrivers,
    };
};

export default useDrivers;
