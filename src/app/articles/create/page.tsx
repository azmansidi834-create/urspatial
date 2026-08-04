import React from 'react';
import { UploadCloud, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function CreateArticlePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <Link href="/articles" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-6 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Publish Your <span className="text-violet-600">Research</span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Share your methodology, spatial analysis, or urban planning insights with the community.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <form className="space-y-8">
            
            {/* Title & Author Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-bold text-gray-900">
                  Judul Artikel
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Contoh: Analisis Kesesuaian Lahan..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="author" className="block text-sm font-bold text-gray-900">
                  Nama Penulis
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Nama Lengkap atau Tim"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Category & Tags Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-bold text-gray-900">
                  Kategori
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm text-gray-700 appearance-none"
                >
                  <option value="" disabled selected>Pilih kategori...</option>
                  <option value="Analisis Spasial">Analisis Spasial</option>
                  <option value="Remote Sensing">Remote Sensing</option>
                  <option value="Perencanaan Wilayah">Perencanaan Wilayah</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="tags" className="block text-sm font-bold text-gray-900">
                  Tags / Topik
                </label>
                <input
                  type="text"
                  id="tags"
                  placeholder="BIM, GIS, Urban (pisahkan dengan koma)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <label htmlFor="excerpt" className="block text-sm font-bold text-gray-900">
                Cuplikan / Ringkasan
              </label>
              <textarea
                id="excerpt"
                rows={3}
                placeholder="Maksimal 2-3 kalimat ringkasan tentang riset/metodologi Anda."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm resize-none"
              />
            </div>

            {/* Image Upload Dropzone */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-900">
                Gambar Thumbnail
              </label>
              <div className="mt-2 flex justify-center rounded-2xl border-2 border-dashed border-gray-300 px-6 py-12 hover:border-violet-500 hover:bg-violet-50/50 transition-colors cursor-pointer group">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 mb-4 group-hover:scale-110 transition-transform">
                    <UploadCloud className="h-8 w-8 text-violet-600" aria-hidden="true" />
                  </div>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-violet-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-violet-600 focus-within:ring-offset-2 hover:text-violet-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-500 mt-2">
                    Upload your geomap or research visual here (PNG, JPG up to 5MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-bold text-gray-900">
                Isi Artikel / Metodologi
              </label>
              <textarea
                id="content"
                rows={12}
                placeholder="Tuliskan detail riset, kode algoritma, atau langkah metodologi di sini..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                className="px-8 py-3.5 bg-gray-900 text-white font-bold rounded-full hover:bg-violet-600 transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                Publish Article
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
