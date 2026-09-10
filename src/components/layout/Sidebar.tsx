import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Layers,
  Sparkles,
  Bookmark
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TRACKS } from '../../data/curriculum';
import { LESSONS_DATA } from '../../data/lessonsData';

interface SidebarProps {
  currentTrackId?: string;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTrackId, className = '' }) => {
  const { language, completedLessons, bookmarkedLessons } = useApp();
  const { lessonId } = useParams();

  // Find active track or fallback to 'laravel'
  const activeTrack = TRACKS.find(t => t.id === currentTrackId) || TRACKS[0];

  // Accordion state for modules (open all by default)
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    activeTrack.modules.forEach(m => {
      map[m.id] = true;
    });
    return map;
  });

  const toggleModule = (id: string) => {
    setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className={`w-80 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] border-r border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 overflow-y-auto ${className}`}>
      {/* Track Title */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {language === 'th' ? 'แทร็กการเรียนรู้' : 'Curriculum Track'}
          </span>
        </div>
        <h2 className="text-sm font-extrabold text-slate-900 dark:text-white">
          {language === 'th' ? activeTrack.title.th : activeTrack.title.en}
        </h2>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
          {language === 'th'
            ? (activeTrack.subtitle?.th || activeTrack.description?.th || '')
            : (activeTrack.subtitle?.en || activeTrack.description?.en || '')}
        </p>
      </div>

      {/* Modules & Lessons tree */}
      <div className="flex-1 p-3 space-y-3">
        {activeTrack.modules.map(module => {
          const isOpen = openModules[module.id] ?? true;
          const completedCount = module.lessonIds.filter(id => completedLessons[id]).length;
          const totalCount = module.lessonIds.length;
          const moduleTitleTh = module.name?.th || (module as any).title?.th || '';
          const moduleTitleEn = module.name?.en || (module as any).title?.en || '';

          return (
            <div
              key={module.id}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 shadow-2xs overflow-hidden"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex-1 pr-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {moduleTitleTh.split(':')[0]}
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug mt-0.5">
                    {language === 'th' ? moduleTitleTh : moduleTitleEn}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-[10px] font-mono font-semibold text-slate-400">
                    {completedCount}/{totalCount}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Lesson Items */}
              {isOpen && (
                <div className="px-2 pb-2 pt-1 border-t border-slate-100 dark:border-slate-800/60 space-y-1">
                  {module.lessonIds.map(id => {
                    const lesson = LESSONS_DATA[id];
                    if (!lesson) return null;

                    const isCompleted = !!completedLessons[id];
                    const isBookmarked = bookmarkedLessons.includes(id);
                    const isActive = lessonId === id;

                    return (
                      <NavLink
                        key={id}
                        to={`/lesson/${id}`}
                        className={`group flex items-start gap-2.5 p-2 rounded-lg text-xs transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white font-bold shadow-xs'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="pt-0.5 flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isActive ? 'text-white' : 'text-emerald-500'
                              }`}
                            />
                          ) : (
                            <Circle
                              className={`w-3.5 h-3.5 ${
                                isActive ? 'text-blue-200' : 'text-slate-300 dark:text-slate-600'
                              }`}
                            />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="leading-snug truncate">
                            {language === 'th' ? lesson.title.th : lesson.title.en}
                          </div>
                          <div
                            className={`text-[10px] mt-0.5 flex items-center gap-2 ${
                              isActive ? 'text-blue-100' : 'text-slate-400'
                            }`}
                          >
                            <span>{(lesson as any).duration || `${lesson.durationMinutes || 15}m`}</span>
                            <span>•</span>
                            <span>{lesson.levelLabel?.split(':')[0] || 'L1'}</span>
                          </div>
                        </div>

                        {isBookmarked && (
                          <Bookmark
                            className={`w-3 h-3 flex-shrink-0 fill-current ${
                              isActive ? 'text-amber-200' : 'text-amber-400'
                            }`}
                          />
                        )}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
