import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 to-indigo-500 text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-lg mb-2">Oops! Page Not Found</p>
            <p className="text-sm mb-6 opacity-80">{error?.statusText || error?.message}</p>

            <Link
                to="/"
                className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
                Balik ke Home
            </Link>
        </div>
    );
};

export default ErrorPage;
