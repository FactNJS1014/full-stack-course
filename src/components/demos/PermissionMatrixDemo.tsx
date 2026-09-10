import React, { useState } from 'react';
import { Shield, Check, X, Lock, Unlock, RefreshCw } from 'lucide-react';
import { useApp } from '../../context/AppContext';

type RoleKey = 'Admin' | 'Manager' | 'User' | 'Guest';
type ActionKey = 'View' | 'Create' | 'Edit' | 'Delete' | 'Export';

const INITIAL_MATRIX: Record<RoleKey, Record<ActionKey, boolean>> = {
  Admin: { View: true, Create: true, Edit: true, Delete: true, Export: true },
  Manager: { View: true, Create: true, Edit: true, Delete: false, Export: true },
  User: { View: true, Create: false, Edit: false, Delete: false, Export: false },
  Guest: { View: false, Create: false, Edit: false, Delete: false, Export: false }
};

export const PermissionMatrixDemo: React.FC = () => {
  const { language } = useApp();
  const [matrix, setMatrix] = useState(INITIAL_MATRIX);
  const [activeRoleTest, setActiveRoleTest] = useState<RoleKey>('Manager');

  const actions: ActionKey[] = ['View', 'Create', 'Edit', 'Delete', 'Export'];
  const roles: RoleKey[] = ['Admin', 'Manager', 'User', 'Guest'];

  const toggleCell = (r: RoleKey, a: ActionKey) => {
    setMatrix(prev => ({
      ...prev,
      [r]: {
        ...prev[r],
        [a]: !prev[r][a]
      }
    }));
  };

  const handleReset = () => {
    setMatrix(INITIAL_MATRIX);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 my-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            RBAC Access Control Simulator
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {language === 'th' ? 'ตารางสิทธิ์การใช้งาน (Role & Permission Matrix)' : 'Role & Permission Matrix Live'}
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Matrix</span>
        </button>
      </div>

      {/* Permission Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-center border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <th className="p-3 text-left font-bold text-slate-700 dark:text-slate-300 uppercase">
                {language === 'th' ? 'บทบาท (Role)' : 'Role'}
              </th>
              {actions.map(action => (
                <th key={action} className="p-3 font-bold text-slate-700 dark:text-slate-300 uppercase">
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {roles.map(role => (
              <tr key={role} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="p-3 text-left font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-violet-500" />
                  <span>{role}</span>
                </td>
                {actions.map(action => {
                  const allowed = matrix[role][action];
                  return (
                    <td key={action} className="p-3">
                      <button
                        onClick={() => toggleCell(role, action)}
                        className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                          allowed
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30'
                            : 'bg-rose-50 dark:bg-rose-950/40 text-rose-500 dark:text-rose-400 ring-1 ring-rose-500/30 opacity-60'
                        }`}
                        title={`Toggle ${action} for ${role}`}
                      >
                        {allowed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simulator Sandbox */}
      <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-900/40 bg-violet-50/40 dark:bg-violet-950/20 text-xs">
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-violet-900 dark:text-violet-300">
            {language === 'th' ? 'จำลองสถานะการทดสอบผู้ใช้:' : 'Simulate User Persona:'}
          </span>
          <div className="flex gap-1.5">
            {roles.map(r => (
              <button
                key={r}
                onClick={() => setActiveRoleTest(r)}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  activeRoleTest === r
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              User with role: {activeRoleTest}
            </span>
            <div className="flex gap-2 mt-1">
              {actions.map(a => {
                const can = matrix[activeRoleTest][a];
                return (
                  <span
                    key={a}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold flex items-center gap-1 ${
                      can
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 line-through'
                    }`}
                  >
                    {can ? <Unlock className="w-2.5 h-2.5" /> : <Lock className="w-2.5 h-2.5" />}
                    {a}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="text-right font-mono text-[11px] text-slate-500">
            Gate::allows('manage', $user)
          </div>
        </div>
      </div>
    </div>
  );
};
