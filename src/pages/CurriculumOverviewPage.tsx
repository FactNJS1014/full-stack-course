import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, CheckCircle2, Circle, Clock, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRACKS } from '../data/curriculum';
import { LESSONS_DATA } from '../data/lessonsData';

export const CurriculumOverviewPage: React.FC = () => {
  const { language, completedLessons } = useApp();
  const [filterText, setFilterText] = useState('');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<string>('ALL');

  const q = filterText.toLowerCase().trim();

  const filteredTracks = TRACKS.filter(track => {
    if (selectedTrackFilter !== 'ALL' && track.id !== selectedTrackFilter) return false;
    if (!q) return true;
    return (
      track.title.th.toLowerCase().includes(q) ||
      track.title.en.toLowerCase().includes(q) ||
      (track.subtitle?.th || track.description?.th || '').toLowerCase().includes(q) ||
      (track.subtitle?.en || track.description?.en || '').toLowerCase().includes(q) ||
      track.modules.some(m => {
        const titleTh = m.name?.th || (m as any).title?.th || '';
        const titleEn = m.name?.en || (m as any).title?.en || '';
        return titleTh.toLowerCase().includes(q) || titleEn.toLowerCase().includes(q);
      })
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Complete Full-Stack Roadmap
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
          {language === 'th' ? 'แผนผังหลักสูตรทั้งหมด 80 บทเรียน' : 'Curriculum Blueprint: 80 Sections'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {language === 'th'
            ? 'แบ่งออกเป็น 5 แทร็กการเรียนรู้หลัก จากระดับพื้นฐานจนถึง Senior Architecture และระบบงานระดับองค์กร'
            : 'Structured into 5 mastery tracks spanning core frameworks to high-scale enterprise architecture.'}
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="flex-1 w-full relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            placeholder={language === 'th' ? 'ค้นหาหัวข้อ, โมดูล, หรือบทเรียน...' : 'Filter modules or topics...'}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          <button
            onClick={() => setSelectedTrackFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              selectedTrackFilter === 'ALL'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            All Tracks
          </button>
          {TRACKS.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTrackFilter(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                selectedTrackFilter === t.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.title.en.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Tracks display */}
      <div className="space-y-10">
        {filteredTracks.map(track => {
          const completedCount = track.modules.reduce((acc, m) => {
            return acc + m.lessonIds.filter(id => completedLessons[id]).length;
          }, 0);
          const pct = Math.round((completedCount / track.totalLessons) * 100) || 0;

          return (
            <div
              key={track.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm"
            >
              {/* Track Title and Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                      {track.level}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {completedCount} / {track.totalLessons} {language === 'th' ? 'บทเรียน' : 'lessons'} ({pct}%)
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {language === 'th' ? track.title.th : track.title.en}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                    {language === 'th'
                      ? (track.subtitle?.th || track.description?.th || '')
                      : (track.subtitle?.en || track.description?.en || '')}
                  </p>
                </div>

                <Link
                  to={`/curriculum/${track.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors whitespace-nowrap"
                >
                  <span>{language === 'th' ? 'เข้าสู่แทร็กนี้' : 'Open Track'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Modules breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {track.modules.map(module => {
                  const moduleCompleted = module.lessonIds.filter(id => completedLessons[id]).length;

                  return (
                    <div
                      key={module.id}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>{(module.name?.th || (module as any).title?.th || '').split(':')[0]}</span>
                          <span>
                            {moduleCompleted}/{module.lessonIds.length}
                          </span>
                        </div>
                        <h3 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-2 leading-snug">
                          {language === 'th' ? (module.name?.th || (module as any).title?.th) : (module.name?.en || (module as any).title?.en)}
                        </h3>

                        <div className="mt-3 space-y-1">
                          {module.lessonIds.slice(0, 3).map(id => {
                            const lesson = LESSONS_DATA[id];
                            if (!lesson) return null;
                            const isDone = !!completedLessons[id];

                            return (
                              <Link
                                key={id}
                                to={`/lesson/${id}`}
                                className="flex items-center gap-2 p-1 rounded hover:bg-white dark:hover:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-300 transition-colors"
                              >
                                {isDone ? (
                                  <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                ) : (
                                  <Circle className="w-3 h-3 text-slate-300 dark:text-slate-600 flex-shrink-0" />
                                )}
                                <span className="truncate">{language === 'th' ? lesson.title.th : lesson.title.en}</span>
                              </Link>
                            );
                          })}
                          {module.lessonIds.length > 3 && (
                            <div className="text-[10px] text-slate-400 pl-5">
                              +{module.lessonIds.length - 3} more lessons
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex justify-end">
                        <Link
                          to={`/lesson/${module.lessonIds[0]}`}
                          className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <span>{language === 'th' ? 'เริ่มโมดูล' : 'Start'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
