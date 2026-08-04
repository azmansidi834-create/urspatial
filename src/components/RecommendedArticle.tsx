import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

export interface RecommendedArticleData {
  id: string;
  authorName: string;
  authorAvatar: string;
  timeAgo: string;
  title: string;
  subtitle: string;
  likes: string;
  comments: string;
  shares: string;
  imageUrl: string;
}

interface RecommendedArticleProps {
  article: RecommendedArticleData;
  isLast?: boolean;
}

export default function RecommendedArticle({ article, isLast }: RecommendedArticleProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 py-8 ${!isLast ? 'border-b border-gray-200/60' : ''} group cursor-pointer`}>
      {/* Left 70% */}
      <div className="flex-1 md:w-[70%] flex flex-col justify-center">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-3">
          <img 
            src={article.authorAvatar} 
            alt={article.authorName} 
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-gray-900">{article.authorName}</span>
          <span className="text-gray-400 text-sm">·</span>
          <span className="text-gray-500 text-sm">{article.timeAgo}</span>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h2>
        <p className="text-gray-600 line-clamp-2 mb-6">
          {article.subtitle}
        </p>

        {/* Interaction Bar */}
        <div className="flex items-center gap-6 text-gray-500 mt-auto">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors group/btn">
            <Heart size={18} className="group-hover/btn:fill-red-500" />
            <span className="text-sm font-medium">{article.likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm font-medium">{article.comments}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <Share2 size={18} />
            <span className="text-sm font-medium">{article.shares}</span>
          </button>
          <button className="ml-auto hover:text-gray-900 transition-colors">
            <Bookmark size={18} />
          </button>
        </div>
      </div>

      {/* Right 30% */}
      <div className="md:w-[30%] flex-shrink-0">
        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
