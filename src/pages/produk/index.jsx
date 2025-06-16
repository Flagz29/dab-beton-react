import React from "react";
import Sidebar from "@/components/Sidebar"

const ProdukPage = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 p-8 ml-10">
                <h1 className="text-2xl font-bold text-gray-800">Produk</h1>
            </div>
        </div>
    )
}

export default ProdukPage;