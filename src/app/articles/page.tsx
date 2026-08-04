import React from 'react';
import ArticleCard, { Article } from '@/components/ArticleCard';
import { Search, Filter, Compass } from 'lucide-react';

const DUMMY_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Analisis Spasial Kerentanan Banjir Menggunakan Metode AHP dan GIS di Perkotaan',
    category: 'Analisis Spasial',
    excerpt: 'Pendekatan Analytical Hierarchy Process (AHP) diintegrasikan dengan Sistem Informasi Geografis (GIS) untuk memetakan dan menganalisis zona rentan banjir berdasarkan parameter elevasi, curah hujan, dan tutupan lahan.',
    date: '12 Okt 2023',
    author: 'Tim Riset GeoPlan',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Penerapan Machine Learning untuk Deteksi Perubahan Tutupan Lahan dari Citra Satelit',
    category: 'Remote Sensing',
    excerpt: 'Metodologi penggunaan algoritma Random Forest pada Google Earth Engine untuk mengklasifikasikan dan memantau perubahan tutupan lahan di kawasan peri-urban selama satu dekade terakhir.',
    date: '28 Sep 2023',
    author: 'Sarah Anindya',
    imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Evaluasi Kesesuaian Lahan Pemukiman Berbasis Multi-Criteria Decision Analysis (MCDA)',
    category: 'Perencanaan Wilayah',
    excerpt: 'Panduan komprehensif melakukan MCDA untuk menentukan lokasi optimal pembangunan pemukiman baru dengan meminimalisir dampak lingkungan dan memaksimalkan aksesibilitas jaringan transportasi.',
    date: '05 Nov 2023',
    author: 'Dr. Budi Santoso',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Metode Network Analysis untuk Optimasi Rute Pengangkutan Sampah Perkotaan',
    category: 'Network Analysis',
    excerpt: 'Studi kasus pemanfaatan ArcGIS Network Analyst dalam mendesain sistem rute distribusi dan pengangkutan logistik/sampah yang efisien di wilayah padat penduduk.',
    date: '15 Nov 2023',
    author: 'Rina Wijaya',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Pemodelan Harga Lahan Menggunakan Geographically Weighted Regression (GWR)',
    category: 'Geostatistik',
    excerpt: 'Bagaimana metode GWR dapat mengatasi autokorelasi spasial dalam menganalisis faktor-faktor yang mempengaruhi nilai tanah di kawasan metropolitan.',
    date: '02 Des 2023',
    author: 'Andi Pradana',
    imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Integrasi BIM dan GIS untuk Perencanaan Infrastruktur Kota Pintar (Smart City)',
    category: 'BIM & GIS',
    excerpt: 'Metodologi penggabungan data Building Information Modeling dengan pemetaan geospasial untuk perencanaan utilitas cerdas dan manajemen aset infrastruktur.',
    date: '20 Des 2023',
    author: 'Lab Tata Kota',
    imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Header Section */}
      <div className="mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-6">
              <Compass size={16} className="mr-2" />
              <span>Pusat Pengetahuan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Etalase <span className="text-blue-600">Metodologi</span>
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
