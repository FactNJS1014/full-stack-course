import React, { useState, useEffect } from 'react';
import { Search, Plus, Trash2, Edit2, CheckCircle2, XCircle, UserCheck, RefreshCw, Filter } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface Employee {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  email: string;
  status: 'active' | 'inactive';
}

const INITIAL_EMPLOYEES: Employee[] = [
  { id: 1, employeeCode: 'EMP-001', firstName: 'John', lastName: 'Doe', department: 'Engineering', position: 'Lead Full-Stack Architect', email: 'john.doe@company.com', status: 'active' },
  { id: 2, employeeCode: 'EMP-002', firstName: 'Sarah', lastName: 'Connor', department: 'Product', position: 'Product Director', email: 'sarah.c@company.com', status: 'active' },
  { id: 3, employeeCode: 'EMP-003', firstName: 'Michael', lastName: 'Scott', department: 'Management', position: 'Branch Manager', email: 'm.scott@company.com', status: 'active' },
  { id: 4, employeeCode: 'EMP-004', firstName: 'Alex', lastName: 'Vance', department: 'Engineering', position: 'NestJS Backend Engineer', email: 'alex.v@company.com', status: 'active' },
  { id: 5, employeeCode: 'EMP-005', firstName: 'Dwight', lastName: 'Schrute', department: 'Sales', position: 'Senior Sales Director', email: 'dwight.s@company.com', status: 'inactive' },
  { id: 6, employeeCode: 'EMP-006', firstName: 'Pam', lastName: 'Beesly', department: 'Design', position: 'UI/UX Specialist', email: 'pam.b@company.com', status: 'active' },
  { id: 7, employeeCode: 'EMP-007', firstName: 'Jim', lastName: 'Halpert', department: 'Sales', position: 'Account Executive', email: 'jim.h@company.com', status: 'active' }
];

const STORAGE_KEY = 'lrna_employees_crud_data_v1';

export const EmployeeCrudDemo: React.FC = () => {
  const { language } = useApp();
  const [employees, setEmployees] = useState<Employee[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_EMPLOYEES;
  });

  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'active' | 'inactive'>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [formData, setFormData] = useState<Omit<Employee, 'id'>>({
    employeeCode: '',
    firstName: '',
    lastName: '',
    department: 'Engineering',
    position: '',
    email: '',
    status: 'active'
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  // Filtering
  const filtered = employees.filter(emp => {
    const q = search.toLowerCase();
    const matchSearch =
      emp.firstName.toLowerCase().includes(q) ||
      emp.lastName.toLowerCase().includes(q) ||
      emp.employeeCode.toLowerCase().includes(q) ||
      emp.email.toLowerCase().includes(q) ||
      emp.position.toLowerCase().includes(q);

    const matchDept = departmentFilter === 'ALL' || emp.department === departmentFilter;
    const matchStatus = statusFilter === 'ALL' || emp.status === statusFilter;

    return matchSearch && matchDept && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const departments = ['Engineering', 'Product', 'Sales', 'Design', 'Management', 'HR'];

  const handleOpenAdd = () => {
    setEditingEmployee(null);
    setFormData({
      employeeCode: `EMP-00${employees.length + 1}`,
      firstName: '',
      lastName: '',
      department: 'Engineering',
      position: '',
      email: '',
      status: 'active'
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const handleOpenEdit = (emp: Employee) => {
    setEditingEmployee(emp);
    setFormData({
      employeeCode: emp.employeeCode,
      firstName: emp.firstName,
      lastName: emp.lastName,
      department: emp.department,
      position: emp.position,
      email: emp.email,
      status: emp.status
    });
    setFormErrors({});
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm(language === 'th' ? 'คุณแน่ใจหรือไม่ว่าต้องการลบพนักงานคนนี้?' : 'Are you sure you want to delete this employee?')) {
      setEmployees(prev => prev.filter(e => e.id !== id));
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = language === 'th' ? 'กรุณากรอกชื่อจริง' : 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = language === 'th' ? 'กรุณากรอกนามสกุล' : 'Last name is required';
    if (!formData.position.trim()) errs.position = language === 'th' ? 'กรุณากรอกตำแหน่ง' : 'Position is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = language === 'th' ? 'กรุณาระบุอีเมลที่ถูกต้อง' : 'Valid email is required';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingEmployee) {
      setEmployees(prev =>
        prev.map(item => (item.id === editingEmployee.id ? { ...formData, id: editingEmployee.id } : item))
      );
    } else {
      const newId = employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1;
      setEmployees(prev => [{ ...formData, id: newId }, ...prev]);
    }
    setIsModalOpen(false);
  };

  const handleResetData = () => {
    setEmployees(INITIAL_EMPLOYEES);
    setSearch('');
    setDepartmentFilter('ALL');
    setStatusFilter('ALL');
    setCurrentPage(1);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden my-6">
      {/* Top Banner */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Interactive Live Demo
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
            {language === 'th' ? 'ระบบบริหารจัดการพนักงาน (Employee Management CRUD)' : 'Employee Management CRUD Live'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'th'
              ? 'จำลองการทำงานจริงของ Laravel Controller + Eloquent + React 19 + Inertia 3 แบบ Real-time'
              : 'Simulating Laravel Controller + Eloquent + React 19 + Inertia 3 in action'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetData}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Reset Mock Data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{language === 'th' ? 'รีเซ็ตข้อมูล' : 'Reset Data'}</span>
          </button>
          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>{language === 'th' ? '+ เพิ่มพนักงาน' : '+ Add Employee'}</span>
          </button>
        </div>
      </div>

      {/* Control Bar: Search & Filters */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
            placeholder={language === 'th' ? 'ค้นหาชื่อ, รหัส, อีเมล, ตำแหน่ง...' : 'Search by name, code, email, role...'}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={departmentFilter}
            onChange={e => { setDepartmentFilter(e.target.value); setCurrentPage(1); }}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none"
          >
            <option value="ALL">{language === 'th' ? 'ทุกแผนก (All Departments)' : 'All Departments'}</option>
            {departments.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value as any); setCurrentPage(1); }}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none"
          >
            <option value="ALL">{language === 'th' ? 'ทุกสถานะ' : 'All Status'}</option>
            <option value="active">{language === 'th' ? 'Active (ทำงานอยู่)' : 'Active'}</option>
            <option value="inactive">{language === 'th' ? 'Inactive (ลาออก/พักงาน)' : 'Inactive'}</option>
          </select>
        </div>
      </div>

      {/* Employees Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/40 text-slate-500 font-bold uppercase tracking-wider">
              <th className="p-3 pl-4">ID</th>
              <th className="p-3">{language === 'th' ? 'รหัสพนักงาน' : 'Code'}</th>
              <th className="p-3">{language === 'th' ? 'ชื่อ - นามสกุล' : 'Full Name'}</th>
              <th className="p-3">{language === 'th' ? 'แผนก' : 'Department'}</th>
              <th className="p-3">{language === 'th' ? 'ตำแหน่ง' : 'Position'}</th>
              <th className="p-3">{language === 'th' ? 'อีเมล' : 'Email'}</th>
              <th className="p-3">{language === 'th' ? 'สถานะ' : 'Status'}</th>
              <th className="p-3 pr-4 text-right">{language === 'th' ? 'การจัดการ' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {paginated.length > 0 ? (
              paginated.map(emp => (
                <tr key={emp.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-3 pl-4 font-mono text-slate-400">{emp.id}</td>
                  <td className="p-3 font-mono font-semibold text-blue-600 dark:text-blue-400">{emp.employeeCode}</td>
                  <td className="p-3 font-semibold text-slate-900 dark:text-white">
                    {emp.firstName} {emp.lastName}
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {emp.department}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-300">{emp.position}</td>
                  <td className="p-3 text-slate-500 font-mono">{emp.email}</td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-medium ${
                        emp.status === 'active'
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {emp.status === 'active' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <XCircle className="w-3 h-3 text-slate-400" />
                      )}
                      <span>{emp.status}</span>
                    </span>
                  </td>
                  <td className="p-3 pr-4 text-right space-x-1">
                    <button
                      onClick={() => handleOpenEdit(emp)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                      title="Edit Employee"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Delete Employee"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-8 text-slate-400">
                  {language === 'th' ? 'ไม่พบข้อมูลพนักงานที่ตรงกับเงื่อนไข' : 'No employees matched the query.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-xs text-slate-500">
        <div>
          {language === 'th'
            ? `แสดง ${paginated.length} จากทั้งหมด ${filtered.length} รายการ`
            : `Showing ${paginated.length} of ${filtered.length} employees`}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-white dark:hover:bg-slate-800"
          >
            Prev
          </button>
          <span className="px-2 font-mono font-bold text-slate-800 dark:text-slate-200">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-white dark:hover:bg-slate-800"
          >
            Next
          </button>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              {editingEmployee
                ? (language === 'th' ? 'แก้ไขข้อมูลพนักงาน' : 'Edit Employee')
                : (language === 'th' ? 'เพิ่มพนักงานใหม่' : 'Add New Employee')}
            </h4>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'th' ? 'ชื่อ' : 'First Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {formErrors.firstName && <p className="text-rose-500 text-[10px] mt-0.5">{formErrors.firstName}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'th' ? 'นามสกุล' : 'Last Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {formErrors.lastName && <p className="text-rose-500 text-[10px] mt-0.5">{formErrors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'th' ? 'อีเมล' : 'Email Address'} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.email && <p className="text-rose-500 text-[10px] mt-0.5">{formErrors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'th' ? 'แผนก' : 'Department'}
                  </label>
                  <select
                    value={formData.department}
                    onChange={e => setFormData({ ...formData, department: e.target.value })}
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                  >
                    {departments.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'th' ? 'สถานะ' : 'Status'}
                  </label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'th' ? 'ตำแหน่ง' : 'Position'} *
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={e => setFormData({ ...formData, position: e.target.value })}
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formErrors.position && <p className="text-rose-500 text-[10px] mt-0.5">{formErrors.position}</p>}
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {language === 'th' ? 'ยกเลิก' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20"
                >
                  {language === 'th' ? 'บันทึกข้อมูล' : 'Save Employee'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
