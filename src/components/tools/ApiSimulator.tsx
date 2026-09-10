import React, { useState } from 'react';
import { Send, Clock, Globe, Copy, Check, Terminal, FileCode } from 'lucide-react';
import { useApp } from '../../context/AppContext';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface MockResponse {
  status: number;
  statusText: string;
  timeMs: number;
  headers: Record<string, string>;
  data: any;
}

export const ApiSimulator: React.FC = () => {
  const { language } = useApp();
  const [method, setMethod] = useState<HttpMethod>('GET');
  const [url, setUrl] = useState('/api/employees');
  const [activeTab, setActiveTab] = useState<'body' | 'headers' | 'params'>('body');
  const [requestBody, setRequestBody] = useState(
    JSON.stringify({ firstName: 'Natt', department: 'Engineering', role: 'Full-Stack Lead' }, null, 2)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [response, setResponse] = useState<MockResponse>({
    status: 200,
    statusText: 'OK',
    timeMs: 28,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'x-ratelimit-remaining': '59',
      'cache-control': 'no-cache, private'
    },
    data: {
      success: true,
      data: [
        { id: 1, name: 'John Doe', department: 'Engineering', status: 'active' },
        { id: 2, name: 'Sarah Connor', department: 'Product', status: 'active' }
      ],
      meta: { total: 2, page: 1 }
    }
  });

  const sampleUrls = [
    { method: 'GET', url: '/api/employees' },
    { method: 'GET', url: '/api/employees/1' },
    { method: 'POST', url: '/api/employees' },
    { method: 'GET', url: '/api/products' },
    { method: 'GET', url: '/api/health' }
  ];

  const handleSend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (method === 'GET') {
        setResponse({
          status: 200,
          statusText: 'OK',
          timeMs: Math.floor(Math.random() * 20) + 15,
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'x-ratelimit-remaining': '58',
            'server': 'Laravel/11.0 (Inertia/3.0)'
          },
          data: {
            status: 'success',
            endpoint: url,
            timestamp: new Date().toISOString(),
            data: [
              { id: 101, code: 'EMP-001', name: 'John Doe', role: 'Architect' },
              { id: 102, code: 'EMP-002', name: 'Sarah Connor', role: 'Lead Director' }
            ]
          }
        });
      } else if (method === 'POST') {
        try {
          const parsed = JSON.parse(requestBody);
          setResponse({
            status: 201,
            statusText: 'Created',
            timeMs: 42,
            headers: { 'content-type': 'application/json; charset=utf-8', 'location': `${url}/103` },
            data: {
              status: 'created',
              message: 'Resource created successfully',
              data: { id: 103, ...parsed, createdAt: new Date().toISOString() }
            }
          });
        } catch {
          setResponse({
            status: 422,
            statusText: 'Unprocessable Entity',
            timeMs: 12,
            headers: { 'content-type': 'application/json' },
            data: { error: 'Validation failed: Invalid JSON payload' }
          });
        }
      } else if (method === 'DELETE') {
        setResponse({
          status: 200,
          statusText: 'OK',
          timeMs: 18,
          headers: { 'content-type': 'application/json' },
          data: { message: 'Item deleted successfully' }
        });
      } else {
        setResponse({
          status: 200,
          statusText: 'OK',
          timeMs: 25,
          headers: { 'content-type': 'application/json' },
          data: { message: `Updated resource at ${url}` }
        });
      }
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodColor = (m: HttpMethod) => {
    switch (m) {
      case 'GET': return 'text-blue-500 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900';
      case 'POST': return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900';
      case 'PUT':
      case 'PATCH': return 'text-amber-500 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900';
      case 'DELETE': return 'text-rose-500 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden my-6">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-500" />
          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
            {language === 'th' ? 'จำลองการยิง REST API (API Simulator)' : 'Interactive REST API Simulator'}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span>Quick presets:</span>
          {sampleUrls.map((s, i) => (
            <button
              key={i}
              onClick={() => { setMethod(s.method as any); setUrl(s.url); }}
              className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-mono text-[11px]"
            >
              {s.method} {s.url.replace('/api', '')}
            </button>
          ))}
        </div>
      </div>

      {/* URL bar */}
      <div className="p-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <select
          value={method}
          onChange={e => setMethod(e.target.value as HttpMethod)}
          className={`px-3 py-2 rounded-xl border text-xs font-mono font-bold focus:outline-none ${getMethodColor(method)}`}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>

        <div className="flex-1 flex items-center px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-mono text-xs">
          <span className="text-slate-400 select-none mr-1">https://api.academy.test</span>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            className="flex-1 bg-transparent text-slate-900 dark:text-white focus:outline-none"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={isLoading}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 active:scale-95 disabled:opacity-50"
        >
          <Send className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? (language === 'th' ? 'กำลังส่ง...' : 'Sending...') : (language === 'th' ? 'Send Request' : 'Send Request')}</span>
        </button>
      </div>

      {/* Split Request & Response */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
        {/* Request Tabs & Body */}
        <div className="p-4 flex flex-col h-72">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 mb-2">
            {(['body', 'headers', 'params'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize ${
                  activeTab === tab
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'body' && (
            <textarea
              value={requestBody}
              onChange={e => setRequestBody(e.target.value)}
              className="flex-1 w-full p-3 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs focus:outline-none resize-none"
            />
          )}

          {activeTab === 'headers' && (
            <div className="flex-1 p-3 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs space-y-1.5">
              <div><span className="text-slate-500">Content-Type:</span> application/json</div>
              <div><span className="text-slate-500">Accept:</span> application/json</div>
              <div><span className="text-slate-500">Authorization:</span> Bearer sanctum_mock_token_xyz99</div>
            </div>
          )}

          {activeTab === 'params' && (
            <div className="flex-1 p-3 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs space-y-1.5">
              <div><span className="text-slate-500">page:</span> 1</div>
              <div><span className="text-slate-500">limit:</span> 10</div>
              <div><span className="text-slate-500">sort:</span> created_at:desc</div>
            </div>
          )}
        </div>

        {/* Response Window */}
        <div className="p-4 flex flex-col h-72 bg-slate-950 font-mono text-xs text-slate-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-slate-300 font-semibold">Response Viewer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                <Clock className="w-3 h-3" />
                <span>{response.timeMs}ms</span>
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                response.status >= 200 && response.status < 300
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'bg-rose-950 text-rose-400 border border-rose-800'
              }`}>
                {response.status} {response.statusText}
              </span>
              <button
                onClick={handleCopy}
                className="p-1 rounded text-slate-400 hover:text-white"
                title="Copy response JSON"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <pre className="flex-1 overflow-y-auto text-emerald-300 leading-relaxed">
            {JSON.stringify(response.data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
