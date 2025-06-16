import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Gagal mengambil data produk:', err);
        setError('Gagal memuat data produk');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Daftar Produk Beton</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Tambah Produk
              </button>
            </div>
          </div>

          {/* Loading & Error State */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : (
            /* Product Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={`http://localhost:5000/${product.image}`}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-product.jpg';
                      }}
                    />
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Baru
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h2>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-red-600 font-semibold">
                        Rp {parseInt(product.price).toLocaleString('id-ID')}
                      </p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && products.length === 0 && !error && (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Tidak ada produk tersedia</h3>
              <p className="mt-1 text-sm text-gray-500">Tambahkan produk baru untuk memulai</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Tambah Produk Pertama
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;