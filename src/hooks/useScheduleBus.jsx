import { useEffect, useState } from "react";
import { exportToExcel } from "../utils/exportExcel";

import {
    getScheduleBus,
    createScheduleBus,
    // updateSystemValue,
    // getSystemValueById,
    // deleteSystemValue,
} from "../services/scheduleBus.service";

const useScheduleBus = () => {
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

    const fetchScheduleBus = async () => {
        try {
            setLoading(true);
            const response = await getScheduleBus({
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
        fetchScheduleBus();
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

    // const handleEdit = async (id) => {
    //     try {
    //         const response = await getSystemValueById(id);
    //         setSelectedData(response);
    //         setIsActive(response.is_active === "true");
    //         setFormMode("edit");
    //         setOpenModal(true);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const payload = {
                schedule_code: formData.get("schedule_code"),
                schedule_date: formData.get("schedule_date"),
                schedule_status: formData.get("schedule_status"),
                routes: formData.get("routes"),
                terminal_departure: formData.get("terminal_departure"),
                terminal_arrival: formData.get("terminal_arrival"),
                remarks: formData.get("remarks"),
            };
            let response;
            if (formMode === "create") {
                response = await createScheduleBus(payload);
            } else {
                // response = await updateScheduleBus(selectedData.schedule_id, payload);
            }
            await fetchScheduleBus();
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
            // const response = await deleteScheduleBus(selectedId);
            await fetchScheduleBus();
            setAlert({
                open: true,
                variant: "success",
                title: "Success",
                // message: response.message,
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
        // handleEdit,
        handleSubmit,
        handleDelete,
        confirmDelete,
        handleExportExcel,
        refetch: fetchScheduleBus,
    };
};

export default useScheduleBus;
