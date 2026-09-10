import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-01-employee-crud',
    level: 'Beginner',
    title: {
      th: 'ระบบบริหารจัดการพนักงาน (Employee Management CRUD)',
      en: 'Employee Management Full-Stack CRUD'
    },
    description: {
      th: 'สร้างระบบจัดการข้อมูลพนักงานฉบับสมบูรณ์ด้วย Laravel + React 19 + Inertia 3 มีฟังก์ชันค้นหา กรองแผนก แบ่งหน้า และสลับสถานะการทำงาน',
      en: 'Complete employee management system with Laravel, React 19, and Inertia 3. Features live search, department filtering, pagination, and status toggling.'
    },
    techStack: ['Laravel 11', 'React 19', 'Inertia 3', 'Tailwind CSS', 'PostgreSQL'],
    features: {
      th: [
        'เพิ่ม แก้ไข ลบ และดูรายละเอียดพนักงาน',
        'ระบบค้นหา Real-time ตามชื่อ แผนก และตำแหน่ง',
        'ระบบกรองตามสถานะ (Active / Inactive)',
        'ระบบแบ่งหน้า (Pagination) รักษา State ด้วย Inertia',
        'การตรวจสอบข้อมูลฟอร์ม (Form Request Validation)'
      ],
      en: [
        'Add, Edit, Delete, and View Employee Details',
        'Real-time search across names, departments, and roles',
        'Status filtering (Active / Inactive)',
        'Preserved-state pagination via Inertia',
        'Strict Form Request Validation on server'
      ]
    },
    architecture: {
      th: 'React 19 View -> Inertia 3 Protocol -> Laravel EmployeeController -> Eloquent Model -> Database Table',
      en: 'React 19 View -> Inertia 3 Protocol -> Laravel EmployeeController -> Eloquent Model -> Database Table'
    },
    databaseDesign: {
      tables: [
        {
          name: 'employees',
          columns: ['id (BIGINT PK)', 'employee_code (VARCHAR UNIQUE)', 'first_name (VARCHAR)', 'last_name (VARCHAR)', 'department (VARCHAR)', 'position (VARCHAR)', 'email (VARCHAR UNIQUE)', 'status (ENUM)', 'created_at', 'updated_at']
        },
        {
          name: 'departments',
          columns: ['id (BIGINT PK)', 'name (VARCHAR)', 'budget (DECIMAL)', 'manager_id (BIGINT FK)']
        }
      ]
    },
    apiEndpoints: [
      { method: 'GET', path: '/employees', description: 'List all employees with search and filters' },
      { method: 'POST', path: '/employees', description: 'Create a new employee record' },
      { method: 'GET', path: '/employees/{id}', description: 'Fetch employee detail' },
      { method: 'PUT', path: '/employees/{id}', description: 'Update existing employee' },
      { method: 'DELETE', path: '/employees/{id}', description: 'Delete employee record' }
    ],
    steps: [
      { step: 1, title: { th: 'สร้าง Migration & Model', en: 'Create Migration & Model' }, desc: { th: 'php artisan make:model Employee -m', en: 'Run php artisan make:model Employee -m to scaffold schema' } },
      { step: 2, title: { th: 'สร้าง Form Request Validation', en: 'Form Request Validation' }, desc: { th: 'เขียนกฎ required, email, unique ใน StoreEmployeeRequest', en: 'Define required, email, and unique rules in StoreEmployeeRequest' } },
      { step: 3, title: { th: 'สร้าง EmployeeController', en: 'Implement EmployeeController' }, desc: { th: 'เขียนเมธอด index, store, update, destroy ด้วย Inertia::render', en: 'Implement index, store, update, and destroy actions using Inertia::render' } },
      { step: 4, title: { th: 'สร้าง React 19 UI Component', en: 'Build React 19 UI' }, desc: { th: 'สร้างหน้า Index.tsx พร้อมฟอร์ม useForm() และตารางแสดงผล', en: 'Build Index.tsx featuring useForm() modals and data tables' } }
    ],
    demoRoute: '/demo/employee-management'
  },
  {
    id: 'proj-02-product-catalog',
    level: 'Beginner',
    title: {
      th: 'ระบบจัดการสินค้าและคลัง (Product & Inventory CRUD)',
      en: 'Product & Inventory Management'
    },
    description: {
      th: 'ระบบจัดการสินค้า รหัส SKU ราคาสินค้า จำนวนคงเหลือ และหมวดหมู่สินค้า พร้อมคำนวณมูลค่าสินค้าคงเหลือรวม',
      en: 'Product catalog with SKU tracking, pricing, inventory stock thresholds, and live total valuation.'
    },
    techStack: ['Laravel 11', 'React 19', 'Inertia 3', 'MySQL'],
    features: {
      th: [
        'จัดการสินค้าและประเภทสินค้า (One-to-Many)',
        'คำนวณราคาสินค้ารวมและมูลค่าในคลังแบบ Real-time',
        'ระบบเตือนสินค้าใกล้หมด (Low Stock Alert)',
        'Export รายงานเป็น Excel หรือ PDF'
      ],
      en: [
        'Product & Category hierarchy (One-to-Many)',
        'Real-time inventory valuation calculation',
        'Low stock alert threshold indicator',
        'Excel and PDF export capability'
      ]
    },
    architecture: {
      th: 'React Form -> Inertia -> ProductService -> Product Model -> MySQL',
      en: 'React Form -> Inertia -> ProductService -> Product Model -> MySQL'
    },
    steps: [
      { step: 1, title: { th: 'วางโครงสร้าง Schema', en: 'Database Schema' }, desc: { th: 'สร้างตาราง products และ categories เชื่อมโยงกัน', en: 'Create products and categories tables with foreign key constraints' } },
      { step: 2, title: { th: 'เขียน Eloquent Relationship', en: 'Eloquent Relations' }, desc: { th: 'ผูก belongsTo และ hasMany ระหว่างโมเดล', en: 'Define belongsTo and hasMany relationships between models' } },
      { step: 3, title: { th: 'สร้าง React Catalog UI', en: 'React Catalog UI' }, desc: { th: 'สร้างการ์ดสินค้าพร้อมปุ่มปรับจำนวนสต็อกทันที', en: 'Create product cards with instant stock stepper controls' } }
    ]
  },
  {
    id: 'proj-03-nestjs-rest-api',
    level: 'Intermediate',
    title: {
      th: 'NestJS RESTful Microservice API',
      en: 'Enterprise NestJS RESTful API'
    },
    description: {
      th: 'สร้าง High-Performance REST API สำหรับให้บริการข้อมูลด้วย NestJS, TypeScript, DTOs, Class-Validator และ TypeORM',
      en: 'High-performance REST API service built with NestJS, TypeScript, DTOs, Class-Validator, and TypeORM.'
    },
    techStack: ['NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Swagger'],
    features: {
      th: [
        'RESTful CRUD Endpoints พร้อมเอกสาร Swagger อัตโนมัติ',
        'ระบบ Validation ขาเข้าด้วย DTO และ Class-Validator',
        'ระบบ Error Handling แบบรวมศูนย์ (Global Exception Filter)',
        'Logging และ Response Interceptor จับเวลาการประมวลผล'
      ],
      en: [
        'RESTful CRUD endpoints with auto-generated Swagger documentation',
        'Strict payload validation via DTOs and Class-Validator',
        'Centralized Global Exception Filter handling',
        'Execution performance logging interceptors'
      ]
    },
    architecture: {
      th: 'HTTP Request -> NestJS Controller -> ValidationPipe -> Service Layer -> TypeORM Repository -> Postgres',
      en: 'HTTP Request -> NestJS Controller -> ValidationPipe -> Service Layer -> TypeORM Repository -> Postgres'
    },
    steps: [
      { step: 1, title: { th: 'สร้าง Nest Module & Controller', en: 'Generate Module & Controller' }, desc: { th: 'nest g module users && nest g controller users', en: 'Run nest g module and controller commands' } },
      { step: 2, title: { th: 'สร้าง CreateUserDto', en: 'Build CreateUserDto' }, desc: { th: 'ใส่ Decorator @IsString(), @IsEmail(), @MinLength()', en: 'Decorate DTO with @IsString, @IsEmail, and @MinLength' } },
      { step: 3, title: { th: 'ทดสอบด้วย API Simulator', en: 'Test with Simulator' }, desc: { th: 'ทดสอบยิง Request และดูผลลัพธ์ผ่านตัวจำลองในเว็บ', en: 'Execute test requests and observe formatted responses' } }
    ],
    demoRoute: '/tools/api-simulator'
  },
  {
    id: 'proj-04-rbac-security',
    level: 'Advanced',
    title: {
      th: 'ระบบกำหนดสิทธิ์และบทบาทผู้ใช้ (RBAC Permission Matrix)',
      en: 'Role-Based Access Control (RBAC) System'
    },
    description: {
      th: 'ระบบสิทธิ์การเข้าถึงข้อมูลระดับสูง: จัดการ Roles (Admin, Manager, Editor, Viewer) และ Permissions ละเอียดรายโมดูล พร้อม Matrix ตรวจสอบสิทธิ์',
      en: 'Enterprise Role-Based Access Control with dynamic roles, granular permissions, and interactive permission matrices.'
    },
    techStack: ['Laravel Sanctum', 'React 19', 'Inertia 3', 'Gates & Policies'],
    features: {
      th: [
        'ตารางความสัมพันธ์ Many-to-Many ระหว่าง Roles และ Permissions',
        'Laravel Middleware ตรวจจับสิทธิ์ก่อนเข้าถึง Controller',
        'Inertia Shared Data ส่งสิทธิ์ผู้ใช้ให้ React ซ่อนปุ่มอัตโนมัติ',
        'หน้าต่างแก้ไข Matrix สิทธิ์แบบสลับเปิด-ปิด Real-time'
      ],
      en: [
        'Many-to-Many relational structure between roles and permissions',
        'Laravel middleware guard protecting controller actions',
        'Inertia shared props enabling reactive UI permission gates',
        'Interactive real-time role-permission toggle matrix'
      ]
    },
    architecture: {
      th: 'User -> HasRoles Trait -> Gate::authorize() -> Inertia Props -> React <Can> Component',
      en: 'User -> HasRoles Trait -> Gate::authorize() -> Inertia Props -> React <Can> Component'
    },
    steps: [
      { step: 1, title: { th: 'ออกแบบ Schema Roles & Permissions', en: 'Schema Design' }, desc: { th: 'สร้างตาราง users, roles, permissions, role_permission', en: 'Create roles, permissions, and pivot junction tables' } },
      { step: 2, title: { th: 'สร้าง Laravel Policy', en: 'Laravel Policy' }, desc: { th: 'เขียนเงื่อนไข can() ใน Policy คลาส', en: 'Implement authorization checks within dedicated Policy classes' } },
      { step: 3, title: { th: 'ผูกกับ React UI', en: 'Connect to React' }, desc: { th: 'แสดงผลปุ่มเฉพาะเมื่อผู้ใช้มีสิทธิ์ตามที่กำหนด', en: 'Conditionally render action buttons based on user permissions' } }
    ],
    demoRoute: '/demo/permission-matrix'
  },
  {
    id: 'proj-05-final-capstone',
    level: 'Capstone',
    title: {
      th: 'Professional Full-Stack Enterprise Platform (Final Capstone)',
      en: 'Professional Full-Stack Enterprise Platform (Final Capstone)'
    },
    description: {
      th: 'สุดยอดโปรเจกต์ส่งท้าย: ระบบบริหารธุรกิจครบวงจร รวมพลัง Laravel + React 19 + Inertia 3 + NestJS Microservices มี Authentication, Dashboard สถิติ, CRUD, Validation, RBAC, Caching และระบบรายงานผล',
      en: 'The ultimate graduation capstone: an enterprise business suite uniting Laravel, React 19, Inertia 3, and NestJS microservices with auth, dashboard charts, validation, RBAC, caching, and reporting.'
    },
    techStack: ['Laravel 11', 'React 19', 'Inertia 3', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    features: {
      th: [
        'ระบบยืนยันตัวตน 2 ชั้น (2FA) และ Single Sign-On (SSO)',
        'แผงควบคุม Dashboard พร้อมกราฟสถิติ Real-time',
        'ระบบจัดการสินค้า พนักงาน และธุรกรรมการขายแบบ Full CRUD',
        'NestJS High-speed API สำหรับงานประมวลผลข้อมูลหนักและ Batch Jobs',
        'ระบบ Caching ด้วย Redis เพิ่มความเร็ว 10 เท่า',
        'ระบบ Automated Tests ครบทั้ง Unit, Feature และ E2E'
      ],
      en: [
        'Two-factor authentication (2FA) and session management',
        'Real-time business telemetry and analytical dashboards',
        'Comprehensive Employee, Product, and Transaction CRUD modules',
        'Dedicated NestJS microservice for compute-heavy batch processing',
        'Redis caching layer delivering 10x throughput boosts',
        'Full test suite spanning Unit, Feature, and E2E specs'
      ]
    },
    architecture: {
      th: 'React 19 (UI) <-> Inertia 3 <-> Laravel Core Monolith <-> Internal HTTP/gRPC <-> NestJS Microservices <-> PostgreSQL & Redis',
      en: 'React 19 (UI) <-> Inertia 3 <-> Laravel Core Monolith <-> Internal HTTP/gRPC <-> NestJS Microservices <-> PostgreSQL & Redis'
    },
    steps: [
      { step: 1, title: { th: 'Step 01: Requirement & Domain Modeling', en: 'Step 01: Requirement & Modeling' }, desc: { th: 'กำหนดขอบเขตระบบและ Use Case ทางธุรกิจ', en: 'Define system scopes and enterprise domain business use cases' } },
      { step: 2, title: { th: 'Step 02: Relational Database Design', en: 'Step 02: Database Schema' }, desc: { th: 'ออกแบบ ER Diagram 8 ตาราง พร้อม Foreign Key และ Index', en: 'Architect 8-table normalized schema with strict FKs and indexes' } },
      { step: 3, title: { th: 'Step 03: Architecture Strategy', en: 'Step 03: Architectural Strategy' }, desc: { th: 'กำหนดการแบ่งงานระหว่าง Laravel (Core Monolith) กับ NestJS (Heavy Worker)', en: 'Map boundaries between Laravel core monolith and NestJS workers' } },
      { step: 4, title: { th: 'Step 04: Laravel Backend Services', en: 'Step 04: Laravel Backend' }, desc: { th: 'สร้าง Migration, Eloquent Models และ Service Layer', en: 'Implement migrations, models, and service classes' } },
      { step: 5, title: { th: 'Step 05: React 19 Frontend Shell', en: 'Step 05: React 19 Shell' }, desc: { th: 'สร้าง Master Layout, Sidebar, Header และ Dark/Light Mode', en: 'Construct responsive app shell with themes and stateful navigation' } },
      { step: 6, title: { th: 'Step 06: Inertia 3 Integration', en: 'Step 06: Inertia Integration' }, desc: { th: 'ส่งผ่าน Props, Form, Validation Errors และ Flash Notification', en: 'Streamline server props, form processing, and toast notifications' } },
      { step: 7, title: { th: 'Step 07: NestJS Microservice Setup', en: 'Step 07: NestJS Setup' }, desc: { th: 'สร้าง NestJS API รับงานคำนวณและประมวลผลข้อมูลหนัก', en: 'Build NestJS worker service with strongly-typed DTOs' } },
      { step: 8, title: { th: 'Step 08: Authentication & RBAC', en: 'Step 08: Auth & RBAC' }, desc: { th: 'วางระบบ Permissions และ Route Middleware', en: 'Deploy enterprise RBAC matrices and route guards' } },
      { step: 9, title: { th: 'Step 09: Full CRUD Modules', en: 'Step 09: CRUD Modules' }, desc: { th: 'สร้างหน้าจัดการพนักงาน สินค้า และคำสั่งซื้อ', en: 'Deploy rich employee, inventory, and order modules' } },
      { step: 10, title: { th: 'Step 10: Strict Validation Layer', en: 'Step 10: Validation' }, desc: { th: 'ตรวจสอบความปลอดภัยของข้อมูลทุกจุดทั้งฝั่ง Client และ Server', en: 'Enforce comprehensive client and server validation barriers' } },
      { step: 11, title: { th: 'Step 11: Automated Testing Matrix', en: 'Step 11: Testing' }, desc: { th: 'เขียน Pest Tests ฝั่ง Laravel และ RTL Tests ฝั่ง React', en: 'Author Pest PHP feature tests and React Testing Library specs' } },
      { step: 12, title: { th: 'Step 12: Performance & Redis Caching', en: 'Step 12: Performance' }, desc: { th: 'เพิ่มความเร็วด้วย Cache Queries และ Optimized Eager Loading', en: 'Accelerate response times via query caching and eager loading' } },
      { step: 13, title: { th: 'Step 13: Security Hardening', en: 'Step 13: Security' }, desc: { th: 'ป้องกัน CSRF, XSS, SQL Injection และ Rate Limiting', en: 'Mitigate CSRF, XSS, SQLi, and enforce rate limiting' } },
      { step: 14, title: { th: 'Step 14: Docker & Production Deployment', en: 'Step 14: Deployment' }, desc: { th: 'จัดเตรียม Docker Compose, Nginx Reverse Proxy และ CI/CD Pipeline', en: 'Prepare Docker Compose, Nginx reverse proxy, and CI/CD automation' } }
    ],
    demoRoute: '/tools/architecture-builder'
  }
];
