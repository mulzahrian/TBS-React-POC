import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/login.jsx";
import RegisterPage from "./pages/auth/register.jsx";
import ErrorPage from "./pages/404/404.jsx";
import ProductsPage from "./pages/products.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import Profile from "./pages/profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/dashboards/:id",
        element: <DetailProductPage />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
