'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import 'highlight.js/styles/github.css';
import { 
  ArrowLeft, 
  Bold, 
  Italic, 
  Strikethrough, 
  Heading1,
  Heading2,
  Heading3, 
  List,
  ListOrdered,
  UploadCloud,
  Plus,
  Camera,
  Video,
  Code,
  Link as LinkIcon
} from 'lucide-react';

const FloatingMediaButton = ({ editor }: { editor: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [topPos, setTopPos] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const updateMenu = () => {
      const { selection } = editor.state;
      const { $anchor } = selection;
      
      const isParagraph = $anchor.parent.type.name === 'paragraph';
      const isEmpty = $anchor.parent.textContent.length === 0;

      if (isParagraph && isEmpty && selection.empty) {
        // Find DOM element to get its offset top relative to the relative parent
        const dom = editor.view.domAtPos($anchor.pos);
        const element = dom.node instanceof HTMLElement ? dom.node : dom.node.parentElement;
        
        if (element) {
          setTopPos(element.offsetTop);
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    editor.on('selectionUpdate', updateMenu);
    editor.on('transaction', updateMenu);
    editor.on('focus', updateMenu);
    
    // Initial check
    setTimeout(updateMenu, 100);

    return () => {
      editor.off('selectionUpdate', updateMenu);
      editor.off('transaction', updateMenu);
      editor.off('focus', updateMenu);
    };
  }, [editor]);

  if (!isVisible) return null;

  return (
    <div
      className="absolute z-10 flex items-center transition-all duration-200"
      style={{ top: topPos, left: '-3.5rem' }} // -left-14 is -3.5rem
    >
      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
        className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-200 bg-white shadow-sm ${isExpanded ? 'rotate-45' : ''}`}
        title="Add media"
      >
        <Plus size={18} />
      </button>

      <div
        className={`flex items-center space-x-2 ml-2 transition-all duration-200 overflow-hidden ${
          isExpanded ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'
        }`}
      >
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            const url = window.prompt('URL Gambar:');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
              setIsExpanded(false);
            }
          }}
          className="w-9 h-9 flex shrink-0 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 bg-white text-emerald-600 shadow-sm transition-all hover:bg-gray-50"
          title="Image"
        >
          <Camera size={16} />
        </button>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          className="w-9 h-9 flex shrink-0 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 bg-white text-rose-500 shadow-sm transition-all hover:bg-gray-50"
          title="Video"
        >
          <Video size={16} />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCodeBlock().run();
            setIsExpanded(false);
          }}
          className="w-9 h-9 flex shrink-0 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 bg-white text-indigo-500 shadow-sm transition-all hover:bg-gray-50"
          title="Code Block"
        >
          <Code size={16} />
        </button>
      </div>
    </div>
  );
};

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-1 mb-6 bg-white/50 backdrop-blur border border-gray-100 p-2 rounded-2xl shadow-sm sticky top-24 z-20">
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('bold') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('italic') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Italic"
      >
        <Italic size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleStrike().run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('strike') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Strikethrough"
      >
        <Strikethrough size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          const url = window.prompt('Masukkan tautan (URL):');
          if (url === null) return;
          if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
          }
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('link') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Link"
      >
        <LinkIcon size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleCodeBlock().run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('codeBlock') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Code Block"
      >
        <Code size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-200 mx-2"></div>
      
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Heading 1"
      >
        <Heading1 size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Heading 2"
      >
        <Heading2 size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Heading 3"
      >
        <Heading3 size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-200 mx-2"></div>

      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('bulletList') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Bullet List"
      >
        <List size={18} />
      </button>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().toggleOrderedList().run(); }}
        className={`p-2.5 rounded-xl hover:bg-gray-100 transition-colors ${editor.isActive('orderedList') ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-600'}`}
        title="Ordered List"
      >
        <ListOrdered size={18} />
      </button>

      <div className="w-px h-6 bg-gray-200 mx-2"></div>
      
      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          const url = window.prompt('Masukkan URL Gambar:');
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-gray-600"
        title="Insert Image"
      >
        <Camera size={18} />
      </button>
    </div>
  );
};

const lowlight = createLowlight(common);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function CreateArticleDistractionFree() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState('');
  const [tagsString, setTagsString] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = async () => {
    if (!title || !editor || editor.getHTML() === '<p></p>' || editor.isEmpty) {
      alert('Judul dan isi artikel tidak boleh kosong!');
      return;
    }

    setIsPublishing(true);
    try {
      let thumbnailUrl = null;

      if (thumbnailFile) {
        const fileExt = thumbnailFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('article-images')
          .upload(fileName, thumbnailFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('article-images')
          .getPublicUrl(fileName);

        thumbnailUrl = publicUrlData.publicUrl;
      }

      const tagsArray = tagsString ? tagsString.split(',').map(t => t.trim()).filter(Boolean) : [];

      const { error: insertError } = await supabase
        .from('articles')
        .insert([
          {
            title: title,
            content: editor.getHTML(),
            author_name: authorName,
            category: category,
            tags: tagsArray,
            thumbnail_url: thumbnailUrl
          }
        ]);

      if (insertError) throw insertError;

      alert('Berhasil diterbitkan!');
      router.push('/');
    } catch (error: any) {
      alert(`Gagal menerbitkan: ${error.message}`);
    } finally {
      setIsPublishing(false);
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Placeholder.configure({
        placeholder: 'Tell your story...',
        emptyEditorClass: 'is-editor-empty',
      }),
      ImageExtension,
      LinkExtension.configure({ openOnClick: false, autolink: true }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    editorProps: {
      attributes: {
        // Original basic class string remains empty string here because we are moving the classes to a wrapper div
        class: '',
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-5xl lg:text-6xl font-extrabold font-heading text-gray-900 bg-transparent border-none outline-none placeholder-gray-300 mb-8"
            />
            
            {/* Toolbar */}
            <MenuBar editor={editor} />
            
            {/* Tiptap Editor Container with exact typography classes */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-ol:list-decimal !prose-ol:pl-5 prose-ul:list-disc !prose-ul:pl-5 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-pre:bg-gray-50 prose-pre:text-gray-900 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-md prose-code:bg-transparent prose-code:text-inherit prose-code:p-0 prose-code:font-mono relative ml-16 min-h-[500px]">
              <FloatingMediaButton editor={editor} />
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
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm text-gray-700 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Pilih kategori...</option>
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
                    value={tagsString}
                    onChange={(e) => setTagsString(e.target.value)}
                    placeholder="BIM, GIS, Urban (pisahkan dengan koma)"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm"
                  />
                </div>

                {/* Dropzone Thumbnail */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Gambar Thumbnail
                  </label>
                  <label className="mt-2 flex justify-center rounded-2xl border-2 border-dashed border-gray-300 px-4 py-8 hover:border-violet-500 hover:bg-violet-50/50 transition-all cursor-pointer group bg-white">
                    <div className="text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 mb-3 group-hover:scale-110 group-hover:bg-violet-100 transition-all">
                        <UploadCloud className="h-6 w-6 text-gray-400 group-hover:text-violet-600 transition-colors" aria-hidden="true" />
                      </div>
                      <div className="flex text-xs leading-5 text-gray-600 justify-center">
                        <span className="relative cursor-pointer rounded-md font-semibold text-violet-600 hover:text-violet-500">
                          {thumbnailFile ? thumbnailFile.name : 'Upload visual'}
                        </span>
                        <input type="file" className="sr-only" accept="image/png, image/jpeg, image/jpg" onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)} />
                      </div>
                      <p className="text-[10px] leading-4 text-gray-400 mt-1">
                        PNG/JPG up to 5MB
                      </p>
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handlePublish}
                    disabled={isPublishing}
                    className={`w-full px-6 py-3.5 bg-gray-900 text-white text-sm font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] ${isPublishing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-violet-600 hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] hover:-translate-y-0.5'}`}
                  >
                    {isPublishing ? 'Publishing...' : 'Publish Article'}
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
