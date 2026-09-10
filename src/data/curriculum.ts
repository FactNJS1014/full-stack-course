import { TrackId } from '../types';

export interface CurriculumTrack {
  id: TrackId;
  title: {
    th: string;
    en: string;
  };
  subtitle: {
    th: string;
    en: string;
  };
  description?: {
    th: string;
    en: string;
  };
  icon: string;
  badge: string;
  totalLessons: number;
  level: string;
  color: string;
  modules: Array<{
    id: string;
    name: { th: string; en: string };
    title?: { th: string; en: string };
    lessonIds: string[];
  }>;
}

export interface RoadmapLevel {
  level: number;
  title: { th: string; en: string };
  subtitle: { th: string; en: string };
  tag: string;
  description: { th: string; en: string };
  trackId: TrackId;
  recommendedLessonId: string;
}

export const CURRICULUM_TRACKS: CurriculumTrack[] = [
  {
    id: 'zero',
    title: { th: 'ปูพื้นฐานจาก 0 (Start From Zero)', en: 'Start From Zero' },
    subtitle: { th: 'เขียนโปรแกรม เว็บไซต์ เซิร์ฟเวอร์ และ Git สำหรับผู้เริ่มต้นสมบูรณ์', en: 'Programming, Web, HTTP, Git & Environment' },
    icon: 'Sparkles',
    badge: 'Level 0 - 1',
    totalLessons: 12,
    level: 'Beginner',
    color: 'emerald',
    modules: [
      {
        id: 'prog-basics',
        name: { th: 'พื้นฐานการเขียนโปรแกรม & เว็บไซต์', en: 'Programming & Web Basics' },
        lessonIds: ['zero-01-what-is-programming', 'zero-02-web-architecture', 'zero-03-client-server-api', 'zero-04-json-data']
      },
      {
        id: 'dev-env',
        name: { th: 'ติดตั้งโปรแกรม & Git', en: 'Dev Environment & Git' },
        lessonIds: ['zero-05-dev-environment', 'zero-06-git-basics', 'zero-07-php-from-zero']
      }
    ]
  },
  {
    id: 'laravel',
    title: { th: 'Laravel Framework', en: 'Laravel Framework' },
    subtitle: { th: 'PHP MVC Framework ยอดนิยมระดับโลก Routing, Eloquent, Migration, Service Layer', en: 'From Artisan to Advanced Service Container' },
    icon: 'Flame',
    badge: 'Level 2 - 4',
    totalLessons: 24,
    level: 'Core Backend',
    color: 'red',
    modules: [
      {
        id: 'laravel-zero',
        name: { th: 'Laravel จาก 0 & สถาปัตยกรรม MVC', en: 'Laravel Zero & MVC' },
        lessonIds: ['laravel-01-intro-mvc', 'laravel-02-routing-controllers', 'laravel-03-request-validation']
      },
      {
        id: 'laravel-database',
        name: { th: 'Migrations & Eloquent ORM', en: 'Migrations & Eloquent ORM' },
        lessonIds: ['laravel-04-migrations-schema', 'laravel-05-eloquent-crud', 'laravel-06-eloquent-relationships']
      },
      {
        id: 'laravel-advanced',
        name: { th: 'Service Container & Architecture', en: 'Service Layer & Advanced' },
        lessonIds: ['laravel-07-service-layer', 'laravel-08-service-container']
      }
    ]
  },
  {
    id: 'react',
    title: { th: 'React 19', en: 'React 19 Modern UI' },
    subtitle: { th: 'Component, JSX, Hooks (useState, useEffect, useActionState, useOptimistic)', en: 'Next-Gen React & State Architecture' },
    icon: 'Atom',
    badge: 'Level 5',
    totalLessons: 18,
    level: 'Modern Frontend',
    color: 'cyan',
    modules: [
      {
        id: 'react-zero',
        name: { th: 'React 19 จาก 0 & JSX Components', en: 'React 19 Zero & Components' },
        lessonIds: ['react-01-intro-jsx', 'react-02-props-state', 'react-03-hooks-deep-dive']
      },
      {
        id: 'react-advanced',
        name: { th: 'Form Architecture & React 19 Actions', en: 'Form Architecture & Actions' },
        lessonIds: ['react-04-forms-validation', 'react-05-react19-compiler-features']
      }
    ]
  },
  {
    id: 'inertia',
    title: { th: 'Inertia 3', en: 'Inertia 3 Monolith SPA' },
    subtitle: { th: 'ผสาน Laravel + React โดยไม่ต้องสร้าง REST API แบบดั้งเดิม', en: 'The Modern Monolith Connector' },
    icon: 'Layers',
    badge: 'Level 6',
    totalLessons: 14,
    level: 'Full-Stack Bridge',
    color: 'purple',
    modules: [
      {
        id: 'inertia-core',
        name: { th: 'Inertia 3 Architecture & Pages', en: 'Inertia 3 Architecture & Pages' },
        lessonIds: ['inertia-01-what-is-inertia', 'inertia-02-pages-props-routing', 'inertia-03-forms-useform']
      },
      {
        id: 'inertia-advanced',
        name: { th: 'Shared Data, Dialogs & Partial Reloads', en: 'Shared Data & Advanced Inertia' },
        lessonIds: ['inertia-04-shared-data-validation', 'inertia-05-fullstack-flow']
      }
    ]
  },
  {
    id: 'nestjs',
    title: { th: 'NestJS TypeScript Backend', en: 'NestJS TypeScript Backend' },
    subtitle: { th: 'Enterprise Node.js Framework โมดูล คอนโทรลเลอร์ เซอร์วิส DTO และ Dependency Injection', en: 'Scalable Enterprise Node.js Architecture' },
    icon: 'Cpu',
    badge: 'Level 8',
    totalLessons: 20,
    level: 'Microservice / Enterprise',
    color: 'rose',
    modules: [
      {
        id: 'nestjs-zero',
        name: { th: 'NestJS จาก 0 & สถาปัตยกรรม Module', en: 'NestJS Zero & Modules' },
        lessonIds: ['nestjs-01-intro-architecture', 'nestjs-02-controllers-routes', 'nestjs-03-services-di']
      },
      {
        id: 'nestjs-api-dto',
        name: { th: 'DTO, ValidationPipe & REST API', en: 'DTO, Validation & REST API' },
        lessonIds: ['nestjs-04-dto-validation-pipe', 'nestjs-05-guards-auth']
      }
    ]
  },
  {
    id: 'fullstack',
    title: { th: 'Full-Stack Integration', en: 'Full-Stack Integration' },
    subtitle: { th: 'ผสาน Laravel + React + Inertia + NestJS ในโลกจริงอย่างสมบูรณ์แบบ', en: 'Laravel, Inertia, React 19 & NestJS Combined' },
    icon: 'Workflow',
    badge: 'Level 7 & 9',
    totalLessons: 16,
    level: 'Architectural Capstone',
    color: 'amber',
    modules: [
      {
        id: 'fullstack-patterns',
        name: { th: 'รูปแบบสถาปัตยกรรม Full-Stack', en: 'Full-Stack Architecture Patterns' },
        lessonIds: ['fullstack-01-laravel-vs-nestjs', 'fullstack-02-laravel-react-inertia-crud', 'fullstack-03-microservices-hybrid']
      }
    ]
  },
  {
    id: 'database',
    title: { th: 'Database & SQL', en: 'Database & SQL Design' },
    subtitle: { th: 'SQL, Relational Modeling, Indexing, Transactions, Foreign Keys, PostgreSQL & MySQL', en: 'Relational DB, Normalization & Optimization' },
    icon: 'Database',
    badge: 'Core Data',
    totalLessons: 15,
    level: 'Data Architecture',
    color: 'blue',
    modules: [
      {
        id: 'db-design',
        name: { th: 'ออกแบบฐานข้อมูล & ER Diagram', en: 'Database Design & ER Diagrams' },
        lessonIds: ['db-01-sql-basics', 'db-02-relationships-normalization']
      }
    ]
  },
  {
    id: 'api',
    title: { th: 'REST API & Standards', en: 'REST API Standards' },
    subtitle: { th: 'HTTP Methods, Status Codes, JSON Formats, API Resources, Versioning', en: 'Contract Design & API Engineering' },
    icon: 'Network',
    badge: 'API Standards',
    totalLessons: 14,
    level: 'API Engineering',
    color: 'indigo',
    modules: [
      {
        id: 'api-spec',
        name: { th: 'REST API Design & Lifecycle', en: 'REST API Design & Lifecycle' },
        lessonIds: ['api-01-rest-fundamentals', 'api-02-status-codes-payloads']
      }
    ]
  },
  {
    id: 'security',
    title: { th: 'Security & Auth', en: 'Security & Authentication' },
    subtitle: { th: 'Authentication, RBAC Authorization, JWT, Sanctum, CSRF, XSS, SQL Injection', en: 'Defense in Depth & Access Control' },
    icon: 'ShieldCheck',
    badge: 'Security',
    totalLessons: 12,
    level: 'Production Hardening',
    color: 'violet',
    modules: [
      {
        id: 'sec-auth',
        name: { th: 'Authentication & RBAC Matrix', en: 'Authentication & RBAC' },
        lessonIds: ['security-01-auth-vs-authz', 'security-02-rbac-matrix-sanctum']
      }
    ]
  },
  {
    id: 'testing',
    title: { th: 'Testing & QA', en: 'Automated Testing' },
    subtitle: { th: 'Pest/PHPUnit for Laravel, Vitest/RTL for React, Jest for NestJS', en: 'Unit, Feature & End-to-End Testing' },
    icon: 'CheckCircle2',
    badge: 'Testing',
    totalLessons: 12,
    level: 'Quality Assurance',
    color: 'teal',
    modules: [
      {
        id: 'test-qa',
        name: { th: 'Automated Testing Strategies', en: 'Testing Strategies' },
        lessonIds: ['testing-01-unit-vs-feature', 'testing-02-laravel-react-testing']
      }
    ]
  },
  {
    id: 'architecture',
    title: { th: 'Production Architecture', en: 'Production Architecture' },
    subtitle: { th: 'Docker, CI/CD, Caching (Redis), Queues, Scalability, High Availability', en: 'Enterprise Deployment & Scaling' },
    icon: 'Server',
    badge: 'Level 10',
    totalLessons: 10,
    level: 'DevOps & Systems',
    color: 'slate',
    modules: [
      {
        id: 'arch-prod',
        name: { th: 'System Architecture & Production', en: 'System Architecture' },
        lessonIds: ['arch-01-fullstack-production-blueprint']
      }
    ]
  }
];

export const ROADMAP_LEVELS: RoadmapLevel[] = [
  {
    level: 0,
    title: { th: 'Level 0: Absolute Beginner', en: 'Level 0: Absolute Beginner' },
    subtitle: { th: 'Programming, Web, Client/Server, API, JSON', en: 'Computer & Web Foundations' },
    tag: 'Start Here',
    description: { th: 'เริ่มต้นจากศูนย์แท้จริง ทำความเข้าใจว่าโค้ด โปรแกรม เว็บไซต์ และเซิร์ฟเวอร์คุยกันอย่างไร', en: 'Understand how software, browsers, servers, and data interact from scratch.' },
    trackId: 'zero',
    recommendedLessonId: 'zero-01-what-is-programming'
  },
  {
    level: 1,
    title: { th: 'Level 1: Dev Environment & Git', en: 'Level 1: Dev Environment & Git' },
    subtitle: { th: 'VS Code, Terminal, Node, Composer, Git, GitHub', en: 'Tooling & Version Control' },
    tag: 'Environment',
    description: { th: 'ติดตั้งเครื่องมือระดับมือโปร เข้าใจคำสั่ง Git และการควบคุมเวอร์ชันโค้ด', en: 'Set up command line, runtime packages, and master Git version control.' },
    trackId: 'zero',
    recommendedLessonId: 'zero-05-dev-environment'
  },
  {
    level: 2,
    title: { th: 'Level 2: Laravel Basics', en: 'Level 2: Laravel Basics' },
    subtitle: { th: 'MVC, Routing, Controller, Request, Validation', en: 'PHP MVC Foundations' },
    tag: 'Laravel',
    description: { th: 'ก้าวแรกสู่ PHP Framework อันดับหนึ่ง จัดระเบียบโค้ดแบบ MVC และสร้าง Endpoint แรก', en: 'Master the Laravel MVC pattern, routing endpoints, and request validations.' },
    trackId: 'laravel',
    recommendedLessonId: 'laravel-01-intro-mvc'
  },
  {
    level: 3,
    title: { th: 'Level 3: Database & Eloquent', en: 'Level 3: Database & Eloquent' },
    subtitle: { th: 'Migrations, Tables, Eloquent CRUD, Relationships', en: 'Data Modeling & ORM' },
    tag: 'Database',
    description: { th: 'สร้างตารางด้วย Migration จัดการความสัมพันธ์ 1:1, 1:N, N:N ผ่าน Eloquent ORM', en: 'Model relational schemas and handle relational records fluently.' },
    trackId: 'laravel',
    recommendedLessonId: 'laravel-04-migrations-schema'
  },
  {
    level: 4,
    title: { th: 'Level 4: Laravel Intermediate & Advanced', en: 'Level 4: Laravel Advanced' },
    subtitle: { th: 'Service Layer, Repository Pattern, Service Container', en: 'Clean Architecture' },
    tag: 'Architecture',
    description: { th: 'แยก Business Logic ด้วย Service Layer และทำความเข้าใจ Dependency Injection', en: 'Separate business rules cleanly with Service Layer and IoC Container.' },
    trackId: 'laravel',
    recommendedLessonId: 'laravel-07-service-layer'
  },
  {
    level: 5,
    title: { th: 'Level 5: React 19 Modern UI', en: 'Level 5: React 19 Modern UI' },
    subtitle: { th: 'Components, JSX, Hooks, State Architecture, Forms', en: 'Modern React UI' },
    tag: 'React 19',
    description: { th: 'เรียนรู้ React 19 ตั้งแต่พื้นฐาน JSX จนถึง State Management และ Form Actions ล่าสุด', en: 'Build component trees and handle responsive state using modern React 19.' },
    trackId: 'react',
    recommendedLessonId: 'react-01-intro-jsx'
  },
  {
    level: 6,
    title: { th: 'Level 6: Inertia 3 Monolith SPA', en: 'Level 6: Inertia 3' },
    subtitle: { th: 'The Modern Monolith: Pages, Props, Forms, Routing', en: 'Laravel + React Bridge' },
    tag: 'Inertia 3',
    description: { th: 'รวมพลัง Laravel Backend + React Frontend โดยไม่ต้องเขียน REST API ให้ยุ่งยาก', en: 'Render React pages straight from Laravel controllers without API boilerplate.' },
    trackId: 'inertia',
    recommendedLessonId: 'inertia-01-what-is-inertia'
  },
  {
    level: 7,
    title: { th: 'Level 7: Laravel + React + Inertia Full CRUD', en: 'Level 7: The Holy Trinity' },
    subtitle: { th: 'ระบบจัดการสินค้าและพนักงานแบบ Real-world CRUD', en: 'Real-world Monolith' },
    tag: 'Full-Stack',
    description: { th: 'สร้าง Web Application เต็มรูปแบบที่มีทั้ง Search, Filter, Pagination, Modal และ Validation', en: 'Build interactive, production-ready CRUD modules seamlessly.' },
    trackId: 'fullstack',
    recommendedLessonId: 'fullstack-02-laravel-react-inertia-crud'
  },
  {
    level: 8,
    title: { th: 'Level 8: NestJS TypeScript Backend', en: 'Level 8: NestJS Enterprise' },
    subtitle: { th: 'Node.js, Modules, Controllers, Services, DTO, Guards', en: 'Enterprise TypeScript' },
    tag: 'NestJS',
    description: { th: 'สร้าง Backend สไตล์ Enterprise ด้วย NestJS และ TypeScript พร้อม Dependency Injection', en: 'Construct robust, strongly-typed server APIs with modular architecture.' },
    trackId: 'nestjs',
    recommendedLessonId: 'nestjs-01-intro-architecture'
  },
  {
    level: 9,
    title: { th: 'Level 9: Hybrid Full-Stack Architecture', en: 'Level 9: Hybrid Architecture' },
    subtitle: { th: 'Laravel vs NestJS & Microservice Collaboration', en: 'Polyglot Full-Stack' },
    tag: 'Enterprise',
    description: { th: 'เปรียบเทียบจุดเด่น Laravel และ NestJS พร้อมแนวทางการออกแบบระบบที่ทำงานร่วมกัน', en: 'Compare patterns and interconnect Laravel Inertia with NestJS services.' },
    trackId: 'fullstack',
    recommendedLessonId: 'fullstack-01-laravel-vs-nestjs'
  },
  {
    level: 10,
    title: { th: 'Level 10: Production & Capstone System', en: 'Level 10: Production Ready' },
    subtitle: { th: 'Security, RBAC, Automated Tests, Docker, Production', en: 'Professional Developer' },
    tag: 'Capstone',
    description: { th: 'ปกป้องระบบด้วย Security Best Practices, ทดสอบโค้ด และสร้างระบบระดับองค์กร', en: 'Apply defense-in-depth, testing matrices, and deploy full-stack solutions.' },
    trackId: 'architecture',
    recommendedLessonId: 'arch-01-fullstack-production-blueprint'
  }
];

export const TRACKS = CURRICULUM_TRACKS;
