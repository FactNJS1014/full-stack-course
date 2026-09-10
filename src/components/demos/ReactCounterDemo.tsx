import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, Activity } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ReactCounterDemo: React.FC = () => {
  const { language } = useApp();
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [history, setHistory] = useState<string[]>(['Initial state: 0']);

  const addLog = (msg: string) => {
    setHistory(prev => [msg, ...prev.slice(0, 9)]);
  };

  const handleIncrement = () => {
    setCount(prev => {
      const next = prev + step;
      addLog(`[Increment] ${prev} + ${step} = ${next}`);
      return next;
    });
  };

  const handleDecrement = () => {
    setCount(prev => {
      const next = Math.max(0, prev - step);
      addLog(`[Decrement] ${prev} - ${step} = ${next}`);
      return next;
    });
  };

  const handleReset = () => {
    setCount(0);
    addLog(`[Reset] Reset count back to 0`);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 my-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            React 19 State Architecture Demo
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {language === 'th' ? 'ระบบนับแบบ Interactive พร้อม History Log' : 'Interactive Counter with State History'}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: Counter Controls */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Current Count State</span>
          <div className="text-6xl font-black text-cyan-600 dark:text-cyan-400 my-4 font-mono tracking-tight animate-in zoom-in-50 duration-200 key={count}">
            {count}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={handleDecrement}
              className="p-3 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white active:scale-90 transition-all font-bold"
              title="Decrement"
            >
              <Minus className="w-5 h-5" />
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 text-xs font-bold active:scale-95 transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={handleIncrement}
              className="p-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 active:scale-90 transition-all font-bold"
              title="Increment"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Step increment:</span>
            {[1, 5, 10].map(s => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`px-2 py-0.5 rounded font-mono font-bold ${
                  step === s
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                +{s}
              </button>
            ))}
          </div>
        </div>

        {/* Right: State History Log */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono h-64 flex flex-col shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Activity className="w-3.5 h-3.5" />
              <span>State Audit Trail</span>
            </span>
            <span className="text-[10px] text-slate-500">Latest 10 actions</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1 text-slate-300">
            {history.map((h, i) => (
              <div key={i} className="py-1 px-2 rounded bg-slate-800/40 text-slate-300 border border-slate-700/30">
                <span className="text-cyan-400 mr-2">›</span>
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
