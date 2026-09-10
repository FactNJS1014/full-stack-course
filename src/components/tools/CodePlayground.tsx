import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Code2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

type LangOption = 'php' | 'typescript' | 'javascript' | 'sql' | 'json';

const CODE_PRESETS: Record<LangOption, { code: string; output: string }> = {
  php: {
    code: `<?php\n\n$framework = "Laravel 11";\n$developer = "Natt";\n$features = ["Eloquent ORM", "Inertia 3", "Artisan CLI"];\n\necho "Hello from " . $framework . "!\\n";\necho "Engineer: " . $developer . "\\n\\n";\n\nforeach ($features as $idx => $feat) {\n    echo ($idx + 1) . ". " . $feat . "\\n";\n}`,
    output: `Hello from Laravel 11!\nEngineer: Natt\n\n1. Eloquent ORM\n2. Inertia 3\n3. Artisan CLI`
  },
  typescript: {
    code: `interface Employee {\n  id: number;\n  name: string;\n  role: string;\n  active: boolean;\n}\n\nconst team: Employee[] = [\n  { id: 1, name: "Sarah Connor", role: "Architect", active: true },\n  { id: 2, name: "John Connor", role: "Lead Dev", active: true },\n];\n\nconst activeMembers = team.filter(m => m.active);\nconsole.log(\`Active Engineers: \${activeMembers.length}\`);\nconsole.log(JSON.stringify(activeMembers, null, 2));`,
    output: `Active Engineers: 2\n[\n  {\n    "id": 1,\n    "name": "Sarah Connor",\n    "role": "Architect",\n    "active": true\n  },\n  {\n    "id": 2,\n    "name": "John Connor",\n    "role": "Lead Dev",\n    "active": true\n  }\n]`
  },
  javascript: {
    code: `const numbers = [10, 20, 30, 40, 50];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconst average = sum / numbers.length;\n\nconsole.log("Numbers:", numbers);\nconsole.log("Sum:", sum);\nconsole.log("Average:", average);`,
    output: `Numbers: [ 10, 20, 30, 40, 50 ]\nSum: 150\nAverage: 30`
  },
  sql: {
    code: `-- Query employee department statistics\nSELECT \n    d.name AS department_name,\n    COUNT(e.id) AS total_employees,\n    AVG(e.salary) AS average_salary\nFROM departments d\nLEFT JOIN employees e ON e.department_id = d.id\nWHERE e.status = 'active'\nGROUP BY d.name\nHAVING COUNT(e.id) > 0\nORDER BY total_employees DESC;`,
    output: `+-----------------+-----------------+----------------+\n| department_name | total_employees | average_salary |\n+-----------------+-----------------+----------------+\n| Engineering     |              14 |       92400.00 |\n| Product         |               6 |       84500.00 |\n| Sales           |               5 |       71200.00 |\n+-----------------+-----------------+----------------+\n3 rows in set (0.002 sec)`
  },
  json: {
    code: `{\n  "project": "Laravel React Nest Academy",\n  "version": "3.0.0",\n  "status": "online",\n  "metrics": {\n    "courses": 12,\n    "students": 1420,\n    "rating": 4.95\n  }\n}`,
    output: `Valid JSON syntax.\nKeys validated: 4\nObject size: 148 bytes`
  }
};

export const CodePlayground: React.FC = () => {
  const { language } = useApp();
  const [selectedLang, setSelectedLang] = useState<LangOption>('php');
  const [code, setCode] = useState(CODE_PRESETS.php.code);
  const [output, setOutput] = useState(CODE_PRESETS.php.output);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLangChange = (lang: LangOption) => {
    setSelectedLang(lang);
    setCode(CODE_PRESETS[lang].code);
    setOutput(CODE_PRESETS[lang].output);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      // If matches preset, output preset; otherwise simulate execution
      if (CODE_PRESETS[selectedLang].code.trim() === code.trim()) {
        setOutput(CODE_PRESETS[selectedLang].output);
      } else {
        setOutput(`[Execution Simulated successfully]\nOutput stream:\n${code.slice(0, 120)}...\nProcess terminated with exit code 0.`);
      }
    }, 350);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(CODE_PRESETS[selectedLang].code);
    setOutput(CODE_PRESETS[selectedLang].output);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden my-6">
      {/* Top Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-blue-500" />
          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
            {language === 'th' ? 'สนามทดลองเขียนโค้ด (Code Playground)' : 'Universal Code Playground'}
          </h3>
        </div>

        {/* Language selector tabs */}
        <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
          {(['php', 'typescript', 'javascript', 'sql', 'json'] as LangOption[]).map(lang => (
            <button
              key={lang}
              onClick={() => handleLangChange(lang)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all uppercase ${
                selectedLang === lang
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white"
            title="Reset code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white"
            title="Copy"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : 'fill-white'}`} />
            <span>{isRunning ? (language === 'th' ? 'กำลังรัน...' : 'Running...') : (language === 'th' ? 'รันโค้ด' : 'Run Code')}</span>
          </button>
        </div>
      </div>

      {/* Editor & Output split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 bg-slate-950 font-mono text-xs">
        {/* Editor Box */}
        <div className="p-4 flex flex-col h-80">
          <div className="text-slate-500 text-[10px] pb-2 uppercase tracking-wider font-semibold border-b border-slate-800 mb-2 flex justify-between">
            <span>Editor ({selectedLang})</span>
            <span>UTF-8</span>
          </div>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
            className="flex-1 w-full bg-transparent text-slate-200 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Output Box */}
        <div className="p-4 flex flex-col h-80 bg-black/60">
          <div className="text-slate-500 text-[10px] pb-2 uppercase tracking-wider font-semibold border-b border-slate-800 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1 text-emerald-400">
              <Terminal className="w-3 h-3" />
              <span>Output Console</span>
            </span>
            <span className="text-slate-500">Exit code: 0</span>
          </div>
          <pre className="flex-1 text-emerald-300 overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
};
