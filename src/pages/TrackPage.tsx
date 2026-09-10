import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Circle, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRACKS } from '../data/curriculum';
import { LESSONS_DATA } from '../data/lessonsData';

export const TrackPage: React.FC = () => {
  const { trackId } = useParams<{ trackId?: string }>();
  const { language, completedLessons } = useApp();

  const activeTrack = TRACKS.find(t => t.id === trackId) || TRACKS[0];

  const trackCompletedCount = activeTrack.modules.reduce((acc, m) => {
    return acc + m.lessonIds.filter(id => completedLessons[id]).length;
  }, 0);
  const trackPercentage = Math.round((trackCompletedCount / activeTrack.totalLessons) * 100) || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <Link
        to="/curriculum"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'th' ? 'กลับไปดูทุกแทร็ก' : 'All Curriculum Tracks'}</span>
      </Link>

      {/* Track Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
            {activeTrack.level}
          </span>
          <span className="text-xs font-mono text-slate-500">
            {trackCompletedCount} / {activeTrack.totalLessons} {language === 'th' ? 'บทเรียนสำเร็จ' : 'lessons completed'} ({trackPercentage}%)
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
          {language === 'th' ? activeTrack.title.th : activeTrack.title.en}
        </h1>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {language === 'th'
            ? (activeTrack.subtitle?.th || activeTrack.description?.th || '')
            : (activeTrack.subtitle?.en || activeTrack.description?.en || '')}
        </p>

        {/* Track Progress Bar */}
        <div className="mt-6 w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
            style={{ width: `${trackPercentage}%` }}
          />
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-8">
        {activeTrack.modules.map((module, mIdx) => {
          const moduleCompleted = module.lessonIds.filter(id => completedLessons[id]).length;

          return (
            <div
              key={module.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Module 0{mIdx + 1}
                  </div>
                  <h2 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {language === 'th'
                      ? (module.name?.th || (module as any).title?.th)
                      : (module.name?.en || (module as any).title?.en)}
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {moduleCompleted} / {module.lessonIds.length}
                </span>
              </div>

              {/* Lessons Grid in this module */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {module.lessonIds.map(id => {
                  const lesson = LESSONS_DATA[id];
                  if (!lesson) return null;
                  const isDone = !!completedLessons[id];

                  return (
                    <Link
                      key={id}
                      to={`/lesson/${id}`}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-start justify-between group"
                    >
                      <div className="flex items-start gap-3">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                            {lesson.levelLabel?.split(':')[0] || 'L1'}
                          </span>
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug mt-0.5">
                            {language === 'th' ? lesson.title.th : lesson.title.en}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1 font-mono">
                            <Clock className="w-3 h-3" />
                            <span>{(lesson as any).duration || `${lesson.durationMinutes || 15}m`}</span>
                          </div>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
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
