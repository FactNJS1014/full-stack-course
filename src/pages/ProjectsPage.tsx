import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Layers,
  CheckCircle2,
  Circle,
  Database,
  Terminal,
  ArrowRight,
  ExternalLink,
  Code2,
  Clock,
  Sparkles,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PROJECTS_DATA } from '../data/projectsData';

export const ProjectsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId?: string }>();
  const { language } = useApp();

  const [activeProject, setActiveProject] = useState(() => {
    if (projectId) {
      const found = PROJECTS_DATA.find(p => p.id === projectId);
      if (found) return found;
    }
    return PROJECTS_DATA[0];
  });

  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>({});

  const toggleMilestone = (mId: string) => {
    setCompletedMilestones(prev => ({ ...prev, [mId]: !prev[mId] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Portfolio & Capstones
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
          {language === 'th' ? 'โครงงานจริงระดับองค์กร (Capstone Projects)' : 'Production Capstone Projects'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {language === 'th'
            ? 'พิมพ์เขียวสถาปัตยกรรม (Architectural Blueprints), แผนผังฐานข้อมูล (ERD), และแผนการทำงานแบบขั้นตอนสำหรับสร้างระบบจริงลงพอร์ตโฟลิโอของคุณ'
            : 'Detailed architecture blueprints, ERD data schemas, and milestone checklists for enterprise-grade projects.'}
        </p>
      </div>

      {/* Project Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {PROJECTS_DATA.map(proj => {
          const isSelected = activeProject.id === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'border-emerald-500 bg-white dark:bg-slate-900 shadow-lg ring-1 ring-emerald-500'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {proj.level}
                </span>
                <span className="text-xs text-slate-400 font-mono">{proj.duration || '2-4 weeks'}</span>
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">
                {language === 'th' ? proj.title.th : proj.title.en}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Project Blueprint View */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
        {/* Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {activeProject.id.toUpperCase()}
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {activeProject.level} Project
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {language === 'th' ? activeProject.title.th : activeProject.title.en}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {language === 'th' ? activeProject.description.th : activeProject.description.en}
            </p>
          </div>

          {/* Quick link to live demo if employee portal */}
          {activeProject.id === 'employee-portal' && (
            <Link
              to="/tools/employee-crud"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 whitespace-nowrap active:scale-95 transition-all"
            >
              <Users className="w-4 h-4" />
              <span>{language === 'th' ? 'เปิดระบบจำลองสด (Live CRUD)' : 'Open Live CRUD Demo'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            {language === 'th' ? 'ชุดเทคโนโลยีที่ใช้' : 'Technology Stack'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {activeProject.techStack.map(t => (
              <span
                key={t}
                className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & ERD Scheme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Architecture Blueprint */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>{language === 'th' ? 'พิมพ์เขียวสถาปัตยกรรม (System Architecture)' : 'System Architecture Blueprint'}</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {language === 'th' ? activeProject.architecture.th : activeProject.architecture.en}
            </p>
          </div>

          {/* Database Schema & ERD */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Database className="w-4 h-4" />
              <span>{language === 'th' ? 'โครงสร้างฐานข้อมูล (Database Schema)' : 'Database Schema & Tables'}</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              {language === 'th' ? activeProject.erdSchema.th : activeProject.erdSchema.en}
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto">
              {activeProject.erdTables.join('  •  ')}
            </div>
          </div>
        </div>

        {/* Milestones Checklist */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'th' ? 'ขั้นตอนการพัฒนาและหมุดหมาย (Project Milestones)' : 'Development Milestones'}
            </h4>
            <span className="text-xs font-mono text-slate-400">
              {activeProject.milestones.filter(m => completedMilestones[m.id]).length} / {activeProject.milestones.length} completed
            </span>
          </div>

          <div className="space-y-3">
            {activeProject.milestones.map((m, idx) => {
              const isDone = !!completedMilestones[m.id];
              return (
                <div
                  key={m.id}
                  onClick={() => toggleMilestone(m.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    isDone
                      ? 'border-emerald-500/40 bg-emerald-50/30 dark:bg-emerald-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button className="pt-0.5 text-emerald-500">
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5 text-slate-400" />}
                    </button>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        Milestone {idx + 1}
                      </span>
                      <h5 className={`font-bold text-xs sm:text-sm text-slate-900 dark:text-white ${isDone ? 'line-through opacity-70' : ''}`}>
                        {language === 'th' ? m.title.th : m.title.en}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">
                        {language === 'th' ? m.description.th : m.description.en}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
