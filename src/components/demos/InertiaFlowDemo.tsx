import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, CheckCircle2, Globe, Server, Database, Smartphone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const InertiaFlowDemo: React.FC = () => {
  const { language } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const steps = [
    {
      num: 1,
      name: { th: '1. ผู้ใช้คลิก Link ใน React Page', en: '1. User clicks Link in React Page' },
      detail: {
        th: 'ผู้ใช้คลิก <Link href="/employees"> ในคอมโพเนนต์ React โดย Inertia ดักจับคำสั่งเพื่อไม่ให้เบราว์เซอร์รีเฟรชหน้าเว็บ',
        en: 'User clicks <Link href="/employees"> in React; Inertia intercepts default browser behavior to prevent full page reload.'
      },
      source: 'React 19 Frontend',
      tech: 'React / Inertia Link',
      payload: '<Link href="/employees" preserveState className="nav-btn">Employees</Link>'
    },
    {
      num: 2,
      name: { th: '2. ยิง XHR Request พร้อม Header X-Inertia', en: '2. Dispatches XHR with X-Inertia Header' },
      detail: {
        th: 'Inertia ส่งคำขอเบื้องหลังผ่าน XHR / fetch พร้อมระบุ Header "X-Inertia: true" และ "X-Inertia-Version: hash"',
        en: 'Inertia fires a background XHR with specialized headers (X-Inertia: true, X-Inertia-Version).'
      },
      source: 'HTTP Wire',
      tech: 'Inertia Protocol',
      payload: 'GET /employees HTTP/1.1\nX-Inertia: true\nX-Requested-With: XMLHttpRequest'
    },
    {
      num: 3,
      name: { th: '3. Laravel Route & Controller ทำงาน', en: '3. Laravel Controller Dispatched' },
      detail: {
        th: 'Laravel ตรวจพบ Header X-Inertia จึงสั่ง EmployeeController@index ดึงข้อมูลจาก Eloquent Model ใน Database',
        en: 'Laravel recognizes X-Inertia header and dispatches EmployeeController@index, querying DB via Eloquent.'
      },
      source: 'Laravel Backend',
      tech: 'Laravel 11 / Controller',
      payload: '$employees = Employee::latest()->paginate(10);\nreturn Inertia::render("Employees/Index", ["employees" => $employees]);'
    },
    {
      num: 4,
      name: { th: '4. Laravel ตอบกลับ JSON Inertia Payload', en: '4. Laravel Returns Inertia JSON Envelope' },
      detail: {
        th: 'แทนที่จะส่ง HTML ทั้งหน้า Laravel ส่งกลับ JSON สั้นๆ ที่ระบุชื่อ Component และก้อน Props เท่านั้น (เบามาก)',
        en: 'Instead of full HTML document, Laravel transmits a compact JSON envelope carrying component name and props.'
      },
      source: 'Server Response',
      tech: 'JSON Payload',
      payload: '{\n  "component": "Employees/Index",\n  "props": {\n    "employees": [{ "id": 1, "name": "John Doe", "dept": "IT" }]\n  },\n  "url": "/employees"\n}'
    },
    {
      num: 5,
      name: { th: '5. React Component สลับหน้าจอทันที (SPA Swap)', en: '5. React Swaps Component with New Props' },
      detail: {
        th: 'Inertia ในเบราว์เซอร์รับก้อน Props มาแล้วสั่งให้ React สลับ Component ไปเป็น Employees/Index และเปลี่ยน URL ใน Address Bar ทันทีแบบ SPA!',
        en: 'Client Inertia engine passes freshly received props to the React page component and syncs the browser address bar with zero page flicker.'
      },
      source: 'React 19 View',
      tech: 'Client State / DOM',
      payload: '// React renders:\nexport default function EmployeesIndex({ employees }) {\n  return <EmployeeTable data={employees} />;\n}'
    }
  ];

  const handleNext = () => {
    setCurrentStep(prev => (prev < 5 ? prev + 1 : 1));
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 my-6">
      {/* Title */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {language === 'th' ? 'จำลองการทำงานของ Inertia 3 แบบภาพเคลื่อนไหว' : 'Interactive Inertia 3 Flow Visualizer'}
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {language === 'th' ? 'วงจรการสื่อสาร Laravel + React ผ่าน Inertia' : 'Laravel <-> Inertia <-> React Request Cycle'}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'th' ? 'เริ่มใหม่' : 'Reset'}</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-500/20 active:scale-95"
          >
            <span>{currentStep === 5 ? (language === 'th' ? 'เริ่มรอบใหม่' : 'Restart') : (language === 'th' ? 'ขั้นตอนถัดไป' : 'Next Step')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Nodes Flow */}
      <div className="grid grid-cols-5 gap-2 my-6">
        {steps.map(s => {
          const isActive = s.num === currentStep;
          const isDone = s.num < currentStep;
          return (
            <button
              key={s.num}
              onClick={() => setCurrentStep(s.num)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/50 shadow-md ring-2 ring-purple-400/40'
                  : isDone
                  ? 'border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20'
                  : 'border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-400">0{s.num}</span>
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
              </div>
              <div className="font-bold text-xs text-slate-800 dark:text-slate-200 line-clamp-1">
                {language === 'th' ? s.name.th.split('.')[1] : s.name.en.split('.')[1]}
              </div>
              <div className="text-[10px] text-purple-600 dark:text-purple-400 font-mono mt-0.5">
                {s.tech}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="p-5 rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/30 dark:bg-purple-950/20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {steps[currentStep - 1].tech}
            </span>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
              {language === 'th' ? steps[currentStep - 1].name.th : steps[currentStep - 1].name.en}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {language === 'th' ? steps[currentStep - 1].detail.th : steps[currentStep - 1].detail.en}
            </p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 whitespace-nowrap">
            Phase {currentStep} of 5
          </span>
        </div>

        {/* Payload Terminal Inspector */}
        <div className="mt-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-xs font-mono">
          <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-slate-400 flex items-center justify-between">
            <span>Protocol Payload Inspector</span>
            <span className="text-emerald-400">● Live Connection</span>
          </div>
          <pre className="p-3 text-slate-200 whitespace-pre-wrap leading-relaxed">
            {steps[currentStep - 1].payload}
          </pre>
        </div>
      </div>
    </div>
  );
};
