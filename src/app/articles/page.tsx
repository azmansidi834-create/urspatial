import React from 'react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import TrendingCard, { TrendingArticle } from '@/components/TrendingCard';
import RecommendedArticle, { RecommendedArticleData } from '@/components/RecommendedArticle';

const TRENDING_ARTICLES: TrendingArticle[] = [
  {
    id: 't1',
    title: 'Our Home Always To Be.. Urban Planning Shift',
    description: 'How modern spatial planning adapts to the new normal in megacities.',
    tags: ['Research', 'Slum Area'],
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-lime-700'
  },
  {
    id: 't2',
    title: 'Visualizing Gentrification Through GIS',
    description: 'A deep dive into community displacement using spatial data mapping.',
    tags: ['Data', 'Social Issue'],
    imageUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-fuchsia-700'
  },
  {
    id: 't3',
    title: 'The Future of Public Transit Networks',
    description: 'Rethinking mobility in densely populated urban centers.',
    tags: ['Transport', 'Urban'],
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-sky-600'
  },
  {
    id: 't4',
    title: 'Green Spaces and Mental Health in Cities',
    description: 'Correlating NDVI data with public health outcomes across 50 cities.',
    tags: ['Health', 'Environment'],
    imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop',
    bgColor: 'bg-stone-700'
  }
];

const RECOMMENDED_ARTICLES: RecommendedArticleData[] = [
  {
    id: 'r1',
    authorName: 'Sarah Anindya',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    timeAgo: '24 menit yang lalu',
    title: 'Pulau GAG: POV Tata Ruang',
    subtitle: 'Menganalisis dampak tata ruang dan kebijakan lingkungan terhadap ekosistem kepulauan terluar Indonesia.',
    likes: '30K',
    comments: '482',
    shares: '30',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r2',
    authorName: 'Budi Santoso',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    timeAgo: '2 jam yang lalu',
    title: 'Model Cellular Automata-Markov Chain',
    subtitle: 'Pendekatan pemodelan spasial dinamis menggunakan probabilitas transisi Markov untuk memproyeksikan arah ekspansi kawasan terbangun.',
    likes: '12K',
    comments: '156',
    shares: '45',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r3',
    authorName: 'Rina Wijaya',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    timeAgo: '5 jam yang lalu',
    title: 'Pemantauan Kerapatan Vegetasi Menggunakan NDVI',
    subtitle: 'Ekstraksi nilai Normalized Difference Vegetation Index (NDVI) menggunakan citra satelit Landsat 8 berbasis cloud computing.',
    likes: '8.5K',
    comments: '92',
    shares: '12',
    imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=800&auto=format&fit=crop'
  }
];

const TOPICS = [
  "Ursgeomap", "Urban", "Plugin Geomap", "Data", "Social Issue", 
  "Environment", "Spatial Analysis", "Smart City", "Transport", "Policy"
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl">
          <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Half genius, half disaster, and 100% still figuring it out
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] font-heading">
            Created Ur Imagination With Our Geomap or Ur Research
          </h1>
        </div>
      </div>

      {/* 2. Sticky Search & Filter */}
      <div className="sticky top-0 z-30 bg-slate-50/90 backdrop-blur-md border-y border-gray-200/50 mb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari metodologi, algoritma, atau topik..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all text-sm"
              />
            </div>
            <div className="flex items-center w-full md:w-auto gap-3">
              <button className="flex-1 md:flex-none flex items-center justify-center px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm">
                <Filter size={18} className="mr-2" />
                Filter Kategori
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. Section "On Tranding" */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold font-heading text-gray-900">On Tranding</h2>
            <span className="text-3xl">🌶️</span>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar snap-x snap-mandatory">
            {TRENDING_ARTICLES.map(article => (
              <div key={article.id} className="snap-start">
                <TrendingCard article={article} />
              </div>
            ))}
          </div>
        </section>

        {/* 4. Section "Recomended Articles" */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">Recomended Articles</h2>
          <div className="flex flex-col bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            {RECOMMENDED_ARTICLES.map((article, index) => (
              <RecommendedArticle 
                key={article.id} 
                article={article} 
                isLast={index === RECOMMENDED_ARTICLES.length - 1}
              />
            ))}
          </div>
        </section>

        {/* 5. Section "Recomendation Topic" (Pill Tags) */}
        <section>
          <h2 className="text-xl font-bold font-heading text-gray-900 mb-6">Recomendation Topic</h2>
          <div className="flex flex-wrap gap-3">
            {TOPICS.map((topic, idx) => (
              <button 
                key={idx} 
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors hover:scale-105 transform duration-200 shadow-sm"
              >
                {topic}
                <ArrowUpRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </section>

      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
