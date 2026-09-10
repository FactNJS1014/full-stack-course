import React, { useState } from 'react';
import { Search, Copy, Check, Terminal, Code2, Sparkles, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CHEATSHEETS_DATA } from '../data/cheatsheetsData';

export const CheatsheetsPage: React.FC = () => {
  const { language } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Categories' },
    { id: 'laravel', label: 'Laravel 11' },
    { id: 'react', label: 'React 19' },
    { id: 'inertia', label: 'Inertia 3' },
    { id: 'nestjs', label: 'NestJS' }
  ];

  // Flatten or filter items with category context
  const filteredCategories = CHEATSHEETS_DATA.filter(cat => {
    if (selectedCategory !== 'ALL' && cat.id !== selectedCategory) return false;
    return true;
  }).map(cat => {
    const q = search.toLowerCase().trim();
    if (!q) return cat;

    const filteredItems = cat.items.filter(item => {
      return (
        item.name.toLowerCase().includes(q) ||
        item.desc.th.toLowerCase().includes(q) ||
        item.desc.en.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.language.toLowerCase().includes(q) ||
        cat.title.toLowerCase().includes(q)
      );
    });

    return {
      ...cat,
      items: filteredItems
    };
  }).filter(cat => cat.items.length > 0);

  const handleCopy = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Quick Reference Engine
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
          {language === 'th' ? 'รวมคำสั่งและโค้ดสำคัญ (Developer Cheatsheets)' : 'Developer Reference Cheatsheets'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {language === 'th'
            ? 'รวบรวมคำสั่งยอดนิยมสำหรับ Laravel 11, React 19, Inertia.js 3 และ NestJS สำหรับคัดลอกไปใช้งานจริงได้อย่างรวดเร็ว'
            : 'Instant searchable reference and syntax templates for Laravel 11, React 19, Inertia 3, and NestJS.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="flex-1 w-full relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={language === 'th' ? 'ค้นหาคำสั่งหรือโค้ด เช่น Route, useForm, Controller...' : 'Search commands, hooks, methods...'}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories & Snippet Cards */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Terminal className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-500">
            {language === 'th' ? 'ไม่พบคำสั่งที่ตรงกับการค้นหา' : 'No cheatsheets found matching your query'}
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredCategories.map(cat => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <Terminal className="w-4 h-4 text-amber-500" />
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  {cat.title}
                </h2>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  ({cat.items.length} snippets)
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                          {item.name}
                        </h3>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase">
                          {item.language}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                        {language === 'th' ? item.desc.th : item.desc.en}
                      </p>

                      <div className="relative group/code">
                        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed">
                          <code>{item.code}</code>
                        </pre>
                        <button
                          onClick={() => handleCopy(item.code)}
                          className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors opacity-90 group-hover/code:opacity-100 flex items-center gap-1 text-[11px]"
                          title="Copy Code"
                        >
                          {copiedCode === item.code ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 text-[10px] font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px]">Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
