import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Terminal, Sparkles, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TRACKS } from '../../data/curriculum';

export const Footer: React.FC = () => {
  const { language } = useApp();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-500 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-rose-500 p-0.5 shadow-xs">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center text-white font-black text-xs">
                  <span className="text-rose-500">L</span>
                  <span className="text-cyan-400">R</span>
                  <span className="text-rose-400">N</span>
                </div>
              </div>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                Laravel React Nest Academy
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md leading-relaxed text-xs">
              {language === 'th'
                ? 'แพลตฟอร์มการเรียนรู้การพัฒนาเว็บแอปพลิเคชันระดับมืออาชีพ ครอบคลุม Laravel 11, React 19, Inertia.js 3, NestJS และสถาปัตยกรรมระดับ Senior'
                : 'Interactive full-stack curriculum covering Laravel 11, React 19, Inertia.js 3, NestJS, and enterprise architecture.'}
            </p>
            <div className="text-[11px] text-slate-400">
              Curriculum reference based on full-stack roadmaps and real-world enterprise requirements.
            </div>
          </div>

          {/* Quick Curriculum Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              {language === 'th' ? 'แทร็กการเรียนรู้' : 'Curriculum Tracks'}
            </h4>
            <ul className="space-y-2">
              {TRACKS.map(t => (
                <li key={t.id}>
                  <Link
                    to={`/curriculum/${t.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {language === 'th' ? t.title.th : t.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Simulators & Resources */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              {language === 'th' ? 'เครื่องมือจำลอง' : 'Simulators & Tools'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tools/employee-crud" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Employee Management CRUD
                </Link>
              </li>
              <li>
                <Link to="/tools/code-playground" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Universal Code Playground
                </Link>
              </li>
              <li>
                <Link to="/tools/api-simulator" className="hover:text-blue-600 dark:hover:text-blue-400">
                  REST API Simulator
                </Link>
              </li>
              <li>
                <Link to="/tools/architecture-builder" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Architecture Builder
                </Link>
              </li>
              <li>
                <Link to="/cheatsheets" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Developer Cheatsheets
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Laravel React Nest Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted for modern full-stack engineers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
