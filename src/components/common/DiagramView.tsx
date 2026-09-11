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
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
      <div className="flex items-center gap-2 mb-4 sm:mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          {language === 'th' ? title.th : title.en}
        </h4>
      </div>

      {type === 'layers' ? (
        <div className="space-y-2.5 max-w-xl mx-auto">
          {flow.map((node, i) => (
            <div
              key={i}
              className={`p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-transform hover:scale-[1.01] ${getColorClasses(
                node.color
              )}`}
            >
              <div>
                <div className="font-bold text-xs sm:text-sm tracking-wide">{node.title}</div>
                <div className="text-xs opacity-80 mt-0.5">{node.sub}</div>
              </div>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-black/10 dark:bg-white/10">
                Layer {i + 1}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full overflow-x-auto pb-3 pt-1 px-1">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-2 sm:gap-3 min-w-0">
            {flow.map((node, i) => {
              const isLast = i === flow.length - 1;
              return (
                <React.Fragment key={i}>
                  <div
                    className={`flex-1 min-w-[130px] sm:min-w-[140px] md:min-w-0 p-3.5 sm:p-4 rounded-xl border transition-all text-center shadow-xs hover:shadow-sm flex flex-col justify-between ${getColorClasses(
                      node.color
                    )}`}
                  >
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider opacity-70 mb-1">
                        Step {i + 1}
                      </div>
                      <div className="font-bold text-xs sm:text-sm leading-snug">{node.title}</div>
                    </div>
                    <div className="text-[11px] opacity-80 mt-2 font-mono break-words leading-tight">{node.sub}</div>
                  </div>

                  {!isLast && (
                    <div className="text-slate-400 dark:text-slate-600 flex-shrink-0 self-center flex items-center justify-center">
                      <ArrowRight className="hidden md:block w-4 h-4 sm:w-5 h-5" />
                      <ArrowDown className="md:hidden w-4 h-4 my-0.5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
