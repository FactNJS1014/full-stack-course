import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Cpu, Clock, Terminal } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NestJsApiDemo: React.FC = () => {
  const { language } = useApp();
  const [selectedEndpoint, setSelectedEndpoint] = useState<'GET_ALL' | 'GET_ONE' | 'POST' | 'DELETE'>('GET_ALL');
  const [isLoading, setIsLoading] = useState(false);
  const [postBody, setPostBody] = useState(
    JSON.stringify({ name: 'Alex Murphy', email: 'alex.m@cyberdyne.io', role: 'Security Architect' }, null, 2)
  );

  const [response, setResponse] = useState<any>({
    statusCode: 200,
    timeMs: 14,
    data: [
      { id: 1, name: 'Sarah Connor', email: 'sarah@resistance.org', role: 'Commander' },
      { id: 2, name: 'John Doe', email: 'john@company.com', role: 'Engineer' }
    ]
  });

  const endpoints = [
    { key: 'GET_ALL', method: 'GET', path: '/users', desc: 'Find all users via UsersService.findAll()' },
    { key: 'GET_ONE', method: 'GET', path: '/users/1', desc: 'Find user by ID via UsersService.findOne(1)' },
    { key: 'POST', method: 'POST', path: '/users', desc: 'Create user with CreateUserDto validation' },
    { key: 'DELETE', method: 'DELETE', path: '/users/1', desc: 'Remove user via UsersService.remove(1)' }
  ];

  const handleExecute = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (selectedEndpoint === 'GET_ALL') {
        setResponse({
          statusCode: 200,
          statusText: '200 OK',
          timeMs: 12,
          data: [
            { id: 1, name: 'Sarah Connor', email: 'sarah@resistance.org', role: 'Commander' },
            { id: 2, name: 'John Doe', email: 'john@company.com', role: 'Engineer' }
          ]
        });
      } else if (selectedEndpoint === 'GET_ONE') {
        setResponse({
          statusCode: 200,
          statusText: '200 OK',
          timeMs: 8,
          data: { id: 1, name: 'Sarah Connor', email: 'sarah@resistance.org', role: 'Commander', department: 'Defense' }
        });
      } else if (selectedEndpoint === 'POST') {
        try {
          const parsed = JSON.parse(postBody);
          setResponse({
            statusCode: 201,
            statusText: '201 Created',
            timeMs: 24,
            message: 'User successfully created via UsersController.create()',
            data: { id: 3, ...parsed, createdAt: new Date().toISOString() }
          });
        } catch {
          setResponse({
            statusCode: 400,
            statusText: '400 Bad Request',
            timeMs: 5,
            error: 'Validation failed: JSON syntax invalid'
          });
        }
      } else if (selectedEndpoint === 'DELETE') {
        setResponse({
          statusCode: 200,
          statusText: '200 OK',
          timeMs: 16,
          message: 'User with ID 1 deleted successfully'
        });
      }
    }, 350);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 my-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            NestJS Controller & Service Simulator
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {language === 'th' ? 'ทดสอบยิง REST API ของ NestJS' : 'Interactive NestJS Endpoint Console'}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
            <Cpu className="w-3.5 h-3.5" />
            <span>NestJS 11 Engine</span>
          </span>
        </div>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {endpoints.map(ep => (
          <button
            key={ep.key}
            onClick={() => setSelectedEndpoint(ep.key as any)}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedEndpoint === ep.key
                ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/40 ring-1 ring-rose-500 font-semibold'
                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <span
              className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded mr-1.5 ${
                ep.method === 'GET'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300'
                  : ep.method === 'POST'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'
              }`}
            >
              {ep.method}
            </span>
            <span className="text-xs font-mono text-slate-800 dark:text-slate-200">{ep.path}</span>
            <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{ep.desc}</p>
          </button>
        ))}
      </div>

      {/* Request Bar */}
      <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 mb-4 font-mono text-xs">
        <span className="font-bold text-rose-600 dark:text-rose-400">
          {endpoints.find(e => e.key === selectedEndpoint)?.method}
        </span>
        <span className="flex-1 text-slate-700 dark:text-slate-300">
          http://localhost:3000/api{endpoints.find(e => e.key === selectedEndpoint)?.path}
        </span>
        <button
          onClick={handleExecute}
          disabled={isLoading}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold transition-all shadow-sm active:scale-95 disabled:opacity-50"
        >
          <Send className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? (language === 'th' ? 'กำลังส่ง...' : 'Sending...') : (language === 'th' ? 'ส่ง Request' : 'Send Request')}</span>
        </button>
      </div>

      {/* POST Payload editor if selected */}
      {selectedEndpoint === 'POST' && (
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Request Body (CreateUserDto):
          </label>
          <textarea
            value={postBody}
            onChange={e => setPostBody(e.target.value)}
            rows={4}
            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-200 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-rose-500"
          />
        </div>
      )}

      {/* Response Panel */}
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs shadow-inner">
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-slate-300 font-semibold">Response Payload</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3" />
              <span>{response.timeMs} ms</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-400 font-bold">
              {response.statusCode} {response.statusText}
            </span>
          </div>
        </div>
        <pre className="p-4 text-emerald-300 whitespace-pre-wrap leading-relaxed overflow-x-auto">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </div>
  );
};
