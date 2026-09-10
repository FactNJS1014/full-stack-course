import { Lesson } from '../../types';

export const LESSONS_NEST: Record<string, Lesson> = {
  'nestjs-01-intro-architecture': {
    id: 'nestjs-01-intro-architecture',
    trackId: 'nestjs',
    category: 'NestJS Basics',
    level: 8,
    levelLabel: 'Level 8: NestJS Enterprise',
    durationMinutes: 25,
    title: {
      th: 'NestJS จาก 0 & สถาปัตยกรรม Enterprise TypeScript',
      en: 'NestJS from Zero & Enterprise TypeScript Architecture'
    },
    description: {
      th: 'เริ่มต้นเรียนรู้ NestJS Framework ฝั่ง Node.js ที่ได้รับความนิยมสูงสุดในระดับองค์กร เข้าใจระบบ Module, Controller, Service และ Dependency Injection',
      en: 'Learn NestJS from scratch: understand Modules, Controllers, Providers/Services, and IoC Dependency Injection in TypeScript.'
    },
    objectives: {
      th: [
        'เข้าใจว่า NestJS คืออะไร และทำไมองค์กรระดับโลกจึงเลือกใช้แทน Express ธรรมดา',
        'เข้าใจ 3 เสาหลักของ NestJS: Module, Controller และ Service',
        'เข้าใจการทำงานของ TypeScript Decorators เช่น @Module(), @Controller(), @Injectable()',
        'สร้าง Endpoint แรกด้วย NestJS CLI'
      ],
      en: [
        'Understand what NestJS is and why enterprises choose it over raw Express',
        'Master the 3 core building blocks: Module, Controller, and Service',
        'Learn how TypeScript Decorators (@Module, @Controller, @Injectable) work',
        'Scaffold your first endpoint with the NestJS CLI'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'NestJS คือ Progressive Node.js Framework สำหรับสร้าง Server-side Applications ที่ทรงประสิทธิภาพและขยายขนาดได้ (Scalable) เขียนด้วย TypeScript แท้ 100% โดยได้รับแรงบันดาลใจจากสถาปัตยกรรมของ Angular และ Spring Boot',
        en: 'NestJS is a progressive Node.js framework for building scalable, enterprise-grade backend systems. Built with 100% TypeScript, it takes architectural inspiration from Angular and Spring Boot.'
      },
      whyUseIt: {
        th: 'การเขียน Node.js ด้วย Express ดั้งเดิมไม่มีโครงสร้างตายตัว เมื่อโปรเจกต์ใหญ่ขึ้นโค้ดจะพันกันจนแก้ยาก (Spaghetti Code) NestJS มอบโครงสร้างสถาปัตยกรรมแบบ Modular และ Dependency Injection ที่ได้มาตรฐานระดับโลก',
        en: 'Raw Express lacks opinionated architecture; large codebases quickly turn into spaghetti code. NestJS provides standardized modular structure and built-in dependency injection.'
      },
      whenToUse: {
        th: 'ใช้เมื่อสร้างระบบ High-Performance Microservices, REST API ขนาดใหญ่, Real-time WebSocket Gateway หรือระบบหลังบ้านระดับ Enterprise',
        en: 'Used for high-throughput microservices, scalable REST APIs, real-time WebSocket servers, and large-scale enterprise backends.'
      },
      howItWorks: {
        th: 'Client ส่ง Request -> เข้าสู่ Controller (ดักจับ Route) -> ส่งงานให้ Service (ตรรกะทางธุรกิจ) -> คืนค่า JSON Response กลับไป',
        en: 'Client sends HTTP request -> Route picked up by Controller -> Delegates to Service (business logic) -> Emits JSON response.'
      }
    },
    diagram: {
      title: {
        th: 'สถาปัตยกรรม Module-Controller-Service ใน NestJS',
        en: 'NestJS Module-Controller-Service Architecture'
      },
      flow: [
        { title: 'AppModule', sub: 'ศูนย์รวมโมดูลทั้งหมด', color: 'blue' },
        { title: 'UsersController', sub: '@Get(), @Post() รับ Request', color: 'rose' },
        { title: 'UsersService', sub: '@Injectable() จัดการตรรกะ', color: 'emerald' },
        { title: 'Repository / DB', sub: 'PostgreSQL / TypeORM', color: 'purple' }
      ],
      type: 'layers'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้างโปรเจกต์ NestJS ด้วย CLI',
          en: 'Generate a NestJS Project with CLI'
        },
        content: {
          th: 'ใช้คำสั่ง npx @nestjs/cli new เพื่อสร้างโครงสร้างโปรเจกต์พร้อม TypeScript ทันที',
          en: 'Use the Nest CLI to scaffold a production-ready TypeScript backend workspace.'
        },
        codeSnippet: {
          language: 'bash',
          code: `# สร้างโปรเจกต์\nnpx @nestjs/cli new nest-backend\n\n# รันระบบในโหมด Watch (แก้ไขโค้ดแล้วรีโหลดอัตโนมัติ)\nnpm run start:dev`,
          mockOutput: '[Nest] 18420 - 09/10/2026, 1:45:00 PM LOG [NestApplication] Nest application successfully started'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      filename: 'src/users/users.controller.ts',
      code: `import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';\nimport { UsersService } from './users.service';\n\n@Controller('users')\nexport class UsersController {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Get()\n  findAll() {\n    return this.usersService.findAll();\n  }\n\n  @Get(':id')\n  findOne(@Param('id', ParseIntPipe) id: number) {\n    return this.usersService.findOne(id);\n  }\n}`,
      mockOutput: 'GET /users -> 200 OK [{"id":1,"name":"Alice","role":"Admin"}]',
      explanations: [
        {
          lines: '4',
          explanation: {
            th: '@Controller("users") กำหนด Route Prefix หลักว่าทุก Endpoint ในคลาสนี้จะขึ้นต้นด้วย /users',
            en: '@Controller("users") sets the route prefix so all class endpoints start with /users.'
          }
        },
        {
          lines: '6',
          explanation: {
            th: 'Dependency Injection (DI): NestJS สร้างและส่ง UsersService เข้ามาให้ Controller ใช้ใน Constructor โดยอัตโนมัติ',
            en: 'Dependency Injection: Nest automatically instantiates and injects UsersService via constructor.'
          }
        },
        {
          lines: '13-16',
          explanation: {
            th: '@Param("id", ParseIntPipe) ดึงพารามิเตอร์จาก URL และแปลงจากข้อความเป็นตัวเลข number ให้อัตโนมัติ ป้องกันข้อมูลผิดประเภท',
            en: '@Param with ParseIntPipe validates and automatically transforms URL string to integer.'
          }
        }
      ]
    },
    demoType: 'nestjs-api',
    exercises: [
      {
        id: 'ex-nest-route',
        title: {
          th: 'แบบฝึกหัด: สร้าง NestJS Endpoint GET /health',
          en: 'Exercise: Create NestJS Endpoint GET /health'
        },
        instructions: {
          th: 'เขียน Controller เมธอดชื่อ checkHealth() พร้อมใส่ Decorator @Get("health") ให้คืนค่า { status: "ok" }',
          en: 'Write a controller method checkHealth() with decorator @Get("health") returning { status: "ok" }.'
        },
        starterCode: `@Get('health')\ncheckHealth() {\n  // return อ็อบเจกต์ที่นี่\n}`,
        solutionCode: `@Get('health')\ncheckHealth() {\n  return { status: "ok" };\n}`,
        language: 'typescript'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ @Injectable() ที่ Service หรือลืมลงทะเบียนใน Module providers',
          en: 'Forgetting @Injectable() on Service or omitting it from Module providers'
        },
        why: {
          th: 'NestJS อาศัย IoC Container หากลืมลงทะเบียน จะเกิดข้อผิดพลาด "Nest can\'t resolve dependencies of UsersController"',
          en: 'Nest’s IoC container cannot inject unregistered dependencies, throwing dependency resolution errors.'
        },
        solution: {
          th: 'ใส่ @Injectable() บนหัวคลาส Service เสมอ และเพิ่มชื่อ Service นั้นใน array providers ของ Module',
          en: 'Ensure @Injectable() decorates the service class and register it in the module’s providers array.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-nest-01-1',
        question: {
          th: 'ใน NestJS ส่วนใดทำหน้าที่รับผิดชอบ Business Logic และการติดต่อฐานข้อมูล?',
          en: 'In NestJS, which component is responsible for business logic and data access?'
        },
        options: [
          { id: 'a', text: { th: 'Controller', en: 'Controller' } },
          { id: 'b', text: { th: 'Service / Provider', en: 'Service / Provider' } },
          { id: 'c', text: { th: 'CSS File', en: 'CSS File' } },
          { id: 'd', text: { th: 'HTML Tag', en: 'HTML Tag' } }
        ],
        correctOptionId: 'b',
        explanation: {
          th: 'Controller มีหน้าที่รับ Request และส่ง Response เท่านั้น ส่วนตรรกะการทำงาน (Business Logic) ต้องอยู่ใน Service เสมอ',
          en: 'Controllers handle HTTP request/response routing, while business rules must reside in Services.'
        }
      }
    ],
    summary: {
      th: [
        'NestJS คือ Enterprise Framework ฝั่ง Node.js ที่เขียนด้วย TypeScript',
        'Module ทำหน้าที่จัดกลุ่มโค้ด Controller ทำหน้าที่รับ Request และ Service จัดการ Logic',
        'Dependency Injection (DI) ช่วยให้โค้ดแยกส่วนกันอย่างอิสระและเขียน Automated Test ได้ง่าย',
        'NestJS สามารถทำงานร่วมกับ Laravel ในสถาปัตยกรรม Microservices ได้อย่างลงตัว'
      ],
      en: [
        'NestJS brings enterprise architecture and strong TypeScript typing to Node.js.',
        'Modules organize code, Controllers route traffic, and Services encapsulate business logic.',
        'Dependency Injection yields decoupled, testable components.',
        'NestJS pairs seamlessly alongside Laravel in polyglot microservice ecosystems.'
      ]
    }
  },


  'nestjs-02-controllers-routes': {
    id: 'nestjs-02-controllers-routes',
    trackId: 'nestjs',
    category: 'Controllers & Routing',
    level: 8,
    levelLabel: 'Level 8: Controllers',
    durationMinutes: 22,
    title: {
      th: '02 Controllers, Decorators & Routing ใน NestJS',
      en: '02 NestJS Controllers, Decorators & Route Handlers'
    },
    description: {
      th: 'เจาะลึก Controllers ใน NestJS: การใช้งาน Decorators (@Controller, @Get, @Post, @Body, @Param, @Query, @HttpCode), Route Wildcards และ Status Codes',
      en: 'Master NestJS routing: Decorator ergonomics (@Controller, @Get, @Post, @Body, @Param, @Query), route grouping, and HTTP status codes.'
    },
    objectives: {
      th: [
        'สร้าง Controller ด้วยคำสั่ง nest generate controller',
        'เข้าใจหน้าที่ของ Decorators ในการดักจับค่าจาก HTTP Request',
        'รับค่า Route Params ด้วย @Param("id") และ Query Params ด้วย @Query()',
        'ส่งค่า HTTP Status Code กำหนดเองด้วย @HttpCode(HttpStatus.CREATED)'
      ],
      en: [
        'Scaffold controllers using nest generate controller CLI',
        'Master HTTP request decorators (@Body, @Param, @Query, @Headers)',
        'Capture path parameters and query strings safely',
        'Control response status codes explicitly via @HttpCode()'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Controller ใน NestJS คือ "ตัวรับหน้าด่านของเซิร์ฟเวอร์" ทำหน้าที่คอยฟังว่ามีใครส่งคำขอ HTTP เข้ามาที่ URL ไหน แล้วหยิบข้อมูลจาก Body หรือ Param ส่งต่อไปให้ Service ประมวลผล',
        en: 'NestJS Controllers handle incoming HTTP requests and return responses to the client, mapping routes to handler methods via expressive decorators.'
      },
      whyUseIt: {
        th: 'Decorators ของ TypeScript ทำให้โค้ดอ่านง่ายและชัดเจนมาก ไม่ต้องเขียนฟังก์ชันดึงค่าจาก req.body หรือ req.params เอง และระบุ HTTP Method ได้ในบรรทัดเดียว',
        en: 'TypeScript decorators eliminate manual boilerplate like req.params or req.body extraction, providing declarative and self-documenting routing contracts.'
      },
      whenToUse: {
        th: 'ใช้ในการสร้าง REST API ทุก Endpoint ของ NestJS',
        en: 'Essential for defining every REST API endpoint across the enterprise application.'
      },
      howItWorks: {
        th: '@Controller("employees") กำหนด Prefix ของ URL -> เมื่อมีคำขอ GET /employees/123 เข้ามา NestJS แมปเข้ากับเมธอดที่มี @Get(":id") และหยิบตัวเลข 123 ส่งเข้า @Param("id") ให้อัตโนมัติ',
        en: '@Controller specifies route prefix -> Incoming request matches decorated HTTP verb handler -> NestJS resolves parameters and executes method.'
      }
    },
    diagram: {
      title: {
        th: 'การแมปคำขอ HTTP สู่ Controller Method ใน NestJS',
        en: 'NestJS Route Mapping Execution Flow'
      },
      flow: [
        { title: '1. HTTP Request', sub: 'POST /employees + JSON Body', color: 'blue' },
        { title: '2. Route Matcher', sub: 'สแกนหา @Controller("employees") และ @Post()', color: 'purple' },
        { title: '3. Parameter Binding', sub: '@Body() createDto: CreateEmployeeDto', color: 'emerald' },
        { title: '4. Method Execution', sub: 'this.employeesService.create(createDto)', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Controller ด้วย Nest CLI',
          en: 'Generate Controller via CLI'
        },
        content: {
          th: 'สั่ง nest g controller employees จะได้ไฟล์ employees.controller.ts',
          en: 'Run nest g controller employees to scaffold controller and spec files automatically.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียน Route Decorators สำหรับ CRUD',
          en: 'Implement Route Decorators'
        },
        content: {
          th: 'ใช้ @Get(), @Post(), @Put(":id"), @Delete(":id") ในคลาส Controller',
          en: 'Decorate methods with @Get(), @Post(), @Put(":id"), and @Delete(":id") for complete REST endpoints.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from "@nestjs/common";\nimport { EmployeesService } from "./employees.service";\nimport { CreateEmployeeDto } from "./dto/create-employee.dto";\n\n@Controller("employees")\nexport class EmployeesController {\n  constructor(private readonly employeesService: EmployeesService) {}\n\n  @Get()\n  async findAll() {\n    return this.employeesService.findAll();\n  }\n\n  @Get(":id")\n  async findOne(@Param("id", ParseIntPipe) id: number) {\n    return this.employeesService.findOne(id);\n  }\n\n  @Post()\n  @HttpCode(HttpStatus.CREATED)\n  async create(@Body() createEmployeeDto: CreateEmployeeDto) {\n    return this.employeesService.create(createEmployeeDto);\n  }\n\n  @Delete(":id")\n  async remove(@Param("id", ParseIntPipe) id: number) {\n    return this.employeesService.remove(id);\n  }\n}\n',
      filename: 'src/employees/employees.controller.ts',
      mockOutput: 'NestJS EmployeesController ready on /employees'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ ParseIntPipe ใน @Param("id") ทำให้ค่า id กลายเป็น string แทนที่จะเป็น number',
          en: 'Forgetting ParseIntPipe on @Param("id"), leaving parameters as raw strings'
        },
        why: {
          th: 'URL Parameter ที่เข้ามาในเบราว์เซอร์จะเป็น string เสมอ หากนำไป query ใน Database โดยตรง อาจเกิดปัญหา Type Mismatch ได้',
          en: 'HTTP URL path segments arrive as strings; passing unparsed strings into numeric database queries causes typing defects.'
        },
        badCode: '@Get(":id")\nfindOne(@Param("id") id: number) {\n  // ❌ แท้จริงแล้ว id มีค่าเป็น string "123"\n}',
        goodCode: '@Get(":id")\nfindOne(@Param("id", ParseIntPipe) id: number) {\n  // ✓ ปลอดภัย: แปลงเป็น number และคืน 400 Bad Request ถ้าส่งตัวอักษรมา\n}',
        solution: {
          th: 'ใช้ ParseIntPipe ใน @Param เสมอเมื่อต้องการรับตัวเลข ID',
          en: 'Always bind ParseIntPipe to numeric route parameters.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-nest-02-1',
        question: {
          th: 'ใน NestJS Decorator ใดใช้สำหรับดักจับ JSON Payload ที่ส่งมาใน Request Body?',
          en: 'Which decorator in NestJS extracts the parsed JSON body payload?'
        },
        options: [
          { id: 'a', text: { th: '@Body()', en: '@Body()' } },
          { id: 'b', text: { th: '@Param()', en: '@Param()' } },
          { id: 'c', text: { th: '@Query()', en: '@Query()' } },
          { id: 'd', text: { th: '@Header()', en: '@Header()' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: '@Body() ใช้ดึงข้อมูลทั้งหมดหรือเฉพาะฟิลด์จาก HTTP Request Body เข้าสู่ตัวแปรใน Controller Method',
          en: '@Body() extracts the incoming request payload and binds it to a typed DTO parameter.'
        }
      }
    ],
    summary: {
      th: [
        'Controllers ใน NestJS จัดการคำขอ HTTP ผ่าน Decorators ที่อ่านง่ายและเป็นระเบียบ',
        'ใช้ @Param, @Query, @Body เพื่อดึงข้อมูลจาก Request อย่างแม่นยำ',
        'ใช้ Pipes เช่น ParseIntPipe เพื่อแปลง Type ข้อมูลอัตโนมัติก่อนเข้าสู่ Method'
      ],
      en: [
        'NestJS controllers orchestrate incoming HTTP routes via declarative decorators.',
        'Leverage @Param, @Query, and @Body for clean parameter extraction.',
        'Use built-in validation pipes like ParseIntPipe for robust type casting and input guards.'
      ]
    }
  },

  'nestjs-03-services-di': {
    id: 'nestjs-03-services-di',
    trackId: 'nestjs',
    category: 'Services & DI',
    level: 8,
    levelLabel: 'Level 8: Dependency Injection',
    durationMinutes: 24,
    title: {
      th: '03 Services, Providers & Dependency Injection ใน NestJS',
      en: '03 NestJS Services, Providers & Dependency Injection'
    },
    description: {
      th: 'เจาะลึกระบบ Dependency Injection (DI) และ Inversion of Control (IoC) ของ NestJS: คลาส @Injectable(), การลงทะเบียนใน providers array, Constructor Injection, และการเขียน Unit Test',
      en: 'Master the NestJS Inversion of Control (IoC) container: @Injectable() providers, module encapsulation, constructor injection, and mock-based unit testing.'
    },
    objectives: {
      th: [
        'เข้าใจหลักการทำงานของ @Injectable() Provider ใน NestJS',
        'ฉีด Service เข้า Controller ผ่าน Constructor Dependency Injection',
        'กำหนดความสัมพันธ์ใน Module (providers, exports, imports)',
        'แชร์ Service ข้าม Module อย่างถูกต้อง'
      ],
      en: [
        'Understand @Injectable() provider lifecycles in the IoC container',
        'Inject services into controllers via constructor dependency injection',
        'Configure module provider boundaries (providers, exports, imports)',
        'Share services across module boundaries cleanly'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Service ใน NestJS คือ "ห้องเครื่องประมวลผล (Business Logic)" มีหน้าที่จัดการฐานข้อมูล คำนวณเงิน หรือคุยกับ Third-party API โดยมีเครื่องหมาย @Injectable() บ่งบอกว่า NestJS สามารถนำ Service นี้ไปเสียบ (Inject) ให้คลาสอื่นใช้งานได้ทันที',
        en: 'A NestJS Service encapsulates business logic and data persistence. Marked with @Injectable(), it instructs the NestJS runtime to manage its lifecycle inside the IoC container.'
      },
      whyUseIt: {
        th: 'แยกหน้าที่ระหว่างการรับส่งคำขอ (Controller) กับการทำงานจริง (Service) ออกจากกัน ทำให้โค้ดไม่ผูกติดกัน และสามารถจำลอง (Mock) ข้อมูลเพื่อเขียน Unit Test ได้อย่างง่ายดาย',
        en: 'Enforces separation of concerns between HTTP transport and domain logic, allowing services to be independently tested with mocks.'
      },
      whenToUse: {
        th: 'ใช้เมื่อต้องติดต่อฐานข้อมูล คำนวณตรรกะ ส่งอีเมล หรือทำงานที่อยู่นอกเหนือการรับส่ง HTTP',
        en: 'Standard container for all business logic, database queries, caching, and external integrations.'
      },
      howItWorks: {
        th: 'ประกาศ @Injectable() บนคลาส Service -> ใส่ชื่อใน providers ของ Module -> Type-hint ใน Constructor ของ Controller -> NestJS สร้าง Object แบบ Singleton และส่งให้ใช้งานทันที',
        en: 'Decorate service with @Injectable() -> Register in module providers -> Type-hint in constructor -> NestJS IoC instantiates and injects singleton instance.'
      }
    },
    diagram: {
      title: {
        th: 'การทำงานของ Dependency Injection ใน NestJS',
        en: 'NestJS Dependency Injection Flow'
      },
      flow: [
        { title: '1. @Injectable() Service', sub: 'export class EmployeesService { ... }', color: 'blue' },
        { title: '2. Module Providers', sub: 'ลงทะเบียนใน providers: [EmployeesService]', color: 'purple' },
        { title: '3. Constructor Injection', sub: 'constructor(private srv: EmployeesService)', color: 'emerald' },
        { title: '4. IoC Container', sub: 'NestJS สร้าง Singleton Instance และเชื่อมต่อให้อัตโนมัติ', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Service ด้วย Nest CLI',
          en: 'Scaffold Service'
        },
        content: {
          th: 'สั่ง nest g service employees จะได้ employees.service.ts พร้อม @Injectable()',
          en: 'Run nest g service employees to scaffold service class and wire into active module.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียน Business Logic และ Inject ใน Controller',
          en: 'Implement Logic & Inject'
        },
        content: {
          th: 'เขียนเมธอด findAll(), create() ใน Service แล้วฉีดเข้า Controller ผ่าน constructor(private srv: EmployeesService) {}',
          en: 'Define findAll() and create() methods, then inject into controller constructor.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import { Injectable, NotFoundException } from "@nestjs/common";\nimport { CreateEmployeeDto } from "./dto/create-employee.dto";\n\nexport interface Employee { id: number; name: string; department: string; email: string; }\n\n@Injectable()\nexport class EmployeesService {\n  private employees: Employee[] = [\n    { id: 1, name: "Sarah Connor", department: "Security", email: "sarah@cyberdyne.dev" }\n  ];\n\n  async findAll(): Promise<Employee[]> {\n    return this.employees;\n  }\n\n  async findOne(id: number): Promise<Employee> {\n    const emp = this.employees.find(e => e.id === id);\n    if (!emp) throw new NotFoundException(`Employee #${id} not found`);\n    return emp;\n  }\n\n  async create(dto: CreateEmployeeDto): Promise<Employee> {\n    const newEmp: Employee = { id: Date.now(), ...dto };\n    this.employees.push(newEmp);\n    return newEmp;\n  }\n}\n',
      filename: 'src/employees/employees.service.ts',
      mockOutput: 'Injectable EmployeesService active'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ Service ลงใน providers array ของ Module ทำให้เกิด Error "Nest cannot resolve dependencies"',
          en: 'Forgetting to list service in module providers array, causing Nest resolution error'
        },
        why: {
          th: 'NestJS จะไม่สามารถสร้าง Instance ให้ได้หาก Class นั้นไม่ได้ถูกลงทะเบียนใน IoC Container ของ Module',
          en: 'The NestJS IoC container cannot resolve unregistered dependencies unless explicitly declared in providers.'
        },
        badCode: '// ❌ ลืมใส่ใน providers\n@Module({\n  controllers: [EmployeesController],\n  providers: [] // Error!\n})',
        goodCode: '// ✓ ถูกต้อง: ระบุใน providers เสมอ\n@Module({\n  controllers: [EmployeesController],\n  providers: [EmployeesService]\n})',
        solution: {
          th: 'ตรวจสอบเสมอว่า Service ถูกระบุใน providers array ของ Module ที่เรียกใช้',
          en: 'Always ensure the provider is listed inside the module providers array.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-nest-03-1',
        question: {
          th: 'ใน NestJS คลาสใดๆ ที่ต้องการให้ IoC Container จัดการและสามารถฉีดเข้าคลาสอื่นได้ ต้องมี Decorator ใดกำกับ?',
          en: 'Which decorator marks a TypeScript class as a provider managed by NestJS IoC container?'
        },
        options: [
          { id: 'a', text: { th: '@Injectable()', en: '@Injectable()' } },
          { id: 'b', text: { th: '@Service()', en: '@Service()' } },
          { id: 'c', text: { th: '@Provider()', en: '@Provider()' } },
          { id: 'd', text: { th: '@Controller()', en: '@Controller()' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: '@Injectable() แนบ Metadata ที่บอก NestJS ว่าคลาสนี้คือ Provider ที่สามารถสร้างและฉีดผ่าน Dependency Injection ได้',
          en: '@Injectable() attaches metadata informing the Nest compiler that this class can be injected by the IoC container.'
        }
      }
    ],
    summary: {
      th: [
        'Services ทำหน้าที่ดูแล Business Logic และการจัดการข้อมูลอย่างเป็นระเบียบ',
        '@Injectable() ทำให้ Service กลายเป็น Provider ที่ฉีดข้ามคลาสได้',
        'Dependency Injection ช่วยให้โค้ดเป็นอิสระจากกันและเขียน Automated Test ได้ง่าย'
      ],
      en: [
        'Services encapsulate domain logic and persistence workflows.',
        '@Injectable() turns classes into manageable providers in the IoC graph.',
        'Constructor dependency injection promotes loose coupling and effortless unit testing.'
      ]
    }
  },

  'nestjs-04-dto-validation-pipe': {
    id: 'nestjs-04-dto-validation-pipe',
    trackId: 'nestjs',
    category: 'DTO & Validation',
    level: 8,
    levelLabel: 'Level 8: DTO & Validation',
    durationMinutes: 24,
    title: {
      th: '04 DTOs, class-validator & ValidationPipe ใน NestJS',
      en: '04 NestJS Data Transfer Objects & ValidationPipe'
    },
    description: {
      th: 'สร้างระบบตรวจสอบข้อมูลระดับองค์กร: Data Transfer Objects (DTO), การใช้ Decorators จาก class-validator (@IsString, @IsEmail, @Min), และการเปิดใช้ Global ValidationPipe พร้อมจำลองใน NestJS API Simulator',
      en: 'Enterprise input validation: Data Transfer Objects (DTOs), class-validator decorators (@IsString, @IsEmail, @Min), global ValidationPipe, whitelist sanitization, and the interactive NestJS API simulator.'
    },
    objectives: {
      th: [
        'สร้างคลาส DTO (Data Transfer Object) กำหนดรูปแบบข้อมูลที่ยอมรับ',
        'ใช้ Decorator จาก class-validator: @IsNotEmpty, @IsString, @IsEmail, @Min, @IsEnum',
        'เปิดใช้งาน ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })',
        'ทดลองยิงคำขอและดู Response ใน NestJS API Simulator'
      ],
      en: [
        'Design typed Data Transfer Objects (DTOs) for incoming payloads',
        'Apply class-validator decorators: @IsNotEmpty, @IsString, @IsEmail, @Min, @IsEnum',
        'Enable global ValidationPipe with whitelist stripping enabled',
        'Simulate API calls and inspect 400 Bad Request responses in the interactive simulator'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'DTO (Data Transfer Object) คือ "พิมพ์เขียวของข้อมูล" ที่บอกว่าข้อมูลที่ผู้ใช้ส่งเข้ามาต้องมีฟิลด์อะไรบ้าง และ ValidationPipe คือ "เครื่องกรองอัจฉริยะ" ที่จะตัดข้อมูลแปลกปลอมทิ้ง และตอบกลับ Error 400 ทันทีหากข้อมูลไม่ตรงพิมพ์เขียว',
        en: 'A DTO defines the exact contract of data transmitted over the wire, while ValidationPipe validates and sanitizes payloads automatically using class-validator rules.'
      },
      whyUseIt: {
        th: 'ป้องกันการส่งข้อมูลขยะ ข้อมูลผิดประเภท หรือการแอบส่งฟิลด์อันตราย เช่น { "role": "admin" } เข้ามาในระบบ โดยที่เราไม่ต้องเขียน if-else ตรวจสอบข้อมูลเองเลยแม้แต่บรรทัดเดียว',
        en: 'Blocks malformed payloads and malicious field injections (e.g. role: admin) automatically without manual if-statement validation.'
      },
      whenToUse: {
        th: 'ใช้กับทุกคำขอ POST, PUT และ PATCH ใน NestJS',
        en: 'Mandatory on all mutating API endpoints across production NestJS microservices.'
      },
      howItWorks: {
        th: 'ผู้ใช้ยิง POST /employees พร้อม JSON -> ValidationPipe นำ JSON ไปเทียบกับ DTO -> หากตรวจพบผิดกฎ เช่น email ไม่ถูกต้อง จะตอบ 400 Bad Request พร้อมระบุฟิลด์ที่มีปัญหาทันที',
        en: 'Client sends JSON payload -> ValidationPipe maps payload to DTO class -> class-validator inspects rules -> Rejects invalid inputs with 400 Bad Request.'
      }
    },
    diagram: {
      title: {
        th: 'การทำงานของ ValidationPipe และ DTO ใน NestJS',
        en: 'ValidationPipe & DTO Execution Pipeline'
      },
      flow: [
        { title: '1. JSON Request', sub: 'POST /employees + Payload', color: 'blue' },
        { title: '2. ValidationPipe', sub: 'แปลงเป็น CreateEmployeeDto instance', color: 'purple' },
        { title: '3. class-validator', sub: 'สแกน @IsEmail, @IsNotEmpty, @Min', color: 'emerald' },
        { title: '4. Pass or 400 Error', sub: 'หากถูกต้อง ส่งเข้า Controller / หากผิด ส่ง 400 ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้างคลาส DTO พร้อม Decorators',
          en: 'Declare DTO with class-validator'
        },
        content: {
          th: 'สร้าง CreateEmployeeDto พร้อม @IsString(), @IsEmail(), @Min(0)',
          en: 'Create CreateEmployeeDto with annotations: @IsString(), @IsEmail(), @Min(0).'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เปิดใช้งาน ValidationPipe ใน main.ts',
          en: 'Enable Global ValidationPipe'
        },
        content: {
          th: 'app.useGlobalPipes(new ValidationPipe({ whitelist: true }));',
          en: 'Register app.useGlobalPipes(new ValidationPipe({ whitelist: true })); in main.ts.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import { IsString, IsNotEmpty, IsEmail, IsNumber, Min, IsEnum } from "class-validator";\n\nexport enum EmployeeStatus {\n  ACTIVE = "active",\n  PROBATION = "probation",\n  RESIGNED = "resigned"\n}\n\nexport class CreateEmployeeDto {\n  @IsString()\n  @IsNotEmpty({ message: "กรุณาระบุรหัสพนักงาน" })\n  employee_code: string;\n\n  @IsString()\n  @IsNotEmpty()\n  name: string;\n\n  @IsEmail({}, { message: "รูปแบบอีเมลไม่ถูกต้อง" })\n  email: string;\n\n  @IsString()\n  department: string;\n\n  @IsNumber()\n  @Min(0, { message: "เงินเดือนต้องมากกว่าหรือเท่ากับ 0" })\n  salary: number;\n\n  @IsEnum(EmployeeStatus)\n  status: EmployeeStatus;\n}\n',
      filename: 'src/employees/dto/create-employee.dto.ts',
      mockOutput: 'DTO with class-validator decorators ready'
    },
    demoType: 'nestjs-api',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ whitelist: true ใน ValidationPipe ทำให้ฟิลด์แปลกปลอมที่ไม่ได้นิยามใน DTO หลุดรอดเข้าไปในระบบ',
          en: 'Omitting whitelist: true in ValidationPipe, allowing unvetted attributes through'
        },
        why: {
          th: 'ถ้าไม่เปิด whitelist ผู้ไม่หวังดีอาจแอบส่ง { "is_admin": true } เข้ามาและถูกบันทึกลงฐานข้อมูลได้',
          en: 'Without whitelist stripping, malicious attributes like is_admin pass uninhibited to database entities.'
        },
        badCode: '// ❌ รับฟิลด์แปลกปลอมทุกตัวเข้ามา\napp.useGlobalPipes(new ValidationPipe());',
        goodCode: '// ✓ ปลอดภัย: ตัดฟิลด์ที่ไม่ได้นิยามใน DTO ทิ้งทั้งหมดโดยอัตโนมัติ\napp.useGlobalPipes(new ValidationPipe({\n  whitelist: true,\n  forbidNonWhitelisted: true\n}));',
        solution: {
          th: 'เปิด whitelist: true ใน ValidationPipe เสมอในไฟล์ main.ts',
          en: 'Always enforce whitelist: true and forbidNonWhitelisted in global pipe configuration.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-nest-04-1',
        question: {
          th: 'การตั้งค่า whitelist: true ใน NestJS ValidationPipe มีประโยชน์สำคัญอย่างไร?',
          en: 'What is the primary security benefit of setting whitelist: true in NestJS ValidationPipe?'
        },
        options: [
          { id: 'a', text: { th: 'ตัดฟิลด์ข้อมูลที่ไม่ได้นิยามไว้ใน DTO ทิ้งทั้งหมด ป้องกันการแอบส่งข้อมูลแปลกปลอม', en: 'Strips away all payload properties that are not explicitly defined in the DTO class' } },
          { id: 'b', text: { th: 'เปลี่ยนสีธีมของเซิร์ฟเวอร์เป็นสีขาว', en: 'Tints server logs white' } },
          { id: 'c', text: { th: 'ปิดการเชื่อมต่ออินเทอร์เน็ตของทุกคน', en: 'Disconnects internet access' } },
          { id: 'd', text: { th: 'ลบฐานข้อมูลทิ้งเมื่อเริ่มระบบ', en: 'Drops database upon server start' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'whitelist: true จะตัด Property ใดๆ ที่ไม่มี Decorator ใน DTO ทิ้งอัตโนมัติ ป้องกันปัญหา Mass Assignment',
          en: 'whitelist: true strips any un-decorated incoming property from the validated object automatically.'
        }
      }
    ],
    summary: {
      th: [
        'DTO กำหนดสัญญาของข้อมูลที่ยอมรับเข้าสู่ระบบอย่างชัดเจน',
        'class-validator มอบ Decorators ที่หลากหลายเพื่อตรวจสอบความถูกต้อง',
        'คุณสามารถทดสอบการส่งข้อมูลและดู Error 400 ได้ในแท็บ NestJS API Simulator ด้านข้าง!'
      ],
      en: [
        'DTOs establish explicit data contracts for all incoming requests.',
        'class-validator delivers extensive declarative validation decorators.',
        'Test live API requests and trigger 400 Bad Request responses in the adjacent simulator!'
      ]
    }
  },

  'nestjs-05-guards-auth': {
    id: 'nestjs-05-guards-auth',
    trackId: 'nestjs',
    category: 'Security & Guards',
    level: 8,
    levelLabel: 'Level 8: Security',
    durationMinutes: 24,
    title: {
      th: '05 Guards & การตรวจสอบสิทธิ์ด้วย JWT ใน NestJS',
      en: '05 NestJS Guards & JWT Authentication'
    },
    description: {
      th: 'ปกป้องระบบด้วย NestJS Guards: การทำงานของ CanActivate, การตรวจสอบ JWT Bearer Token, การดึง ExecutionContext, และการทำ Role-Based Access Control ด้วย Custom Decorators',
      en: 'Secure endpoints with NestJS Guards: CanActivate interface, JWT Bearer token validation, ExecutionContext traversal, and Role-Based Access Control (RBAC).'
    },
    objectives: {
      th: [
        'เข้าใจสถาปัตยกรรม CanActivate Guard ใน NestJS Request Lifecycle',
        'สร้าง JwtAuthGuard เพื่อป้องกัน Endpoint จากผู้ที่ไม่ได้ล็อกอิน',
        'สร้าง Custom Decorator เช่น @Roles("admin") และ RolesGuard',
        'ดึงข้อมูลผู้ใช้จาก request.user ใน Controller Method'
      ],
      en: [
        'Understand CanActivate guard positioning in the NestJS request lifecycle',
        'Implement JwtAuthGuard to protect routes against unauthenticated requests',
        'Design custom metadata decorators like @Roles() paired with RolesGuard',
        'Extract authenticated user payloads from request.user'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Guards ใน NestJS คือ "ยามเฝ้าประตู" ที่จะตรวจสอบว่าผู้ที่ส่งคำขอเข้ามา มีสิทธิ์เข้าถึง Endpoint นี้หรือไม่ (เช่น มีบัตรผ่าน JWT Token หรือมี Role เป็น Admin หรือไม่) หากไม่มีสิทธิ์ Guard จะตีกลับด้วย 401 Unauthorized หรือ 403 Forbidden ทันที',
        en: 'Guards in NestJS determine whether a given request will be handled by the route handler based on runtime permissions (e.g. valid JWT token, admin role).'
      },
      whyUseIt: {
        th: 'แยกเรื่องการตรวจสอบสิทธิ์ออกจาก Controller เมธอดใน Controller จึงมุ่งเน้นเฉพาะ Business Logic โดยไม่ต้องเขียนโค้ดตรวจเช็ค Token ซ้ำซ้อนในทุกๆ ฟังก์ชัน',
        en: 'Isolates authentication and authorization logic cleanly from controllers, keeping action methods concise.'
      },
      whenToUse: {
        th: 'ใช้กับทุกเส้นทาง API ที่ต้องการการล็อกอิน หรือจำกัดสิทธิ์เฉพาะผู้ดูแลระบบ',
        en: 'Essential on all protected microservice routes, customer portals, and administrative backends.'
      },
      howItWorks: {
        th: 'คำขอเข้ามา -> Guard สกัด Token จาก Header Authorization: Bearer <token> -> ตรวจสอบ Signature -> หากถูกต้อง แนบ user เข้าใน Request และอนุญาตให้ไปต่อ -> หากไม่ถูกต้อง โยน 401 Unauthorized ทันที',
        en: 'Request arrives -> Guard extracts Bearer token -> Validates signature -> Attaches payload to req.user and returns true -> Otherwise throws 401/403.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรการทำงานของ NestJS Guards',
        en: 'NestJS Guard Execution Cycle'
      },
      flow: [
        { title: '1. HTTP Request', sub: 'Header Authorization: Bearer eyJhbGci...', color: 'blue' },
        { title: '2. JwtAuthGuard', sub: 'ตรวจสอบ Signature และความหมดอายุของ Token', color: 'purple' },
        { title: '3. RolesGuard', sub: 'ตรวจสิทธิ์ว่า user.role ตรงกับ @Roles("admin") หรือไม่', color: 'emerald' },
        { title: '4. Controller Method', sub: 'รันโค้ดและส่งข้อมูลกลับผู้ใช้อย่างปลอดภัย', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Guard ด้วย CanActivate Interface',
          en: 'Implement CanActivate Guard'
        },
        content: {
          th: 'สร้างคลาส implements CanActivate และเขียนเมธอด canActivate(context: ExecutionContext): boolean',
          en: 'Create a class implementing CanActivate and write canActivate(context: ExecutionContext): boolean.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'นำ Guard ไปใช้ใน Controller ด้วย @UseGuards()',
          en: 'Apply @UseGuards() Decorator'
        },
        content: {
          th: 'ใส่ @UseGuards(JwtAuthGuard, RolesGuard) บน Controller หรือ Method ที่ต้องการปกป้อง',
          en: 'Annotate target controllers or route handlers with @UseGuards(JwtAuthGuard, RolesGuard).'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";\nimport { JwtService } from "@nestjs/jwt";\n\n@Injectable()\nexport class JwtAuthGuard implements CanActivate {\n  constructor(private jwtService: JwtService) {}\n\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const request = context.switchToHttp().getRequest();\n    const authHeader = request.headers["authorization"];\n\n    if (!authHeader || !authHeader.startsWith("Bearer ")) {\n      throw new UnauthorizedException("ไม่พบ Token ยืนยันตัวตน");\n    }\n\n    const token = authHeader.split(" ")[1];\n    try {\n      const payload = await this.jwtService.verifyAsync(token);\n      request["user"] = payload; // แนบข้อมูลผู้ใช้เข้าสู่ Request\n      return true;\n    } catch {\n      throw new UnauthorizedException("Token ไม่ถูกต้องหรือหมดอายุ");\n    }\n  }\n}\n',
      filename: 'src/auth/guards/jwt-auth.guard.ts',
      mockOutput: 'JwtAuthGuard configured and active'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ใส่ Guard ไว้ใน Controller แต่ลืมส่ง JWT Module เข้าใน Module นั้น',
          en: 'Applying JwtAuthGuard without importing JwtModule into the target module'
        },
        why: {
          th: 'NestJS Dependency Injection จะไม่สามารถหา JwtService ได้ และพ่น Error Dependency Resolution',
          en: 'NestJS IoC cannot resolve JwtService unless JwtModule is registered in module imports.'
        },
        badCode: '// ❌ ลืม import JwtModule ใน AppModule\n@Module({\n  providers: [JwtAuthGuard]\n})',
        goodCode: '// ✓ ถูกต้อง: import JwtModule เข้าสู่ระบบ\n@Module({\n  imports: [JwtModule.register({ secret: "secretKey", signOptions: { expiresIn: "1h" } })],\n  providers: [JwtAuthGuard]\n})',
        solution: {
          th: 'นำเข้า JwtModule หรือ PassportModule ใน Module ที่เกี่ยวข้องเสมอ',
          en: 'Always import and configure JwtModule in your authentication feature module.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-nest-05-1',
        question: {
          th: 'เมธอด canActivate ใน NestJS Guard ต้องส่งคืนค่า (return) อะไรเพื่ออนุญาตให้คำขอผ่านเข้าไปยัง Controller ได้?',
          en: 'What must the canActivate method return in a NestJS Guard to allow request execution?'
        },
        options: [
          { id: 'a', text: { th: 'ส่งคืนค่า boolean true (หรือ Promise/Observable<boolean> ที่เป็น true)', en: 'Returns boolean true (or Promise/Observable resolving to true)' } },
          { id: 'b', text: { th: 'ส่งคืนค่าตัวเลข 0', en: 'Returns integer 0' } },
          { id: 'c', text: { th: 'ส่งคืนค่าสตริง "ALLOW"', en: 'Returns string "ALLOW"' } },
          { id: 'd', text: { th: 'ส่งคืนค่า null', en: 'Returns null' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'เมื่อ canActivate คืนค่า true คำขอจะได้รับอนุญาตให้ทำงานต่อ หากคืนค่า false หรือโยน Exception ทาง NestJS จะปฏิเสธคำขอทันที',
          en: 'canActivate must evaluate to true to permit execution; returning false or throwing errors triggers automatic rejection.'
        }
      }
    ],
    summary: {
      th: [
        'Guards ทำหน้าที่ตรวจสอบสิทธิ์ความปลอดภัยใน NestJS',
        'CanActivate ดักจับคำขอก่อนถึง Controller และตรวจสอบ Token หรือ Roles',
        'การใช้ @UseGuards ช่วยให้ Controller สะอาดและมีความปลอดภัยระดับ Enterprise'
      ],
      en: [
        'Guards encapsulate authentication and authorization gates in NestJS.',
        'CanActivate inspects ExecutionContext and Bearer tokens before reaching controllers.',
        '@UseGuards delivers clean, declarative, enterprise-grade access control.'
      ]
    }
  }

};
