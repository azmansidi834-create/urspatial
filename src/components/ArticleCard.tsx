import React from 'react';
import { Calendar, Map, ArrowRight } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  author: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        {article.imageUrl ? (
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-200">
            <Map size={48} strokeWidth={1.5} />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2"></span>
            <span>Oleh {article.author}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <button className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
            Baca Selengkapnya
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
