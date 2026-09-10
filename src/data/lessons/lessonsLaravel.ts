import { Lesson } from '../../types';

export const LESSONS_LARAVEL: Record<string, Lesson> = {
  'laravel-01-intro-mvc': {
    id: 'laravel-01-intro-mvc',
    trackId: 'laravel',
    category: 'Laravel Basics',
    level: 2,
    levelLabel: 'Level 2: Laravel Basics',
    durationMinutes: 25,
    title: {
      th: 'Laravel จาก 0 & สถาปัตยกรรม MVC (Model-View-Controller)',
      en: 'Laravel from Zero & The MVC Architecture'
    },
    description: {
      th: 'เริ่มต้นเรียนรู้ Laravel Framework จากศูนย์ เข้าใจโครงสร้างโฟลเดอร์ วงจรชีวิตของ Request และหัวใจของ MVC',
      en: 'Learn Laravel from absolute zero. Understand directory structures, the request lifecycle, and the core MVC pattern.'
    },
    objectives: {
      th: [
        'เข้าใจว่า Laravel คืออะไร และแก้ปัญหาอะไรให้ Developer',
        'เข้าใจโครงสร้างสถาปัตยกรรม MVC (Model - View - Controller)',
        'เข้าใจโครงสร้างโฟลเดอร์หลัก เช่น app/, routes/, config/, database/',
        'รู้จัก Artisan CLI เครื่องมือคู่ใจนักพัฒนา Laravel'
      ],
      en: [
        'Understand what Laravel is and the problems it solves',
        'Master the MVC (Model-View-Controller) design pattern',
        'Navigate essential project directories (app/, routes/, config/, database/)',
        'Learn Artisan CLI commands used daily by Laravel developers'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Laravel คือ PHP Web Framework ระดับโลกที่มีเครื่องมือครบครัน (Batteries-Included) เช่น Routing, Database ORM (Eloquent), Authentication, Queue, Caching และ Security พร้อมใช้งาน',
        en: 'Laravel is a world-class PHP web framework featuring a batteries-included ecosystem: Routing, ORM (Eloquent), Auth, Queues, Caching, and Security built right in.'
      },
      whyUseIt: {
        th: 'การเขียน PHP ดั้งเดิม (Plain PHP) ต้องเขียนระบบเชื่อมฐานข้อมูล ตรวจสอบสิทธิ์ และระบบ Route เองทั้งหมดซึ่งใช้เวลานานและเสี่ยงต่อช่องโหว่ความปลอดภัย Laravel มอบโครงสร้างมาตรฐานระดับสากลให้ทันที',
        en: 'Writing raw PHP requires manually building DB wrappers, authentication, and routing from scratch, which is error-prone. Laravel provides standardized, secure, enterprise-grade scaffolding out of the box.'
      },
      whenToUse: {
        th: 'ใช้เมื่อต้องการสร้างเว็บแอปพลิเคชัน, REST API, ระบบ SaaS, ระบบ E-commerce หรือระบบหลังบ้านขนาดใหญ่',
        en: 'Used for building robust web applications, REST APIs, SaaS platforms, e-commerce engines, and enterprise backends.'
      },
      howItWorks: {
        th: 'เมื่อมีคำขอ (Request) เข้ามา -> เข้าสู่ routes/web.php -> ส่งต่อให้ Controller -> Controller เรียก Model ไปดึงข้อมูลจาก Database -> Controller ส่งข้อมูลไปแสดงผลที่ View (หรือ Inertia Component)',
        en: 'Incoming Request -> routes/web.php -> Dispatched to Controller -> Controller queries Model (Database) -> Returns data rendered through View or Inertia React Page.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรการทำงาน MVC ใน Laravel',
        en: 'Laravel MVC Request Lifecycle'
      },
      flow: [
        { title: '1. Route', sub: 'Route::get("/users")', color: 'blue' },
        { title: '2. Controller', sub: 'UserController@index', color: 'purple' },
        { title: '3. Model', sub: 'User::all() (DB)', color: 'emerald' },
        { title: '4. View / Inertia', sub: 'Inertia::render("Users")', color: 'cyan' }
      ],
      type: 'layers'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้างโปรเจกต์ Laravel แรกด้วย Composer',
          en: 'Creating a New Laravel Project with Composer'
        },
        content: {
          th: 'ใช้คำสั่ง Composer เพื่อดาวน์โหลด Skeleton ของ Laravel และตั้งค่าระบบเริ่มต้นอัตโนมัติ',
          en: 'Use Composer CLI to download Laravel skeleton and configure initial project dependencies automatically.'
        },
        codeSnippet: {
          language: 'bash',
          code: `# สร้างโปรเจกต์ใหม่ชื่อ academy-app\ncomposer create-project laravel/laravel academy-app\n\n# เข้าสู่โฟลเดอร์โปรเจกต์\ncd academy-app\n\n# รัน Dev Server ด้วย Artisan\nphp artisan serve`,
          mockOutput: 'Starting Laravel development server: http://127.0.0.1:8000'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'โครงสร้างโฟลเดอร์หลักที่ต้องรู้',
          en: 'Essential Directory Structure'
        },
        content: {
          th: '• app/Http/Controllers: เก็บไฟล์ Controller\n• app/Models: เก็บไฟล์ Model (Eloquent)\n• routes/web.php: กำหนด URL Routes\n• database/migrations: ไฟล์สร้างตาราง Database\n• resources/js: ที่อยู่ของไฟล์ React (เมื่อใช้ Inertia)',
          en: '• app/Http/Controllers: Controller files\n• app/Models: Eloquent model classes\n• routes/web.php: Web endpoint routing\n• database/migrations: Schema table migrations\n• resources/js: React component source files'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      filename: 'routes/web.php',
      code: `<?php\n\nuse Illuminate\\Support\\Facades\\Route;\nuse App\\Http\\Controllers\\UserController;\n\n// เส้นทางหลัก แสดงหน้าแรก\nRoute::get('/', function () {\n    return view('welcome');\n});\n\n// เส้นทางเรียก Controller method index\nRoute::get('/users', [UserController::class, 'index']);`,
      mockOutput: 'GET /users -> 200 OK (UserController::index executed)',
      explanations: [
        {
          lines: '3-4',
          explanation: {
            th: 'นำเข้า Facade Route และ Class UserController เพื่อใช้งานในระบบ',
            en: 'Imports Route facade and UserController class into the route definition file.'
          }
        },
        {
          lines: '7-9',
          explanation: {
            th: 'Route::get("/", ...) ดักจับ HTTP GET ที่ URL หน้าแรกสุด แล้ว return view("welcome")',
            en: 'Route::get("/", ...) listens for HTTP GET at root / and renders the welcome view.'
          }
        },
        {
          lines: '12',
          explanation: {
            th: 'เมื่อมีคนเข้า URL /users ให้เรียกเมธอด index ใน UserController ทันที',
            en: 'When someone accesses /users, Laravel automatically instantiates UserController and invokes its index() method.'
          }
        }
      ]
    },
    demoType: 'none',
    exercises: [
      {
        id: 'ex-lar-01',
        title: {
          th: 'แบบฝึกหัด: ประกาศ Route GET /about',
          en: 'Exercise: Declare Route GET /about'
        },
        instructions: {
          th: 'เขียน Route ใน Laravel สำหรับ URL /about ให้ส่งข้อความคืนว่า "About Us Page"',
          en: 'Write a Laravel route for URL /about returning the string "About Us Page".'
        },
        starterCode: `Route::get('/about', function () {\n    // เขียน return ข้อความที่นี่\n});`,
        solutionCode: `Route::get('/about', function () {\n    return "About Us Page";\n});`,
        language: 'php'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ลืม use namespace ของ Controller ด้านบนไฟล์ routes/web.php',
          en: 'Forgetting to import the Controller namespace at top of routes/web.php'
        },
        why: {
          th: 'หากไม่ use App\\Http\\Controllers\\UserController; ระบบจะไม่รู้จักคลาส UserController และฟ้อง Class not found',
          en: 'Without the use statement, PHP cannot resolve the UserController class and throws Class Not Found.'
        },
        badCode: `Route::get('/users', [UserController::class, 'index']); // โดยไม่มี use ด้านบน`,
        goodCode: `use App\\Http\\Controllers\\UserController;\n\nRoute::get('/users', [UserController::class, 'index']);`,
        solution: {
          th: 'เขียนคำสั่ง use ด้านบนสุดของไฟล์เสมอ หรือใช้ IDE แนะนำ auto-import',
          en: 'Always include the use statement at the top of the file.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-01-1',
        question: {
          th: 'ในสถาปัตยกรรม MVC ตัวอักษร "C" ย่อมาจากอะไร และมีหน้าที่อะไร?',
          en: 'In MVC, what does "C" stand for and what is its role?'
        },
        options: [
          { id: 'a', text: { th: 'Connector ทำหน้าที่ต่อสายแลน', en: 'Connector: Connects ethernet cables' } },
          { id: 'b', text: { th: 'Controller ทำหน้าที่รับ Request และประสานงานระหว่าง Model กับ View', en: 'Controller: Handles incoming requests and coordinates between Model and View' } },
          { id: 'c', text: { th: 'Computer ทำหน้าที่เปิดเครื่อง', en: 'Computer: Boots up machine' } },
          { id: 'd', text: { th: 'Calculator คำนวณเลขอย่างเดียว', en: 'Calculator: Math only' } }
        ],
        correctOptionId: 'b',
        explanation: {
          th: 'Controller คือตัวควบคุมที่รับ Request จากผู้ใช้ เรียกใช้ Model แล้วส่งผลลัพธ์ไปที่ View',
          en: 'Controller acts as orchestrator: receives requests, interacts with models, and passes results to views.'
        }
      }
    ],
    summary: {
      th: [
        'Laravel เป็น Full-Stack Framework ที่มีระบบนิเวศสมบูรณ์แบบ',
        'MVC (Model-View-Controller) ช่วยแยกหน้าที่ของโค้ดให้ดูแลรักษาง่าย',
        'ไฟล์ routes/web.php คือประตูทางเข้าของทุก URL คำขอในระบบ',
        'Artisan CLI เป็นเครื่องมือทรงพลังที่ช่วยสร้างไฟล์และรันงานต่างๆ ได้อย่างรวดเร็ว'
      ],
      en: [
        'Laravel is an enterprise-grade framework with a comprehensive developer ecosystem.',
        'MVC decouples business logic, data models, and presentation for optimal maintainability.',
        'routes/web.php serves as the entry gate mapping URLs to specific actions.',
        'Artisan CLI is the command-line companion for scaffolding and running tasks.'
      ]
    }
  },

  'laravel-02-routing-controllers': {
    id: 'laravel-02-routing-controllers',
    trackId: 'laravel',
    category: 'Laravel Basics',
    level: 2,
    levelLabel: 'Level 2: Laravel Basics',
    durationMinutes: 25,
    title: {
      th: 'Laravel Routing & Controllers อย่างละเอียด',
      en: 'Laravel Routing & Controllers In-Depth'
    },
    description: {
      th: 'เรียนรู้การกำหนด Route Parameter, Route Group, Resource Controller และ Dependency Injection ใน Method',
      en: 'Master route parameters, route grouping, resource controllers, and controller method dependency injection.'
    },
    objectives: {
      th: [
        'สร้าง Route รับค่า Parameter เช่น /users/{id}',
        'สร้าง Controller ด้วย php artisan make:controller',
        'เข้าใจ 7 Standard Methods ของ Resource Controller (index, create, store, show, edit, update, destroy)',
        'ส่งข้อมูลผ่าน Controller สู่ Response อย่างถูกต้อง'
      ],
      en: [
        'Create routes with dynamic parameters such as /users/{id}',
        'Scaffold controllers using php artisan make:controller',
        'Master the 7 RESTful actions of Resource Controllers',
        'Inject dependencies and return clean responses'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Routing คือ "ป้ายบอกทาง" ที่บอกว่าเมื่อผู้ใช้เปิด URL ไหน ให้โปรแกรมวิ่งไปหา Controller ไหน ส่วน Controller คือ "พนักงานต้อนรับ" ที่รับข้อมูลมาตรวจสอบและส่งงานต่อ',
        en: 'Routing is the road sign telling Laravel which controller action should execute for a specific URL, while the Controller acts as the handler processing inputs and orchestrating responses.'
      },
      whyUseIt: {
        th: 'หากใส่โค้ดประมวลผลทั้งหมดลงในไฟล์ routes ไฟล์จะยาวเป็นหมื่นบรรทัดและเละเทะ การย้าย Logic ไปไว้ที่ Controller ช่วยให้โค้ดเป็นระเบียบ เป็นสัดส่วน และนำกลับมาใช้ซ้ำได้',
        en: 'Putting logic in routes causes chaos. Separating logic into dedicated Controller classes ensures clean, reusable, testable code.'
      },
      whenToUse: {
        th: 'ใช้ในทุก Endpoint ของระบบ ไม่ว่าจะเป็นการดึงรายชื่อ การบันทึกข้อมูลฟอร์ม หรือการลบข้อมูล',
        en: 'Used in every endpoint of your application: lists, detail pages, form submissions, and deletes.'
      },
      howItWorks: {
        th: 'คำขอ GET /users/5 -> Laravel สกัด {id} ออกมาเป็นเลข 5 -> เรียก UserController@show($id) -> ส่ง Response กลับไปยังไคลเอนต์',
        en: 'GET /users/5 -> Laravel extracts {id} as 5 -> Calls UserController@show($id) -> Returns formatted response.'
      }
    },
    diagram: {
      title: {
        th: 'โครงสร้าง RESTful Resource Controller ใน Laravel',
        en: 'RESTful Resource Controller Architecture'
      },
      flow: [
        { title: 'GET /employees', sub: 'index() - แสดงรายการทั้งหมด', color: 'blue' },
        { title: 'POST /employees', sub: 'store() - บันทึกข้อมูลใหม่', color: 'emerald' },
        { title: 'GET /employees/{id}', sub: 'show($id) - ดูข้อมูลรายคน', color: 'purple' },
        { title: 'PUT /employees/{id}', sub: 'update($id) - อัปเดตข้อมูล', color: 'amber' },
        { title: 'DELETE /employees/{id}', sub: 'destroy($id) - ลบข้อมูล', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Resource Controller ด้วย Artisan',
          en: 'Scaffold Resource Controller with Artisan'
        },
        content: {
          th: 'ใช้คำสั่ง Artisan เพียงคำสั่งเดียว จะได้ Controller ที่มีครบทั้ง 7 Method มาตรฐานทันที',
          en: 'Run one Artisan command to instantly generate a controller containing all 7 standard RESTful actions.'
        },
        codeSnippet: {
          language: 'bash',
          code: `php artisan make:controller EmployeeController --resource`,
          mockOutput: 'Controller [app/Http/Controllers/EmployeeController.php] created successfully.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'ผูก Resource Route ใน routes/web.php',
          en: 'Register Resource Route in routes/web.php'
        },
        content: {
          th: 'ใช้ Route::resource เพียงบรรทัดเดียว จะสร้างทั้ง 7 URL ให้โดยอัตโนมัติ',
          en: 'One line Route::resource automatically wires up all 7 RESTful routes under the hood.'
        },
        codeSnippet: {
          language: 'php',
          code: `use App\\Http\\Controllers\\EmployeeController;\n\nRoute::resource('employees', EmployeeController::class);`,
          mockOutput: 'Generated: GET/POST /employees, GET/PUT/DELETE /employees/{id}'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      filename: 'app/Http/Controllers/EmployeeController.php',
      code: `<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse App\\Models\\Employee;\n\nclass EmployeeController extends Controller\n{\n    // แสดงรายชื่อพนักงานทั้งหมด\n    public function index()\n    {\n        $employees = Employee::orderBy('id', 'desc')->paginate(10);\n        return response()->json($employees);\n    }\n\n    // แสดงพนักงานรายคนตาม ID\n    public function show($id)\n    {\n        $employee = Employee::findOrFail($id);\n        return response()->json($employee);\n    }\n}`,
      mockOutput: '{"current_page":1,"data":[{"id":1,"name":"John Doe","dept":"IT"}]}',
      explanations: [
        {
          lines: '11-15',
          explanation: {
            th: 'เมธอด index() ดึงข้อมูลพนักงานเรียงจากใหม่สุด และแบ่งหน้าละ 10 รายการด้วย paginate()',
            en: 'index() fetches employees descending by ID with 10 records per page via paginate().'
          }
        },
        {
          lines: '18-22',
          explanation: {
            th: 'findOrFail($id) จะค้นหา ID นั้น ถ้าไม่พบจะส่งกลับ HTTP 404 Not Found ให้อัตโนมัติ ป้องกัน Error พัง',
            en: 'findOrFail($id) queries by primary key; if absent, it throws a 404 response immediately.'
          }
        }
      ]
    },
    demoType: 'employee-crud',
    exercises: [
      {
        id: 'ex-lar-route-param',
        title: {
          th: 'แบบฝึกหัด: Route Parameter {id}',
          en: 'Exercise: Route Parameter {id}'
        },
        instructions: {
          th: 'สร้าง Route GET /products/{id} ให้รับ parameter $id แล้วส่งกลับข้อความ "Viewing product ID: " ต่อด้วยเลข id',
          en: 'Create a GET route for /products/{id} that returns "Viewing product ID: " followed by the id.'
        },
        starterCode: `Route::get('/products/{id}', function ($id) {\n    // return ข้อความ\n});`,
        solutionCode: `Route::get('/products/{id}', function ($id) {\n    return "Viewing product ID: " . $id;\n});`,
        language: 'php'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ใช้ find($id) แทน findOrFail($id) แล้วไม่เช็คค่า null',
          en: 'Using find($id) instead of findOrFail($id) without null checks'
        },
        why: {
          th: 'หากค้นหา ID ที่ไม่มีอยู่ find() จะได้ null แล้วเมื่อนำไปเรียกต่อเช่น $emp->name จะเกิด Error "Attempt to read property on null"',
          en: 'find() returns null when missing. Accessing $emp->name on null crashes with fatal error.'
        },
        solution: {
          th: 'ใช้ findOrFail($id) เสมอ เพื่อให้ Laravel ดักจับเป็น 404 อย่างปลอดภัย',
          en: 'Prefer findOrFail($id) which automatically produces clean 404 Not Found responses.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-02-1',
        question: {
          th: 'คำสั่ง Artisan ใดใช้สร้าง Resource Controller ใน Laravel?',
          en: 'Which Artisan command generates a Resource Controller?'
        },
        options: [
          { id: 'a', text: { th: 'php artisan new:controller Name', en: 'php artisan new:controller Name' } },
          { id: 'b', text: { th: 'php artisan make:controller Name --resource', en: 'php artisan make:controller Name --resource' } },
          { id: 'c', text: { th: 'php artisan build:api Name', en: 'php artisan build:api Name' } },
          { id: 'd', text: { th: 'npm run make:controller', en: 'npm run make:controller' } }
        ],
        correctOptionId: 'b',
        explanation: {
          th: 'การใส่ธง --resource จะสร้างเมธอดทั้ง 7 ได้แก่ index, create, store, show, edit, update, destroy ครบชุด',
          en: 'The --resource flag creates all 7 restful action stubs automatically.'
        }
      }
    ],
    summary: {
      th: [
        'Route Parameter ช่วยให้ URL ยืดหยุ่นรับค่า ID หรือ Slug ได้',
        'Resource Controller เป็นระเบียบมาตรฐานระดับสากลในการจัดโครงสร้าง CRUD',
        'findOrFail() ช่วยป้องกันข้อผิดพลาด Null Pointer ได้อย่างมีประสิทธิภาพ',
        'Controller สามารถแปลงข้อมูลเป็น JSON หรือส่งผ่านสู่ Inertia ได้อย่างง่ายดาย'
      ],
      en: [
        'Route parameters enable flexible dynamic endpoints using IDs or slugs.',
        'Resource controllers establish global convention for RESTful CRUD actions.',
        'findOrFail() protects against null pointer errors with clean 404 responses.',
        'Controllers return JSON or render Inertia React components with zero friction.'
      ]
    }
  },

  'laravel-03-request-validation': {
    id: 'laravel-03-request-validation',
    trackId: 'laravel',
    category: 'Request & Security',
    level: 3,
    levelLabel: 'Level 3: Validation',
    durationMinutes: 20,
    title: {
      th: '03 การตรวจสอบข้อมูลด้วย Form Request (Validation)',
      en: '03 Form Request Validation & Sanitization'
    },
    description: {
      th: 'ปกป้องแอปพลิเคชันจากข้อมูลขยะและแฮกเกอร์ด้วย Form Request Validation แยกตรรกะการตรวจสอบออกจาก Controller อย่างสะอาดตา',
      en: 'Protect your application against malformed payloads and malicious input using dedicated Form Request classes and validation rules.'
    },
    objectives: {
      th: [
        'สร้าง Form Request ด้วยคำสั่ง php artisan make:request',
        'เข้าใจกฎ Validation สำคัญ: required, string, email, unique, min, max',
        'กำหนดข้อความแจ้งเตือนภาษาไทยใน messages()',
        'รับเฉพาะข้อมูลที่ผ่านการตรวจสอบด้วย $request->validated()'
      ],
      en: [
        'Generate Form Request classes with artisan make:request',
        'Master validation rules: required, string, email, unique, numeric',
        'Customize bilingual error messages in messages()',
        'Retrieve safely sanitized data via $request->validated()'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Form Request คือ "เจ้าหน้าที่ตรวจค้นก่อนเข้าประตู" ของ Laravel ที่จะสแกนข้อมูลทุกตัวที่ส่งมาจากฟอร์มหรือ API หากไม่ถูกต้องตามกฎ จะตีกลับทันทีพร้อม Error Message โดยที่โค้ดใน Controller ยังไม่ต้องเริ่มรัน',
        en: 'A Form Request acts as Laravel security checkpoint, vetting every incoming request field before controller execution and rejecting invalid payloads with standardized errors.'
      },
      whyUseIt: {
        th: 'ช่วยป้องกันข้อมูลผิดพลาด ไม่ให้ข้อมูลขยะถูกบันทึกลงฐานข้อมูล และช่วยให้ Controller สะอาด (Thin Controller) ไม่บวมด้วยโค้ดตรวจสอบเงื่อนไขนับร้อยบรรทัด',
        en: 'Prevents data corruption, keeps controllers thin and clean, and isolates validation rules into testable, dedicated classes.'
      },
      whenToUse: {
        th: 'ใช้กับทุกคำขอ HTTP ที่มีการส่งข้อมูลเพื่อบันทึกหรือแก้ไข เช่น ฟอร์มสมัครสมาชิก ฟอร์มพนักงาน และการทำธุรกรรม',
        en: 'Mandatory on every state-mutating POST, PUT, and PATCH endpoint receiving user inputs.'
      },
      howItWorks: {
        th: 'ผู้ใช้กด Submit -> Laravel สั่งรัน rules() ใน StoreEmployeeRequest -> หากผ่าน Controller จะรับข้อมูลที่ปลอดภัยผ่าน $request->validated() -> หากไม่ผ่าน Laravel ส่ง Response 422 Unprocessable Entity กลับหน้าเว็บทันที',
        en: 'User submits form -> Laravel invokes rules() -> If valid, controller receives $request->validated() -> If invalid, triggers 422 HTTP response with error dictionary.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรการตรวจสอบข้อมูล Form Request ใน Laravel',
        en: 'Laravel Form Request Validation Flow'
      },
      flow: [
        { title: '1. User Submit', sub: 'POST /employees + JSON Payload', color: 'blue' },
        { title: '2. Form Request', sub: 'สแกน rules() ตรวจสอบ required, email, unique', color: 'purple' },
        { title: '3. Pass / Fail', sub: 'ถ้าไม่ผ่าน ส่ง 422 ทันที / ถ้าผ่าน ส่งเข้า Controller', color: 'emerald' },
        { title: '4. Controller Action', sub: '$data = $request->validated();', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้างคลาส Form Request ด้วย Artisan',
          en: 'Generate Dedicated Form Request'
        },
        content: {
          th: 'รันคำสั่ง php artisan make:request StoreEmployeeRequest จะได้ไฟล์ใน app/Http/Requests/',
          en: 'Run php artisan make:request StoreEmployeeRequest to scaffold a validation class inside app/Http/Requests/.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'กำหนดกฎเกณฑ์ใน rules() และใช้ใน Controller',
          en: 'Declare Rules and Type-hint in Controller'
        },
        content: {
          th: 'กำหนดคอลัมน์และกฎเกณฑ์ จากนั้นนำไป Type-hint ใน Method ของ Controller เช่น public function store(StoreEmployeeRequest $request)',
          en: 'Define column constraints in rules(), then type-hint the class directly into the controller action signature.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Http\\Requests;\n\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass StoreEmployeeRequest extends FormRequest\n{\n    public function authorize(): bool\n    {\n        return true; // อนุญาตให้ตรวจสอบข้อมูล\n    }\n\n    public function rules(): array\n    {\n        return [\n            "employee_code" => "required|string|unique:employees,employee_code|max:20",\n            "first_name"    => "required|string|max:100",\n            "last_name"     => "required|string|max:100",\n            "email"         => "required|email|unique:employees,email",\n            "department"    => "required|string",\n            "position"      => "required|string",\n            "salary"        => "required|numeric|min:0",\n        ];\n    }\n}\n',
      filename: 'app/Http/Requests/StoreEmployeeRequest.php',
      mockOutput: 'Validation rules defined successfully'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ใช้ $request->all() บันทึกลงฐานข้อมูลแทนที่จะใช้ $request->validated()',
          en: 'Persisting with $request->all() instead of $request->validated()'
        },
        why: {
          th: '$request->all() นำข้อมูลทุกอย่างที่ผู้ใช้ส่งมาไปบันทึก รวมถึงฟิลด์ที่ไม่ได้ตรวจสอบ เช่น is_admin ซึ่งอาจถูกแฮกเกอร์ส่งเข้ามาโจมตี (Mass Assignment Vulnerability)',
          en: '$request->all() includes unvetted query parameters or injected attributes like is_admin, enabling privilege escalation.'
        },
        badCode: '// ❌ เสี่ยงต่อช่องโหว่ความปลอดภัย\nEmployee::create($request->all());',
        goodCode: '// ✓ ปลอดภัย: บันทึกเฉพาะฟิลด์ที่ผ่านการตรวจสอบใน rules() แล้วเท่านั้น\nEmployee::create($request->validated());',
        solution: {
          th: 'ใช้ $request->validated() เสมอเพื่อรับเฉพาะข้อมูลที่ปลอดภัย',
          en: 'Always consume $request->validated() when creating or updating models.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-03-1',
        question: {
          th: 'คำสั่งใดใน Laravel Controller ที่คืนค่าเฉพาะข้อมูลที่ผ่านเกณฑ์การตรวจสอบของ Form Request แล้วเท่านั้น?',
          en: 'Which method returns only the data that passed validation rules?'
        },
        options: [
          { id: 'a', text: { th: '$request->validated()', en: '$request->validated()' } },
          { id: 'b', text: { th: '$request->all()', en: '$request->all()' } },
          { id: 'c', text: { th: '$request->getSafeData()', en: '$request->getSafeData()' } },
          { id: 'd', text: { th: '$request->sanitize()', en: '$request->sanitize()' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: '$request->validated() จะกรองและส่งคืนเฉพาะ Key-Value ที่ผ่านการตรวจสอบตามกฎใน rules() เท่านั้น เพื่อความปลอดภัยสูงสุด',
          en: '$request->validated() returns exclusively the array of attributes verified by the rules method.'
        }
      }
    ],
    summary: {
      th: [
        'Form Request ช่วยแยกตรรกะการตรวจสอบข้อมูลออกจาก Controller เพื่อความสะอาดและนำกลับมาใช้ใหม่ได้',
        'ใช้ rules() ประกาศกฎเกณฑ์ เช่น required, email, unique และ messages() เพื่อปรับแต่งภาษา',
        'ใช้ $request->validated() เสมอเพื่อป้องกันช่องโหว่ Mass Assignment'
      ],
      en: [
        'Form Requests decouple input inspection from HTTP controllers cleanly.',
        'Declare constraints in rules() and provide customized localization in messages().',
        'Always access inputs via $request->validated() to neutralize mass assignment vulnerabilities.'
      ]
    }
  },

  'laravel-04-migrations-schema': {
    id: 'laravel-04-migrations-schema',
    trackId: 'laravel',
    category: 'Database & ORM',
    level: 2,
    levelLabel: 'Level 2: Database',
    durationMinutes: 22,
    title: {
      th: '04 การจัดการฐานข้อมูลด้วย Migrations & Blueprint',
      en: '04 Database Migrations & Schema Blueprint'
    },
    description: {
      th: 'จัดการโครงสร้างตารางฐานข้อมูลแบบ Version Control เขียน Migration, Blueprint คอลัมน์, Foreign Keys และการ Rollback อย่างเป็นระบบ',
      en: 'Manage database schemas as version-controlled code: Blueprint builders, foreign key constraints, indexes, and rollbacks.'
    },
    objectives: {
      th: [
        'เข้าใจหลักการ Database Migration ในฐานะ Version Control ของฐานข้อมูล',
        'ใช้ Blueprint เพื่อสร้างคอลัมน์: id, string, decimal, boolean, timestamps, foreignId',
        'สร้าง Foreign Key เชื่อมความสัมพันธ์ด้วย constrained() และ cascadeOnDelete()',
        'รันและ Rollback การเปลี่ยนแปลงด้วย php artisan migrate'
      ],
      en: [
        'Understand database migrations as version control for database schemas',
        'Use Schema Blueprint primitives (id, string, foreignId, decimal, timestamps)',
        'Configure foreign key relationships with constrained() and cascadeOnDelete()',
        'Execute and roll back schema migrations via artisan commands'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Migration คือ "Git สำหรับฐานข้อมูล" เป็นไฟล์โค้ด PHP ที่อธิบายโครงสร้างตาราง (Tables, Columns, Indexes) ช่วยให้ทีมทุกคนมีโครงสร้างฐานข้อมูลตรงกันเป๊ะโดยไม่ต้อง Export/Import ไฟล์ .sql ด้วยตนเอง',
        en: 'Migrations act as version control for your database, defining table schemas in PHP so the entire team shares identical database structures automatically.'
      },
      whyUseIt: {
        th: 'ช่วยแก้ปัญหาฐานข้อมูลไม่ตรงกันระหว่างเครื่องเพื่อนร่วมทีมกับเซิร์ฟเวอร์จริง และสามารถย้อนกลับ (Rollback) โครงสร้างเดิมได้ทันทีเมื่อเกิดข้อผิดพลาด',
        en: 'Eliminates database drift across environments, tracks schema modifications chronologically, and allows instant rollbacks.'
      },
      whenToUse: {
        th: 'ทุกครั้งที่มีการเพิ่มตารางใหม่ เพิ่มคอลัมน์ แก้ไขประเภทข้อมูล หรือสร้างดัชนี (Index)',
        en: 'Whenever creating tables, adding columns, modifying data types, or configuring relational indexes.'
      },
      howItWorks: {
        th: 'เขียนคำสั่ง Schema::create ในเมธอด up() -> สั่งรัน php artisan migrate -> Laravel แปลงโค้ด PHP เป็นคำสั่ง CREATE TABLE ใน PostgreSQL หรือ MySQL ให้โดยอัตโนมัติ',
        en: 'Write Schema::create in up() -> Run php artisan migrate -> Laravel executes native DDL SQL on PostgreSQL/MySQL and records status in migrations table.'
      }
    },
    diagram: {
      title: {
        th: 'กระบวนการทำงานของ Laravel Database Migration',
        en: 'Laravel Migration Execution Lifecycle'
      },
      flow: [
        { title: '1. artisan make:migration', sub: 'สร้างไฟล์ timestamp_create_employees.php', color: 'blue' },
        { title: '2. Define Blueprint', sub: '$table->string("name"); $table->foreignId("dept_id");', color: 'purple' },
        { title: '3. php artisan migrate', sub: 'Laravel รันคำสั่ง SQL สร้างตารางใน DB', color: 'emerald' },
        { title: '4. Migrations Table', sub: 'บันทึกประวัติ Batch ไว้ในตาราง migrations', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้างไฟล์ Migration ด้วย Artisan',
          en: 'Generate Migration File'
        },
        content: {
          th: 'สั่ง php artisan make:migration create_employees_table เพื่อสร้างไฟล์โครงสร้างใน database/migrations/',
          en: 'Run php artisan make:migration create_employees_table to scaffold schema files inside database/migrations/.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียนโครงสร้างตารางในเมธอด up()',
          en: 'Design Schema in up() Method'
        },
        content: {
          th: 'ใช้ $table->id(), $table->string("email")->unique(), $table->foreignId("department_id")->constrained()',
          en: 'Utilize Blueprint helpers: $table->id(), $table->string("email")->unique(), $table->foreignId("department_id")->constrained().'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create("employees", function (Blueprint $table) {\n            $table->id();\n            $table->string("employee_code", 20)->unique();\n            $table->string("first_name", 100);\n            $table->string("last_name", 100);\n            $table->string("email")->unique();\n            $table->string("department");\n            $table->string("position");\n            $table->decimal("salary", 10, 2);\n            $table->enum("status", ["active", "probation", "resigned"])->default("active");\n            $table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists("employees");\n    }\n};\n',
      filename: 'database/migrations/2026_09_10_create_employees_table.php',
      mockOutput: 'Migrated: 2026_09_10_create_employees_table (14.20ms)'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'แก้ไขไฟล์ Migration เก่าที่เคยรันขึ้นเซิร์ฟเวอร์ Production ไปแล้ว',
          en: 'Modifying an already-executed migration file on production'
        },
        why: {
          th: 'Laravel จะไม่รันไฟล์ Migration ซ้ำถ้าชื่อไฟล์ถูกบันทึกไว้ในตาราง migrations แล้ว ทำให้เซิร์ฟเวอร์ไม่อัปเดตคอลัมน์ใหม่',
          en: 'Laravel tracks executed migrations in the migrations table; editing old files will not trigger on production unless reset.'
        },
        badCode: '// ❌ แอบแก้ไฟล์เดิมที่เคยรันไปแล้ว\nSchema::create("employees", function ($table) {\n    $table->string("phone"); // คอลัมน์นี้จะไม่ถูกสร้างใน DB\n});',
        goodCode: '// ✓ ถูกต้อง: สร้าง Migration ใหม่เสมอเพื่อเพิ่มคอลัมน์\nphp artisan make:migration add_phone_to_employees_table',
        solution: {
          th: 'เมื่อต้องการแก้ไขหรือเพิ่มคอลัมน์ ให้สร้าง Migration ใหม่เสมอด้วย make:migration',
          en: 'Always generate a brand-new migration when modifying existing tables.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-04-1',
        question: {
          th: 'คำสั่งใดใน Laravel ใช้ย้อนกลับ (Rollback) กลุ่มของ Migration ล่าสุดที่เพิ่งรันไป?',
          en: 'Which Artisan command rolls back the last batch of executed migrations?'
        },
        options: [
          { id: 'a', text: { th: 'php artisan migrate:rollback', en: 'php artisan migrate:rollback' } },
          { id: 'b', text: { th: 'php artisan db:undo', en: 'php artisan db:undo' } },
          { id: 'c', text: { th: 'php artisan schema:drop', en: 'php artisan schema:drop' } },
          { id: 'd', text: { th: 'php artisan git:checkout', en: 'php artisan git:checkout' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'migrate:rollback จะรันเมธอด down() ของชุด Migration ใน Batch ล่าสุดเพื่อถอนการเปลี่ยนแปลงออกอย่างปลอดภัย',
          en: 'migrate:rollback executes the down() methods for the latest migration batch safely.'
        }
      }
    ],
    summary: {
      th: [
        'Migration คือระบบควบคุมเวอร์ชันของโครงสร้างฐานข้อมูล',
        'เมธอด up() ใช้สร้างหรือแก้ตาราง เมธอด down() ใช้ถอนการกระทำ',
        'คำสั่ง php artisan migrate ช่วยให้ทุกเครื่องในทีมมีโครงสร้างฐานข้อมูลที่ตรงกัน 100%'
      ],
      en: [
        'Migrations deliver version control for relational database schemas.',
        'up() constructs tables, while down() reverses changes on rollback.',
        'artisan migrate synchronizes databases across all environments reliably.'
      ]
    }
  },

  'laravel-05-eloquent-crud': {
    id: 'laravel-05-eloquent-crud',
    trackId: 'laravel',
    category: 'Database & ORM',
    level: 3,
    levelLabel: 'Level 3: Core ORM',
    durationMinutes: 25,
    title: {
      th: '05 Eloquent ORM และการทำงาน CRUD อย่างสมบูรณ์',
      en: '05 Eloquent ORM & Full CRUD Lifecycle'
    },
    description: {
      th: 'เจาะลึก Eloquent ORM: Active Record pattern, การค้นหาข้อมูล (find, where), สร้าง (create), แก้ไข (update), ลบ (delete), และการจำลองระบบ Employee CRUD',
      en: 'Master Eloquent ORM: Active Record pattern, query builders, mass assignment, and full CRUD operations with the interactive simulator.'
    },
    objectives: {
      th: [
        'เข้าใจรูปแบบการทำงานของ Active Record ใน Eloquent Model',
        'ใช้คำสั่ง CRUD ครบวงจร: all(), find(), create(), update(), delete()',
        'ตั้งค่า $fillable ป้องกัน Mass Assignment Exception',
        'ทดลองใช้งานในระบบจำลอง Employee Management CRUD แบบ Interactive'
      ],
      en: [
        'Master Active Record principles in Eloquent models',
        'Execute full CRUD operations: all(), find(), create(), update(), delete()',
        'Configure protected $fillable attributes for security',
        'Practice CRUD workflows interactively in the embedded simulator'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Eloquent ORM (Object-Relational Mapping) คือ "ล่ามแปลภาษา" ที่ทำให้เราสามารถสั่งงานฐานข้อมูล SQL ได้ผ่าน Object และ Method ในภาษา PHP โดยไม่ต้องเขียนคำสั่ง SQL ดิบๆ เช่น Employee::create() แทน INSERT INTO',
        en: 'Eloquent ORM bridges PHP objects and relational SQL databases using the Active Record pattern, allowing queries to be written as elegant PHP methods.'
      },
      whyUseIt: {
        th: 'เขียนโค้ดสั้นลง อ่านเข้าใจง่าย ป้องกันช่องโหว่ SQL Injection อัตโนมัติ และสลับฐานข้อมูล (เช่น MySQL ไป PostgreSQL) ได้โดยไม่ต้องแก้โค้ด Query เลย',
        en: 'Concise readable syntax, automatic SQL injection immunity via PDO parameter binding, and effortless multi-database portability.'
      },
      whenToUse: {
        th: 'ใช้ในทุกส่วนของแอปพลิเคชันที่มีการติดต่อ สอบถาม หรือบันทึกข้อมูลลงฐานข้อมูล',
        en: 'Standard data access layer for all database interactions in Laravel applications.'
      },
      howItWorks: {
        th: "สร้าง Model เชื่อมกับตาราง -> เรียก Employee::where('status', 'active')->get() -> Eloquent สร้างคำสั่ง SQL ปลอดภัยและแปลงผลลัพธ์เป็น Collection ของ Employee Object ให้ใช้งานทันที",
        en: 'Model maps to table -> Eloquent compiles queries via PDO parameterization -> Returns typed Eloquent Model Collections.'
      }
    },
    diagram: {
      title: {
        th: 'การแปลงคำสั่ง Eloquent สู่ SQL ของฐานข้อมูล',
        en: 'Eloquent to SQL Compilation Flow'
      },
      flow: [
        { title: '1. Eloquent Method', sub: 'Employee::where("department", "IT")->get();', color: 'blue' },
        { title: '2. Query Builder', sub: 'คอมไพล์เป็น SQL PDO Parameterized', color: 'purple' },
        { title: '3. DB Engine', sub: 'SELECT * FROM employees WHERE department = ?', color: 'emerald' },
        { title: '4. Collection Object', sub: 'แปลงเป็น Array of Model ให้ React/View ใช้งาน', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Model และกำหนด $fillable',
          en: 'Scaffold Model & Fillable Rules'
        },
        content: {
          th: 'รัน php artisan make:model Employee และระบุคอลัมน์ใน protected $fillable = [...]',
          en: 'Run php artisan make:model Employee and define allowed fields in protected $fillable = [...].'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียน Controller CRUD ด้วย Eloquent',
          en: 'Implement Eloquent Controller Actions'
        },
        content: {
          th: 'เขียน index (ค้นหา), store (สร้าง), update (แก้ไข), destroy (ลบ) ใน EmployeeController',
          en: 'Implement index (read), store (create), update (modify), and destroy (delete) methods in EmployeeController.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Employee;\nuse App\\Http\\Requests\\StoreEmployeeRequest;\nuse Illuminate\\Http\\Request;\n\nclass EmployeeController extends Controller\n{\n    public function index(Request $request)\n    {\n        $query = Employee::query();\n        if ($request->filled("search")) {\n            $query->where("first_name", "like", "%" . $request->search . "%")\n                  ->orWhere("email", "like", "%" . $request->search . "%");\n        }\n        return response()->json($query->latest()->paginate(10));\n    }\n\n    public function store(StoreEmployeeRequest $request)\n    {\n        $employee = Employee::create($request->validated());\n        return response()->json($employee, 201);\n    }\n\n    public function destroy(Employee $employee)\n    {\n        $employee->delete();\n        return response()->json(["message" => "Employee removed successfully"]);\n    }\n}\n',
      filename: 'app/Http/Controllers/EmployeeController.php',
      mockOutput: '{"id": 101, "name": "Alex Morgan", "status": "active"}'
    },
    demoType: 'employee-crud',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ชื่อคอลัมน์ใน $fillable ของ Model แล้วเรียก Employee::create()',
          en: 'Forgetting to specify attributes in model $fillable property'
        },
        why: {
          th: 'Laravel มีระบบป้องกัน Mass Assignment หากไม่ระบุ $fillable จะเกิด MassAssignmentException และข้อมูลจะไม่ถูกบันทึก',
          en: 'Laravel triggers MassAssignmentException to block unauthorized field population.'
        },
        badCode: 'class Employee extends Model {\n    // ❌ ลืมใส่ $fillable\n}',
        goodCode: 'class Employee extends Model {\n    protected $fillable = [\n        "employee_code", "first_name", "last_name", "email",\n        "department", "position", "salary", "status"\n    ];\n}',
        solution: {
          th: 'กำหนดคอลัมน์ที่อนุญาตให้บันทึกผ่านฟอร์มใน protected $fillable เสมอ',
          en: 'Always declare permitted fields explicitly inside protected $fillable.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-05-1',
        question: {
          th: 'Property ใดใน Eloquent Model ที่ใช้ระบุรายชื่อคอลัมน์ที่อนุญาตให้บันทึกข้อมูลแบบ Mass Assignment?',
          en: 'Which property in Eloquent models defines attributes permitted for mass assignment?'
        },
        options: [
          { id: 'a', text: { th: 'protected $fillable', en: 'protected $fillable' } },
          { id: 'b', text: { th: 'protected $columns', en: 'protected $columns' } },
          { id: 'c', text: { th: 'public $allowList', en: 'public $allowList' } },
          { id: 'd', text: { th: 'private $permitted', en: 'private $permitted' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'protected $fillable = [...] กำหนด White-list ของฟิลด์ที่อนุญาตให้รับค่าผ่าน Employee::create() ได้อย่างปลอดภัย',
          en: 'protected $fillable specifies the explicit whitelist of mass-assignable attributes.'
        }
      }
    ],
    summary: {
      th: [
        'Eloquent ช่วยให้จัดการฐานข้อมูลผ่านโค้ด PHP ที่สวยงาม ปลอดภัย และอ่านง่าย',
        'การทำ CRUD ครบวงจร: all(), find(), create(), update(), delete()',
        'ทดลองใช้งานระบบจำลอง Employee Management CRUD ได้ที่แถบ Interactive Demo ด้านข้าง!'
      ],
      en: [
        'Eloquent abstracts database interactions into elegant, secure Active Record objects.',
        'Master the four CRUD operations: all(), find(), create(), update(), delete().',
        'Explore and manipulate real employee entities in the adjacent interactive simulator!'
      ]
    }
  },

  'laravel-06-eloquent-relationships': {
    id: 'laravel-06-eloquent-relationships',
    trackId: 'laravel',
    category: 'Database & ORM',
    level: 3,
    levelLabel: 'Level 3: Relationships',
    durationMinutes: 24,
    title: {
      th: '06 ความสัมพันธ์ใน Eloquent และการแก้ปัญหา N+1 Query',
      en: '06 Eloquent Relationships & Solving N+1 Queries'
    },
    description: {
      th: 'เชื่อมโยงข้อมูลระหว่างตาราง: hasOne, hasMany, belongsTo, belongsToMany และเทคนิค Eager Loading ด้วย with() เพื่อแก้ปัญหา N+1 queries ให้ระบบทำงานเร็วขึ้น 10 เท่า',
      en: 'Model relational schemas with Eloquent: hasMany, belongsTo, belongsToMany, and master Eager Loading to eliminate devastating N+1 query bottlenecks.'
    },
    objectives: {
      th: [
        'เชื่อมความสัมพันธ์ belongsTo และ hasMany ระหว่าง Department และ Employee',
        'เข้าใจสาเหตุและอันตรายของปัญหา N+1 Query Problem',
        'ใช้ Eager Loading ด้วย with(["department", "skills"]) อย่างถูกต้อง',
        'ใช้ Lazy Eager Loading (load()) เมื่อจำเป็น'
      ],
      en: [
        'Connect belongsTo and hasMany relations between models',
        'Understand the mechanics and performance impact of the N+1 query problem',
        'Enforce Eager Loading via with() to batch database queries',
        'Apply lazy eager loading with load() conditionally'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'ความสัมพันธ์ใน Eloquent คือ "การเชื่อมโยงตารางข้อมูลในชีวิตจริงเข้าด้วยกัน" เช่น แผนก 1 แผนก มีพนักงานได้หลายคน (hasMany) และพนักงานแต่ละคนสังกัดได้ 1 แผนก (belongsTo)',
        en: 'Eloquent relationships map relational database foreign keys into object methods, such as one Department having many Employees.'
      },
      whyUseIt: {
        th: 'ช่วยให้ดึงข้อมูลที่เกี่ยวข้องกันได้ทันทีโดยไม่ต้องเขียนคำสั่ง SQL JOIN ซับซ้อน เช่น $employee->department->name',
        en: 'Enables intuitive property access like $employee->department->name without handwriting complex SQL JOINs.'
      },
      whenToUse: {
        th: 'ใช้เมื่อระบบมีข้อมูลหลายตารางที่เชื่อมโยงกัน เช่น ลูกค้ากับคำสั่งซื้อ สินค้ากับหมวดหมู่ หรือพนักงานกับแผนก',
        en: 'Essential in every multi-table relational schema across modern backends.'
      },
      howItWorks: {
        th: "นิยาม Method ใน Model -> เรียกผ่าน Eloquent -> ใช้ with('department') เพื่อรวมคำสั่ง SQL เป็น 2 คำสั่งแทนที่จะส่งคำสั่ง Query วนลูป 100 ครั้งในฐานข้อมูล",
        en: "Define relationship methods on models -> Query with with('relation') -> Eloquent runs two indexed SQL queries and binds objects in memory."
      }
    },
    diagram: {
      title: {
        th: 'เปรียบเทียบ N+1 Query vs Eager Loading',
        en: 'N+1 Problem vs Eager Loading Comparison'
      },
      flow: [
        { title: '❌ N+1 Problem', sub: '1 Query ดึง 50 พนักงาน + 50 Query ดึงแผนก = 51 Queries (ช้ามาก!)', color: 'rose' },
        { title: '✓ with("department")', sub: 'Query 1: SELECT * FROM employees\nQuery 2: SELECT * FROM departments WHERE id IN (...)', color: 'emerald' },
        { title: '⚡ Total Queries', sub: 'ลดเหลือเพียง 2 Queries ทันที! ประสิทธิภาพพุ่งสูง', color: 'blue' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'กำหนดความสัมพันธ์ belongsTo ใน Model Employee',
          en: 'Define belongsTo on Child Model'
        },
        content: {
          th: 'เขียน public function department(): BelongsTo { return $this->belongsTo(Department::class); }',
          en: 'Write public function department(): BelongsTo { return $this->belongsTo(Department::class); }.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'ดึงข้อมูลด้วย with() เพื่อทำ Eager Loading',
          en: 'Eager Load Relationships'
        },
        content: {
          th: "ใน Controller เรียก $employees = Employee::with('department')->get();",
          en: "Inside controller actions, query Employee::with('department')->get(); to batch fetch relations."
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass Employee extends Model\n{\n    protected $fillable = ["employee_code", "name", "department_id", "email"];\n\n    // ความสัมพันธ์: พนักงานแต่ละคนสังกัด 1 แผนก\n    public function department(): BelongsTo\n    {\n        return $this->belongsTo(Department::class);\n    }\n}\n\n// ใน Controller: ใช้ with() เพื่อป้องกัน N+1 queries\n$employees = Employee::with("department")->paginate(15);\n',
      filename: 'app/Models/Employee.php',
      mockOutput: 'Executed 2 queries for 15 records instead of 16 queries.'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'วนลูป foreach เข้าถึง Relation โดยไม่ได้โหลดด้วย with() มาก่อน (เกิด N+1 Query)',
          en: 'Looping over related records without eager loading with()'
        },
        why: {
          th: 'ถ้ามีพนักงาน 100 คน การเข้าถึง $emp->department จะส่ง SQL Query ไปยังฐานข้อมูล 100 ครั้ง ทำให้ Database CPU เต็ม 100% และหน้าเว็บโหลดช้ามาก',
          en: 'Querying 100 records will execute 1 initial query plus 100 separate relational queries, overloading the database server.'
        },
        badCode: '<?php\n// ❌ เกิด N+1 Query 101 คำสั่ง!\n$employees = Employee::all();\nforeach ($employees as $emp) {\n    echo $emp->department->name;\n}',
        goodCode: '<?php\n// ✓ ดึงข้อมูลแผนกพร้อมกันด้วย Eager Loading เพียง 2 คำสั่ง SQL\n$employees = Employee::with("department")->get();\nforeach ($employees as $emp) {\n    echo $emp->department->name;\n}',
        solution: {
          th: "ใช้ with(['relation']) เสมอเมื่อรู้ว่าจะมีการแสดงผลข้อมูลความสัมพันธ์",
          en: 'Always preload relations with with() whenever related attributes will be rendered.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-06-1',
        question: {
          th: 'วิธีแก้ปัญหา N+1 Query ใน Laravel Eloquent อย่างมีประสิทธิภาพที่สุดคือข้อใด?',
          en: 'What is the most effective approach to resolve N+1 queries in Laravel Eloquent?'
        },
        options: [
          { id: 'a', text: { th: 'ใช้ Eager Loading ผ่านเมธอด with("relation")', en: 'Use Eager Loading via the with("relation") method' } },
          { id: 'b', text: { th: 'ปิดการทำงานของฐานข้อมูล', en: 'Disable database indexing' } },
          { id: 'c', text: { th: 'วนลูป query ทีละตัวด้วย while loop', en: 'Query individual records sequentially with while loops' } },
          { id: 'd', text: { th: 'เปลี่ยนชื่อตารางให้ยาวขึ้น', en: 'Rename tables with longer strings' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'เมธอด with() ทำการดึงข้อมูลความสัมพันธ์ทั้งหมดล่วงหน้าใน 1 Query ด้วย WHERE IN (...) ช่วยลดจำนวนคำสั่ง SQL จาก N+1 เหลือเพียง 2 คำสั่ง',
          en: 'The with() method pre-fetches related rows in a single batch query using WHERE IN (...), slashing query volume.'
        }
      }
    ],
    summary: {
      th: [
        'ความสัมพันธ์ใน Eloquent ช่วยให้จัดการตารางเชื่อมโยงได้เหมือนการเข้าถึง Object ปกติ',
        'ปัญหา N+1 Query เกิดจากการดึงข้อมูลความสัมพันธ์ทีละแถวในลูป ทำให้เซิร์ฟเวอร์ช้า',
        'แก้ไขด้วย with(["relation"]) เสมอเพื่อเพิ่มความเร็วระดับ Enterprise'
      ],
      en: [
        'Eloquent relationships transform relational foreign keys into elegant object properties.',
        'N+1 queries degrade performance by executing isolated queries for each iteration.',
        'Always enforce with(["relation"]) eager loading to ensure enterprise performance.'
      ]
    }
  },

  'laravel-07-service-layer': {
    id: 'laravel-07-service-layer',
    trackId: 'laravel',
    category: 'Architecture',
    level: 4,
    levelLabel: 'Level 4: Architecture',
    durationMinutes: 25,
    title: {
      th: '07 สถาปัตยกรรม Service Layer & Action Pattern',
      en: '07 Service Layer & Single-Action Classes'
    },
    description: {
      th: 'เปลี่ยน Fat Controller ให้กลายเป็น Thin Controller ด้วย Service Layer และ Action Pattern แยก Business Logic, Database Transaction และ Event ออกมาให้ทดสอบง่ายและนำกลับมาใช้ซ้ำได้',
      en: 'Refactor bloated controllers into clean, maintainable architectures using the Service Layer and Single Responsibility Action patterns.'
    },
    objectives: {
      th: [
        'เข้าใจปัญหาของ Fat Controller ในโปรเจกต์ขนาดใหญ่',
        'สร้าง Action Class แบบ Single Responsibility (เช่น OnboardEmployeeAction)',
        'จัดการ Database Transactions (DB::transaction) เพื่อความปลอดภัยของข้อมูล',
        'ทำให้ Business Logic สามารถเรียกใช้ได้ทั้งจาก Web Controller, API และ Queue Worker'
      ],
      en: [
        'Diagnose the architectural pitfalls of fat controllers in enterprise apps',
        'Implement single-action classes (e.g. OnboardEmployeeAction)',
        'Encapsulate ACID database transactions with DB::transaction',
        'Reuse core business domain actions across web, API, and queue runners'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Service Layer และ Action Pattern คือ "การแยกขั้นตอนการทำงานของธุรกิจ (Business Logic)" ออกจากตัวรับคำขอ (Controller) ไปใส่ไว้ในคลาสเฉพาะ เช่น คลาส OnboardEmployeeAction ที่มีหน้าที่จัดการเรื่องรับพนักงานใหม่โดยเฉพาะ',
        en: 'The Service Layer and Action Pattern decouple core domain business rules from HTTP controllers into focused, testable, and reusable action classes.'
      },
      whyUseIt: {
        th: 'ถ้าเขียนตรรกะทุกอย่างใน Controller เมื่อต้องการทำงานเดียวกันผ่าน Command Line หรือ Queue เราจะต้องเขียนโค้ดซ้ำ และเมื่อโค้ด Controller ยาวเป็นพันบรรทัดจะอ่านยากและเกิดบั๊กง่าย',
        en: 'Writing business logic in controllers blocks reuse from CLI jobs or background queues and creates unmaintainable monolithic files.'
      },
      whenToUse: {
        th: 'ใช้เมื่อมีกระบวนการที่มีหลายขั้นตอน เช่น การสร้างพนักงาน + สร้างบัญชีผู้ใช้ + ส่งอีเมลต้อนรับ + บันทึก Audit Log',
        en: 'Essential for multi-step processes involving transactions, audit logging, third-party integrations, and events.'
      },
      howItWorks: {
        th: 'Controller มีหน้าที่แค่รับคำขอ -> ส่งข้อมูลต่อให้ Action -> Action รันตรรกะและจัดการ Database Transaction -> ส่งผลลัพธ์กลับให้ Controller ตอบกลับผู้ใช้',
        en: 'Controller captures HTTP request -> Delegates payload to Action -> Action executes business transaction -> Returns clean domain object.'
      }
    },
    diagram: {
      title: {
        th: 'การแยกหน้าที่ระหว่าง Controller และ Action Class',
        en: 'Thin Controller vs Action Architecture'
      },
      flow: [
        { title: '1. HTTP Controller', sub: 'รับ Request และเรียก Action->execute($data)', color: 'blue' },
        { title: '2. DB::transaction', sub: 'เปิด Transaction ป้องกันข้อผิดพลาดกลางทาง', color: 'purple' },
        { title: '3. Domain Operations', sub: 'บันทึก Employee + ส่งเมล Welcome + บันทึก Log', color: 'emerald' },
        { title: '4. Clean Response', sub: 'ตอบกลับ 201 Created หรือ Redirect ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Action Class ในโฟลเดอร์ app/Actions/',
          en: 'Scaffold Action in app/Actions/'
        },
        content: {
          th: 'สร้างคลาส CreateEmployeeAction พร้อมเมธอด execute(array $data): Employee',
          en: 'Create a dedicated CreateEmployeeAction class exposing an execute(array $data): Employee signature.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เรียกใช้ Action จาก Controller',
          en: 'Invoke Action from Controller'
        },
        content: {
          th: 'Inject Action เข้าใน Controller แล้วเรียก $action->execute($request->validated());',
          en: 'Inject the action into the controller and call $action->execute($request->validated()).'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Actions\\Employee;\n\nuse App\\Models\\Employee;\nuse Illuminate\\Support\\Facades\\DB;\n\nclass CreateEmployeeAction\n{\n    public function execute(array $data): Employee\n    {\n        return DB::transaction(function () use ($data) {\n            $employee = Employee::create($data);\n            \n            // บันทึกกิจกรรม และส่ง Event\n            activity()->performedOn($employee)->log("Employee created");\n            \n            return $employee;\n        });\n    }\n}\n',
      filename: 'app/Actions/Employee/CreateEmployeeAction.php',
      mockOutput: 'Action executed inside DB Transaction successfully'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'เขียนการคำนวณเงินเดือน การส่งอีเมล และการตัดสต็อกรวมกันอยู่ใน Controller เดียวกันยาวกว่า 300 บรรทัด',
          en: 'Embedding payments, emailing, and inventory routines directly inside a 300-line controller method'
        },
        why: {
          th: 'ทำให้เขียน Unit Test แทบไม่ได้ และหากต้องการให้ระบบตั้งเวลา (Cron Job) รันงานนี้ด้วย จะไม่สามารถนำโค้ดมาใช้ซ้ำได้',
          en: 'Prevents isolated automated testing and blocks reuse by background workers or CLI schedulers.'
        },
        badCode: 'public function store(Request $req) {\n    // ❌ Controller บวมด้วย Business Logic 200 บรรทัด\n    $emp = Employee::create(...);\n    Mail::send(...);\n    Payroll::compute(...);\n}',
        goodCode: 'public function store(StoreEmployeeRequest $req, CreateEmployeeAction $action) {\n    // ✓ Controller สั้น สะอาด แยกหน้าที่ชัดเจน\n    $employee = $action->execute($req->validated());\n    return response()->json($employee, 201);\n}',
        solution: {
          th: 'แยกขั้นตอนทางธุรกิจไปใส่ใน Action หรือ Service Class เสมอ',
          en: 'Always delegate multi-step domain workflows to dedicated Action or Service classes.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-07-1',
        question: {
          th: 'เหตุใดการใช้ Action Pattern จึงช่วยยกระดับสถาปัตยกรรมของแอปพลิเคชัน Laravel?',
          en: 'Why does adopting the Action Pattern enhance Laravel application architecture?'
        },
        options: [
          { id: 'a', text: { th: 'แยก Business Logic เป็นอิสระ ทำให้ทดสอบง่าย และนำกลับมาใช้ซ้ำใน CLI/Queue ได้ทันที', en: 'Decouples business logic for easy testing and instant reuse in CLI commands and queues' } },
          { id: 'b', text: { th: 'ทำให้ไม่ต้องใช้ฐานข้อมูลอีกต่อไป', en: 'Removes the need for a database' } },
          { id: 'c', text: { th: 'เปลี่ยนสีหน้าเว็บให้สวยขึ้น', en: 'Changes webpage themes' } },
          { id: 'd', text: { th: 'เพิ่มขนาดไฟล์ของโปรเจกต์ให้ใหญ่ขึ้นเพื่อความปลอดภัย', en: 'Artificially inflates repository size' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Action Pattern ปฏิบัติตามหลัก Single Responsibility ทำให้โค้ดอ่านง่าย ทดสอบแยกชิ้นได้ และเรียกใช้ซ้ำได้ทุกที่',
          en: 'Actions adhere to the Single Responsibility Principle, enhancing testability and universal reusability.'
        }
      }
    ],
    summary: {
      th: [
        'หลีกเลี่ยง Fat Controller ด้วยการแยก Business Logic สู่ Action หรือ Service Class',
        'ใช้ DB::transaction เพื่อการันตีว่าข้อมูลจะถูกบันทึกครบทุกขั้นตอน หรือยกเลิกทั้งหมดหากเกิดข้อผิดพลาด',
        'Action Class สามารถนำไปเรียกใช้ได้จากทุกที่ ทั้ง Web, API และ Background Worker'
      ],
      en: [
        'Avoid fat controllers by encapsulating business rules inside dedicated Action classes.',
        'Wrap critical mutations with DB::transaction for ACID data integrity.',
        'Actions can be effortlessly invoked from controllers, APIs, or async background queue workers.'
      ]
    }
  },

  'laravel-08-service-container': {
    id: 'laravel-08-service-container',
    trackId: 'laravel',
    category: 'Architecture',
    level: 4,
    levelLabel: 'Level 4: Enterprise DI',
    durationMinutes: 25,
    title: {
      th: '08 Service Container & Dependency Injection ใน Laravel',
      en: '08 Laravel Service Container & Inversion of Control'
    },
    description: {
      th: 'เจาะลึกกลไกหลักของ Laravel: Inversion of Control (IoC), Service Container, การผูก Interface กับ Implementation ใน Service Provider, และ Constructor Injection',
      en: 'Master Laravel internal engine: Service Container, Inversion of Control (IoC), binding interfaces to implementations, and auto-wiring via reflection.'
    },
    objectives: {
      th: [
        'เข้าใจหลักการ Inversion of Control (IoC) และ Dependency Injection (DI)',
        'ผูก Interface เข้ากับ Class ใน AppServiceProvider (bind / singleton)',
        'ใช้ Automatic Injection ใน Controller Constructor โดยไม่ต้อง new เอง',
        'เปลี่ยน Provider (เช่น สลับระบบชำระเงิน หรือ SMS Gateway) ได้อย่างง่ายดาย'
      ],
      en: [
        'Grasp Inversion of Control (IoC) and Dependency Injection fundamentals',
        'Bind interfaces to implementations in AppServiceProvider (bind vs singleton)',
        'Leverage auto-wiring dependency injection without manual instantiation',
        'Swap external service providers (e.g. Stripe vs PayPal) with zero controller changes'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Service Container คือ "กล่องวิเศษผู้จัดการ Object" ของ Laravel ที่ทำหน้าที่สร้างและจ่าย Class ต่างๆ ให้อัตโนมัติเมื่อมีคนต้องการ โดยที่คุณไม่ต้องพิมพ์ new MyService() เอง',
        en: 'The Service Container is Laravel powerful Inversion of Control (IoC) tool for managing class dependencies and performing dependency injection automatically.'
      },
      whyUseIt: {
        th: 'ทำให้โค้ดไม่ผูกติดกันแน่น (Decoupled) เมื่อต้องการเปลี่ยนระบบ (เช่น เปลี่ยนจากส่งเมลด้วย Mailgun เป็น SES) แก้ไขแค่ที่เดียวใน Service Provider โดยไม่ต้องแก้โค้ด Controller เลยแม้แต่บรรทัดเดียว',
        en: 'Decouples high-level policy from low-level details. Swapping service implementations requires changing only a single provider binding.'
      },
      whenToUse: {
        th: 'ใช้ในการเชื่อมต่อ Payment Gateway, Notification Services, External APIs และคลาสระดับ Enterprise ทั้งหมด',
        en: 'Standard practice across enterprise architecture, payment providers, SMS services, and external integrations.'
      },
      howItWorks: {
        th: 'คุณระบุ Interface ใน Constructor -> เมื่อมีคนเรียกใช้งาน Laravel ใช้ PHP Reflection สแกนหา -> หยิบ Class ตัวจริงที่ผูกไว้ใน Service Provider มาประกอบร่างและส่งให้ทันที',
        en: 'Type-hint an interface in constructor -> Container inspects parameter types via PHP Reflection -> Instantiates and passes registered concrete implementation.'
      }
    },
    diagram: {
      title: {
        th: 'การทำงานของ Service Container ใน Laravel',
        en: 'Laravel Service Container Resolution Flow'
      },
      flow: [
        { title: '1. Type-hint Interface', sub: '__construct(PaymentGatewayInterface $gateway)', color: 'blue' },
        { title: '2. Reflection Engine', sub: 'Laravel สแกนหา Class ที่ผูกไว้ใน Service Provider', color: 'purple' },
        { title: '3. Container Resolution', sub: 'สร้าง instance ของ StripePaymentGateway อัตโนมัติ', color: 'emerald' },
        { title: '4. Injected Instance', sub: 'Controller ใช้งาน $gateway->charge() ได้ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Interface และ Concrete Implementation',
          en: 'Declare Interface and Implementation'
        },
        content: {
          th: 'สร้าง PaymentGatewayInterface และ StripePaymentGateway ที่ implements interface นั้น',
          en: 'Define PaymentGatewayInterface and an implementing StripePaymentGateway class.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'ผูก Interface ใน AppServiceProvider',
          en: 'Bind in AppServiceProvider'
        },
        content: {
          th: 'ใน register() เขียน $this->app->bind(PaymentGatewayInterface::class, StripePaymentGateway::class);',
          en: 'Inside register(), bind interface to class: $this->app->bind(PaymentGatewayInterface::class, StripePaymentGateway::class);.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Providers;\n\nuse Illuminate\\Support\\ServiceProvider;\nuse App\\Contracts\\PaymentGatewayInterface;\nuse App\\Services\\StripePaymentGateway;\n\nclass AppServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        // ผูก Interface เข้ากับ Concrete Class\n        $this->app->bind(\n            PaymentGatewayInterface::class,\n            StripePaymentGateway::class\n        );\n    }\n}\n',
      filename: 'app/Providers/AppServiceProvider.php',
      mockOutput: 'Binding registered into Laravel Service Container'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'สร้าง Instance ด้วยคำสั่ง new โดยตรงใน Controller แทนที่จะใช้ Dependency Injection',
          en: 'Hardcoding concrete dependencies using new instead of type-hinting interfaces'
        },
        why: {
          th: 'ทำให้ Controller ผูกติดกับ Class นั้นอย่างถาวร (Tight Coupling) ทำให้ไม่สามารถเขียน Unit Test แบบ Mock ได้',
          en: 'Tightly couples the controller to specific implementations, preventing mock injection during automated testing.'
        },
        badCode: 'class OrderController extends Controller {\n    public function checkout() {\n        $gateway = new StripePaymentGateway("sk_live_123"); // ❌ Tightly coupled\n    }\n}',
        goodCode: 'class OrderController extends Controller {\n    // ✓ สวยงาม: ให้ Laravel ฉีดผ่าน Dependency Injection อัตโนมัติ\n    public function __construct(private PaymentGatewayInterface $gateway) {}\n}',
        solution: {
          th: 'ใช้ Type-hinting ผ่าน Constructor Injection เสมอ',
          en: 'Always leverage constructor injection with type-hinted interfaces.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-lar-08-1',
        question: {
          th: 'Laravel ใช้กลไกใดในภาษา PHP เพื่อตรวจสอบ Type-hint ใน Constructor และประกอบร่าง Dependency ให้โดยอัตโนมัติ?',
          en: 'Which PHP mechanism does Laravel use to inspect constructor parameters for auto-wiring?'
        },
        options: [
          { id: 'a', text: { th: 'PHP Reflection API', en: 'PHP Reflection API' } },
          { id: 'b', text: { th: 'Regex String Search', en: 'Regex String Search' } },
          { id: 'c', text: { th: 'FTP File Scanning', en: 'FTP File Scanning' } },
          { id: 'd', text: { th: 'Local Storage Cache', en: 'Local Storage Cache' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Laravel ใช้ ReflectionClass และ ReflectionParameter เพื่ออ่าน Type ของพารามิเตอร์แล้วหยิบคลาสที่ผูกไว้ใน Container มาส่งต่อให้อัตโนมัติ',
          en: 'Laravel uses PHP Reflection API to inspect class signatures dynamically and resolve dependencies.'
        }
      }
    ],
    summary: {
      th: [
        'Service Container คือหัวใจของความยืดหยุ่นใน Laravel Framework',
        'Dependency Injection ช่วยให้โค้ดแยกส่วนกันอย่างสะอาดและเขียน Unit Test ได้ง่าย',
        'การผูก Interface กับ Implementation ทำให้เปลี่ยนเทคโนโลยีเบื้องหลังได้โดยไม่กระทบโค้ดส่วนอื่น'
      ],
      en: [
        'The Service Container is the backbone of Laravel architectural flexibility.',
        'Dependency Injection fosters loose coupling, clean testability, and modularity.',
        'Binding interfaces to implementations allows backend service swaps without touching controllers.'
      ]
    }
  }

};
