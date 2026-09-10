import React, { useState } from 'react';
import { FileJson, Check, Copy, ChevronRight, ChevronDown, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const DEFAULT_JSON = `{
  "platform": "Laravel React Nest Academy",
  "version": 3.0,
  "stack": {
    "frontend": "React 19",
    "bridge": "Inertia 3",
    "backend": "Laravel 11",
    "microservice": "NestJS"
  },
  "modules": [
    { "id": 1, "name": "Employee CRUD", "status": "active" },
    { "id": 2, "name": "REST API Engine", "status": "active" },
    { "id": 3, "name": "RBAC Security", "status": "active" }
  ],
  "productionReady": true
}`;

export const JsonViewer: React.FC = () => {
  const { language } = useApp();
  const [rawText, setRawText] = useState(DEFAULT_JSON);
  const [parsedData, setParsedData] = useState<any>(() => JSON.parse(DEFAULT_JSON));
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTextChange = (val: string) => {
    setRawText(val);
    try {
      const parsed = JSON.parse(val);
      setParsedData(parsed);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(rawText);
      const formatted = JSON.stringify(parsed, null, 2);
      setRawText(formatted);
      setParsedData(parsed);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden my-6">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileJson className="w-5 h-5 text-amber-500" />
          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
            {language === 'th' ? 'เครื่องมือจัดรูปแบบ JSON (JSON Formatter & Tree)' : 'Interactive JSON Formatter & Tree'}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleFormat}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            {language === 'th' ? 'จัดรูปแบบ (Beautify)' : 'Beautify'}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{language === 'th' ? 'คัดลอก' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Editor & Tree split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 font-mono text-xs">
        {/* Left: Input Textarea */}
        <div className="p-4 flex flex-col h-80 bg-white dark:bg-slate-950">
          <div className="text-slate-500 text-[10px] pb-2 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800 mb-2 flex justify-between">
            <span>JSON Raw Input</span>
            {error ? (
              <span className="text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Syntax Error
              </span>
            ) : (
              <span className="text-emerald-500 flex items-center gap-1">
                <Check className="w-3 h-3" /> Valid JSON
              </span>
            )}
          </div>
          <textarea
            value={rawText}
            onChange={e => handleTextChange(e.target.value)}
            spellCheck={false}
            className="flex-1 w-full bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Right: Interactive Tree View */}
        <div className="p-4 flex flex-col h-80 bg-slate-950 text-slate-200 overflow-y-auto">
          <div className="text-slate-500 text-[10px] pb-2 uppercase tracking-wider font-semibold border-b border-slate-800 mb-2">
            Interactive Tree Inspector
          </div>
          {error ? (
            <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs">
              {error}
            </div>
          ) : (
            <div className="flex-1 overflow-auto text-xs leading-relaxed">
              <JsonTreeNode label="root" value={parsedData} isRoot />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Recursive Tree Node Component
const JsonTreeNode: React.FC<{ label: string; value: any; isRoot?: boolean }> = ({ label, value, isRoot = false }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isObject = value !== null && typeof value === 'object';
  const isArray = Array.isArray(value);

  if (!isObject) {
    let valColor = 'text-emerald-400';
    if (typeof value === 'string') valColor = 'text-amber-300';
    if (typeof value === 'boolean') valColor = 'text-purple-400';
    if (value === null) valColor = 'text-rose-400';

    return (
      <div className="pl-4 py-0.5">
        <span className="text-blue-400 font-semibold">{label}: </span>
        <span className={valColor}>{JSON.stringify(value)}</span>
      </div>
    );
  }

  const keys = Object.keys(value);

  return (
    <div className={isRoot ? '' : 'pl-4'}>
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-1 cursor-pointer hover:text-white select-none py-0.5"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
        <span className="text-cyan-400 font-semibold">{label}</span>
        <span className="text-slate-500 text-[10px]">
          {isArray ? `[${keys.length} items]` : `{${keys.length} keys}`}
        </span>
      </div>

      {!collapsed && (
        <div className="border-l border-slate-800 ml-1.5 my-0.5">
          {keys.map(k => (
            <JsonTreeNode key={k} label={k} value={value[k]} />
          ))}
        </div>
      )}
    </div>
  );
};
