import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Users,
  Code2,
  Globe,
  Layers,
  Network,
  FileJson,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  RefreshCw
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// Tools & Demos
import { EmployeeCrudDemo } from '../components/demos/EmployeeCrudDemo';
import { InertiaFlowDemo } from '../components/demos/InertiaFlowDemo';
import { NestJsApiDemo } from '../components/demos/NestJsApiDemo';
import { PermissionMatrixDemo } from '../components/demos/PermissionMatrixDemo';
import { ReactCounterDemo } from '../components/demos/ReactCounterDemo';
import { CodePlayground } from '../components/tools/CodePlayground';
import { ApiSimulator } from '../components/tools/ApiSimulator';
import { ArchitectureBuilder } from '../components/tools/ArchitectureBuilder';
import { HttpSimulator } from '../components/tools/HttpSimulator';
import { JsonViewer } from '../components/tools/JsonViewer';

type ToolTabKey =
  | 'employee-crud'
  | 'code-playground'
  | 'api-simulator'
  | 'architecture-builder'
  | 'inertia-flow'
  | 'nestjs-api'
  | 'permission-matrix'
  | 'http-simulator'
  | 'json-viewer';

export const InteractiveToolsPage: React.FC = () => {
  const { toolId } = useParams<{ toolId?: string }>();
  const navigate = useNavigate();
  const { language } = useApp();

  const [activeTab, setActiveTab] = useState<ToolTabKey>(() => {
    if (toolId && [
      'employee-crud',
      'code-playground',
      'api-simulator',
      'architecture-builder',
      'inertia-flow',
      'nestjs-api',
      'permission-matrix',
      'http-simulator',
      'json-viewer'
    ].includes(toolId)) {
      return toolId as ToolTabKey;
    }
    return 'employee-crud';
  });

  const toolsList: { id: ToolTabKey; label: { th: string; en: string }; icon: any; color: string }[] = [
    { id: 'employee-crud', label: { th: 'ระบบพนักงาน CRUD', en: 'Employee CRUD Demo' }, icon: Users, color: 'text-emerald-500' },
    { id: 'code-playground', label: { th: 'สนามทดลองโค้ด', en: 'Code Playground' }, icon: Code2, color: 'text-blue-500' },
    { id: 'api-simulator', label: { th: 'จำลองยิง REST API', en: 'REST API Simulator' }, icon: Globe, color: 'text-indigo-500' },
    { id: 'architecture-builder', label: { th: 'ออกแบบสถาปัตยกรรม', en: 'Architecture Builder' }, icon: Layers, color: 'text-amber-500' },
    { id: 'inertia-flow', label: { th: 'วงจร Inertia Protocol', en: 'Inertia Request Cycle' }, icon: Sparkles, color: 'text-purple-500' },
    { id: 'nestjs-api', label: { th: 'คอนโซล NestJS API', en: 'NestJS Console' }, icon: Cpu, color: 'text-rose-500' },
    { id: 'permission-matrix', label: { th: 'ตารางสิทธิ์ RBAC', en: 'RBAC Permission Matrix' }, icon: ShieldCheck, color: 'text-violet-500' },
    { id: 'http-simulator', label: { th: 'รหัสสถานะ HTTP', en: 'HTTP Status Inspector' }, icon: Network, color: 'text-cyan-500' },
    { id: 'json-viewer', label: { th: 'จัดรูปแบบ JSON Tree', en: 'JSON Formatter & Tree' }, icon: FileJson, color: 'text-yellow-500' }
  ];

  const handleTabChange = (id: ToolTabKey) => {
    setActiveTab(id);
    navigate(`/tools/${id}`, { replace: true });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          Browser Interactive Sandbox
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
          {language === 'th' ? 'ศูนย์รวมเครื่องมือและระบบจำลองสด' : 'Interactive Developer Simulators & Tools'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {language === 'th'
            ? 'ทดลองใช้งานเครื่องมือจำลองเสมือนจริงในเบราว์เซอร์ ทั้ง CRUD, REST API, สถาปัตยกรรมระบบ, โค้ด Playground, และ RBAC Matrix'
            : 'Explore, test, and manipulate full-stack components directly in browser without local configuration.'}
        </p>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {toolsList.map(tool => {
          const Icon = tool.icon;
          const isSelected = activeTab === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => handleTabChange(tool.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap shadow-2xs ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-400 dark:text-blue-600' : tool.color}`} />
              <span>{language === 'th' ? tool.label.th : tool.label.en}</span>
            </button>
          );
        })}
      </div>

      {/* Tool Container Area */}
      <div>
        {activeTab === 'employee-crud' && <EmployeeCrudDemo />}
        {activeTab === 'code-playground' && <CodePlayground />}
        {activeTab === 'api-simulator' && <ApiSimulator />}
        {activeTab === 'architecture-builder' && <ArchitectureBuilder />}
        {activeTab === 'inertia-flow' && <InertiaFlowDemo />}
        {activeTab === 'nestjs-api' && <NestJsApiDemo />}
        {activeTab === 'permission-matrix' && <PermissionMatrixDemo />}
        {activeTab === 'http-simulator' && <HttpSimulator />}
        {activeTab === 'json-viewer' && <JsonViewer />}
      </div>
    </div>
  );
};
