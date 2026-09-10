import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Layers, Code, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LESSONS_DATA } from '../../data/lessonsData';
import { PROJECTS_DATA } from '../../data/projectsData';
import { CHEATSHEETS_DATA } from '../../data/cheatsheetsData';

export const SearchModal: React.FC = () => {
  const { searchOpen, setSearchOpen, language } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  if (!searchOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedLessons = Object.values(LESSONS_DATA).filter(lesson => {
    if (!q) return true;
    return (
      lesson.title.th.toLowerCase().includes(q) ||
      lesson.title.en.toLowerCase().includes(q) ||
      lesson.category.toLowerCase().includes(q) ||
      lesson.trackId.toLowerCase().includes(q)
    );
  }).slice(0, 5);

  const matchedProjects = PROJECTS_DATA.filter(proj => {
    if (!q) return false;
    return (
      proj.title.th.toLowerCase().includes(q) ||
      proj.title.en.toLowerCase().includes(q) ||
      proj.techStack.some(t => t.toLowerCase().includes(q))
    );
  }).slice(0, 3);

  const handleSelectLesson = (id: string) => {
    setSearchOpen(false);
    navigate(`/lesson/${id}`);
  };

  const handleSelectProject = (id: string) => {
    setSearchOpen(false);
    navigate(`/projects/${id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={language === 'th' ? 'ค้นหาบทเรียน, โค้ดตัวอย่าง, โปรเจกต์, คำสั่ง...' : 'Search lessons, code examples, projects, topics...'}
            className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-mono">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Lessons section */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span>{language === 'th' ? 'บทเรียน (Lessons)' : 'Lessons'}</span>
            </div>
            <div className="space-y-1">
              {matchedLessons.map(lesson => (
                <button
                  key={lesson.id}
                  onClick={() => handleSelectLesson(lesson.id)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-medium">
                      {lesson.levelLabel.split(':')[0]}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {language === 'th' ? lesson.title.th : lesson.title.en}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Projects section */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'th' ? 'โปรเจกต์ (Projects)' : 'Projects'}</span>
              </div>
              <div className="space-y-1">
                {matchedProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => handleSelectProject(proj.id)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-medium">
                        {proj.level}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {language === 'th' ? proj.title.th : proj.title.en}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick links to Tools */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>{language === 'th' ? 'เครื่องมือจำลอง (Simulators & Tools)' : 'Tools & Simulators'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { setSearchOpen(false); navigate('/tools/code-playground'); }}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/20"
              >
                💻 Code Playground
              </button>
              <button
                onClick={() => { setSearchOpen(false); navigate('/demo/employee-management'); }}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20"
              >
                ⚡ Live Employee CRUD Demo
              </button>
              <button
                onClick={() => { setSearchOpen(false); navigate('/tools/api-simulator'); }}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-purple-50/50 dark:hover:bg-purple-950/20"
              >
                🌐 REST API Simulator
              </button>
              <button
                onClick={() => { setSearchOpen(false); navigate('/tools/architecture-builder'); }}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-amber-50/50 dark:hover:bg-amber-950/20"
              >
                🏗️ Architecture Builder
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>Tip: Press ESC to close</span>
          <span>Laravel + React 19 + Inertia 3 + NestJS Academy</span>
        </div>
      </div>
    </div>
  );
};
