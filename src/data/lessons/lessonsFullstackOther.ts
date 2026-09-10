import { Lesson } from '../../types';

export const LESSONS_FULLSTACK_OTHER: Record<string, Lesson> = {
  'fullstack-02-laravel-react-inertia-crud': {
    id: 'fullstack-02-laravel-react-inertia-crud',
    trackId: 'fullstack',
    category: 'Full-Stack Integration',
    level: 7,
    levelLabel: 'Level 7: Full-Stack Integration',
    durationMinutes: 35,
    title: {
      th: 'สร้างระบบ Employee Management Full CRUD ด้วย Laravel + React 19 + Inertia 3 จาก 0',
      en: 'Building Employee Management CRUD with Laravel + React 19 + Inertia 3 from Scratch'
    },
    description: {
      th: 'บทเรียนสมบูรณ์แบบระดับ Master: สอนสร้างระบบจัดการพนักงานครบวงจร ตั้งแต่สร้างตาราง Migration, Model, Form Request Validation, Controller จนถึงหน้าจอ React UI พร้อม Live CRUD Demo',
      en: 'The complete master tutorial: build an end-to-end Employee Management CRUD system covering migrations, models, form requests, controllers, and interactive React views.'
    },
    objectives: {
      th: [
        'สร้างตาราง employees ผ่าน Laravel Migration พร้อมคอลัมน์มาตรฐาน',
        'สร้าง Model Employee พร้อมตั้งค่า $fillable ป้องกัน Mass Assignment',
        'สร้าง EmployeeRequest ตรวจสอบความถูกต้องของข้อมูล (Validation)',
        'สร้าง EmployeeController รับส่งข้อมูลระหว่าง Eloquent และ Inertia',
        'สร้างหน้าจอ React 19 ด้วย Inertia useForm() พร้อมระบบ Search, Filter และ Pagination'
      ],
      en: [
        'Generate employees schema table via Laravel Migrations',
        'Configure Employee Eloquent model with protected $fillable attributes',
        'Validate incoming requests using dedicated FormRequest classes',
        'Construct EmployeeController handling full CRUD lifecycle via Inertia',
        'Build reactive React 19 UI with useForm, searching, filtering, and pagination'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'นี่คือการรวมร่างระหว่าง 3 เทคโนโลยี: Laravel ทำหน้าที่ Backend (ฐานข้อมูล, ตรรกะ, ความปลอดภัย) + React 19 ทำหน้าที่ Frontend UI (ความลื่นไหล, สวยงาม) + Inertia 3 ทำหน้าที่เป็นสะพานส่งข้อมูลระหว่างกันโดยไม่ต้องเขียน REST API',
        en: 'The ultimate trinity: Laravel acts as secure backend (database, business rules) + React 19 drives dynamic UI + Inertia 3 bridges data between both seamlessly without API overhead.'
      },
      whyUseIt: {
        th: 'นี่คือรูปแบบการพัฒนาเว็บที่รวดเร็วที่สุดในยุคนี้ (Developer Velocity สูงสุด) คุณสามารถสร้างระบบ CRUD เต็มรูปแบบได้เสร็จภายในเวลาไม่กี่นาที โดยไม่ต้องสลับไปเขียน fetch() หรือ axios() ให้เมื่อยมือ',
        en: 'This architecture represents peak developer velocity in modern web engineering: complete full-stack CRUD applications built in minutes without manual fetch() or axios() boilerplate.'
      },
      whenToUse: {
        th: 'ใช้เมื่อสร้างระบบจัดการข้อมูลทุกประเภทในองค์กร: ระบบจัดการพนักงาน, ระบบจัดการสินค้า, ระบบสต็อกสินค้า, ระบบจัดการออเดอร์',
        en: 'The standard architectural choice for enterprise admin portals, inventory systems, HR management, and SaaS products.'
      },
      howItWorks: {
        th: '1) Migration สร้างตาราง -> 2) Model กำหนดโครงสร้างข้อมูล -> 3) Controller เรียกข้อมูล -> 4) Inertia ส่งต่อให้ React Page -> 5) ผู้ใช้กรอกฟอร์มแล้วส่งข้อมูลกลับมาบันทึกผ่าน useForm()',
        en: '1) Migration sets DB schema -> 2) Model interfaces records -> 3) Controller executes queries -> 4) Inertia delivers props to React -> 5) React form submits back via useForm().'
      }
    },
    diagram: {
      title: {
        th: 'สถาปัตยกรรมการไหลของข้อมูลระบบ Employee CRUD',
        en: 'Employee Management Full-Stack Data Flow'
      },
      flow: [
        { title: '1. React View', sub: 'useForm() submit data', color: 'cyan' },
        { title: '2. Inertia Request', sub: 'POST /employees', color: 'purple' },
        { title: '3. Form Request', sub: 'Validate input rules', color: 'amber' },
        { title: '4. Controller & Model', sub: 'Employee::create()', color: 'red' },
        { title: '5. Database', sub: 'Insert row in MySQL/Postgres', color: 'emerald' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Migration ตาราง employees',
          en: 'Create Migration for employees table'
        },
        content: {
          th: 'กำหนดคอลัมน์สำคัญ: รหัสพนักงาน, ชื่อ, แผนก, ตำแหน่ง, อีเมล, สถานะ',
          en: 'Define schema attributes: employee_code, name, department, position, email, status.'
        },
        codeSnippet: {
          language: 'php',
          code: `Schema::create('employees', function (Blueprint $table) {\n    $table->id();\n    $table->string('employee_code')->unique();\n    $table->string('first_name');\n    $table->string('last_name');\n    $table->string('department');\n    $table->string('position');\n    $table->string('email')->unique();\n    $table->enum('status', ['active', 'inactive'])->default('active');\n    $table->timestamps();\n});`,
          filename: 'database/migrations/create_employees_table.php',
          mockOutput: 'Migrated: 2026_09_10_000001_create_employees_table (0.04 seconds)'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'สร้าง Controller จัดการ CRUD ครบวงจร',
          en: 'Create Controller Handling Full CRUD'
        },
        content: {
          th: 'สร้างเมธอด index, store, update, destroy ส่งข้อมูลสู่ Inertia',
          en: 'Implement index, store, update, and destroy actions communicating via Inertia.'
        },
        codeSnippet: {
          language: 'php',
          code: `public function index(Request $request)\n{\n    $query = Employee::query();\n    if ($request->search) {\n        $query->where('first_name', 'like', "%{$request->search}%")\n              ->orWhere('department', 'like', "%{$request->search}%");\n    }\n    return Inertia::render('Employees/Index', [\n        'employees' => $query->latest()->paginate(10)->withQueryString(),\n        'filters' => $request->only(['search'])\n    ]);\n}`,
          filename: 'app/Http/Controllers/EmployeeController.php',
          mockOutput: 'Returns rendered Inertia page with paginated records and active search filters.'
        }
      }
    ],
    primaryCode: {
      language: 'tsx',
      filename: 'resources/js/Pages/Employees/Index.tsx',
      code: `import React, { useState } from 'react';\nimport { useForm, router } from '@inertiajs/react';\n\nexport default function EmployeesIndex({ employees, filters }: any) {\n  const [search, setSearch] = useState(filters.search || '');\n  const { data, setData, post, processing, errors, reset } = useForm({\n    first_name: '',\n    last_name: '',\n    department: 'Engineering',\n    email: '',\n    status: 'active'\n  });\n\n  const handleSearch = (e: React.FormEvent) => {\n    e.preventDefault();\n    router.get('/employees', { search }, { preserveState: true });\n  };\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    post('/employees', { onSuccess: () => reset() });\n  };\n\n  return (\n    <div className="p-6 bg-slate-50 min-h-screen">\n      <h1 className="text-2xl font-bold text-slate-800">Employee Directory</h1>\n      {/* ฟอร์มและตารางแสดงรายชื่อพนักงาน */}\n    </div>\n  );\n}`,
      mockOutput: 'Full-Stack CRUD Component mounted and connected to Laravel backend',
      explanations: [
        {
          lines: '5-11',
          explanation: {
            th: 'useForm() ของ Inertia จัดการ State ของฟอร์ม, ค่า Error, สถานะกำลังส่ง (processing) ให้อัตโนมัติใน Hook เดียว',
            en: 'Inertia useForm() encapsulates form state, validation errors, and loading indicators in a single hook.'
          }
        },
        {
          lines: '13-16',
          explanation: {
            th: 'router.get() พร้อม preserveState: true ช่วยค้นหาข้อมูลโดยไม่ทำให้หน้าจอกระตุกหรือเสีย State เดิม',
            en: 'router.get() with preserveState preserves client scroll and input state across searches.'
          }
        }
      ]
    },
    demoType: 'employee-crud',
    exercises: [
      {
        id: 'ex-emp-validation',
        title: {
          th: 'แบบฝึกหัด: กฎการตรวจสอบ Validation',
          en: 'Exercise: Form Request Validation Rules'
        },
        instructions: {
          th: 'เขียน Validation Rule ใน Laravel สำหรับฟิลด์ email ให้เป็น: บังคับกรอก (required), รูปแบบอีเมล (email), และห้ามซ้ำในตาราง employees (unique:employees)',
          en: 'Define Laravel validation rules for email: required, valid email format, and unique in employees table.'
        },
        starterCode: `'email' => 'เขียนกฎที่นี่',`,
        solutionCode: `'email' => 'required|email|unique:employees,email',`,
        language: 'php'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ชื่อคอลัมน์ใน $fillable ของ Model Employee',
          en: 'Omitting attributes from Eloquent model $fillable property'
        },
        why: {
          th: 'Laravel มีระบบป้องกัน Mass Assignment หากไม่ระบุ $fillable เมื่อเรียก Employee::create($request->all()) ข้อมูลจะไม่ถูกบันทึกและเกิด MassAssignmentException',
          en: 'Laravel safeguards against mass assignment vulnerabilities; unlisted fields will trigger MassAssignmentException.'
        },
        badCode: `class Employee extends Model {\n  // ❌ ลืมใส่ $fillable\n}`,
        goodCode: `class Employee extends Model {\n  protected $fillable = ['employee_code', 'first_name', 'last_name', 'department', 'position', 'email', 'status'];\n}`,
        solution: {
          th: 'ระบุชื่อคอลัมน์ทั้งหมดที่อนุญาตให้บันทึกผ่านฟอร์มใน protected $fillable เสมอ',
          en: 'Always declare permitted fields explicitly inside protected $fillable.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-crud-01-1',
        question: {
          th: 'เมื่อผู้ใช้กด Submit ฟอร์มใน Inertia React การส่งข้อมูลไปยัง Laravel ทำงานอย่างไร?',
          en: 'When a user submits an Inertia React form, how does transmission to Laravel occur?'
        },
        options: [
          { id: 'a', text: { th: 'Inertia useForm ส่งคำขอ XHR ในเบื้องหลัง รับค่า Error หรือ Redirect อัตโนมัติโดยไม่รีเฟรชหน้าเว็บ', en: 'Inertia useForm fires a seamless background XHR request, handling errors or redirects without refreshing the page' } },
          { id: 'b', text: { th: 'บันทึกลงในไดรฟ์ C ของผู้ใช้', en: 'Saves directly to user C: drive' } },
          { id: 'c', text: { th: 'ต้องส่งผ่านโปรแกรม FTP', en: 'Must be sent via an external FTP client' } },
          { id: 'd', text: { th: 'ต้องรออีเมลยืนยันก่อน', en: 'Requires an email verification first' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Inertia useForm() ส่งข้อมูลแบบ XHR ไปยัง Route ของ Laravel และอัปเดต Props/Errors ในหน้าจอ React ได้ทันที',
          en: 'Inertia useForm() triggers an XHR post, receives validation errors or redirect responses, and updates React states seamlessly.'
        }
      }
    ],
    summary: {
      th: [
        'ระบบ Employee CRUD รวมเอาความสามารถของ Laravel + React 19 + Inertia 3 ไว้อย่างสมบูรณ์',
        'Laravel ดูแล Database Migration, Eloquent Model, Validation และ Controller อย่างมั่นคง',
        'Inertia 3 ช่วยลดขั้นตอนการเขียน API และเชื่อม Props ส่งตรงถึง React Page ทันที',
        'คุณสามารถทดลองใช้งานระบบ Employee CRUD ตัวจริงได้ที่แท็บ Live Demo ด้านข้าง!'
      ],
      en: [
        'Employee CRUD showcases the full power of the Laravel + React 19 + Inertia 3 modern monolith.',
        'Laravel orchestrates database migrations, Eloquent models, validation rules, and controllers securely.',
        'Inertia 3 bridges controller queries directly into typed React component props.',
        'Interact with the live, working Employee CRUD system in the Live Demo panel!'
      ]
    }
  },

  'fullstack-01-laravel-vs-nestjs': {
    id: 'fullstack-01-laravel-vs-nestjs',
    trackId: 'fullstack',
    category: 'Architecture Comparison',
    level: 7,
    levelLabel: 'Level 7: System Strategy',
    durationMinutes: 20,
    title: {
      th: '01 เปรียบเทียบสถาปัตยกรรม: Laravel 11 vs NestJS',
      en: '01 Architectural Breakdown: Laravel 11 vs NestJS'
    },
    description: {
      th: 'วิเคราะห์เชิงลึก: เมื่อไหร่ควรเลือก Laravel Monolith และเมื่อไหร่ควรเลือก NestJS Microservices? ข้อดี ข้อจำกัด ประสิทธิภาพ และการทำงานร่วมกันในองค์กร',
      en: 'In-depth architectural comparison: When to choose Laravel modern monoliths versus NestJS microservices. Tradeoffs, throughput, and hybrid co-existence.'
    },
    objectives: {
      th: [
        'เปรียบเทียบจุดเด่นและจุดด้อยระหว่าง Laravel และ NestJS อย่างเป็นกลาง',
        'เข้าใจบริบทของงานที่เหมาะกับ Monolith SPA (Laravel+Inertia)',
        'เข้าใจบริบทของงานที่เหมาะกับ High-throughput API & WebSockets (NestJS)',
        'วางแผนสถาปัตยกรรมระดับ Enterprise ได้อย่างมั่นใจ'
      ],
      en: [
        'Objectively compare developer velocity and throughput between Laravel and NestJS',
        'Identify scenarios best suited for modern monoliths (Laravel + Inertia + React)',
        'Identify scenarios demanding NestJS (real-time WebSockets, streaming microservices)',
        'Architect hybrid enterprise topologies with clarity'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'การเปรียบเทียบนี้คือ "คู่มือการตัดสินใจเลือกเทคโนโลยี" ระหว่าง Laravel (PHP) ซึ่งเป็นสุดยอด Framework ด้านความเร็วในการสร้างระบบและ Ecosystem ที่ครบครัน กับ NestJS (TypeScript) ซึ่งเป็นสุดยอด Framework ด้าน Type-Safety และความเร็วในงาน Real-time/I-O Bound',
        en: 'A strategic architectural guide comparing Laravel (supreme developer velocity, batteries-included ecosystem) with NestJS (unified TypeScript typing, high-concurrency Node.js runtime).'
      },
      whyUseIt: {
        th: 'ป้องกันการเลือกเทคโนโลยีผิดตั้งแต่เริ่มต้น เช่น การเลือกทำ Microservices สำหรับโปรเจกต์ขนาดเล็กจนระบบซับซ้อนเกินไป หรือการฝืนใช้ระบบที่ไม่ถนัดงาน Real-time',
        en: 'Prevents costly architectural missteps such as premature microservice decomposition or choosing mismatched concurrency runtimes.'
      },
      whenToUse: {
        th: 'ใช้ในขั้นตอนวางแผนสถาปัตยกรรมระบบ (System Design Phase) ก่อนเริ่มพัฒนาโปรเจกต์',
        en: 'Essential during technical discovery, RFP evaluation, and architectural design phases.'
      },
      howItWorks: {
        th: 'ประเมินจาก 3 ปัจจัย: 1. ความเร็วในการออกสู่ตลาด (Time-to-Market), 2. ความถนัดของทีม (PHP vs TS), 3. ลักษณะงาน (CRUD ธุรกิจ vs สตรีมข้อมูล Real-time)',
        en: 'Evaluate based on time-to-market constraints, team language proficiency, and domain characteristics (business domain CRUD vs high-concurrency streaming).'
      }
    },
    diagram: {
      title: {
        th: 'ตารางเปรียบเทียบคุณสมบัติ Laravel vs NestJS',
        en: 'Laravel vs NestJS Strategic Matrix'
      },
      flow: [
        { title: 'Laravel 11 + Inertia', sub: 'สร้างไว, แบตเตอรี่ครบ, เหมาะกับ Backoffice/SaaS/CRM', color: 'rose' },
        { title: 'NestJS TypeScript', sub: 'Type ปลอดภัยทั่วระบบ, รองรับ WebSocket/Microservices ดีเยี่ยม', color: 'blue' },
        { title: 'Hybrid Architecture', sub: 'Laravel ทำ Core Web/CRUD + NestJS ทำ Real-time Gateway', color: 'emerald' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'เมื่อไหร่ควรเลือก Laravel 11?',
          en: 'When to Choose Laravel 11'
        },
        content: {
          th: 'เมื่อต้องการสร้างระบบที่เสร็จไว (High Productivity), มี Authentication, Queue, Mail, Database ORM ในตัว และใช้ Inertia เพื่อทำ Single-Page App โดยไม่ต้องเขียน REST API แยก',
          en: 'Choose Laravel for maximum developer velocity, integrated batteries (Auth, ORM, Queue, Storage), and rapid full-stack monolith delivery via Inertia.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เมื่อไหร่ควรเลือก NestJS?',
          en: 'When to Choose NestJS'
        },
        content: {
          th: 'เมื่อทีมต้องการเขียน TypeScript ทั้งหน้าบ้านและหลังบ้าน (End-to-End Type Safety), มีระบบ Real-time WebSockets ขนาดใหญ่ หรือต้องการแยกเป็น Microservices ขนาดย่อม',
          en: 'Choose NestJS for unified full-stack TypeScript type sharing, heavy WebSocket streaming, and distributed microservice clusters.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// Decision Matrix in TypeScript\ninterface ArchitectureChoice {\n  framework: "Laravel 11" | "NestJS" | "Hybrid";\n  rationale: string;\n}\n\nfunction recommendArchitecture(requirements: { needsWebSockets: boolean; needsRapidCRUD: boolean; sharedTypeScript: boolean }): ArchitectureChoice {\n  if (requirements.needsRapidCRUD && !requirements.needsWebSockets) {\n    return { framework: "Laravel 11", rationale: "Inertia Monolith มอบความเร็วในการสร้าง CRUD สูงสุด" };\n  }\n  if (requirements.sharedTypeScript && requirements.needsWebSockets) {\n    return { framework: "NestJS", rationale: "Node.js รองรับการเชื่อมต่อ Real-time Concurrency ได้อย่างดีเยี่ยม" };\n  }\n  return { framework: "Hybrid", rationale: "ใช้ Laravel สำหรับระบบหลังบ้าน และ NestJS สำหรับงานประมวลผลความเร็วสูง" };\n}\n',
      filename: 'architecture_decision.ts',
      mockOutput: 'Framework recommendation: Laravel 11 for Monolith or Hybrid for Scale'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'รีบแยก Microservices ตั้งแต่วันแรกทั้งที่มีทีมพัฒนาแค่ 2-3 คน',
          en: 'Prematurely splitting into microservices with a tiny engineering team'
        },
        why: {
          th: 'Microservices เพิ่มภาระการจัดการเครือข่าย Docker, Deployment และ Distributed Tracing สูงมาก การเริ่มต้นด้วย Modern Monolith ช่วยให้ส่งมอบงานได้เร็วกว่าหลายเท่า',
          en: 'Distributed architectures introduce massive network orchestration and monitoring overhead. Modern monoliths deliver faster initial traction.'
        },
        badCode: '// ❌ แยก 6 Repositories ตั้งแต่วันแรกสำหรับ MVP\nservice-auth, service-users, service-billing, service-orders...',
        goodCode: '// ✓ เริ่มต้นด้วย Monolith ที่มีระเบียบ (Laravel + React + Inertia) แล้วแยกเฉพาะ Service ที่จำเป็นในอนาคต\napp-monolith',
        solution: {
          th: 'เริ่มต้นด้วย Clean Modular Monolith เสมอ และแยกเฉพาะงานที่ต้องการทรัพยากรพิเศษออกมาเป็น Microservice ในภายหลัง',
          en: 'Begin with a well-structured modular monolith and extract dedicated microservices only when performance demands arise.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-fs-01-1',
        question: {
          th: 'ข้อได้เปรียบที่เด่นชัดที่สุดของการใช้ Laravel + Inertia 3 เมื่อเทียบกับสถาปัตยกรรมแยก Backend/Frontend ทั่วไปคืออะไร?',
          en: 'What is the most distinct advantage of Laravel + Inertia compared to decoupled REST architectures?'
        },
        options: [
          { id: 'a', text: { th: 'ส่งต่อข้อมูลจาก Controller สู่ React Props ได้ทันทีโดยไม่ต้องสร้าง REST API endpoints ซ้ำซ้อน', en: 'Injects server data straight into React props without redundant REST API endpoints' } },
          { id: 'b', text: { th: 'ไม่ต้องจ่ายค่าไฟคอมพิวเตอร์', en: 'Zero electrical consumption' } },
          { id: 'c', text: { th: 'ทำให้เว็บไซต์เล่นเกม 3D ได้ทันที', en: 'Native support for 3D game engines' } },
          { id: 'd', text: { th: 'ไม่จำเป็นต้องเขียนโค้ดแม้แต่บรรทัดเดียว', en: 'Zero lines of code required' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Inertia ทำหน้าที่เป็นสะพานเชื่อม ทำให้คุณได้รับประสบการณ์แบบ SPA โดยไม่ต้องเขียน REST API, Axios หรือจัดการ State การ Fetch ซ้ำซ้อน',
          en: 'Inertia removes the client API glue layer, delivering full SPA user experience without custom REST endpoint overhead.'
        }
      }
    ],
    summary: {
      th: [
        'ทั้ง Laravel และ NestJS เป็นเครื่องมือระดับโลกที่มีจุดเด่นเฉพาะตัว',
        'Laravel เหมาะกับเว็บแอปพลิเคชันธุรกิจที่ต้องการความเร็วและความสมบูรณ์แบบ',
        'NestJS เหมาะกับระบบ Real-time, I/O Concurrency และทีมที่เน้น TypeScript 100%'
      ],
      en: [
        'Both Laravel and NestJS represent world-class backend engineering standards.',
        'Laravel maximizes full-stack enterprise application velocity.',
        'NestJS excels in high-concurrency real-time networking and unified TypeScript topologies.'
      ]
    }
  },

  'fullstack-03-microservices-hybrid': {
    id: 'fullstack-03-microservices-hybrid',
    trackId: 'fullstack',
    category: 'Enterprise Integration',
    level: 9,
    levelLabel: 'Level 9: Hybrid Systems',
    durationMinutes: 24,
    title: {
      th: '03 สถาปัตยกรรมไฮบริด: Laravel Core + NestJS Real-time Gateway',
      en: '03 Enterprise Hybrid: Laravel Core & NestJS Real-time Engine'
    },
    description: {
      th: 'สร้างระบบไฮบริดระดับ Enterprise: ใช้ Laravel 11 สำหรับ Backoffice, ORM, Auth และ Inertia SPA ควบคู่กับ NestJS สำหรับ WebSockets, AI Integration และ Microservices ผ่าน Redis Pub/Sub',
      en: 'Architect enterprise hybrid systems: Laravel handling relational CRUD, auth, and Inertia SPA; NestJS powering WebSockets and AI ingestion bridged via Redis Pub/Sub.'
    },
    objectives: {
      th: [
        'ออกแบบสถาปัตยกรรมไฮบริดที่ผสานจุดเด่นของ Laravel และ NestJS เข้าด้วยกัน',
        'เชื่อมต่อสื่อสารระหว่างสองเซิร์ฟเวอร์ด้วย Redis Pub/Sub และ Message Queues',
        'แชร์ฐานข้อมูล PostgreSQL ระหว่างสองระบบอย่างปลอดภัย',
        'จัดการ Single Sign-On (SSO) ด้วย JWT ข้ามระบบ'
      ],
      en: [
        'Design hybrid architectures combining Laravel productivity with NestJS streaming',
        'Orchestrate cross-framework event streaming using Redis Pub/Sub and queues',
        'Safely share PostgreSQL databases across decoupled services',
        'Standardize stateless authentication using cross-framework JWT verification'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'สถาปัตยกรรมไฮบริด (Hybrid Architecture) คือ "การจับคู่ดรีมทีม": คุณใช้ Laravel + Inertia ทำหน้าบ้านและการจัดการข้อมูล (CRUD) เพราะทำได้เร็วมาก และใช้ NestJS ทำเฉพาะระบบแจ้งเตือน Real-time หรือ WebSockets โดยทั้งสองคุยกันผ่าน Redis',
        en: 'The hybrid architecture pairs Laravel (governing business domain workflows and Inertia views) with NestJS (running high-concurrency WebSockets and event streaming) synchronized via Redis.'
      },
      whyUseIt: {
        th: 'คุณจะได้ระบบที่พัฒนาเสร็จไวเหมือน Monolith แต่สามารถรองรับผู้ใช้งาน Real-time ได้นับแสนคนพร้อมกันเหมือน Microservices โดยไม่ต้องรื้อระบบเดิมทิ้ง',
        en: 'Achieves the rapid delivery of monoliths while scaling to hundreds of thousands of concurrent WebSocket subscribers.'
      },
      whenToUse: {
        th: 'ใช้ในระบบที่มีทั้งส่วนจัดการทั่วไป และส่วนที่ต้องการความเร็วสูง เช่น ระบบแชทองค์กร, แพลตฟอร์มเทรดหุ้น, หรือระบบแดชบอร์ดติดตาม GPS แบบสด',
        en: 'Ideal for applications combining complex backoffice management with real-time requirements (e.g. trading portals, live telemetry dashboards, chat).'
      },
      howItWorks: {
        th: 'Laravel บันทึกข้อมูลพนักงาน -> ยิง Event เข้า Redis -> NestJS ฟัง Redis แล้วบรอดแคสต์ WebSocket สู่หน้าจอ React ของทุกคนทันที',
        en: 'Laravel commits transaction -> Emits message to Redis channel -> NestJS consumes stream -> Broadcasts WebSockets directly to active client browsers.'
      }
    },
    diagram: {
      title: {
        th: 'แผนผังสถาปัตยกรรมไฮบริด Laravel + NestJS + Redis',
        en: 'Laravel & NestJS Hybrid Topologies'
      },
      flow: [
        { title: '1. Laravel Monolith', sub: 'Inertia SPA + Eloquent CRUD + DB Save', color: 'rose' },
        { title: '2. Redis Pub/Sub', sub: 'Laravel Publish "employee.created" event', color: 'emerald' },
        { title: '3. NestJS Gateway', sub: 'Subscribe event และส่ง WebSocket @WebSocketServer', color: 'blue' },
        { title: '4. React Client', sub: 'รับข้อมูล Real-time อัปเดตหน้าจอทันที (0ms)', color: 'purple' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'Laravel ส่ง Event เข้าสู่ Redis',
          en: 'Laravel Emits to Redis'
        },
        content: {
          th: 'ใน Laravel ใช้ Redis::publish("events", json_encode($payload)); หลังบันทึกข้อมูล',
          en: 'Inside Laravel actions, call Redis::publish("events", json_encode($payload)); after transactions.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'NestJS Gateway รับ Event และส่งต่อ WebSocket',
          en: 'NestJS WebSocket Broadcast'
        },
        content: {
          th: 'ใน NestJS ใช้ RedisIoAdapter ฟัง Event แล้วสั่ง this.server.emit("employeeUpdated", data)',
          en: 'In NestJS, consume Redis stream and broadcast via this.server.emit("employeeUpdated", data).'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// NestJS WebSocket Gateway listening to Redis events\nimport { WebSocketGateway, WebSocketServer, OnGatewayInit } from "@nestjs/websockets";\nimport { Server } from "socket.io";\nimport Redis from "ioredis";\n\n@WebSocketGateway({ cors: true })\nexport class EventsGateway implements OnGatewayInit {\n  @WebSocketServer()\n  server: Server;\n\n  afterInit() {\n    const subscriber = new Redis(process.env.REDIS_URL || "redis://localhost:6379");\n    subscriber.subscribe("employee_events", () => {\n      console.log("Listening to Laravel Redis events...");\n    });\n\n    subscriber.on("message", (channel, message) => {\n      const event = JSON.parse(message);\n      // บรอดแคสต์ข้อมูลสู่ทุกไคลเอนต์ที่เชื่อมต่อ WebSocket\n      this.server.emit("employee_broadcast", event);\n    });\n  }\n}\n',
      filename: 'src/gateways/events.gateway.ts',
      mockOutput: 'Hybrid WebSocket Gateway connected to Redis'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ให้ทั้ง Laravel และ NestJS แย่งกันรัน Migration ตารางเดียวกันในฐานข้อมูล',
          en: 'Allowing both Laravel and NestJS to simultaneously execute migrations on the same database'
        },
        why: {
          th: 'จะเกิดความขัดแย้งของ Schema (Schema Conflict) และตารางอาจล็อกหรือเสียหายได้ ในสถาปัตยกรรมไฮบริด ควรให้ฝั่งเดียวเป็นผู้ดูแล Schema หลัก (Single Source of Schema Truth)',
          en: 'Dual migration runners trigger race conditions and schema drift. Designate one service as the authoritative schema owner.'
        },
        badCode: '// ❌ ทั้งสองโปรเจกต์ต่างคนต่างรัน migration ตาราง employees\nLaravel: php artisan migrate\nNestJS: typeorm migration:run',
        goodCode: '// ✓ ถูกต้อง: ให้ Laravel ดูแล Migration และให้ NestJS เป็น Read/Event Service\nLaravel: ดูแล Schema 100%\nNestJS: ใช้ Model หรือ Prisma Schema ที่อ่านตารางร่วมกัน',
        solution: {
          th: 'กำหนดให้ Laravel เป็นผู้ดูแลการ Migration ตารางทั้งหมด และให้ NestJS เชื่อมต่อในฐานะผู้ใช้งาน',
          en: 'Enforce Laravel as the single authoritative database schema migrator.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-fs-03-1',
        question: {
          th: 'ในสถาปัตยกรรมไฮบริด เครื่องมือใดนิยมนำมาใช้เป็นตัวกลางสื่อสารแบบ Asynchronous Event ระหว่าง Laravel และ NestJS มากที่สุด?',
          en: 'In hybrid topologies, which utility is most commonly utilized for asynchronous event messaging?'
        },
        options: [
          { id: 'a', text: { th: 'Redis Pub/Sub หรือ Message Broker (RabbitMQ/Kafka)', en: 'Redis Pub/Sub or Message Brokers (RabbitMQ/Kafka)' } },
          { id: 'b', text: { th: 'การส่งไฟล์ผ่านแฟกซ์ (Fax)', en: 'Physical fax transmission' } },
          { id: 'c', text: { th: 'การบันทึกข้อความลงไฟล์ Notepad ในหน้าจอ Desktop', en: 'Writing notepad text files on desktop' } },
          { id: 'd', text: { th: 'การปิดเซิร์ฟเวอร์ทุก 5 นาที', en: 'Restarting servers every 5 minutes' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Redis Pub/Sub ทำงานในหน่วยความจำ (RAM) จึงส่งผ่านข้อความระหว่าง Laravel และ NestJS ได้ในระดับเสี้ยววินาที (Sub-millisecond)',
          en: 'Redis Pub/Sub operates in-memory, delivering sub-millisecond event propagation between heterogeneous systems.'
        }
      }
    ],
    summary: {
      th: [
        'สถาปัตยกรรมไฮบริดรวมพลังของ Laravel (ความเร็วในการพัฒนา) และ NestJS (ประสิทธิภาพ Real-time)',
        'ใช้ Redis Pub/Sub เป็นสะพานส่ง Event ระหว่างทั้งสองระบบ',
        'กำหนดให้เซิร์ฟเวอร์ตัวใดตัวหนึ่งเป็นผู้ดูแล Schema ฐานข้อมูลเพียงหนึ่งเดียว'
      ],
      en: [
        'Hybrid architectures unite Laravel developer velocity with NestJS real-time scale.',
        'Redis Pub/Sub forms the high-speed event backbone between services.',
        'Establish single-source database schema ownership to preserve relational integrity.'
      ]
    }
  },

  'db-01-sql-basics': {
    id: 'db-01-sql-basics',
    trackId: 'database',
    category: 'SQL & Modeling',
    level: 2,
    levelLabel: 'Level 2: Database Basics',
    durationMinutes: 20,
    title: {
      th: '01 พื้นฐานฐานข้อมูลเชิงสัมพันธ์และคำสั่ง SQL (Relational DB & SQL)',
      en: '01 Relational Database Foundations & Essential SQL'
    },
    description: {
      th: 'ปูรากฐานฐานข้อมูลเชิงสัมพันธ์: โครงสร้างตาราง (Tables, Rows, Columns), Primary Key, คำสั่ง SQL หลัก (SELECT, INSERT, UPDATE, DELETE), การกรองด้วย WHERE, และการจัดกลุ่มด้วย GROUP BY',
      en: 'Relational database fundamentals: Tables, rows, primary keys, core SQL CRUD (SELECT, INSERT, UPDATE, DELETE), filtering, and aggregations.'
    },
    objectives: {
      th: [
        'เข้าใจโครงสร้างของฐานข้อมูลเชิงสัมพันธ์ (RDBMS) เช่น PostgreSQL, MySQL',
        'เขียนคำสั่ง SELECT พร้อม WHERE, ORDER BY และ LIMIT ได้อย่างคล่องแคล่ว',
        'ใช้คำสั่ง INSERT, UPDATE และ DELETE อย่างปลอดภัยพร้อม WHERE clause',
        'ใช้ Aggregate Functions (COUNT, SUM, AVG) และ GROUP BY สรุปผลข้อมูล'
      ],
      en: [
        'Understand relational database architectures (PostgreSQL, MySQL)',
        'Construct queries with SELECT, WHERE, ORDER BY, and LIMIT',
        'Execute safe mutations using INSERT, UPDATE, and DELETE with required conditions',
        'Aggregate datasets using COUNT, SUM, AVG, and GROUP BY'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'ฐานข้อมูลเชิงสัมพันธ์ (Relational Database) คือ "สมุดจดบันทึกดิจิทัลที่มีตารางเชื่อมโยงกัน" และ SQL (Structured Query Language) คือภาษาที่มนุษย์ใช้สั่งการฐานข้อมูลนี้ เพื่อบันทึก ค้นหา แก้ไข และลบข้อมูล',
        en: 'A relational database organizes data into structured tables with relationships. SQL is the standardized domain language used to query and mutate this data.'
      },
      whyUseIt: {
        th: 'สามารถเก็บข้อมูลได้นับร้อยล้านแถวอย่างปลอดภัย มีระบบค้นหาที่เร็วระดับเสี้ยววินาทีด้วย Index และรับประกันว่าข้อมูลจะไม่หายหรือผิดพลาด (ACID Compliance)',
        en: 'Delivers ACID transactional durability, scales to millions of records, and executes index-accelerated queries in milliseconds.'
      },
      whenToUse: {
        th: 'ใช้ในทุกแอปพลิเคชันที่ต้องการเก็บบันทึกข้อมูลถาวร เช่น ข้อมูลผู้ใช้ ข้อมูลสินค้า และประวัติการเงิน',
        en: 'Foundational persistence layer for all enterprise data, user accounts, and transactional histories.'
      },
      howItWorks: {
        th: 'ส่งข้อความ SQL เข้าไปที่ Database Server -> Query Engine วิเคราะห์และใช้ Index ค้นหาข้อมูลบนดิสก์ -> ส่งผลลัพธ์เป็นตารางข้อมูล (Result Set) กลับมา',
        en: 'Database parses SQL string -> Query optimizer plans execution using indexes -> Fetches disk/memory pages -> Returns tabular result set.'
      }
    },
    diagram: {
      title: {
        th: 'โครงสร้างตารางและการ Query ใน SQL',
        en: 'SQL Query and Result Set Pipeline'
      },
      flow: [
        { title: '1. SQL Query', sub: 'SELECT * FROM employees WHERE status = "active"', color: 'blue' },
        { title: '2. Database Optimizer', sub: 'สแกน B-Tree Index บนคอลัมน์ status', color: 'purple' },
        { title: '3. Data Retrieval', sub: 'ดึงแถวข้อมูลที่ตรงเงื่อนไขจากดิสก์', color: 'emerald' },
        { title: '4. Tabular Result', sub: 'ส่ง Array ของแถวข้อมูลกลับให้ Backend', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'คำสั่ง SELECT และการกรองข้อมูล',
          en: 'SELECT & WHERE Filtering'
        },
        content: {
          th: "SELECT id, first_name, email FROM employees WHERE department = 'Engineering' ORDER BY salary DESC LIMIT 10;",
          en: "SELECT id, first_name, email FROM employees WHERE department = 'Engineering' ORDER BY salary DESC LIMIT 10;."
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'คำสั่ง UPDATE และ DELETE กฎเหล็กความปลอดภัย',
          en: 'Safe UPDATE and DELETE Operations'
        },
        content: {
          th: "ห้ามลืม WHERE เด็ดขาด! UPDATE employees SET status = 'resigned' WHERE id = 5;",
          en: "Never omit the WHERE clause! UPDATE employees SET status = 'resigned' WHERE id = 5;."
        }
      }
    ],
    primaryCode: {
      language: 'sql',
      code: '-- สรุปยอดเงินเดือนเฉลี่ยและจำนวนพนักงานแยกตามแผนก\nSELECT \n    department,\n    COUNT(*) AS total_employees,\n    AVG(salary) AS average_salary,\n    MAX(salary) AS highest_salary\nFROM employees\nWHERE status = \'active\'\nGROUP BY department\nHAVING COUNT(*) >= 2\nORDER BY average_salary DESC;\n',
      filename: 'queries/department_summary.sql',
      mockOutput: 'Engineering: 12 employees | Avg: $85,000 | Max: $120,000'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'รันคำสั่ง UPDATE หรือ DELETE โดยลืมใส่ WHERE clause',
          en: 'Executing UPDATE or DELETE queries without a WHERE clause'
        },
        why: {
          th: 'จะทำให้ข้อมูลทุกแถวในตารางถูกแก้ไขหรือถูกลบทิ้งทั้งหมดทั้งตารางทันที เป็นหายนะครั้งใหญ่ที่สุดของนักพัฒนา',
          en: 'Mutates or wipes out every single record in the entire database table irreversibly.'
        },
        badCode: "-- ❌ หายนะ: พนักงานทุกคนในบริษัทกลายเป็นสถานะ resigned ทันที!\nUPDATE employees SET status = 'resigned';",
        goodCode: "-- ✓ ปลอดภัย: ระบุ ID ชัดเจนเสมอ\nUPDATE employees SET status = 'resigned' WHERE id = 101;",
        solution: {
          th: 'ตรวจสอบเสมอว่ามี WHERE id = ? ก่อนกดรันคำสั่ง UPDATE/DELETE ทุกครั้ง',
          en: 'Always verify the existence of explicit WHERE constraints before executing mutations.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-db-01-1',
        question: {
          th: 'คำสั่ง SQL ใดใช้สำหรับจัดกลุ่มข้อมูลเพื่อหาผลรวมหรือค่าเฉลี่ยร่วมกับฟังก์ชัน COUNT() หรือ AVG()?',
          en: 'Which SQL clause groups rows to perform aggregations with COUNT() or AVG()?'
        },
        options: [
          { id: 'a', text: { th: 'GROUP BY', en: 'GROUP BY' } },
          { id: 'b', text: { th: 'ORDER BY', en: 'ORDER BY' } },
          { id: 'c', text: { th: 'JOIN WITH', en: 'JOIN WITH' } },
          { id: 'd', text: { th: 'SPLIT ON', en: 'SPLIT ON' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'GROUP BY ใช้จัดกลุ่มแถวที่มีค่าเหมือนกัน เพื่อนำไปคำนวณใน Aggregate Functions เช่น COUNT(), SUM(), AVG()',
          en: 'GROUP BY collapses rows with identical values into summary rows for aggregate computations.'
        }
      }
    ],
    summary: {
      th: [
        'ฐานข้อมูลเชิงสัมพันธ์จัดเก็บข้อมูลเป็นตารางที่มีโครงสร้างแน่นอน',
        'SQL คือภาษามาตรฐานสำหรับการสอบถามและจัดการข้อมูล',
        'ใส่ WHERE clause เสมอในการ UPDATE และ DELETE เพื่อป้องกันการทำลายข้อมูลทั้งตาราง'
      ],
      en: [
        'Relational databases provide structured, durable, tabular persistence.',
        'SQL is the universal language for querying and mutating relational data.',
        'Always enforce WHERE clauses on updates and deletes to protect table integrity.'
      ]
    }
  },

  'db-02-relationships-normalization': {
    id: 'db-02-relationships-normalization',
    trackId: 'database',
    category: 'Schema Design',
    level: 3,
    levelLabel: 'Level 3: Normalization',
    durationMinutes: 24,
    title: {
      th: '02 การออกแบบตาราง, Normalization & Foreign Keys',
      en: '02 Schema Normalization, Relational Modeling & Foreign Keys'
    },
    description: {
      th: 'ออกแบบฐานข้อมูลอย่างมืออาชีพ: หลักการทำ Normalization (1NF, 2NF, 3NF), การป้องกันข้อมูลซ้ำซ้อน, การเชื่อม Foreign Keys (FK), ON DELETE CASCADE, และการใช้ Index เร่งความเร็ว',
      en: 'Master relational schema architecture: Database normalization (1NF, 2NF, 3NF), eliminating redundancy, foreign key constraints, cascade deletes, and indexing strategies.'
    },
    objectives: {
      th: [
        'เข้าใจกฎการทำ Normalization รูปแบบ 1NF, 2NF และ 3NF',
        'ออกแบบความสัมพันธ์ 1:1, 1:N และ N:M (พร้อมตาราง Pivot)',
        'ใช้งาน Foreign Key Constraint เพื่อรักษาความสมบูรณ์ของข้อมูล (Referential Integrity)',
        'เข้าใจการทำงานของ Indexes (B-Tree) ในการเร่งความเร็วการค้นหา'
      ],
      en: [
        'Apply database normalization rules (1NF, 2NF, 3NF)',
        'Model 1:1, 1:Many, and Many:Many relationships with junction pivot tables',
        'Enforce referential integrity with foreign keys and cascade rules',
        'Optimize query access patterns using B-Tree database indexes'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Normalization คือ "การจัดระเบียบตารางข้อมูลไม่ให้มีข้อมูลซ้ำซ้อน" เช่น ไม่เก็บชื่อแผนกและเบอร์โทรแผนกซ้ำๆ ในทุกแถวของพนักงาน แต่แยกออกมาเป็นตาราง departments แล้วใช้ department_id เป็นสะพานเชื่อม',
        en: 'Normalization is the structured process of organizing database tables to eliminate redundant data and prevent data modification anomalies.'
      },
      whyUseIt: {
        th: 'หากไม่ทำ Normalization เมื่อแผนกเปลี่ยนชื่อ คุณต้องเขียนคำสั่งแก้ข้อมูลเป็นหมื่นแถวในตารางพนักงาน และหากลืมแก้แถวใดแถวหนึ่ง ข้อมูลจะขัดแย้งกันทันที',
        en: 'Eliminates update anomalies where modifying an entity requires thousands of redundant row updates, risking data corruption.'
      },
      whenToUse: {
        th: 'ใช้ในขั้นตอนออกแบบฐานข้อมูลก่อนเริ่มลงมือเขียนโค้ด',
        en: 'Crucial in the early database architecture and Entity Relationship (ER) design phase.'
      },
      howItWorks: {
        th: 'แยกข้อมูลที่ไม่ขึ้นกับ Primary Key ออกเป็นตารางย่อย -> เชื่อมด้วย Foreign Key (FK) -> ใส่ Index บนคอลัมน์ที่ถูกค้นหาบ่อยเพื่อให้ Database หาข้อมูลเจอในเสี้ยววินาที',
        en: 'Extract non-key dependencies into dedicated tables -> Link via foreign keys -> Apply B-Tree indexes on lookup attributes.'
      }
    },
    diagram: {
      title: {
        th: 'การเชื่อมโยงตารางผ่าน Foreign Key (1:Many)',
        en: 'One-to-Many Foreign Key Modeling'
      },
      flow: [
        { title: 'departments Table', sub: 'id (PK), name, budget', color: 'blue' },
        { title: 'Foreign Key Link', sub: 'employees.department_id -> departments.id', color: 'purple' },
        { title: 'employees Table', sub: 'id (PK), name, department_id (FK)', color: 'emerald' },
        { title: 'Referential Integrity', sub: 'ป้องกันการลบแผนกที่มีพนักงานอยู่ หรือ Cascade Delete', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'กฎ 3 ข้อของ Normalization (1NF, 2NF, 3NF)',
          en: '1NF, 2NF & 3NF Rules'
        },
        content: {
          th: '1NF: ข้อมูลในช่องต้องเป็นค่าเดี่ยว (Atomic), 2NF: ต้องไม่มี Partial Dependency, 3NF: ต้องไม่มี Transitive Dependency (ทุกฟิลด์ขึ้นกับ Primary Key เท่านั้น)',
          en: '1NF enforces atomic values, 2NF removes partial key dependencies, and 3NF eliminates transitive non-key dependencies.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'ความสัมพันธ์ Many-to-Many ด้วยตาราง Pivot',
          en: 'Many-to-Many Junction Table'
        },
        content: {
          th: 'สร้างตารางกลาง employee_skills ประกอบด้วย employee_id และ skill_id เป็น Foreign Key คู่กัน',
          en: 'Model many-to-many entities using a junction pivot table (e.g. employee_skills with employee_id and skill_id).'
        }
      }
    ],
    primaryCode: {
      language: 'sql',
      code: '-- โครงสร้างตารางที่ผ่าน Normalization 3NF เรียบร้อย\nCREATE TABLE departments (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL UNIQUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE employees (\n    id SERIAL PRIMARY KEY,\n    employee_code VARCHAR(20) NOT NULL UNIQUE,\n    first_name VARCHAR(100) NOT NULL,\n    department_id INTEGER NOT NULL REFERENCES departments(id) ON DELETE RESTRICT,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    salary NUMERIC(10, 2) NOT NULL DEFAULT 0.00\n);\n\n-- สร้าง Index เพื่อให้ค้นหาด้วย department_id เร็วขึ้น 100 เท่า\nCREATE INDEX idx_employees_department_id ON employees(department_id);\n',
      filename: 'schema/normalized_tables.sql',
      mockOutput: 'Tables created with referential integrity constraints'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'เก็บค่าหลายค่ารวมกันในช่องเดียวเป็นข้อความ Comma-Separated เช่น "PHP, React, Docker"',
          en: 'Storing comma-separated strings inside a single database column'
        },
        why: {
          th: 'ละเมิดกฎ First Normal Form (1NF) ทำให้ไม่สามารถใช้ Index ค้นหาได้ และการ Query ค้นหาพนักงานที่มีทักษะ "React" จะต้องสแกนข้อความทั้งตารางซึ่งช้ามาก',
          en: 'Violates 1NF, prevents index utilization, and necessitates inefficient full table scans using LIKE %pattern% queries.'
        },
        badCode: '// ❌ ผิดหลัก Normalization: เก็บ array รวมใน text column เดียว\nskills = "PHP,React,Docker"',
        goodCode: '// ✓ ถูกต้อง: สร้างตาราง skills และตารางกลาง employee_skills เชื่อมโยงด้วย Foreign Key\nCREATE TABLE employee_skills (\n    employee_id INT REFERENCES employees(id),\n    skill_id INT REFERENCES skills(id)\n);',
        solution: {
          th: 'แยกข้อมูลที่เป็นหลายค่าออกมาเป็นตารางความสัมพันธ์ Many-to-Many เสมอ',
          en: 'Decompose multi-valued attributes into normalized relational junction tables.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-db-02-1',
        question: {
          th: 'Foreign Key Constraint มีหน้าที่สำคัญที่สุดด้านใดในระบบฐานข้อมูล?',
          en: 'What is the primary objective of a Foreign Key constraint in relational databases?'
        },
        options: [
          { id: 'a', text: { th: 'รักษาความสมบูรณ์ของความสัมพันธ์ (Referential Integrity) ป้องกันการชี้ไปยัง ID ที่ไม่มีอยู่จริง', en: 'Enforces referential integrity, preventing orphaned records pointing to invalid IDs' } },
          { id: 'b', text: { th: 'บีบอัดขนาดไฟล์ฐานข้อมูลให้เล็กลง', en: 'Compresses file sizes on disk' } },
          { id: 'c', text: { th: 'แปลงภาษา SQL ให้เป็นภาษาอังกฤษ', en: 'Translates queries into English' } },
          { id: 'd', text: { th: 'ทำให้ไม่ต้องใส่รหัสผ่านเมื่อเข้าฐานข้อมูล', en: 'Disables root authentication' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Foreign Key ป้องกันไม่ให้มีการบันทึก department_id ที่ไม่มีอยู่จริงในตาราง departments เพื่อให้ข้อมูลมีความถูกต้องเสมอ',
          en: 'Foreign key constraints ensure that child rows cannot reference nonexistent parent records, safeguarding data integrity.'
        }
      }
    ],
    summary: {
      th: [
        'Normalization ช่วยขจัดความซ้ำซ้อนและป้องกันความผิดพลาดของข้อมูล',
        'ใช้ Foreign Keys เพื่อรับประกันความถูกต้องของข้อมูลระหว่างตาราง',
        'สร้าง Index บนคอลัมน์ Foreign Key เสมอเพื่อรักษาความเร็วในการ JOIN ข้อมูล'
      ],
      en: [
        'Normalization eliminates redundancy and guards against mutation anomalies.',
        'Foreign key constraints guarantee strict referential integrity across tables.',
        'Always index foreign key columns to ensure optimal JOIN performance.'
      ]
    }
  },

  'api-01-rest-fundamentals': {
    id: 'api-01-rest-fundamentals',
    trackId: 'api',
    category: 'API Standards',
    level: 2,
    levelLabel: 'Level 2: REST Standards',
    durationMinutes: 20,
    title: {
      th: '01 มาตรฐานและการออกแบบ REST API (REST Architectural Constraints)',
      en: '01 REST API Principles, Constraints & Resource Design'
    },
    description: {
      th: 'เข้าใจข้อกำหนด 6 ประการของ REST Architecture: Statelessness, Resource Naming (คำนาม พหูพจน์), Idempotency, และการจัดโครงสร้าง URL แบบมืออาชีพ',
      en: 'Master REST architectural constraints: Statelessness, noun-based resource URI naming conventions, idempotency, and professional API versioning.'
    },
    objectives: {
      th: [
        'เข้าใจข้อกำหนดหลักของ REST Architecture (Stateless, Client-Server, Cacheable)',
        'ตั้งชื่อ Endpoint ตามมาตรฐาน RESTful เช่น /api/v1/employees/123/contracts',
        'เข้าใจคุณสมบัติ Idempotency ของ HTTP Verbs (GET, PUT, DELETE)',
        'ออกแบบ Contract ของ REST API ให้ชัดเจนและคงทน'
      ],
      en: [
        'Understand foundational REST constraints (Stateless, Client-Server, Cacheable)',
        'Design semantic URI paths using plural nouns (e.g. /api/v1/employees/123/projects)',
        'Master the concept of HTTP idempotency across GET, PUT, and DELETE verbs',
        'Design backwards-compatible REST API contracts'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'REST (Representational State Transfer) คือ "กฎมาตรฐานสากลในการออกแบบเว็บ API" เพื่อให้โปรแกรมเมอร์ทั่วโลกสามารถเข้าใจและเชื่อมต่อระบบเข้าด้วยกันได้ทันทีโดยไม่ต้องอ่านคู่มือยาวเหยียด',
        en: 'REST is an architectural standard governing how networked systems communicate, using semantic HTTP verbs and URI paths representing resources.'
      },
      whyUseIt: {
        th: 'หากไม่มีมาตรฐาน นักพัฒนาคนหนึ่งอาจตั้งชื่อ /deleteUser คนหนึ่งตั้ง /user_remove คนหนึ่งใช้ GET คนหนึ่งใช้ POST ทำให้ระบบเละเทะและยากต่อการบำรุงรักษา',
        en: 'Prevents chaotic arbitrary endpoint naming (/deleteUser, /remove_usr), establishing predictable and uniform conventions.'
      },
      whenToUse: {
        th: 'ใช้ในการสร้าง API สาธารณะ (Public API) หรือ Mobile API สำหรับเชื่อมต่อ iOS, Android และ Single Page Apps',
        en: 'The industry standard for building public APIs, mobile backends, and microservice communication.'
      },
      howItWorks: {
        th: 'มองทุกอย่างเป็น "ทรัพยากร (Resource)" ที่เป็นคำนามพหูพจน์ เช่น /employees แล้วใช้กริยา HTTP บอกสิ่งที่จะทำ: GET ดึงข้อมูล, POST สร้าง, PUT แก้ไข, DELETE ลบ',
        en: 'Treats entities as plural resources (/employees). Applies HTTP verbs as actions: GET (fetch), POST (create), PUT (update), DELETE (destroy).'
      }
    },
    diagram: {
      title: {
        th: 'แบบแผนการตั้งชื่อ RESTful Resource',
        en: 'RESTful URI Naming Convention'
      },
      flow: [
        { title: 'GET /employees', sub: 'ดึงรายชื่อพนักงานทั้งหมด (Idempotent)', color: 'blue' },
        { title: 'POST /employees', sub: 'สร้างพนักงานใหม่ (Non-idempotent)', color: 'emerald' },
        { title: 'GET /employees/101', sub: 'ดึงข้อมูลเฉพาะพนักงานรหัส 101', color: 'purple' },
        { title: 'DELETE /employees/101', sub: 'ลบพนักงานรหัส 101 (Idempotent)', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'กฎข้อที่ 1: ใช้คำนามพหูพจน์ ห้ามใส่คำกริยาใน URL',
          en: 'Rule 1: Use Plural Nouns, Not Verbs'
        },
        content: {
          th: 'ห้ามใช้ /api/getEmployees หรือ /api/createEmployee ให้ใช้ GET /api/employees และ POST /api/employees แทน',
          en: 'Never put verbs in URIs (/api/createEmployee). Use POST /api/employees where the HTTP verb expresses the action.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'กฎข้อที่ 2: Idempotency ความปลอดภัยเมื่อยิงซ้ำ',
          en: 'Rule 2: Idempotency Principle'
        },
        content: {
          th: 'GET, PUT, DELETE ต้องเป็น Idempotent คือถ้ายิง 1 ครั้ง หรือยิง 10 ครั้ง ผลลัพธ์สุดท้ายในฐานข้อมูลต้องเท่ากันเสมอ',
          en: 'GET, PUT, and DELETE must be idempotent: executing the request multiple times produces identical state.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// Standard RESTful Endpoint Matrix\ninterface EndpointSpec {\n  method: "GET" | "POST" | "PUT" | "DELETE";\n  path: string;\n  description: string;\n}\n\nconst employeeApiContract: EndpointSpec[] = [\n  { method: "GET", path: "/api/v1/employees", description: "List employees with pagination" },\n  { method: "POST", path: "/api/v1/employees", description: "Create employee record" },\n  { method: "GET", path: "/api/v1/employees/:id", description: "Retrieve single employee" },\n  { method: "PUT", path: "/api/v1/employees/:id", description: "Update complete employee record" },\n  { method: "DELETE", path: "/api/v1/employees/:id", description: "Remove employee record" }\n];\n',
      filename: 'api_contract_spec.ts',
      mockOutput: 'RESTful API Specification complies with OpenAPI 3.0'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ใส่คำกริยาลงใน Path เช่น POST /api/delete-employee/15',
          en: 'Embedding action verbs inside the path URL'
        },
        why: {
          th: 'ขัดต่อหลักการของ REST ที่กำหนดว่า Path ต้องเป็นคำนามระบุทรัพยากร ส่วนการกระทำต้องใช้ HTTP Method เช่น DELETE /api/employees/15',
          en: 'Violates REST conventions where the URI defines the resource and HTTP verbs dictate the operation.'
        },
        badCode: '// ❌ ผิดมาตรฐาน REST\nPOST /api/deleteEmployee?id=15\nGET /api/saveUser',
        goodCode: '// ✓ ได้มาตรฐานระดับโลก\nDELETE /api/employees/15\nPOST /api/users',
        solution: {
          th: 'ใช้คำนามพหูพจน์สำหรับ Resource เสมอ และใช้ HTTP Method ระบุการกระทำ',
          en: 'Always use plural nouns for resources and convey actions via HTTP verbs.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-api-01-1',
        question: {
          th: 'ตามมาตรฐานสากลของ RESTful API การลบพนักงานรหัส 42 ควรออกแบบ Endpoint อย่างไร?',
          en: 'According to REST standards, how should the endpoint for deleting employee 42 be structured?'
        },
        options: [
          { id: 'a', text: { th: 'DELETE /api/employees/42', en: 'DELETE /api/employees/42' } },
          { id: 'b', text: { th: 'POST /api/deleteEmployee/42', en: 'POST /api/deleteEmployee/42' } },
          { id: 'c', text: { th: 'GET /api/employees?action=delete&id=42', en: 'GET /api/employees?action=delete&id=42' } },
          { id: 'd', text: { th: 'PUT /api/remove/42', en: 'PUT /api/remove/42' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'DELETE /api/employees/42 สื่อสารชัดเจนว่ากำลังกระทำกริยา DELETE บนทรัพยากร employees ตัวที่ 42 ตามมาตรฐาน REST',
          en: 'DELETE /api/employees/42 applies the DELETE verb to employee entity 42 under the plural employees resource.'
        }
      }
    ],
    summary: {
      th: [
        'REST คือแบบแผนสากลที่ทำให้ออกแบบ API ได้เป็นระเบียบและคาดเดาได้ง่าย',
        'ใช้คำนามพหูพจน์แทนทรัพยากร เช่น /employees, /orders',
        'ใช้ HTTP Verbs (GET, POST, PUT, DELETE) บ่งบอกกริยาที่จะกระทำ'
      ],
      en: [
        'REST provides universal conventions for predictable, scalable APIs.',
        'Use plural nouns representing resources (/employees, /orders).',
        'Rely on HTTP verbs to express desired operations unambiguously.'
      ]
    }
  },

  'api-02-status-codes-payloads': {
    id: 'api-02-status-codes-payloads',
    trackId: 'api',
    category: 'Response Design',
    level: 2,
    levelLabel: 'Level 2: API Responses',
    durationMinutes: 20,
    title: {
      th: '02 การออกแบบ Response Envelope และ HTTP Status Codes',
      en: '02 API Response Envelopes & HTTP Status Standards'
    },
    description: {
      th: 'ออกแบบโครงสร้าง JSON Response ระดับองค์กร: รูปแบบซองจดหมาย (Envelope: success, data, meta, error), การจัดการ Pagination, และการเลือกใช้ HTTP Status Codes (200, 201, 204, 400, 401, 403, 404, 422, 500) อย่างแม่นยำ',
      en: 'Enterprise API response design: Standard envelopes (success, data, meta, errors), pagination metadata, and authoritative HTTP status code selection.'
    },
    objectives: {
      th: [
        'ออกแบบ Response JSON ที่มีโครงสร้างแน่นอนสม่ำเสมอทั้งระบบ (Envelope Pattern)',
        'เลือกใช้ HTTP Status Code ได้อย่างแม่นยำตามสถานการณ์',
        'แยกความแตกต่างระหว่าง 401 Unauthorized และ 403 Forbidden',
        'จัดรูปแบบ Error Dictionary สำหรับส่งให้หน้าบ้านแสดงผลได้ทันที'
      ],
      en: [
        'Standardize consistent JSON envelopes across all endpoints (data, meta, error)',
        'Select authoritative HTTP status codes matching specific conditions',
        'Distinguish between 401 Unauthorized (unauthenticated) and 403 Forbidden (unauthorized)',
        'Structure field-level validation error payloads for seamless frontend parsing'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Response Envelope คือ "รูปแบบซองจดหมายมาตรฐาน" ที่ API ทุกตัวในระบบตอบกลับ เช่น มีช่อง data สำหรับข้อมูลจริง, ช่อง meta สำหรับเลขหน้า Pagination, และช่อง error สำหรับข้อความแจ้งเตือนเมื่อเกิดปัญหา',
        en: 'A response envelope standardizes API output formats across an organization into consistent wrappers containing data, metadata, and error objects.'
      },
      whyUseIt: {
        th: 'ทำให้ทีม Frontend (เช่น React หรือ Mobile) เขียนโค้ดดักจับและแสดงผลได้ง่ายมาก ไม่ต้องเขียนโค้ดแยกตามแต่ละ Endpoint ที่ตอบกลับมาคนละแบบ',
        en: 'Allows client applications to implement standardized interceptors for data unpacking, pagination, and error toast alerts.'
      },
      whenToUse: {
        th: 'ใช้ใน REST API ระดับองค์กรและระบบ Microservices ทั้งหมด',
        en: 'Essential across production API engineering and enterprise integrations.'
      },
      howItWorks: {
        th: 'เมื่อสำเร็จ ส่ง HTTP 200/201 พร้อม { "success": true, "data": {...} } -> เมื่อข้อมูลผิด ส่ง HTTP 422 พร้อม { "success": false, "errors": { "email": ["รูปแบบไม่ถูกต้อง"] } }',
        en: 'Success returns 200/201 with { success: true, data } -> Validation faults return 422 with { success: false, errors: { field: [messages] } }.'
      }
    },
    diagram: {
      title: {
        th: 'โครงสร้าง Envelope มาตรฐานสำหรับ Success และ Error',
        en: 'Standard Success & Error Envelope Structure'
      },
      flow: [
        { title: '✓ 200 OK / 201 Created', sub: '{ "success": true, "data": [...], "meta": { "page": 1 } }', color: 'emerald' },
        { title: '❌ 422 Unprocessable', sub: '{ "success": false, "errors": { "email": ["Invalid email"] } }', color: 'rose' },
        { title: '🔒 401 vs 403', sub: '401: ยังไม่ล็อกอิน / 403: ล็อกอินแล้วแต่ไม่มีสิทธิ์เปิดหน้านี้', color: 'purple' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'โครงสร้าง JSON Envelope ที่ดี',
          en: 'Consistent Envelope Schema'
        },
        content: {
          th: 'กำหนดคีย์หลักเสมอ: success (boolean), data (T), meta (pagination/timestamp), error (code & message)',
          en: 'Always standardize top-level keys: success (boolean), data (payload), meta (paging), and error.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'HTTP Status Code กลุ่มสำคัญ',
          en: 'Critical Status Codes'
        },
        content: {
          th: '200 (สำเร็จ), 201 (สร้างใหม่สำเร็จ), 204 (ลบสำเร็จไม่มีเนื้อหา), 400 (Bad Request), 401 (ยังไม่ล็อกอิน), 403 (ไม่มีสิทธิ์), 404 (ไม่พบ), 422 (ข้อมูลไม่ผ่านเกณฑ์), 500 (เซิร์ฟเวอร์พัง)',
          en: '200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity, 500 Server Error.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// Production TypeScript API Response Envelope\nexport interface ApiResponse<T> {\n  success: boolean;\n  data: T | null;\n  meta?: {\n    page: number;\n    per_page: number;\n    total: number;\n  };\n  errors?: Record<string, string[]>;\n}\n\n// ตัวอย่าง Error Response เมื่อ Validation ล้มเหลว\nconst validationErrorResponse: ApiResponse<null> = {\n  success: false,\n  data: null,\n  errors: {\n    email: ["อีเมลนี้ถูกใช้งานแล้วในระบบ"],\n    salary: ["เงินเดือนต้องมากกว่าหรือเท่ากับ 0"]\n  }\n};\n',
      filename: 'api_response_envelope.ts',
      mockOutput: 'Standardized Envelope Contract'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ตอบกลับ HTTP Status 200 OK แต่ข้างในส่ง { "error": "User not found" }',
          en: 'Emitting HTTP 200 OK with an error payload { error: "User not found" }'
        },
        why: {
          th: 'การทำแบบนี้เรียกว่า "Fake 200" ทำให้ไลบรารีอย่าง Axios, React Query หรือ API Gateway เข้าใจว่าคำขอสำเร็จและไม่สามารถใช้บล็อก catch() ได้',
          en: 'Known as the anti-pattern "200 OK with Error". Breaks client HTTP interceptors, monitoring alerts, and fetch error handlers.'
        },
        badCode: '// ❌ ห้ามทำเด็ดขาด: ตอบ 200 แต่เป็น Error\nHTTP/1.1 200 OK\n{ "status": "failed", "message": "Unauthorized" }',
        goodCode: '// ✓ ถูกต้อง: ใช้ Status Code ที่แท้จริงเสมอ\nHTTP/1.1 401 Unauthorized\n{ "success": false, "message": "Authentication required" }',
        solution: {
          th: 'ใช้ HTTP Status Codes (4xx, 5xx) ที่ถูกต้องเสมอเมื่อเกิดข้อผิดพลาด',
          en: 'Always pair response payloads with authoritative HTTP status headers.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-api-02-1',
        question: {
          th: 'ผู้ใช้ล็อกอินเข้าระบบแล้ว แต่พยายามกดลบข้อมูลแผนกที่เป็นของผู้ดูแลระบบ (Admin) เซิร์ฟเวอร์ควรตอบกลับด้วย HTTP Status Code ใด?',
          en: 'An authenticated non-admin user attempts to delete an administrative entity. What HTTP status code should be returned?'
        },
        options: [
          { id: 'a', text: { th: '403 Forbidden (รู้ว่าคุณคือใคร แต่คุณไม่มีสิทธิ์ทำงานนี้)', en: '403 Forbidden (Identity confirmed, but user lacks authorization)' } },
          { id: 'b', text: { th: '401 Unauthorized', en: '401 Unauthorized' } },
          { id: 'c', text: { th: '200 OK', en: '200 OK' } },
          { id: 'd', text: { th: '500 Internal Error', en: '500 Internal Error' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: '401 ใช้เมื่อยังไม่ได้ยืนยันตัวตน (ยังไม่ล็อกอิน) ส่วน 403 ใช้เมื่อล็อกอินแล้วแต่ไม่มีสิทธิ์เข้าถึง (Forbidden)',
          en: '401 denotes lack of authentication, while 403 signals that an authenticated identity lacks required authorization permissions.'
        }
      }
    ],
    summary: {
      th: [
        'Response Envelope ช่วยให้ API มีโครงสร้างสม่ำเสมอและจัดการง่ายในฝั่งหน้าบ้าน',
        'ใช้ HTTP Status Codes จริงเสมอ ห้ามตอบ 200 OK เมื่อเกิดข้อผิดพลาด',
        '401 = ยังไม่ล็อกอิน, 403 = ล็อกอินแล้วแต่ไม่มีสิทธิ์, 422 = ข้อมูลไม่ผ่านเกณฑ์'
      ],
      en: [
        'Response envelopes maintain predictable data contracts across all endpoints.',
        'Never return HTTP 200 for error outcomes.',
        '401 signals unauthenticated, 403 signals unauthorized, and 422 signals validation faults.'
      ]
    }
  },

  'security-01-auth-vs-authz': {
    id: 'security-01-auth-vs-authz',
    trackId: 'security',
    category: 'Security Fundamentals',
    level: 3,
    levelLabel: 'Level 3: Security',
    durationMinutes: 22,
    title: {
      th: '01 การยืนยันตัวตน (Authentication) vs การตรวจสอบสิทธิ์ (Authorization)',
      en: '01 Authentication vs Authorization & Security Principles'
    },
    description: {
      th: 'เจาะลึก 2 เสาหลักแห่งความปลอดภัย: Authentication ("คุณคือใคร") vs Authorization ("คุณทำอะไรได้บ้าง"), กลไก Session Cookie vs JWT Token, และทดลองในระบบ Permission Matrix Simulator',
      en: 'Master security fundamentals: Authentication (identity verification) vs Authorization (access control), stateful sessions vs stateless JWT tokens, and the interactive Permission Matrix Simulator.'
    },
    objectives: {
      th: [
        'แยกความแตกต่างระหว่าง Authentication (AuthN) และ Authorization (AuthZ) ได้อย่างแม่นยำ',
        'เข้าใจข้อดีและข้อจำกัดของ Session-based Auth vs Token-based Auth (JWT)',
        'ป้องกันช่องโหว่ความปลอดภัยพื้นฐาน: CSRF, XSS และ Credential Stuffing',
        'ทดลองสลับ Role (Admin, Manager, Employee) ใน Permission Matrix Simulator'
      ],
      en: [
        'Differentiate clearly between Authentication (AuthN) and Authorization (AuthZ)',
        'Compare stateful session cookies against stateless JWT tokens',
        'Guard against OWASP vulnerabilities: CSRF, XSS, and broken access controls',
        'Simulate multi-role permissions interactively in the embedded matrix tool'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Authentication คือ "การตรวจบัตรประชาชนว่าคุณคือใคร" (เช่น ป้อนอีเมลและรหัสผ่านถูกต้อง) ส่วน Authorization คือ "การตรวจตั๋วว่าคุณมีสิทธิ์เข้าห้อง VIP หรือไม่" (เช่น เป็น Admin ถึงจะกดลบพนักงานได้)',
        en: 'Authentication verifies identity ("Who are you?"). Authorization evaluates access rights ("What permissions do you hold?").'
      },
      whyUseIt: {
        th: 'หากไม่แยกแยะเรื่องนี้ให้ชัดเจน ระบบอาจปล่อยให้พนักงานทั่วไปแอบดูเงินเดือนของเพื่อนร่วมงาน หรือแอบเปลี่ยนรหัสผ่านของผู้บริหารได้',
        en: 'Prevents broken object-level authorization vulnerabilities, stopping regular users from accessing privileged data or executive actions.'
      },
      whenToUse: {
        th: 'ในทุกระบบที่มีผู้ใช้งานมากกว่า 1 คน หรือมีข้อมูลส่วนบุคคลที่ต้องปกป้อง',
        en: 'Mandatory standard for all multi-tenant, role-based, and sensitive web applications.'
      },
      howItWorks: {
        th: 'ผู้ใช้ล็อกอิน (Authentication สำเร็จ) -> ระบบสร้าง Session หรือ JWT ที่มี Role -> เมื่อกดเปิดหน้าระบบจะตรวจสิทธิ์ (Authorization) หาก Role ตรง ถึงจะเปิดให้ดูข้อมูล',
        en: 'User authenticates with credentials -> Server issues session cookie or signed JWT containing roles -> Authorization guard verifies permissions on each subsequent request.'
      }
    },
    diagram: {
      title: {
        th: 'เปรียบเทียบ Authentication vs Authorization',
        en: 'AuthN vs AuthZ Workflow'
      },
      flow: [
        { title: '1. Authentication (AuthN)', sub: 'ผู้ใช้ส่ง Email + Password -> เซิร์ฟเวอร์ยืนยันตัวตนสำเร็จ', color: 'blue' },
        { title: '2. Identity Context', sub: 'แนบ Role: "Manager", Permissions: ["employee:view"]', color: 'purple' },
        { title: '3. Authorization (AuthZ)', sub: 'ตรวจสิทธิ์เมื่อพยายามกดปุ่ม "ลบพนักงาน" (ต้องการสิทธิ์ admin)', color: 'emerald' },
        { title: '4. Decision / 403', sub: 'สิทธิ์ไม่พอ! เซิร์ฟเวอร์ตอบกลับ 403 Forbidden ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'Authentication: ยืนยันตัวตน',
          en: 'Authentication: Who Are You?'
        },
        content: {
          th: 'ตรวจสอบรหัสผ่านด้วย Hash ที่ปลอดภัย เช่น bcrypt หรือ argon2 ห้ามเก็บรหัสผ่านเป็นตัวหนังสือธรรมดาเด็ดขาด',
          en: 'Verify credentials using secure hashing algorithms (bcrypt or argon2id). Never store raw plaintext passwords.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'Authorization: ตรวจสอบสิทธิ์',
          en: 'Authorization: What Can You Do?'
        },
        content: {
          th: 'ใช้ Policy หรือ Guard ตรวจสอบว่าผู้ใช้มี Role หรือ Permission ตรงกับที่ระเบียบกำหนดหรือไม่',
          en: 'Enforce policies or guards verifying whether active user holds required roles or permission bits.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// RBAC Permission Evaluator\nexport type Role = "admin" | "manager" | "employee";\nexport type Permission = "employee:read" | "employee:create" | "employee:update" | "employee:delete";\n\nconst ROLE_PERMISSIONS: Record<Role, Permission[]> = {\n  admin: ["employee:read", "employee:create", "employee:update", "employee:delete"],\n  manager: ["employee:read", "employee:create", "employee:update"],\n  employee: ["employee:read"]\n};\n\nexport function hasPermission(role: Role, required: Permission): boolean {\n  return ROLE_PERMISSIONS[role]?.includes(required) ?? false;\n}\n',
      filename: 'security/permission_evaluator.ts',
      mockOutput: 'Admin: 4 permissions | Manager: 3 | Employee: 1'
    },
    demoType: 'permission-matrix',
    commonMistakes: [
      {
        mistake: {
          th: 'ซ่อนแค่ปุ่มกดในหน้าจอ React แต่ไม่ได้ใส่ตัวตรวจสอบสิทธิ์ (Authorization) ไว้ที่เซิร์ฟเวอร์หลังบ้าน',
          en: 'Hiding buttons in React UI without enforcing authorization checks on backend endpoints'
        },
        why: {
          th: 'ผู้ใช้งานสามารถเปิดแท็บ Console หรือใช้โปรแกรมอย่าง Postman ยิงคำขอ DELETE ไปที่เซิร์ฟเวอร์ได้โดยตรง หากหลังบ้านไม่ตรวจสิทธิ์ ข้อมูลจะถูกลบทันที',
          en: 'Malicious actors can fire direct HTTP requests via curl or Postman, bypassing UI visibility and executing unauthorized actions.'
        },
        badCode: '// ❌ พึ่งพาแค่ UI: หลังบ้านไม่มีการตรวจสิทธิ์\npublic function destroy($id) {\n  Employee::destroy($id); // ใครยิงเข้ามาก็ลบได้!\n}',
        goodCode: '// ✓ ถูกต้อง: ตรวจสิทธิ์ระดับเซิร์ฟเวอร์เสมอ\npublic function destroy($id) {\n  $this->authorize("delete", Employee::class);\n  Employee::destroy($id);\n}',
        solution: {
          th: 'บังคับตรวจสิทธิ์ที่ Controller หรือ Guard ของฝั่งหลังบ้านเสมอ ห้ามพึ่งพาแค่การซ่อนปุ่มใน UI',
          en: 'Always enforce authorization guards on the server-side API handler.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-sec-01-1',
        question: {
          th: 'ข้อใดอธิบายความแตกต่างระหว่าง Authentication และ Authorization ได้ถูกต้องที่สุด?',
          en: 'Which statement accurately describes the difference between Authentication and Authorization?'
        },
        options: [
          { id: 'a', text: { th: 'Authentication ตรวจสอบว่า "คุณคือใคร" ส่วน Authorization ตรวจสอบว่า "คุณมีสิทธิ์ทำอะไร"', en: 'Authentication verifies "Who are you?", while Authorization verifies "What are you permitted to do?"' } },
          { id: 'b', text: { th: 'ทั้งสองคำมีความหมายเหมือนกันทุกประการ', en: 'Both terms are completely synonymous' } },
          { id: 'c', text: { th: 'Authentication ใช้กับหน้าจอ React ส่วน Authorization ใช้กับเครื่องพิมพ์เอกสาร', en: 'Authentication is for React while Authorization is for printers' } },
          { id: 'd', text: { th: 'Authorization ตรวจสอบรหัสผ่าน ส่วน Authentication ตรวจสอบเงินในบัญชี', en: 'Authorization checks passwords and Authentication checks bank balances' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Authentication คือการยืนยันตัวตน (เช่น ตรวจ Login) และ Authorization คือการตรวจสิทธิ์ในการกระทำหรือเข้าถึง Resource',
          en: 'Authentication establishes identity context; Authorization enforces permissions based on that context.'
        }
      }
    ],
    summary: {
      th: [
        'Authentication = การยืนยันตัวตน ("คุณคือใคร")',
        'Authorization = การตรวจสอบสิทธิ์การเข้าถึง ("คุณทำอะไรได้บ้าง")',
        'ทดลองสลับ Role และดูผลลัพธ์สิทธิ์ได้ใน Permission Matrix Simulator ด้านข้าง!'
      ],
      en: [
        'Authentication establishes verified user identity.',
        'Authorization enforces access permissions based on roles and policies.',
        'Experiment with roles and permission matrix evaluations in the adjacent simulator!'
      ]
    }
  },

  'security-02-rbac-matrix-sanctum': {
    id: 'security-02-rbac-matrix-sanctum',
    trackId: 'security',
    category: 'Access Control',
    level: 3,
    levelLabel: 'Level 3: RBAC & Tokens',
    durationMinutes: 24,
    title: {
      th: '02 การทำ RBAC (Role-Based Access Control) & Laravel Sanctum',
      en: '02 Role-Based Access Control (RBAC) & Laravel Sanctum'
    },
    description: {
      th: 'สร้างระบบบริหารสิทธิ์ระดับ Enterprise: ตาราง Roles และ Permissions, Laravel Policies, Gate, และการออก API Token แบบกำหนดสิทธิ์ (Abilities) ด้วย Laravel Sanctum',
      en: 'Enterprise access control: RBAC schemas, Laravel Gates & Policies, and issuing scoped API tokens with specific abilities using Laravel Sanctum.'
    },
    objectives: {
      th: [
        'ออกแบบโครงสร้างฐานข้อมูลสำหรับ Role-Based Access Control (RBAC)',
        'ใช้งาน Laravel Gate และ Policy สำหรับควบคุมสิทธิ์ใน Controller และ Blade/Inertia',
        'ออก API Tokens ด้วย Laravel Sanctum พร้อมกำหนด Token Abilities',
        'ตรวจสอบสิทธิ์ใน React ผ่าน usePage().props.auth.can'
      ],
      en: [
        'Architect relational database schemas for Role-Based Access Control (RBAC)',
        'Implement Laravel Gates and Model Policies in controllers and views',
        'Issue scoped API personal access tokens using Laravel Sanctum abilities',
        'Verify permissions reactively in React via usePage().props.auth.can'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'RBAC (Role-Based Access Control) คือ "ระบบกำหนดสิทธิ์ตามตำแหน่งงาน" เช่น กำหนดว่า Admin ทำได้ทุกอย่าง, Manager ทำได้เฉพาะอนุมัติ, และ Employee ดูได้เฉพาะข้อมูลของตัวเอง และ Sanctum คือระบบออกบัตรผ่าน Token ของ Laravel',
        en: 'RBAC assigns permissions to defined roles rather than individual users. Laravel Sanctum is a featherweight authentication system for SPAs and API tokens.'
      },
      whyUseIt: {
        th: 'เมื่อบริษัทมีพนักงาน 1,000 คน คุณไม่สามารถมานั่งกำหนดสิทธิ์ทีละคนได้ การผูกสิทธิ์ไว้ที่ตำแหน่ง (Role) ช่วยให้จัดการได้ง่ายและเป็นระบบ',
        en: 'Prevents managing permissions on an individual basis across thousands of employees, providing scalable group administration.'
      },
      whenToUse: {
        th: 'ใช้ในระบบธุรกิจ, ERP, CRM และระบบ SaaS แบบ Multi-tenant',
        en: 'Standard model across enterprise portals, SaaS platforms, and departmental workflows.'
      },
      howItWorks: {
        th: 'สร้าง Policy ใน Laravel -> ตรวจสอบ $this->authorize("update", $employee) ใน Controller -> หากผ่าน ให้บันทึกข้อมูล / หากไม่ผ่าน โยน 403 Forbidden',
        en: 'Generate Policy -> Check $this->authorize("update", $employee) in action handler -> Proceeds if policy returns true, else triggers 403 Forbidden.'
      }
    },
    diagram: {
      title: {
        th: 'กระบวนการตรวจสอบสิทธิ์ด้วย Laravel Policy และ Sanctum',
        en: 'Laravel Sanctum & Policy Enforcement Flow'
      },
      flow: [
        { title: '1. User Request', sub: 'Bearer Token หรือ Inertia Session', color: 'blue' },
        { title: '2. Sanctum Auth', sub: 'ยืนยันตัวตนและตรวจสอบ Token Abilities', color: 'purple' },
        { title: '3. EmployeePolicy', sub: 'ตรวจสิทธิ์ update($user, $employee)', color: 'emerald' },
        { title: '4. Decision', sub: 'อนุญาตบันทึก หรือส่ง 403 Forbidden', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Policy ด้วย Artisan',
          en: 'Scaffold Policy via Artisan'
        },
        content: {
          th: 'php artisan make:policy EmployeePolicy --model=Employee จะได้ไฟล์ใน app/Policies/',
          en: 'Run php artisan make:policy EmployeePolicy --model=Employee to scaffold policy methods.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียนตรรกะใน Policy และตรวจสิทธิ์ใน Controller',
          en: 'Define Policy Logic & Authorize'
        },
        content: {
          th: 'ใน update() ตรวจสอบ $user->role === "admin" || $user->id === $employee->user_id',
          en: 'Inside update(), check $user->role === "admin" || $user->id === $employee->user_id.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Policies;\n\nuse App\\Models\\User;\nuse App\\Models\\Employee;\n\nclass EmployeePolicy\n{\n    // Admin ทำได้ทุกอย่าง\n    public function before(User $user, string $ability): ?bool\n    {\n        if ($user->role === "admin") {\n            return true;\n        }\n        return null;\n    }\n\n    public function update(User $user, Employee $employee): bool\n    {\n        // Manager แก้ไขพนักงานในแผนกตัวเองได้\n        return $user->role === "manager" && $user->department === $employee->department;\n    }\n\n    public function delete(User $user, Employee $employee): bool\n    {\n        return false; // เฉพาะ Admin เท่านั้นที่ลบได้ (ผ่าน before)\n    }\n}\n',
      filename: 'app/Policies/EmployeePolicy.php',
      mockOutput: 'EmployeePolicy registered in AuthServiceProvider'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'เขียน if ($user->role === "admin") กระจายอยู่ใน Controller ทุกตัว แทนที่จะใช้ Laravel Policy',
          en: 'Scattering manual if ($user->role === "admin") checks across dozens of controller actions'
        },
        why: {
          th: 'เมื่อกฎการให้สิทธิ์เปลี่ยนแปลง (เช่น อนุญาตให้ Super Manager ทำได้ด้วย) จะต้องตามแก้โค้ดหลายสิบไฟล์และเสี่ยงต่อการหลุดลืม',
          en: 'Scattered role checks create maintenance nightmares when permissions evolve. Centralizing into Policies guarantees consistency.'
        },
        badCode: '// ❌ โค้ดกระจายตัว ยากต่อการบำรุงรักษา\nif ($user->role !== "admin") abort(403);',
        goodCode: '// ✓ รวมศูนย์ที่เดียวใน Policy: อ่านง่ายและทดสอบได้\n$this->authorize("update", $employee);',
        solution: {
          th: 'สร้างและใช้งาน Laravel Policies เสมอสำหรับจัดการสิทธิ์ของแต่ละ Model',
          en: 'Always encapsulate entity permissions within dedicated Model Policies.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-sec-02-1',
        question: {
          th: 'เมธอด before() ใน Laravel Policy มีหน้าที่อำนวยความสะดวกอย่างไร?',
          en: 'What is the purpose of the before() method in a Laravel Policy class?'
        },
        options: [
          { id: 'a', text: { th: 'ให้สิทธิ์พิเศษผ่านล่วงหน้า (เช่น Super Admin) ก่อนที่จะไปตรวจเช็คเมธอดอื่นๆ', en: 'Grants blanket authorization bypass (e.g. for Super Admins) before evaluating specific methods' } },
          { id: 'b', text: { th: 'รีสตาร์ทฐานข้อมูลก่อนเริ่มรันโค้ด', en: 'Restarts the database engine' } },
          { id: 'c', text: { th: 'เปลี่ยนรหัสผ่านของผู้ใช้เป็นค่าว่าง', en: 'Clears the user password' } },
          { id: 'd', text: { th: 'ปิดหน้าจอคอมพิวเตอร์', en: 'Turns off monitor displays' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'before() จะถูกเรียกเป็นตัวแรก หากคืนค่า true ระบบจะอนุญาตทันทีโดยไม่ต้องตรวจเมธอดอื่น เหมาะสำหรับสิทธิ์ Super Admin',
          en: 'before() executes first; returning true grants immediate authorization without evaluating remaining policy methods.'
        }
      }
    ],
    summary: {
      th: [
        'RBAC ช่วยให้จัดการสิทธิ์ผู้ใช้งานองค์กรได้อย่างเป็นระบบและปลอดภัย',
        'Laravel Policies รวมศูนย์ตรรกะการตรวจสอบสิทธิ์ไว้ที่เดียว',
        'Laravel Sanctum มอบระบบ Token Authentication ที่เบาและปลอดภัยสำหรับ SPA และ API'
      ],
      en: [
        'RBAC scales organizational security policies reliably.',
        'Laravel Policies centralize domain authorization logic cleanly.',
        'Laravel Sanctum provides lightweight, robust token authentication for modern frontends.'
      ]
    }
  },

  'testing-01-unit-vs-feature': {
    id: 'testing-01-unit-vs-feature',
    trackId: 'testing',
    category: 'Testing Strategy',
    level: 4,
    levelLabel: 'Level 4: QA Strategy',
    durationMinutes: 20,
    title: {
      th: '01 กลยุทธ์การทดสอบอัตโนมัติ: Unit Tests vs Feature Tests',
      en: '01 Automated Testing Strategies: Unit vs Feature Tests'
    },
    description: {
      th: 'สร้างความมั่นใจในโค้ดด้วย Automated Testing: ปิรามิดการทดสอบ (Testing Pyramid), ความแตกต่างระหว่าง Unit Test และ Feature/Integration Test, และการจำลองระบบด้วย Mocks',
      en: 'Master test-driven engineering: Testing pyramid, Unit testing isolated pure functions versus Feature/Integration tests simulating real HTTP lifecycles and database states.'
    },
    objectives: {
      th: [
        'เข้าใจสถาปัตยกรรม Testing Pyramid (Unit, Feature, E2E)',
        'แยกแยะความแตกต่างระหว่าง Unit Test (ทดสอบฟังก์ชันเดี่ยว) และ Feature Test (ทดสอบทั้งระบบ)',
        'เข้าใจการใช้งาน Database Transactions ในการทดสอบเพื่อไม่ให้กระทบข้อมูลจริง',
        'เขียน Test Case แรกด้วยความมั่นใจ'
      ],
      en: [
        'Understand the testing pyramid hierarchy (Unit, Feature, End-to-End)',
        'Distinguish unit tests (isolated functions) from feature tests (HTTP and database)',
        'Apply database transaction rollbacks in automated tests to prevent state pollution',
        'Author first robust test cases with confidence'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'การทดสอบอัตโนมัติ (Automated Testing) คือ "การเขียนโค้ดเพื่อมาทดสอบโค้ดของเราอีกที" เพื่อให้แน่ใจว่าฟังก์ชันคำนวณเงินเดือน หรือระบบสมัครสมาชิกยังทำงานถูกต้อง 100% แม้จะมีการแก้โค้ดในอนาคต',
        en: 'Automated testing involves authoring scripts that verify application code behaves correctly, preventing regressions when making modifications.'
      },
      whyUseIt: {
        th: 'ช่วยให้คุณกล้าแก้ไขหรือปรับปรุงโค้ด (Refactor) ได้โดยไม่ต้องกลัวว่าจะไปทำระบบส่วนอื่นพัง และไม่ต้องเสียเวลามานั่งคลิกทดสอบฟอร์มด้วยมือซ้ำๆ ทุกวัน',
        en: 'Instills confidence when refactoring, catches regression bugs instantly, and eliminates tedious manual testing routines.'
      },
      whenToUse: {
        th: 'ใช้ในทุกส่วนของระบบที่มีความสำคัญ เช่น การคำนวณเงิน การตรวจสอบสิทธิ์ และกระบวนการสั่งซื้อ',
        en: 'Essential for financial calculations, authentication gates, and transactional domain logic.'
      },
      howItWorks: {
        th: 'รันคำสั่ง php artisan test หรือ vitest -> ตัวรันเทสส่งข้อมูลจำลองเข้าฟังก์ชัน -> ตรวจสอบว่าผลลัพธ์ตรงกับที่คาดหวังหรือไม่ (Assert) -> แสดงไฟเขียวผ่าน หรือไฟแดงล้มเหลว',
        en: 'Execute test runner CLI -> Test framework passes assertions against simulated inputs -> Emits green passes or red failure traces.'
      }
    },
    diagram: {
      title: {
        th: 'ปิรามิดการทดสอบซอฟต์แวร์ (Testing Pyramid)',
        en: 'The Software Testing Pyramid'
      },
      flow: [
        { title: '1. E2E Tests (บนสุด)', sub: 'ทดสอบหน้าจอเบราว์เซอร์จริง ช้าที่สุดและต้นทุนสูง', color: 'rose' },
        { title: '2. Feature Tests (กลาง)', sub: 'ทดสอบ HTTP Request + Database จริง รวดเร็วและแม่นยำสูง', color: 'purple' },
        { title: '3. Unit Tests (ฐานกว้างสุด)', sub: 'ทดสอบเฉพาะฟังก์ชันตรรกะ เร็วที่สุดระดับเสี้ยววินาที', color: 'emerald' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'Unit Test: เร็ว เบา ทดสอบเฉพาะจุด',
          en: 'Unit Tests: Fast & Isolated'
        },
        content: {
          th: 'ทดสอบคลาสคำนวณเงินเดือนหรือฟังก์ชันย่อย โดยไม่ต้องต่อฐานข้อมูลจริง',
          en: 'Test pure business algorithms or utility functions in isolation without database I/O.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'Feature Test: ทดสอบการเดินทางจริงของ Request',
          en: 'Feature Tests: Full HTTP Journey'
        },
        content: {
          th: 'จำลองยิง POST /api/employees ตรวจสอบว่าบันทึกลงตารางจริง และส่ง HTTP 201 กลับมา',
          en: 'Simulate POST /api/employees, asserting database mutations and HTTP 201 response status.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\n// ตัวอย่าง Pest PHP Feature Test ใน Laravel\ntest("สามารถสร้างพนักงานใหม่และบันทึกลงฐานข้อมูลได้", function () {\n    $user = \\App\\Models\\User::factory()->create(["role" => "admin"]);\n\n    $response = $this->actingAs($user)->postJson("/api/employees", [\n        "employee_code" => "EMP-999",\n        "first_name"    => "Bruce",\n        "last_name"     => "Wayne",\n        "email"         => "bruce@wayne.dev",\n        "department"    => "Executive",\n        "salary"        => 150000\n    ]);\n\n    $response->assertStatus(201);\n    $this->assertDatabaseHas("employees", ["email" => "bruce@wayne.dev"]);\n});\n',
      filename: 'tests/Feature/EmployeeCreationTest.php',
      mockOutput: '✓ EmployeeCreationTest > สามารถสร้างพนักงานใหม่ (0.12s)'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'เขียนเทสโดยยิงเข้าฐานข้อมูล Production จริง ทำให้ข้อมูลการทดสอบปะปนกับข้อมูลลูกค้า',
          en: 'Running automated test suites against production database instances'
        },
        why: {
          th: 'คำสั่งเทสมักจะมีการล้างข้อมูล (RefreshDatabase) ซึ่งอาจลบข้อมูลลูกค้าบนเซิร์ฟเวอร์จริงหายหมดได้',
          en: 'Test suites utilize RefreshDatabase or rollback commands that wipe all production records.'
        },
        badCode: '// ❌ อันตราย: ใช้ .env ของ Production รันเทส\nDB_DATABASE=production_live_db',
        goodCode: '// ✓ ถูกต้อง: แยกฐานข้อมูลทดสอบใน phpunit.xml เสมอ\n<env name="DB_DATABASE" value="testing_db"/>',
        solution: {
          th: 'กำหนดตัวแปรฐานข้อมูลสำหรับการเทสแยกต่างหากใน phpunit.xml หรือ .env.testing เสมอ',
          en: 'Always isolate testing suites inside dedicated test databases via phpunit.xml or .env.testing.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-test-01-1',
        question: {
          th: 'การทดสอบประเภทใดที่จำลองคำขอ HTTP เพื่อตรวจสอบการทำงานร่วมกันระหว่าง Route, Controller, Validation และ Database?',
          en: 'Which test category simulates HTTP requests to verify the integration of routes, controllers, and databases?'
        },
        options: [
          { id: 'a', text: { th: 'Feature Test (หรือ Integration Test)', en: 'Feature Test (or Integration Test)' } },
          { id: 'b', text: { th: 'Unit Test', en: 'Unit Test' } },
          { id: 'c', text: { th: 'Manual Click Test', en: 'Manual Click Test' } },
          { id: 'd', text: { th: 'Hardware Diagnostic', en: 'Hardware Diagnostic' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Feature Test จำลองการยิง Request ผ่านวงจรชีวิตของระบบ เพื่อทดสอบการทำงานประสานกันของทุกเลเยอร์รวมถึงฐานข้อมูล',
          en: 'Feature tests execute the entire HTTP pipeline, verifying the integration of routes, validation, controllers, and database state.'
        }
      }
    ],
    summary: {
      th: [
        'Automated Testing ช่วยให้คุณส่งมอบงานได้อย่างมั่นใจ ไร้บั๊ก',
        'Unit Test ทดสอบตรรกะย่อยอย่างรวดเร็ว ส่วน Feature Test ทดสอบการทำงานร่วมกันจริง',
        'แยกฐานข้อมูลสำหรับการทดสอบเสมอเพื่อความปลอดภัยสูงสุด'
      ],
      en: [
        'Automated testing ensures regression-free software delivery.',
        'Unit tests verify isolated algorithms; Feature tests ensure end-to-end integration.',
        'Always isolate test environments from live production data.'
      ]
    }
  },

  'testing-02-laravel-react-testing': {
    id: 'testing-02-laravel-react-testing',
    trackId: 'testing',
    category: 'Testing Implementation',
    level: 4,
    levelLabel: 'Level 4: Pest & Vitest',
    durationMinutes: 24,
    title: {
      th: '02 การทดสอบในโลกจริงด้วย Pest PHP และ Vitest/RTL',
      en: '02 Full-Stack Testing: Pest PHP for Laravel & Vitest for React'
    },
    description: {
      th: 'ลงมือเขียนชุดทดสอบจริง: ใช้ Pest PHP ยุคใหม่สำหรับทดสอบ Laravel Controllers & Models และใช้ Vitest พร้อม React Testing Library สำหรับทดสอบ React UI Components',
      en: 'Hands-on full-stack testing: Writing elegant test suites in Pest PHP for Laravel models and actions, and utilizing Vitest with React Testing Library for components.'
    },
    objectives: {
      th: [
        'เขียน Test ด้วยไวยากรณ์ Pest PHP ที่สวยงามและอ่านง่ายเหมือนภาษาพูด',
        'ใช้ RefreshDatabase Trait เพื่อสร้างและล้างข้อมูลจำลองอัตโนมัติ',
        'เขียนการทดสอบ React Component ด้วย Vitest และ React Testing Library',
        'ตรวจสอบการกดปุ่ม การกรอกฟอร์ม และการแสดงข้อความ Error บนหน้าจอ'
      ],
      en: [
        'Author expressive tests using Pest PHP framework syntax',
        'Leverage RefreshDatabase to automate isolated database rollbacks',
        'Test React UI components using Vitest and React Testing Library',
        'Simulate user interactions: typing inputs, clicking buttons, and asserting DOM states'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Pest PHP คือ "เครื่องมือรันเทสยอดนิยมของ Laravel" ที่เขียนง่ายและสวยงามที่สุด และ Vitest คือ "เครื่องมือรันเทสที่เร็วที่สุดของฝั่ง React" ทำงานร่วมกับ Vite ได้อย่างลงตัว',
        en: 'Pest PHP delivers an elegant testing framework for PHP, while Vitest provides blazing fast test execution for React applications built with Vite.'
      },
      whyUseIt: {
        th: 'เขียนง่ายเหมือนภาษาอังกฤษ ช่วยประหยัดเวลา และรันผลการทดสอบได้รวดเร็ว ช่วยให้ตรวจจับข้อผิดพลาดได้ก่อนส่งมอบงานให้ลูกค้า',
        en: 'Expressive developer ergonomics, instant execution feedback, and automated safety nets before deploying to production.'
      },
      whenToUse: {
        th: 'ใช้ในขั้นตอน Continuous Integration (CI) ก่อนการ Deploy ขึ้น Production ทุกครั้ง',
        en: 'Mandatory verification step in continuous integration (CI) pipelines.'
      },
      howItWorks: {
        th: 'Pest สั่งรัน Database SQLite ในหน่วยความจำ -> ทดสอบ Controller -> Vitest จำลอง Virtual DOM ใน Node.js -> ตรวจสอบว่าปุ่มกดทำงานถูกต้อง',
        en: 'Pest runs tests against in-memory SQLite instances -> Vitest renders components in jsdom -> Asserts interactive user behaviors.'
      }
    },
    diagram: {
      title: {
        th: 'สถาปัตยกรรมการทดสอบ Full-Stack (Pest + Vitest)',
        en: 'Full-Stack Test Runner Architecture'
      },
      flow: [
        { title: '1. Backend Tests (Pest)', sub: 'รัน php artisan test ทดสอบ Models และ Controllers', color: 'blue' },
        { title: '2. Frontend Tests (Vitest)', sub: 'รัน npm run test ทดสอบ React Forms และ Buttons', color: 'emerald' },
        { title: '3. Assertions Check', sub: 'ตรวจสอบสถานะ HTTP 200, ข้อความใน DOM, และ DB Records', color: 'purple' },
        { title: '4. CI/CD Pipeline', sub: 'ผ่านครบทุกตัว -> พร้อม Deploy สู่ Production ทันที!', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'เขียน Feature Test ด้วย Pest PHP',
          en: 'Write Pest PHP Feature Test'
        },
        content: {
          th: 'it("rejects invalid email addresses", function () { $this->postJson("/api/employees", ["email" => "invalid"])->assertStatus(422); });',
          en: 'it("rejects invalid email addresses", function () { $this->postJson("/api/employees", ["email" => "invalid"])->assertStatus(422); });.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียน UI Test ด้วย Vitest และ React Testing Library',
          en: 'Write Vitest React Component Test'
        },
        content: {
          th: 'render(<EmployeeForm />); fireEvent.change(input, { target: { value: "Alex" } }); expect(screen.getByText("Alex")).toBeInTheDocument();',
          en: 'render(<EmployeeForm />); fireEvent.change(input, { target: { value: "Alex" } }); expect(screen.getByText("Alex")).toBeInTheDocument();.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// Vitest Component Test for React\nimport { render, screen, fireEvent } from "@testing-library/react";\nimport { describe, it, expect, vi } from "vitest";\nimport { EmployeeForm } from "../components/EmployeeForm";\n\ndescribe("EmployeeForm Component", () => {\n  it("แสดงข้อความ Error เมื่อผู้ใช้ไม่ได้กรอกชื่อพนักงาน", async () => {\n    const mockSubmit = vi.fn();\n    render(<EmployeeForm onSubmit={mockSubmit} />);\n\n    const submitButton = screen.getByRole("button", { name: /บันทึกข้อมูล/i });\n    fireEvent.click(submitButton);\n\n    expect(screen.getByText("กรุณากรอกชื่อพนักงาน")).toBeInTheDocument();\n    expect(mockSubmit).not.toHaveBeenCalled();\n  });\n});\n',
      filename: 'src/__tests__/EmployeeForm.test.tsx',
      mockOutput: '✓ EmployeeForm Component > แสดงข้อความ Error (15ms)'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ทดสอบ Implementation Details (เช่น ตรวจสอบชื่อตัวแปร State ภายใน) แทนที่จะทดสอบพฤติกรรมที่ผู้ใช้เห็น (User Behavior)',
          en: 'Testing internal implementation details rather than observable user behavior'
        },
        why: {
          th: 'เมื่อมีการเปลี่ยนชื่อตัวแปรภายใน แต่ UI ยังทำงานได้ปกติ เทสจะพังโดยใช่เหตุ ทำให้ต้องเสียเวลาแก้เทสซ้ำซ้อน (Brittle Tests)',
          en: 'Makes tests brittle and prone to breaking during harmless internal refactors.'
        },
        badCode: '// ❌ ผิดแนวทาง: อย่าเจาะจงตรวจชื่อ state ภายใน\nexpect(component.state.formEmail).toBe("test@test.com");',
        goodCode: '// ✓ ถูกต้อง: ตรวจสิ่งที่แสดงผลบนจอจริง\nexpect(screen.getByRole("textbox", { name: /email/i })).toHaveValue("test@test.com");',
        solution: {
          th: 'ทดสอบสิ่งที่ผู้ใช้มองเห็นและมีปฏิสัมพันธ์ในหน้าจอเสมอ ตามหลักการของ Testing Library',
          en: 'Test components from the user perspective: render, interact, and assert visible output.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-test-02-1',
        question: {
          th: 'ในการทดสอบ React Component ปรัชญาหลักของ React Testing Library คืออะไร?',
          en: 'What is the guiding philosophy of React Testing Library?'
        },
        options: [
          { id: 'a', text: { th: 'ทดสอบในมุมมองของผู้ใช้งานจริง (User-centric) โดยไม่ยึดติดกับตัวแปรภายใน Component', en: 'Test software from the end-user perspective rather than inspecting internal state' } },
          { id: 'b', text: { th: 'นับจำนวนบรรทัดของโค้ด JSX', en: 'Counts lines of JSX code' } },
          { id: 'c', text: { th: 'บังคับให้เขียนโค้ดภาษา C++', en: 'Mandates writing tests in C++' } },
          { id: 'd', text: { th: 'ลบไฟล์ที่ไม่ผ่านการทดสอบทิ้งทันที', en: 'Deletes failing component files' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: '"The more your tests resemble the way your software is used, the more confidence they can give you." ยิ่งเทสคล้ายการใช้งานจริง ยิ่งการันตีความมั่นใจได้สูงสุด',
          en: 'React Testing Library prioritizes user-facing interactions over component implementation details.'
        }
      }
    ],
    summary: {
      th: [
        'Pest PHP มอบประสบการณ์การเขียนเทส Backend ที่เรียบง่ายและทรงพลัง',
        'Vitest + RTL ช่วยให้ทดสอบ React Component ได้อย่างรวดเร็วและทนทานต่อการ Refactor',
        'การมีชุดทดสอบอัตโนมัติคือเครื่องหมายของวิศวกรซอฟต์แวร์มืออาชีพระดับสูง'
      ],
      en: [
        'Pest PHP delivers expressive, joyful backend test suites.',
        'Vitest and React Testing Library validate user interfaces with resilient testing patterns.',
        'Automated test suites distinguish professional engineering from amateur prototyping.'
      ]
    }
  },

  'arch-01-fullstack-production-blueprint': {
    id: 'arch-01-fullstack-production-blueprint',
    trackId: 'architecture',
    category: 'Production Architecture',
    level: 10,
    levelLabel: 'Level 10: Production DevOps',
    durationMinutes: 30,
    title: {
      th: '01 พิมพ์เขียวสถาปัตยกรรมระดับ Production (Full-Stack Blueprint)',
      en: '01 Enterprise Production Architecture Blueprint'
    },
    description: {
      th: 'พิมพ์เขียวระบบระดับ Production: Docker Multi-stage Containerization, การตั้งค่า Nginx Reverse Proxy, Redis Caching & Queue Workers, การปรับแต่ง PostgreSQL, และการเตรียม Deploy บน Cloud Run',
      en: 'Production infrastructure blueprint: Multi-stage Docker containers, Nginx reverse proxy tuning, Redis caching & queue workers, PostgreSQL connection pooling, and Cloud Run serverless deployment.'
    },
    objectives: {
      th: [
        'เข้าใจพิมพ์เขียวการทำงานของ Full-Stack System ในสภาพแวดล้อม Production',
        'เขียน Dockerfile แบบ Multi-stage เพื่อให้ Image มีขนาดเล็กและปลอดภัยที่สุด',
        'ตั้งค่า Nginx Reverse Proxy สำหรับจัดเส้นทาง (Routing) และจัดการ SSL/TLS',
        'ใช้งาน Redis สำหรับ Caching และประมวลผล Background Queue Workers'
      ],
      en: [
        'Understand enterprise production topology for full-stack applications',
        'Construct lightweight and secure multi-stage Docker build containers',
        'Configure Nginx reverse proxy for SSL termination and static asset caching',
        'Orchestrate Redis for high-throughput caching and asynchronous queue workers'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'พิมพ์เขียวระดับ Production (Production Blueprint) คือ "แผนผังการประกอบระบบจริงบนเซิร์ฟเวอร์" ที่มีทั้งระบบเว็บ Nginx, ฐานข้อมูล PostgreSQL, ตัวแคช Redis, และระบบประมวลผลหลังบ้าน Docker เพื่อให้เว็บไซต์รองรับคนใช้งานได้เป็นแสนคนพร้อมกันโดยไม่ล่ม',
        en: 'A production blueprint is the operational topology connecting Nginx ingress proxies, Node/PHP runtimes, Redis caches, and PostgreSQL databases resiliently under high traffic.'
      },
      whyUseIt: {
        th: 'การรันคำสั่ง npm run dev บนเซิร์ฟเวอร์จริงจะทำให้ระบบช้า กินทรัพยากรมหาศาล และไม่มีระบบความปลอดภัย พิมพ์เขียว Production จะคอมไพล์โค้ดเป็นไฟล์ที่เร็วที่สุดและปลอดภัยสูงสุด',
        en: 'Development servers lack production optimizations, crash easily, and leak memory. Production setups compile optimized static bundles and enforce security safeguards.'
      },
      whenToUse: {
        th: 'เมื่อเตรียมนำโปรเจกต์ขึ้น Cloud (เช่น Cloud Run, AWS, หรือ Kubernetes) เพื่อเปิดให้ผู้ใช้งานจริงเข้าใช้งาน',
        en: 'Essential when packaging and deploying applications to container platforms (Cloud Run, AWS ECS, Kubernetes).'
      },
      howItWorks: {
        th: 'คำขอวิ่งเข้า Nginx Reverse Proxy (พอร์ต 443 HTTPS) -> Nginx ส่งไฟล์ Static ให้ทันทีโดยไม่ต้องผ่านเซิร์ฟเวอร์ -> หากเป็น API จะส่งต่อไปยัง Node/PHP ใน Docker Container -> อ่านแคชจาก Redis ก่อนอ่านฐานข้อมูล',
        en: 'Incoming HTTPS traffic hits Nginx reverse proxy -> Static assets served directly -> API requests routed to containerized runtimes -> Cache hits resolved from Redis before querying PostgreSQL.'
      }
    },
    diagram: {
      title: {
        th: 'พิมพ์เขียวสถาปัตยกรรมระดับ Production',
        en: 'Enterprise Full-Stack Production Blueprint'
      },
      flow: [
        { title: '1. Ingress & SSL', sub: 'Nginx Reverse Proxy (HTTPS Port 443)', color: 'blue' },
        { title: '2. Static Assets', sub: 'Vite Production Build (dist/) ให้บริการทันที', color: 'emerald' },
        { title: '3. Application Container', sub: 'Node.js / PHP-FPM รันใน Docker Container', color: 'purple' },
        { title: '4. Persistence Tier', sub: 'PostgreSQL DB + Redis Cache & Queue Workers', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'Docker Multi-stage Build เพื่อขนาดเล็กที่สุด',
          en: 'Multi-stage Docker Containerization'
        },
        content: {
          th: 'Stage 1: คอมไพล์ TypeScript และ Tailwind CSS -> Stage 2: คัดลอกเฉพาะไฟล์ที่คอมไพล์แล้วใส่ใน Alpine Linux ขนาดเล็ก',
          en: 'Stage 1 builds assets and transpile code -> Stage 2 extracts production artifacts into minimal Alpine runtime containers.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'การแยกงานหนักไปให้ Queue Worker',
          en: 'Background Asynchronous Queues'
        },
        content: {
          th: 'ส่งงานที่ใช้เวลานาน เช่น การส่งอีเมล หรือการแปลงไฟล์วิดีโอ เข้าสู่ Redis Queue เพื่อไม่ให้ผู้ใช้ต้องรอคอยหน้าจอนาน',
          en: 'Offload heavy operations like PDF generation or transactional emails to asynchronous Redis workers.'
        }
      }
    ],
    primaryCode: {
      language: 'dockerfile',
      code: '# Multi-stage Production Dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nENV PORT=3000\n\nCOPY --from=builder /app/package*.json ./\nCOPY --from=builder /app/dist ./dist\nRUN npm ci --only=production\n\nEXPOSE 3000\nCMD ["npm", "run", "start"]\n',
      filename: 'Dockerfile.production',
      mockOutput: 'Production Docker image size: 118MB (Down from 1.2GB)'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'รันคำสั่ง npm run dev บนเครื่องเซิร์ฟเวอร์ Production จริง',
          en: 'Running npm run dev directly on a live production server'
        },
        why: {
          th: 'Dev Server ใช้หน่วยความจำมหาศาล มีระบบ Hot Module Replacement (HMR) ที่ไม่เสถียร และไม่มีการย่อขนาดไฟล์ (Minification) ทำให้เว็บไซต์โหลดช้ามาก',
          en: 'Development servers lack bundling optimizations, consume high memory, and lack thread resiliency under load.'
        },
        badCode: '// ❌ ห้ามใช้บน Production\nCMD ["npm", "run", "dev"]',
        goodCode: '// ✓ ถูกต้อง: Build ล่วงหน้าแล้วรัน Production Server\nRUN npm run build\nCMD ["npm", "run", "start"]',
        solution: {
          th: 'รัน npm run build เสมอเพื่อสร้าง Production Bundle ในโฟลเดอร์ dist/',
          en: 'Always compile static bundles via npm run build and launch optimized production servers.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-arch-01-1',
        question: {
          th: 'เทคนิค Multi-stage Build ใน Docker มีประโยชน์หลักด้านใดสำหรับระบบ Production?',
          en: 'What is the primary advantage of multi-stage Docker builds in production deployments?'
        },
        options: [
          { id: 'a', text: { th: 'ลดขนาด Image ของ Container ให้เล็กที่สุด และป้องกันไม่ให้มี Source Code หรือ Dev Tools หลุดไปบนเซิร์ฟเวอร์จริง', en: 'Minimizes container image size and prevents development build tools from leaking into production' } },
          { id: 'b', text: { th: 'ทำให้เว็บไซต์เปลี่ยนภาษาอัตโนมัติ', en: 'Translates websites automatically' } },
          { id: 'c', text: { th: 'ลบไฟล์ขยะในเครื่องของผู้ใช้งานที่บ้าน', en: 'Cleans client-side disk space' } },
          { id: 'd', text: { th: 'เพิ่มจำนวนผู้ชมเว็บไซต์ให้สูงขึ้นทันที', en: 'Artificially boosts site visitor counts' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Multi-stage build ช่วยแยกเครื่องมือในการคอมไพล์ออกจาก Container สุดท้าย ทำให้ได้ Image ขนาดเล็ก ประหยัดแบนด์วิดท์ และปลอดภัยสูงสุด',
          en: 'Multi-stage builds decouple build dependencies from the final image, yielding slim, secure, and fast-starting containers.'
        }
      }
    ],
    summary: {
      th: [
        'พิมพ์เขียวระดับ Production รวบรวมองค์ประกอบสำคัญ: Nginx, Docker, PostgreSQL, และ Redis',
        'ใช้ Docker Multi-stage Builds เพื่อความเบา รวดเร็ว และปลอดภัย',
        'ยินดีด้วย! คุณได้เรียนรู้ครบทุกมิติของ Full-Stack Modern Enterprise Architecture แล้ว'
      ],
      en: [
        'Production blueprints integrate Nginx, Docker, PostgreSQL, and Redis into a unified topology.',
        'Multi-stage Docker builds maximize security and performance.',
        'Congratulations! You have completed the comprehensive modern full-stack enterprise curriculum.'
      ]
    }
  }

};
