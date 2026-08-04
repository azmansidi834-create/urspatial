import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface TrendingArticle {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  bgColor: string; // e.g., 'bg-lime-600'
}

interface TrendingCardProps {
  article: TrendingArticle;
}

export default function TrendingCard({ article }: TrendingCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] h-[450px] rounded-3xl overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Top Half: Solid Color */}
      <div className={`${article.bgColor} h-1/2 p-6 flex flex-col`}>
        <div className="flex gap-2 mb-4 flex-wrap">
          {article.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/20 text-white backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-white font-heading text-xl font-bold leading-tight mb-2 line-clamp-3">
          {article.title}
        </h3>
        <p className="text-white/80 text-xs line-clamp-2 mt-auto">
          {article.description}
        </p>
      </div>
      
      {/* Bottom Half: Image */}
      <div className="h-1/2 relative">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Read More Button */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
              Read More
            </span>
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black group-hover:bg-yellow-300 transition-colors shadow-lg">
              <ArrowUpRight size={20} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
