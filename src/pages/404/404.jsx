import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#045db0] px-6">
            <div className="text-center text-white">
                <h1 className="text-8xl font-bold tracking-wider drop-shadow-lg">404</h1>
                <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
                <p className="mt-2 text-white/80 text-sm max-w-md mx-auto">
                    {error?.statusText ||
                        error?.message ||
                        "Halaman yang kamu cari tidak ditemukan."}
                </p>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block bg-white text-[#045db0] px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-50 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"></div>
            </div>
        </div>
    );
};

export default ErrorPage;
