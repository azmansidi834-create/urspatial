import React from 'react';
import ArticleCard, { Article } from '@/components/ArticleCard';
import { Search, Filter, Compass } from 'lucide-react';

const DUMMY_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Integrasi Metode AHP dan GIS untuk Pemetaan Zona Kerentanan Banjir',
    category: 'Analisis Spasial',
    excerpt: 'Metodologi pembobotan Analytical Hierarchy Process (AHP) yang digabungkan dengan analisis overlay pada parameter curah hujan, kelerengan, dan tutupan lahan untuk menghasilkan peta risiko spasial.',
    date: '14 Agustus 2023',
    author: 'Jurnal Tata Ruang & Geospasial',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Pemantauan Kerapatan Vegetasi Menggunakan Algoritma NDVI pada Google Earth Engine',
    category: 'Remote Sensing',
    excerpt: 'Ekstraksi nilai Normalized Difference Vegetation Index (NDVI) menggunakan citra satelit Landsat 8 berbasis cloud computing untuk menganalisis degradasi ruang terbuka hijau secara berkala.',
    date: '02 November 2023',
    author: 'Jurnal Penginderaan Jauh Terapan',
    imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Model Cellular Automata-Markov Chain untuk Prediksi Perubahan Penggunaan Lahan',
    category: 'Perencanaan Wilayah',
    excerpt: 'Pendekatan pemodelan spasial dinamis menggunakan probabilitas transisi Markov untuk memproyeksikan arah ekspansi kawasan terbangun di wilayah peri-urban pada masa depan.',
    date: '28 Februari 2024',
    author: 'Buletin Perencanaan Wilayah & Kota',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Header Section */}
      <div className="mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-800 font-semibold text-sm mb-6 border border-violet-200/50 shadow-sm backdrop-blur-sm">
              <Compass size={16} className="mr-2" />
              <span>Pusat Pengetahuan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 font-heading">
              Etalase <span className="text-violet-600">Metodologi</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Jelajahi kumpulan artikel, riset, dan panduan metodologi terbaru seputar 
              analisis geospasial, penginderaan jauh, dan perencanaan wilayah.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Search and Filter Bar */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari metodologi, algoritma, atau topik..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all text-sm"
              />
            </div>
            <div className="flex items-center w-full md:w-auto gap-3">
              <button className="flex-1 md:flex-none flex items-center justify-center px-5 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm">
                <Filter size={18} className="mr-2" />
                Filter Kategori
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
            Muat Lebih Banyak Artikel
          </button>
        </div>
      </div>
    </div>
  );
}
