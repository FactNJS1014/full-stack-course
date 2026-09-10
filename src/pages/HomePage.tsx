import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  ShieldCheck,
  Flame,
  Star,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRACKS } from '../data/curriculum';
import { PROJECTS_DATA } from '../data/projectsData';

export const HomePage: React.FC = () => {
  const { language, completedLessons, progressPercentage } = useApp();

  const techBadges = [
    { name: 'Laravel 11', desc: 'Modern PHP Framework', color: 'border-rose-500/30 text-rose-600 bg-rose-500/10' },
    { name: 'React 19', desc: 'Compiler & Actions', color: 'border-cyan-500/30 text-cyan-600 bg-cyan-500/10' },
    { name: 'Inertia 3', desc: 'Zero-API SPA Bridge', color: 'border-purple-500/30 text-purple-600 bg-purple-500/10' },
    { name: 'NestJS', desc: 'Enterprise TypeScript', color: 'border-red-500/30 text-red-600 bg-red-500/10' },
    { name: 'PostgreSQL', desc: 'Robust Relational DB', color: 'border-blue-500/30 text-blue-600 bg-blue-500/10' },
    { name: 'Tailwind CSS', desc: 'Utility Design System', color: 'border-teal-500/30 text-teal-600 bg-teal-500/10' }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950">
        {/* Ambient subtle glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-rose-500/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'th'
                  ? 'หลักสูตรฟูลสแตกสมัยใหม่ ครอบคลุม 80 บทเรียน พร้อม Interactive Demos'
                  : '80 Sections Full-Stack Enterprise Mastery with Live Simulators'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Master <span className="text-rose-600 dark:text-rose-500">Laravel 11</span>,{' '}
              <span className="text-cyan-600 dark:text-cyan-400">React 19</span> &amp;{' '}
              <span className="text-red-600 dark:text-red-400">NestJS</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'th'
                ? 'เรียนรู้สถาปัตยกรรมเว็บแอปพลิเคชันยุคใหม่ผ่านเทคโนโลยีที่องค์กรชั้นนำเลือกใช้: Inertia.js 3 เชื่อมต่อ Laravel เข้ากับ React แบบไร้รอยต่อ เสริมพลังด้วย NestJS Microservices และระบบจัดการพนักงาน (Employee Management) แบบลงมือทำจริง'
                : 'Accelerate your engineering journey with a battle-tested enterprise tech stack. Bridge modern React 19 with Laravel 11 using Inertia 3, scale asynchronous workloads with NestJS, and build real-world employee systems.'}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/lesson/laravel-1"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
              >
                <span>{language === 'th' ? 'เริ่มเรียนบทที่ 1 ทันที' : 'Start Lesson 1'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/tools/employee-crud"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700/80 active:scale-95 transition-all"
              >
                <Users className="w-4 h-4 text-emerald-500" />
                <span>{language === 'th' ? 'เปิดระบบทดลอง Employee CRUD' : 'Launch Employee CRUD'}</span>
              </Link>

              <Link
                to="/tools/architecture-builder"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700/80 active:scale-95 transition-all"
              >
                <Layers className="w-4 h-4 text-purple-500" />
                <span>{language === 'th' ? 'สร้าง Architecture Diagram' : 'Architecture Builder'}</span>
              </Link>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex flex-col justify-between ${badge.color}`}
              >
                <span className="font-extrabold text-sm">{badge.name}</span>
                <span className="text-[11px] opacity-80 mt-0.5">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress & Overview Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-black text-lg">
              {progressPercentage}%
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'th' ? 'ความคืบหน้าการเรียนรู้ของคุณ' : 'Your Academy Progress'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'th'
                  ? `สำเร็จแล้ว ${Object.keys(completedLessons).length} บทเรียน จากหลักสูตรทั้งหมด`
                  : `${Object.keys(completedLessons).length} of 80 lessons completed`}
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-md w-full">
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <Link
            to="/curriculum"
            className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>{language === 'th' ? 'ดูแผนผังหลักสูตรทั้งหมด' : 'View Full Roadmap'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5 Curriculum Tracks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Structured Learning Paths
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
              {language === 'th' ? '5 แทร็กการเรียนรู้สู่ระดับ Senior' : '5 Mastery Curriculum Tracks'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map(track => {
            const trackCompletedCount = track.modules.reduce((acc, m) => {
              return acc + m.lessonIds.filter(id => completedLessons[id]).length;
            }, 0);
            const trackTotalLessons = track.totalLessons;
            const pct = Math.round((trackCompletedCount / trackTotalLessons) * 100) || 0;

            return (
              <div
                key={track.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-blue-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                      {track.level}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {trackCompletedCount}/{trackTotalLessons} {language === 'th' ? 'บท' : 'lessons'}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {language === 'th' ? track.title.th : track.title.en}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {language === 'th'
                      ? (track.subtitle?.th || track.description?.th)
                      : (track.subtitle?.en || track.description?.en)}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                    {track.modules.slice(0, 3).map(m => (
                      <div key={m.id} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="truncate">
                          {language === 'th'
                            ? (m.name?.th || (m as any).title?.th)
                            : (m.name?.en || (m as any).title?.en)}
                        </span>
                      </div>
                    ))}
                    {track.modules.length > 3 && (
                      <div className="text-[11px] text-slate-400 pl-3.5">
                        +{track.modules.length - 3} more modules...
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex-1 pr-4">
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <Link
                    to={`/curriculum/${track.id}`}
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:translate-x-0.5 transition-transform"
                  >
                    <span>{language === 'th' ? 'เข้าเรียน' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Interactive Simulators Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-slate-900 rounded-3xl border border-indigo-500/20 p-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Hands-on Learning Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {language === 'th' ? 'ห้องแล็บจำลองและเครื่องมือสำหรับนักพัฒนา' : 'Interactive Developer Simulators & Tools'}
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {language === 'th'
                ? 'ไม่ต้องกังวลเรื่องการติดตั้ง Environment ทันที ทดลองทำความเข้าใจแนวคิดหลักได้เลยในเบราว์เซอร์ ทั้ง CRUD จำลอง, REST API Console, Playground, และ Architecture Generator'
                : 'Experiment and learn concepts directly in your browser without local setup headaches. Test HTTP APIs, inspect Inertia roundtrips, and build full-stack architectures.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <Link
              to="/tools/employee-crud"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
            >
              <Users className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm text-white">Employee CRUD Demo</div>
              <p className="text-xs text-slate-400 mt-1">Live simulation of Section 19, 50, 76 employee management system.</p>
            </Link>

            <Link
              to="/tools/code-playground"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
            >
              <Code2 className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm text-white">Universal Playground</div>
              <p className="text-xs text-slate-400 mt-1">PHP, TypeScript, JavaScript, SQL syntax runner in browser.</p>
            </Link>

            <Link
              to="/tools/api-simulator"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
            >
              <Terminal className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm text-white">REST API Simulator</div>
              <p className="text-xs text-slate-400 mt-1">Test GET, POST, PUT, DELETE endpoints with headers & payloads.</p>
            </Link>

            <Link
              to="/tools/architecture-builder"
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
            >
              <Layers className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm text-white">Architecture Builder</div>
              <p className="text-xs text-slate-400 mt-1">Design fullstack system graphs and evaluate trade-offs instantly.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Real-World Capstone Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Enterprise Portfolio
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
              {language === 'th' ? 'โครงงานจริงระดับองค์กร (Capstone Projects)' : 'Real-World Capstone Projects'}
            </h2>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>{language === 'th' ? 'ดูโครงงานทั้งหมด' : 'View All Projects'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map(proj => (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    {proj.level}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{proj.duration || '2-3 weeks'}</span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {language === 'th' ? proj.title.th : proj.title.en}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {language === 'th' ? proj.description.th : proj.description.en}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.techStack.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <Link
                  to={`/projects/${proj.id}`}
                  className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>{language === 'th' ? 'เปิดแบบพิมพ์เขียว' : 'View Blueprint'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
