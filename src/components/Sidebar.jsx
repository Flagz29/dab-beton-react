import { Icon } from '@iconify/react';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    {
      href: "/dashboard",
      icon: "mdi:view-dashboard",
      label: "Dashboard",
      color: "indigo"
    },
    {
      href: "/orders",
      icon: "mdi:clipboard-list",
      label: "Pesanan",
      color: "blue"
    },
    {
      href: "/shipping",
      icon: "mdi:truck-delivery",
      label: "Pengiriman",
      color: "green"
    },
    {
      href: "/products",
      icon: "mdi:package-variant",
      label: "Produk",
      color: "amber"
    },
    {
      href: "/users",
      icon: "mdi:account-group",
      label: "Pengguna",
      color: "purple"
    },
    {
      href: "/reports",
      icon: "mdi:chart-bar",
      label: "Laporan",
      color: "red"
    }
  ];

  return (
    <aside className="w-72 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col shadow-xl">
      {/* Header - Sticky */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center justify-center sticky top-0 bg-gray-900 z-10">
        <span className="text-red-400 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">Admin</span>
        <span className="ml-2 text-white">Panel</span>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link 
              href={item.href} 
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <div className={`p-2 rounded-lg bg-gray-800 group-hover:bg-${item.color}-400 transition-all duration-300`}>
                <Icon icon={item.icon} className="text-xl text-white" />
              </div>
              <span className="font-medium">{item.label}</span>
              <div className={`ml-auto w-2 h-2 rounded-full bg-${item.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </Link>
          ))}
        </div>
      </nav>

      {/* Logout - Sticky Bottom */}
      <div className="p-4 border-t border-gray-700 sticky bottom-0 bg-gray-800">
        <button
          onClick={() => console.log('Logout')}
          className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
        >
          <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-yellow-400 transition-all duration-300">
            <Icon icon="mdi:logout" className="text-xl text-white" />
          </div>
          <span className="font-medium">Keluar</span>
          <div className="ml-auto w-2 h-2 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;