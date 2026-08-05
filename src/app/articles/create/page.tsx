'use client';

import React from 'react';
import Link from 'next/link';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { 
  ArrowLeft, 
  Bold, 
  Italic, 
  Strikethrough, 
  Heading1,
  Heading2, 
  List,
  UploadCloud,
} from 'lucide-react';

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-1 mb-6 bg-white/50 backdrop-blur border border-gray-100 p-2 rounded-2xl shadow-sm sticky top-24 z-10">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('bold') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('italic') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Italic"
      >
        <Italic size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('strike') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Strikethrough"
      >
        <Strikethrough size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-200 mx-2"></div>
      
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Heading 1"
      >
        <Heading1 size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Heading 2"
      >
        <Heading2 size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-200 mx-2"></div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Bullet List"
      >
        <List size={18} />
      </button>
    </div>
  );
};

export default function CreateArticleDistractionFree() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Tell your story...',
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-lg prose-slate focus:outline-none max-w-none min-h-[500px] text-gray-800 leading-relaxed',
      },
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-violet-200">
      
      {/* Top Navigation */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <Link href="/articles" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <div className="text-sm font-medium text-gray-400">
          Drafting...
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Canvas (Kiri/Tengah - 70%) */}
          <div className="lg:w-8/12 pt-8 lg:pt-12">
            
            {/* Title Input */}
            <input
              type="text"
              placeholder="Title"
              className="w-full text-5xl lg:text-6xl font-extrabold font-heading text-gray-900 bg-transparent border-none outline-none placeholder-gray-300 mb-8"
            />
            
            {/* Tiptap Editor Container */}
            <div className="relative">
              <MenuBar editor={editor} />
              <EditorContent editor={editor} className="editor-container" />
            </div>
          </div>

          {/* Sidebar Pengaturan Publikasi (Kanan - 30%) */}
          <div className="lg:w-4/12 pt-8 lg:pt-12">
            <div className="sticky top-24 bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                Publish Settings
              </h3>
              
              <div className="space-y-6">
                {/* Penulis */}
                <div className="space-y-2">
                  <label htmlFor="author" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Nama Penulis
                  </label>
                  <input
                    type="text"
                    id="author"
                    placeholder="Nama Lengkap atau Tim"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
                  />
                </div>

                {/* Kategori */}
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Kategori
                  </label>
                  <select
                    id="category"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm text-gray-700 appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Pilih kategori...</option>
                    <option value="Analisis Spasial">Analisis Spasial</option>
                    <option value="Remote Sensing">Remote Sensing</option>
                    <option value="Perencanaan Wilayah">Perencanaan Wilayah</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <label htmlFor="tags" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Tags / Topik
                  </label>
                  <input
                    type="text"
                    id="tags"
                    placeholder="BIM, GIS, Urban (pisahkan dengan koma)"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
                  />
                </div>

                {/* Dropzone Thumbnail */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Gambar Thumbnail
                  </label>
                  <div className="mt-2 flex justify-center rounded-2xl border-2 border-dashed border-gray-300 px-4 py-8 hover:border-violet-500 hover:bg-violet-50/50 transition-all cursor-pointer group bg-white">
                    <div className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 mb-3 group-hover:scale-110 group-hover:bg-violet-100 transition-all">
                        <UploadCloud className="h-6 w-6 text-gray-400 group-hover:text-violet-600 transition-colors" aria-hidden="true" />
                      </div>
                      <div className="flex text-xs leading-5 text-gray-600 justify-center">
                        <span className="relative cursor-pointer rounded-md font-semibold text-violet-600 hover:text-violet-500">
                          Upload visual
                        </span>
                      </div>
                      <p className="text-[10px] leading-4 text-gray-400 mt-1">
                        PNG/JPG up to 5MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full px-6 py-3.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-violet-600 transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] hover:-translate-y-0.5"
                  >
                    Publish Article
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
