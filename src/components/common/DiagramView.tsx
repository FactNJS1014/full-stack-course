import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { DiagramNode } from '../../types';
import { useApp } from '../../context/AppContext';

interface DiagramViewProps {
  title: { th: string; en: string };
  flow: DiagramNode[];
  type?: 'linear' | 'cycle' | 'layers' | 'client-server';
}

export const DiagramView: React.FC<DiagramViewProps> = ({ title, flow, type = 'linear' }) => {
  const { language } = useApp();

  const getColorClasses = (color?: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'emerald':
        return 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      case 'purple':
        return 'border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'rose':
        return 'border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-400';
      case 'amber':
        return 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'cyan':
        return 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400';
      default:
        return 'border-slate-500/40 bg-slate-500/10 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="my-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          {language === 'th' ? title.th : title.en}
        </h4>
      </div>

      {type === 'layers' ? (
        <div className="space-y-3 max-w-xl mx-auto">
          {flow.map((node, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border flex items-center justify-between transition-transform hover:scale-[1.01] ${getColorClasses(
                node.color
              )}`}
            >
              <div>
                <div className="font-bold text-sm tracking-wide">{node.title}</div>
                <div className="text-xs opacity-80 mt-0.5">{node.sub}</div>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                Layer {i + 1}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 overflow-x-auto py-2">
          {flow.map((node, i) => {
            const isLast = i === flow.length - 1;
            return (
              <React.Fragment key={i}>
                <div
                  className={`flex-1 min-w-[170px] max-w-[240px] p-4 rounded-xl border transition-all text-center shadow-sm hover:shadow-md ${getColorClasses(
                    node.color
                  )}`}
                >
                  <div className="text-xs uppercase font-bold tracking-wider opacity-70 mb-1">
                    Step {i + 1}
                  </div>
                  <div className="font-bold text-sm leading-snug">{node.title}</div>
                  <div className="text-xs opacity-80 mt-1 font-mono">{node.sub}</div>
                </div>

                {!isLast && (
                  <div className="text-slate-400 dark:text-slate-600 flex-shrink-0">
                    <ArrowRight className="hidden md:block w-5 h-5" />
                    <ArrowDown className="md:hidden w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
