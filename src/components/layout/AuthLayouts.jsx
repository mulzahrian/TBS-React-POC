import Card from "../elements/card";
import bgImage from "../../assets/bg-image.png";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { useState } from "react";

const AuthLayouts = (props) => {
    const { children, title, type } = props;

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div
                className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom right, rgba(4,93,176,0.4), rgba(4,93,176,0.3), rgba(2,45,90,0.5))",
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 w-full flex justify-center px-4">
                    <Card className="bg-white/90 backdrop-blur-sm" size="sm">
                        {/* Title */}
                        <h1
                            className="text-3xl font-bold mb-2 text-center"
                            style={{ color: "#045db0" }}
                        >
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="font-medium text-slate-600 text-center">
                            Transport Booking System
                        </p>

                        {/* Info Button */}
                        <div className="flex justify-center mt-5 mb-6">
                            <button
                                onClick={() => setShowInfo(true)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition duration-200"
                            >
                                <Info className="w-4 h-4 text-blue-600" />

                                <span className="text-sm font-medium text-blue-600">
                                    Important Information
                                </span>
                            </button>
                        </div>

                        {/* Form */}
                        {children}

                        {/* Navigation */}
                        {navigation({ type })}
                    </Card>
                </div>

                {/* Modal */}
                {showInfo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                            
                            {/* Header */}
                            <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
                                <h2 className="text-white font-semibold text-lg">
                                    Important Information
                                </h2>

                                <button
                                    onClick={() => setShowInfo(false)}
                                    className="text-white text-2xl hover:opacity-80"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <ol className="space-y-4 text-sm text-slate-700 leading-relaxed">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600">
                                            1.
                                        </span>

                                        <p>
                                            Passengers are required to bring
                                            their ticket during departure.
                                        </p>
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600">
                                            2.
                                        </span>

                                        <p>
                                            Passengers must bring identification
                                            documents (Copy ID Card).
                                        </p>
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600">
                                            3.
                                        </span>

                                        <p>
                                            Passenger name must match the name
                                            written on the ticket.
                                        </p>
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600">
                                            4.
                                        </span>

                                        <p>
                                            If passengers cancel their trip,
                                            they must inform Pool Transport at
                                            least H-1 before departure.
                                        </p>
                                    </li>
                                </ol>

                                {/* Warning */}
                                <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
                                    <p className="text-sm text-yellow-700 leading-relaxed">
                                        Users are required to login at least
                                        once every month. Accounts inactive for
                                        more than 90 days will be automatically
                                        removed from the system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm text-slate-500 text-center mt-6">
                Forgot password?{" "}
                <Link
                    to="/register"
                    className="font-semibold hover:underline transition duration-200"
                    style={{ color: "#045db0" }}
                >
                    Recover it here
                </Link>
            </p>
        );
    } else if (type === "register") {
        return (
            <p className="text-sm text-slate-500 text-center mt-6">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-semibold hover:underline transition duration-200"
                    style={{ color: "#045db0" }}
                >
                    Login here
                </Link>
            </p>
        );
    }
};

export default AuthLayouts;