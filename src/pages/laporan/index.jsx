import React from "react";
import Sidebar from "@/components/Sidebar"

const LaporanPage = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-8 ml-10">
                <h1 className="text-2xl font-bold text-gray-800">Laporan</h1>
            </div>
        </div>
    )
}

export default LaporanPage;