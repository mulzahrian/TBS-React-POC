import { Fragment } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/fragments/PageContainer";
import Card from "../../components/elements/card";
import { useLogin } from "../../hooks/useLogin";
import { Bus, PhoneCall, CalendarClock, Truck } from "lucide-react";

const Dashboard = () => {
    const username = useLogin();

    return (
        <MainLayout>
            <PageContainer title="Dashboard">
                <Fragment>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 py-3">
                        {/* Card 1 */}
                        <Card className="hover:shadow-md transition-all duration-300 p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-800">
                                        Bus Registration
                                    </h2>

                                    <div className="mt-3 space-y-1.5">
                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <CalendarClock size={15} className="text-blue-500" />
                                            <span>Open : Tuesday (10:00AM)</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-gray-600">
                                            <CalendarClock size={15} className="text-red-500" />
                                            <span>Close : Thursday (12:00PM)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Bus className="text-blue-600" size={20} />
                                </div>
                            </div>
                        </Card>

                        {/* Card 2 */}
                        <Card className="hover:shadow-md transition-all duration-300 p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-800">Hotline</h2>

                                    <div className="mt-3 space-y-2 text-xs text-gray-600">
                                        <div>
                                            <p className="font-medium text-gray-700">Dispatcher</p>
                                            <p>1335</p>
                                            <a
                                                href="mailto:pool_transport@kerinci.lcl"
                                                className="text-blue-600 hover:underline"
                                            >
                                                pool_transport@kerinci.lcl
                                            </a>
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-700">Officer</p>
                                            <p>1339</p>
                                            <a
                                                href="mailto:pooltransportofficer@kerinci.lcl"
                                                className="text-blue-600 hover:underline"
                                            >
                                                pooltransportofficer@kerinci.lcl
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <PhoneCall className="text-blue-600" size={20} />
                                </div>
                            </div>
                        </Card>

                        {/* Card 3 */}
                        <Card className="hover:shadow-md transition-all duration-300 p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-800">
                                        Total Booking
                                    </h2>

                                    <p className="text-2xl font-bold text-[#045db0] mt-4">1,284</p>
                                </div>

                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <CalendarClock className="text-blue-600" size={20} />
                                </div>
                            </div>
                        </Card>

                        {/* Card 4 */}
                        <Card className="hover:shadow-md transition-all duration-300 p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-800">
                                        Total Active Fleet
                                    </h2>

                                    <p className="text-2xl font-bold text-[#045db0] mt-4">84</p>
                                </div>

                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Truck className="text-blue-600" size={20} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </Fragment>
            </PageContainer>
        </MainLayout>
    );
};

export default Dashboard;
