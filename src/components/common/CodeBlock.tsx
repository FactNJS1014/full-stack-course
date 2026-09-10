import React, { useState } from 'react';
import { Check, Copy, Play, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { CodeSnippet } from '../../types';
import { useApp } from '../../context/AppContext';

interface CodeBlockProps {
  snippet: CodeSnippet;
  showRunButton?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ snippet, showRunButton = true }) => {
  const { language } = useApp();
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  const lines = snippet.code.split('\n');

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-xl my-4 text-sm font-mono">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {snippet.filename && (
            <span className="text-xs text-slate-300 font-medium px-2 py-0.5 bg-slate-700/60 rounded">
              {snippet.filename}
            </span>
          )}
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-700/30">
            {snippet.language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {showRunButton && (snippet.mockOutput !== undefined) && (
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm active:scale-95 disabled:opacity-50"
            >
              <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : 'fill-white'}`} />
              <span>{isRunning ? (language === 'th' ? 'กำลังรัน...' : 'Running...') : (language === 'th' ? 'Run Demo' : 'Run Demo')}</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">{language === 'th' ? 'คัดลอกแล้ว' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{language === 'th' ? 'คัดลอก' : 'Copy'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code contents with line numbers */}
      <div className="overflow-x-auto p-4 text-slate-200 leading-relaxed font-mono">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = snippet.highlightLines?.includes(lineNum);
              return (
                <tr
                  key={idx}
                  className={`${
                    isHighlighted ? 'bg-indigo-950/60 border-l-2 border-indigo-400' : ''
                  } hover:bg-slate-800/40 transition-colors`}
                >
                  <td className="pr-4 py-0.5 text-right text-slate-500 select-none text-xs w-8">
                    {lineNum}
                  </td>
                  <td className="py-0.5 whitespace-pre">
                    <span className={highlightSyntax(line, snippet.language)}>{line || ' '}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mock Execution Output Window */}
      {showOutput && snippet.mockOutput && (
        <div className="border-t border-slate-700 bg-black/80 p-4">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>{language === 'th' ? 'ผลลัพธ์การทำงาน (Output)' : 'Execution Output'}</span>
            </div>
            <button
              onClick={() => setShowOutput(false)}
              className="hover:text-slate-200 text-slate-500 text-xs"
            >
              {language === 'th' ? 'ปิด' : 'Dismiss'}
            </button>
          </div>
          <pre className="text-emerald-300 text-xs font-mono whitespace-pre-wrap leading-relaxed">
            {snippet.mockOutput}
          </pre>
        </div>
      )}

      {/* Line by line explanation accordion */}
      {snippet.explanations && snippet.explanations.length > 0 && (
        <div className="border-t border-slate-800 bg-slate-900/90 p-4">
          <button
            onClick={() => setExpandedExplanation(!expandedExplanation)}
            className="flex items-center justify-between w-full text-xs font-semibold text-slate-300 hover:text-white"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {language === 'th' ? 'คำอธิบายโค้ดบรรทัดต่อบรรทัด (Line Explanations)' : 'Code Explanations Line-by-Line'}
            </span>
            {expandedExplanation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {expandedExplanation && (
            <div className="mt-3 space-y-2 text-xs">
              {snippet.explanations.map((exp, i) => (
                <div key={i} className="flex gap-3 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-blue-400 font-bold whitespace-nowrap bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
                    Line {exp.lines}
                  </span>
                  <p className="text-slate-300 leading-normal">
                    {language === 'th' ? exp.explanation.th : exp.explanation.en}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Lightweight syntax styling helper
function highlightSyntax(line: string, lang: string): string {
  if (line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('/*')) {
    return 'text-slate-400 italic';
  }
  if (line.includes('Route::') || line.includes('@Controller') || line.includes('@Injectable')) {
    return 'text-purple-300 font-semibold';
  }
  if (line.includes('function') || line.includes('public') || line.includes('export') || line.includes('const') || line.includes('let')) {
    return 'text-blue-300';
  }
  if (line.includes('return') || line.includes('import') || line.includes('from') || line.includes('use ')) {
    return 'text-rose-300 font-medium';
  }
  return 'text-slate-200';
}
