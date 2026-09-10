import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Search,
  Moon,
  Sun,
  Languages,
  FileText,
  Bookmark,
  Layers,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TRACKS } from '../../data/curriculum';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    darkMode,
    toggleDarkMode,
    setSearchOpen,
    setNotesDrawerOpen,
    notes,
    bookmarkedLessons,
    progressPercentage,
    completedLessons
  } = useApp();

  const location = useLocation();

  const totalNotesCount = Object.keys(notes).length;
  const totalBookmarksCount = bookmarkedLessons.length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-rose-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white font-black text-sm">
                <span className="text-rose-500">L</span>
                <span className="text-cyan-400">R</span>
                <span className="text-rose-400">N</span>
              </div>
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-none">
                Laravel React Nest <span className="text-blue-600 dark:text-blue-400">Academy</span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 hidden sm:block">
                Modern Full-Stack Enterprise Curriculum
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold">
            <Link
              to="/curriculum"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                location.pathname.startsWith('/curriculum') || location.pathname.startsWith('/lesson')
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {language === 'th' ? 'หลักสูตร' : 'Curriculum'}
            </Link>

            <Link
              to="/tools"
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                location.pathname.startsWith('/tools') || location.pathname.startsWith('/demo')
                  ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>{language === 'th' ? 'เครื่องมือจำลอง' : 'Simulators & Tools'}</span>
            </Link>

            <Link
              to="/projects"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                location.pathname.startsWith('/projects')
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {language === 'th' ? 'โครงงาน Capstone' : 'Capstone Projects'}
            </Link>

            <Link
              to="/cheatsheets"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                location.pathname.startsWith('/cheatsheets')
                  ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {language === 'th' ? 'สรุปคำสั่ง' : 'Cheatsheets'}
            </Link>
          </nav>
        </div>

        {/* Right: Controls, Search, Progress, Preferences */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs transition-colors"
            title="Search (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'th' ? 'ค้นหาบทเรียน...' : 'Search...'}</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Progress Indicator */}
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-1 font-mono font-bold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{progressPercentage}%</span>
            </div>
            <div className="w-16 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Notes Drawer Button */}
          <button
            onClick={() => setNotesDrawerOpen(true)}
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={language === 'th' ? 'สมุดบันทึกของฉัน' : 'My Notes'}
          >
            <FileText className="w-4 h-4" />
            {totalNotesCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                {totalNotesCount}
              </span>
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Language (ไทย / English)"
          >
            <Languages className="w-3.5 h-3.5 text-blue-500" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};
