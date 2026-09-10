import React, { useState } from 'react';
import { Network, ArrowRight, ShieldCheck, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface StatusInfo {
  code: number;
  label: string;
  category: '2xx Success' | '3xx Redirection' | '4xx Client Error' | '5xx Server Error';
  desc: { th: string; en: string };
  commonScenario: { th: string; en: string };
  headers: Record<string, string>;
  mockBody: string;
}

const HTTP_STATUS_DATABASE: StatusInfo[] = [
  {
    code: 200,
    label: 'OK',
    category: '2xx Success',
    desc: { th: 'คำขอสำเร็จ และส่งข้อมูลกลับมาเรียบร้อย', en: 'Standard response for successful HTTP requests' },
    commonScenario: { th: 'ดึงรายชื่อพนักงานสำเร็จ (GET /api/employees)', en: 'Successfully fetched employee listing (GET /api/employees)' },
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Status': '200 OK' },
    mockBody: '{\n  "status": "success",\n  "data": [{ "id": 1, "name": "Sarah Connor" }]\n}'
  },
  {
    code: 201,
    label: 'Created',
    category: '2xx Success',
    desc: { th: 'สร้างข้อมูลชิ้นใหม่ลงฐานข้อมูลสำเร็จ', en: 'The request succeeded and a new resource was created' },
    commonScenario: { th: 'บันทึกพนักงานใหม่สำเร็จ (POST /api/employees)', en: 'Created a new employee record (POST /api/employees)' },
    headers: { 'Content-Type': 'application/json', 'Location': '/api/employees/101', 'Status': '201 Created' },
    mockBody: '{\n  "message": "Employee created successfully",\n  "id": 101\n}'
  },
  {
    code: 400,
    label: 'Bad Request',
    category: '4xx Client Error',
    desc: { th: 'รูปแบบคำขอไม่ถูกต้อง เช่น JSON Syntax เสียหาย', en: 'Malformed syntax or unparsable payload sent by client' },
    commonScenario: { th: 'ส่ง JSON ที่วงเล็บปิดไม่ครบหรือ Syntax พัง', en: 'Client transmitted unparseable broken JSON brackets' },
    headers: { 'Content-Type': 'application/json', 'Status': '400 Bad Request' },
    mockBody: '{\n  "error": "Bad Request",\n  "message": "SyntaxError: Unexpected token in JSON at position 14"\n}'
  },
  {
    code: 401,
    label: 'Unauthorized',
    category: '4xx Client Error',
    desc: { th: 'ยังไม่ได้ Login หรือไม่มี Bearer Token ที่ถูกต้อง', en: 'Authentication is required and has failed or not been provided' },
    commonScenario: { th: 'เรียก API ส่วนตัวโดยไม่ได้ส่ง Authorization Header', en: 'Calling protected endpoint without Sanctum/JWT token' },
    headers: { 'WWW-Authenticate': 'Bearer error="invalid_token"', 'Status': '401 Unauthorized' },
    mockBody: '{\n  "message": "Unauthenticated."\n}'
  },
  {
    code: 403,
    label: 'Forbidden',
    category: '4xx Client Error',
    desc: { th: 'Login แล้วแต่ไม่มีสิทธิ์เข้าถึงข้อมูลนี้ (Authorization Failed)', en: 'Authenticated client lacks permission for the resource' },
    commonScenario: { th: 'User ทั่วไปพยายามเข้าถึงเมนูลบของ Admin', en: 'Regular User attempts to delete system data reserved for Admins' },
    headers: { 'Content-Type': 'application/json', 'Status': '403 Forbidden' },
    mockBody: '{\n  "message": "This action is unauthorized by Gate policy."\n}'
  },
  {
    code: 404,
    label: 'Not Found',
    category: '4xx Client Error',
    desc: { th: 'ไม่พบ URL หรือข้อมูล ID นั้นในระบบ', en: 'The requested resource could not be found' },
    commonScenario: { th: 'ค้นหาพนักงานรหัสที่ไม่มีอยู่จริง (findOrFail)', en: 'Querying non-existent employee ID in Eloquent findOrFail' },
    headers: { 'Content-Type': 'application/json', 'Status': '404 Not Found' },
    mockBody: '{\n  "message": "No query results for model [App\\\\Models\\\\Employee] 999"\n}'
  },
  {
    code: 422,
    label: 'Unprocessable Entity',
    category: '4xx Client Error',
    desc: { th: 'ข้อมูลไม่ผ่านการตรวจสอบ Validation เช่น อีเมลซ้ำหรือไม่ได้กรอกชื่อ', en: 'Validation failure: payload semantic errors' },
    commonScenario: { th: 'กรอกฟอร์มไม่ครบใน Laravel Form Request', en: 'Form submission failed Laravel FormRequest validation rules' },
    headers: { 'Content-Type': 'application/json', 'Status': '422 Unprocessable Entity' },
    mockBody: '{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": ["The email has already been taken."]\n  }\n}'
  },
  {
    code: 500,
    label: 'Internal Server Error',
    category: '5xx Server Error',
    desc: { th: 'เซิร์ฟเวอร์เกิดข้อผิดพลาดรุนแรงที่ไม่ได้ดักจับไว้', en: 'Unexpected server-side exception occurred' },
    commonScenario: { th: 'ฐานข้อมูลดับ หรือเกิด Fatal Exception บน Backend', en: 'Database connection failed or uncaught fatal backend error' },
    headers: { 'Content-Type': 'application/json', 'Status': '500 Internal Server Error' },
    mockBody: '{\n  "message": "SQLSTATE[HY000] [2002] Connection refused"\n}'
  }
];

export const HttpSimulator: React.FC = () => {
  const { language } = useApp();
  const [selectedCode, setSelectedCode] = useState<number>(200);

  const activeStatus = HTTP_STATUS_DATABASE.find(s => s.code === selectedCode) || HTTP_STATUS_DATABASE[0];

  const getStatusColor = (code: number) => {
    if (code >= 200 && code < 300) return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500/40';
    if (code >= 300 && code < 400) return 'text-blue-500 bg-blue-50 dark:bg-blue-950/60 border-blue-500/40';
    if (code >= 400 && code < 500) return 'text-amber-500 bg-amber-50 dark:bg-amber-950/60 border-amber-500/40';
    return 'text-rose-500 bg-rose-50 dark:bg-rose-950/60 border-rose-500/40';
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 my-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            HTTP Protocol & Status Inspector
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {language === 'th' ? 'คู่มือจำลองรหัสสถานะ HTTP (HTTP Status Simulator)' : 'Interactive HTTP Status Inspector'}
          </h3>
        </div>
      </div>

      {/* Code selector tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {HTTP_STATUS_DATABASE.map(item => (
          <button
            key={item.code}
            onClick={() => setSelectedCode(item.code)}
            className={`px-3 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
              selectedCode === item.code
                ? 'ring-2 ring-blue-500 shadow-md scale-105 ' + getStatusColor(item.code)
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {item.code} {item.label}
          </button>
        ))}
      </div>

      {/* Inspector Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Explanation Card */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-4">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getStatusColor(activeStatus.code)}`}>
              HTTP {activeStatus.code} : {activeStatus.label}
            </span>
            <span className="text-xs text-slate-500 font-medium">{activeStatus.category}</span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {language === 'th' ? 'ความหมาย:' : 'Definition:'}
            </h4>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {language === 'th' ? activeStatus.desc.th : activeStatus.desc.en}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {language === 'th' ? 'สถานการณ์จริงที่พบบ่อย:' : 'Real-world Scenario:'}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'th' ? activeStatus.commonScenario.th : activeStatus.commonScenario.en}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {language === 'th' ? 'HTTP Headers ที่เซิร์ฟเวอร์ส่งกลับมา:' : 'Emitted HTTP Headers:'}
            </h4>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
              {Object.entries(activeStatus.headers).map(([k, v]) => (
                <div key={k}>
                  <span className="text-blue-400">{k}:</span> {v}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mock JSON Payload */}
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs flex flex-col">
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-400 flex items-center justify-between">
            <span>Payload Stream ({activeStatus.code})</span>
            <span className="text-emerald-400">application/json</span>
          </div>
          <pre className="p-4 flex-1 overflow-y-auto text-emerald-300 whitespace-pre-wrap leading-relaxed">
            {activeStatus.mockBody}
          </pre>
        </div>
      </div>
    </div>
  );
};
