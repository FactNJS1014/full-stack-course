import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, Zap, Database, Server, Smartphone, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ArchitectureBuilder: React.FC = () => {
  const { language } = useApp();
  const [frontend, setFrontend] = useState<'React 19' | 'Vue 3' | 'Next.js'>('React 19');
  const [glue, setGlue] = useState<'Inertia 3' | 'REST API' | 'GraphQL'>('Inertia 3');
  const [backend, setBackend] = useState<'Laravel 11' | 'NestJS' | 'Hybrid (Laravel + NestJS)'>('Hybrid (Laravel + NestJS)');
  const [database, setDatabase] = useState<'PostgreSQL' | 'MySQL'>('PostgreSQL');
  const [cache, setCache] = useState<'Redis' | 'Database Cache'>('Redis');

  // Compute evaluation stats
  const isModernMonolith = glue === 'Inertia 3' && backend.includes('Laravel');
  const velocityScore = isModernMonolith ? 98 : 75;
  const scalabilityScore = backend.includes('NestJS') ? 95 : 85;
  const complexityScore = backend.includes('Hybrid') ? 'Medium-High' : 'Low-Medium';

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 my-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Full-Stack System Designer
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {language === 'th' ? 'สร้างสถาปัตยกรรมระบบ (Architecture Builder)' : 'Interactive Full-Stack Architecture Builder'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'th'
              ? 'เลือกชุดเทคโนโลยีเพื่อดู Diagram การเชื่อมต่อและการประเมินความเร็ว/ความยืดหยุ่น'
              : 'Select your tech stack components to visualize connections and system trade-offs.'}
          </p>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6 text-xs">
        {/* Frontend */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            1. Frontend UI
          </label>
          <select
            value={frontend}
            onChange={e => setFrontend(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="React 19">React 19 (Recommended)</option>
            <option value="Vue 3">Vue 3</option>
            <option value="Next.js">Next.js</option>
          </select>
        </div>

        {/* Glue Protocol */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            2. Connector Protocol
          </label>
          <select
            value={glue}
            onChange={e => setGlue(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="Inertia 3">Inertia 3 (Modern Monolith)</option>
            <option value="REST API">REST API (Traditional)</option>
            <option value="GraphQL">GraphQL</option>
          </select>
        </div>

        {/* Backend Core */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            3. Backend Core
          </label>
          <select
            value={backend}
            onChange={e => setBackend(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="Hybrid (Laravel + NestJS)">Hybrid (Laravel + NestJS)</option>
            <option value="Laravel 11">Laravel 11 Monolith</option>
            <option value="NestJS">NestJS Enterprise API</option>
          </select>
        </div>

        {/* Database */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            4. Database
          </label>
          <select
            value={database}
            onChange={e => setDatabase(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="PostgreSQL">PostgreSQL (Recommended)</option>
            <option value="MySQL">MySQL 8.0</option>
          </select>
        </div>

        {/* Cache */}
        <div>
          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            5. Cache & Queues
          </label>
          <select
            value={cache}
            onChange={e => setCache(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="Redis">Redis In-Memory</option>
            <option value="Database Cache">Database Cache Driver</option>
          </select>
        </div>
      </div>

      {/* Generated Visual Flow Diagram */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 my-6">
        <div className="text-xs text-slate-400 font-mono mb-4 flex items-center justify-between">
          <span>Architecture Graph Topology</span>
          <span className="text-amber-400">● Active Configuration</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 py-2">
          {/* Node 1: Client */}
          <div className="p-4 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-center min-w-[150px]">
            <span className="text-[10px] text-cyan-400 font-mono uppercase font-bold">Client Tier</span>
            <div className="text-sm font-extrabold text-white mt-0.5">{frontend}</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">SPA Presentation</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-600 flex-shrink-0" />

          {/* Node 2: Connector */}
          <div className="p-4 rounded-xl border border-purple-500/40 bg-purple-950/40 text-center min-w-[150px]">
            <span className="text-[10px] text-purple-400 font-mono uppercase font-bold">Transport Tier</span>
            <div className="text-sm font-extrabold text-white mt-0.5">{glue}</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">
              {glue === 'Inertia 3' ? 'Zero-API Bridge' : 'HTTP/JSON Layer'}
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-600 flex-shrink-0" />

          {/* Node 3: Core Backend */}
          <div className="p-4 rounded-xl border border-rose-500/40 bg-rose-950/40 text-center min-w-[170px]">
            <span className="text-[10px] text-rose-400 font-mono uppercase font-bold">Application Tier</span>
            <div className="text-sm font-extrabold text-white mt-0.5">{backend}</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Business Logic & Auth</div>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-600 flex-shrink-0" />

          {/* Node 4: Persistence */}
          <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-center min-w-[150px]">
            <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold">Data Tier</span>
            <div className="text-sm font-extrabold text-white mt-0.5">{database}</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">+ {cache}</div>
          </div>
        </div>
      </div>

      {/* Analysis Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-1">
            <Zap className="w-4 h-4" />
            <span>Developer Velocity: {velocityScore}%</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {isModernMonolith
              ? (language === 'th' ? 'ความเร็วในการพัฒนาสูงสุด ไม่ต้องเขียน API Document หรือจัดการ Token ซ้ำซ้อน' : 'Peak developer speed: zero API boilerplate and direct controller-to-prop piping.')
              : (language === 'th' ? 'ต้องใช้เวลาสร้าง API Schema และ Client Data fetching แยก' : 'Requires building separate API endpoints, schemas, and client fetch layers.')}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-1">
            <Server className="w-4 h-4" />
            <span>Scalability Rating: {scalabilityScore}%</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {backend.includes('NestJS')
              ? (language === 'th' ? 'NestJS มอบประสิทธิภาพสูงมากสำหรับ Real-time และ Microservices ขนาดใหญ่' : 'NestJS provides enterprise scalability for high-concurrency microservices.')
              : (language === 'th' ? 'Laravel รองรับงานระดับล้านคำขอต่อวันผ่าน Horizon และ Octane ได้อย่างสบาย' : 'Laravel handles millions of daily requests effortlessly via Octane and queues.')}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Complexity: {complexityScore}</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {language === 'th'
              ? 'ระบบแบบผสมผสาน (Hybrid) ให้ความสมดุลสูงสุดระหว่างความเร็วในการพัฒนาและประสิทธิภาพในระยะยาว'
              : 'The hybrid architecture delivers the optimal balance between initial velocity and enterprise scaling.'}
          </p>
        </div>
      </div>
    </div>
  );
};
