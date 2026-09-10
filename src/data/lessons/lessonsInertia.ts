import { Lesson } from '../../types';

export const LESSONS_INERTIA: Record<string, Lesson> = {
  'inertia-01-what-is-inertia': {
    id: 'inertia-01-what-is-inertia',
    trackId: 'inertia',
    category: 'Inertia 3',
    level: 6,
    levelLabel: 'Level 6: Inertia 3',
    durationMinutes: 25,
    title: {
      th: 'Inertia 3 คืออะไร? สถาปัตยกรรม Modern Monolith',
      en: 'What is Inertia 3? The Modern Monolith Architecture'
    },
    description: {
      th: 'ไขปริศนาสถาปัตยกรรมสุดทรงพลัง: รวมพลัง Laravel Backend + React 19 Frontend โดยไม่ต้องสร้าง REST API หรือจัดการ Token ให้ปวดหัว',
      en: 'Master the Modern Monolith: pair Laravel with React 19 without crafting REST APIs, GraphQL layers, or complex OAuth tokens.'
    },
    objectives: {
      th: [
        'เข้าใจปัญหาของสถาปัตยกรรมแบบแยก Frontend/Backend ด้วย REST API แบบดั้งเดิม',
        'เข้าใจว่า Inertia 3 ทำงานอย่างไรในฐานะ "ตัวเชื่อม" (Glue Protocol)',
        'เข้าใจว่าทำไมเราถึงใช้ Route ของ Laravel แต่หน้าจอเป็น React 19',
        'เห็นภาพชัดเจนว่า Inertia ส่งข้อมูลผ่าน Props อย่างไรโดยไม่มีการรีเฟรชหน้าจอ (SPA)'
      ],
      en: [
        'Understand pain points of separate client-server architectures with traditional REST APIs',
        'Learn how Inertia 3 acts as the frictionless protocol connecting Laravel and React',
        'Understand why Laravel handles routing while React handles UI rendering',
        'Visualize how Inertia streams server props to React pages for instant SPA transitions'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Inertia 3 คือเครื่องมือที่เชื่อมต่อ Laravel (Backend) กับ React (Frontend) เข้าด้วยกัน ทำให้เราเขียนโปรแกรมแบบ Single Page Application (SPA) ได้อย่างรวดเร็ว โดยยังคงใช้ Routing, Controller และ ORM ของ Laravel ตามเดิม 100%',
        en: 'Inertia 3 is the bridge connecting Laravel (backend) and React (frontend), letting you build snappy Single Page Applications (SPAs) while retaining traditional Laravel routing, controllers, and Eloquent ORM.'
      },
      whyUseIt: {
        th: 'ถ้าทำแบบแยก Frontend กับ Backend ปกติ คุณต้อง: 1) สร้าง REST API 2) จัดการ Swagger 3) ทำ JWT/Sanctum Auth 4) ทำ CORS 5) จัดการ State ใน Redux ซ้ำซ้อน แต่เมื่อใช้ Inertia คุณ return Inertia::render("Users", [\'users\' => $users]) บรรทัดเดียว React ได้ข้อมูลไปใช้ทันที!',
        en: 'Traditional separate SPA architectures require building REST APIs, managing API tokens, dealing with CORS, and duplicating state models. Inertia eliminates all that boilerplate: a single Inertia::render() call delivers data straight into React props.'
      },
      whenToUse: {
        th: 'ใช้เมื่อต้องการสร้างเว็บแอปพลิเคชันที่ทันสมัย ลื่นไหลเหมือนแอปมือถือ แต่ต้องการความเร็วในการพัฒนาสูงสุดแบบ Laravel',
        en: 'Use when you want a rich, fluid SPA user experience backed by the rapid productivity of the Laravel backend ecosystem.'
      },
      howItWorks: {
        th: 'เมื่อคลิก <Link href="/employees">: 1) Inertia สกัดกั้นการรีเฟรช 2) ยิง XHR Request พร้อม Header X-Inertia: true 3) Laravel Controller ตอบกลับด้วย JSON ก้อนเล็กๆ 4) Inertia สลับ Component React และอัปเดต URL ทันที',
        en: 'Clicking <Link href="/employees">: 1) Inertia intercepts the browser click 2) Dispatches an XHR with X-Inertia header 3) Laravel returns a compact JSON payload 4) Inertia swaps the React page component instantly.'
      }
    },
    diagram: {
      title: {
        th: 'เปรียบเทียบสถาปัตยกรรม Traditional API vs Inertia Monolith',
        en: 'Traditional REST vs Inertia 3 Flow'
      },
      flow: [
        { title: 'Browser Click', sub: '<Link href="/users">', color: 'cyan' },
        { title: 'Inertia Interceptor', sub: 'X-Inertia XHR Request', color: 'purple' },
        { title: 'Laravel Controller', sub: 'return Inertia::render()', color: 'red' },
        { title: 'React Page Update', sub: 'Seamless SPA Component Swap', color: 'emerald' }
      ],
      type: 'client-server'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'ฝั่ง Laravel: ส่ง Props ผ่าน Inertia::render',
          en: 'Backend: Passing Props via Inertia::render'
        },
        content: {
          th: 'แทนที่จะ return view() แบบเก่า เรา return Inertia::render("ชื่อไฟล์ใน React", ข้อมูล Array)',
          en: 'Instead of returning Blade views, controllers invoke Inertia::render with the React page name and props array.'
        },
        codeSnippet: {
          language: 'php',
          code: `use Inertia\\Inertia;\nuse App\\Models\\Product;\n\npublic function index()\n{\n    return Inertia::render('Products/Index', [\n        'products' => Product::latest()->paginate(10),\n        'appName' => config('app.name')\n    ]);\n}`,
          filename: 'app/Http/Controllers/ProductController.php',
          mockOutput: 'Renders resources/js/Pages/Products/Index.tsx with props { products, appName }'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'ฝั่ง React: รับ Props มาแสดงผลแบบ Type-Safe',
          en: 'Frontend: Consuming Props in React 19 with TypeScript'
        },
        content: {
          th: 'ไฟล์ React ใน resources/js/Pages/Products/Index.tsx จะรับ props เหล่านั้นเข้ามาในฟังก์ชันตรงๆ',
          en: 'The React component at resources/js/Pages/Products/Index.tsx receives those props directly as functional parameters.'
        },
        codeSnippet: {
          language: 'tsx',
          code: `import { Head, Link } from '@inertiajs/react';\n\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n\ninterface Props {\n  products: { data: Product[] };\n  appName: string;\n}\n\nexport default function Index({ products, appName }: Props) {\n  return (\n    <div>\n      <Head title="Products Catalog" />\n      <h1>{appName} - Products</h1>\n      <ul>\n        {products.data.map(item => (\n          <li key={item.id}>{item.name} - \${item.price}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}`,
          filename: 'resources/js/Pages/Products/Index.tsx',
          mockOutput: 'Renders dynamic product list seamlessly without page reload.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      filename: 'InertiaDataFlow.php',
      code: `// 1. Controller ดึงข้อมูลจากฐานข้อมูล\n$users = User::select('id', 'name', 'email', 'role')->get();\n\n// 2. ส่งตรงเข้าสู่ React Page component "Users/List"\nreturn Inertia::render('Users/List', [\n    'users' => $users,\n    'canCreate' => auth()->user()->can('create', User::class)\n]);`,
      mockOutput: 'Inertia JSON response generated: component="Users/List", props={users: [...], canCreate: true}',
      explanations: [
        {
          lines: '2',
          explanation: {
            th: 'ใช้ Eloquent ORM คัดเลือกเฉพาะคอลัมน์ที่จำเป็น เพื่อประหยัด Bandwidth',
            en: 'Uses Eloquent select() to transfer only required fields, conserving network bandwidth.'
          }
        },
        {
          lines: '5-8',
          explanation: {
            th: 'ส่งทั้งข้อมูลผู้ใช้และสิทธิ์ Authorization (canCreate) ไปให้ React เพื่อซ่อน/แสดงปุ่มสร้างได้ทันที',
            en: 'Delivers both database entities and authorization capabilities (canCreate) directly to React.'
          }
        }
      ]
    },
    demoType: 'inertia-flow',
    exercises: [
      {
        id: 'ex-inertia-link',
        title: {
          th: 'แบบฝึกหัด: ใช้ Inertia Link แทนแท็ก <a>',
          en: 'Exercise: Use Inertia Link instead of <a>'
        },
        instructions: {
          th: 'ใน React เมื่อใช้ Inertia เราต้องใช้คอมโพเนนต์ <Link href="/dashboard">...</Link> เพื่อไม่ให้เกิดการรีเฟรชทั้งหน้า จงแปลง <a href="/settings">Settings</a> ให้เป็น Inertia Link',
          en: 'Transform the anchor <a href="/settings">Settings</a> into an Inertia <Link href="/settings">Settings</Link> component.'
        },
        starterCode: `<a href="/settings">Settings</a>`,
        solutionCode: `<Link href="/settings">Settings</Link>`,
        language: 'tsx'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ใช้แท็ก <a href="..."> ธรรมดา ทำให้หน้าเว็บโหลดใหม่ทั้งหน้าแบบดั้งเดิม',
          en: 'Using standard <a href="..."> anchors causing full browser page reloads'
        },
        why: {
          th: 'แท็ก <a> ของ HTML จะสั่งให้เบราว์เซอร์ทิ้ง Memory ทั้งหมดและยิง HTTP Request เต็มรูปแบบ ทำให้สูญเสียความเป็น SPA',
          en: 'Standard HTML <a> tags cause full document reloads, defeating the purpose of a fast SPA.'
        },
        badCode: `<a href="/employees">Employees</a>`,
        goodCode: `import { Link } from '@inertiajs/react';\n\n<Link href="/employees">Employees</Link>`,
        solution: {
          th: 'Import { Link } จาก @inertiajs/react มาใช้แทนแท็ก <a> เสมอสำหรับการนำทางภายในเว็บ',
          en: 'Always import and use <Link> from @inertiajs/react for internal navigation.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-inertia-01-1',
        question: {
          th: 'Inertia 3 ช่วยลดความซ้ำซ้อนในเรื่องใดมากที่สุด?',
          en: 'What overhead does Inertia 3 eliminate most effectively?'
        },
        options: [
          { id: 'a', text: { th: 'ไม่ต้องสร้างและดูแล REST API / GraphQL Layer แยกต่างหากสำหรับ Frontend', en: 'Eliminates having to build, document, and maintain a separate REST/GraphQL API layer for your frontend' } },
          { id: 'b', text: { th: 'ไม่ต้องมีคอมพิวเตอร์เขียนโค้ด', en: 'Eliminates needing a computer to code' } },
          { id: 'c', text: { th: 'ไม่ต้องใช้ฐานข้อมูล', en: 'Eliminates the database entirely' } },
          { id: 'd', text: { th: 'ทำให้ไม่ต้องเขียน HTML', en: 'Eliminates writing HTML' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'จุดเด่นที่สุดของ Inertia คือทำให้คุณเขียน Controller ส่งข้อมูลเข้า React ได้โดยตรงโดยไม่ต้องมี REST API หรือ API Token คั่นกลาง',
          en: 'Inertia’s breakthrough is routing and delivering data straight from backend controllers into React components without an API intermediary.'
        }
      }
    ],
    summary: {
      th: [
        'Inertia 3 คือ The Modern Monolith ที่รวมจุดเด่นของ Laravel และ React เข้าด้วยกัน',
        'Laravel ดูแล Routing, ORM, Auth และ Business Logic อย่างปลอดภัยบน Server',
        'React 19 ดูแลหน้าตา UI, Component และ State ที่ลื่นไหลบน Client',
        'การเปลี่ยนหน้าใช้ XHR แลกเปลี่ยน JSON ทำให้ไม่มีการรีเฟรชหน้าจอ (SPA Experience)'
      ],
      en: [
        'Inertia 3 forms the Modern Monolith combining the productivity of Laravel with the power of React 19.',
        'Laravel handles server routing, database queries, authentication, and security.',
        'React manages interactive UI states, modular components, and responsive views.',
        'XHR protocol delivers instant page transitions without full browser reloads.'
      ]
    }
  },


  'inertia-02-pages-props-routing': {
    id: 'inertia-02-pages-props-routing',
    trackId: 'inertia',
    category: 'Pages & Routing',
    level: 6,
    levelLabel: 'Level 6: Inertia Pages',
    durationMinutes: 22,
    title: {
      th: '02 โครงสร้าง Pages, Props และการนำทางด้วย Link ใน Inertia 3',
      en: '02 Inertia 3 Pages, Server Props & Client Routing'
    },
    description: {
      th: 'เรียนรู้โครงสร้างโฟลเดอร์ resources/js/Pages, การรับ Props จาก Laravel Controller เข้าสู่ React Component แบบ Type-safe และการเปลี่ยนหน้าแบบ SPA ด้วย <Link>',
      en: 'Master Inertia 3 page architectures: Receiving typed server props from Laravel controllers, and navigating seamlessly using the Inertia <Link> component.'
    },
    objectives: {
      th: [
        'เข้าใจการจับคู่ระหว่าง Inertia::render("Employees/Index") กับไฟล์ React Page',
        'รับ Props จาก Laravel Controller เข้าสู่ React Component พร้อม TypeScript Interface',
        'ใช้คอมโพเนนต์ <Link> สำหรับการสลับหน้าโดยไม่รีเฟรชเบราว์เซอร์',
        'ใช้งาน Ziggy Route Helper (route("employees.show", id)) ใน React'
      ],
      en: [
        'Map Inertia::render() calls directly to React page components',
        'Type-hint and receive server props in React components using TypeScript interfaces',
        'Navigate seamlessly using the Inertia <Link> component without page reloads',
        'Utilize the Ziggy route helper in React components'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'ใน Inertia หน้าจอทุกหน้าใน resources/js/Pages คือ "ปลายทางที่ Laravel Controller ชี้มาหา" โดย Controller จะส่งข้อมูลมาให้เป็น Props ธรรมดา เหมือนกับการส่งตัวแปรให้ฟังก์ชัน React',
        en: 'In Inertia, files in resources/js/Pages represent views targeted by Laravel controllers. Controllers pass data straight into React components as standard props.'
      },
      whyUseIt: {
        th: 'ไม่ต้องสร้าง REST API ไม่ต้องเขียน Axios หรือ React Query และไม่ต้องปวดหัวกับการจัดการ State การดึงข้อมูล เพราะข้อมูลสดใหม่ถูกส่งมาพร้อมกับหน้าจอทันที',
        en: 'Eliminates redundant REST APIs, client fetchers, and client caching boilerplate. Data is fresh on navigation.'
      },
      whenToUse: {
        th: 'ใช้ในการสร้างหน้าแสดงรายการ (Index), หน้ารายละเอียด (Show), และหน้าแบบฟอร์ม (Create/Edit) ทั้งหมด',
        en: 'Standard paradigm for building index dashboards, detail views, and interactive forms in Inertia applications.'
      },
      howItWorks: {
        th: 'เมื่อคลิก <Link href="/employees">: Inertia ส่ง XHR Request ขอเฉพาะข้อมูล JSON ของหน้านั้น -> โหลด React Component ของหน้าใหม่มารัน -> สลับหน้าจอทันทีโดยไม่ต้องโหลด HTML ซ้ำ',
        en: 'Clicking <Link> sends an XHR request for the new page JSON payload -> Inertia mounts the target page component -> Swaps views with zero screen flicker.'
      }
    },
    diagram: {
      title: {
        th: 'การนำทางและการส่ง Props ของ Inertia 3',
        en: 'Inertia 3 Navigation & Props Flow'
      },
      flow: [
        { title: '1. <Link href="/employees">', sub: 'ผู้ใช้คลิกลิงก์บนหน้า React', color: 'blue' },
        { title: '2. Inertia XHR', sub: 'ส่ง Header X-Inertia: true ไปยัง Laravel', color: 'purple' },
        { title: '3. Controller Execution', sub: 'Inertia::render("Employees/Index", ["employees" => $data])', color: 'emerald' },
        { title: '4. Instant UI Swap', sub: 'หน้าจอเปลี่ยนเป็นหน้าพนักงานทันทีโดยไม่รีเฟรช', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Controller และส่ง Props ด้วย Inertia::render',
          en: 'Render Inertia Page from Controller'
        },
        content: {
          th: 'return Inertia::render("Employees/Index", [ "employees" => Employee::paginate(10) ]);',
          en: 'return Inertia::render("Employees/Index", [ "employees" => Employee::paginate(10) ]);.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'สร้าง React Component รับ Props',
          en: 'Receive Server Props in React'
        },
        content: {
          th: 'ใน resources/js/Pages/Employees/Index.tsx รับ { employees }: PageProps แล้วแสดงผล',
          en: 'Inside resources/js/Pages/Employees/Index.tsx, accept { employees }: PageProps and render list.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// resources/js/Pages/Employees/Index.tsx\nimport React from "react";\nimport { Link } from "@inertiajs/react";\n\ninterface Employee { id: number; employee_code: string; first_name: string; email: string; }\n\ninterface Props {\n  employees: { data: Employee[]; current_page: number; last_page: number; };\n}\n\nexport default function Index({ employees }: Props) {\n  return (\n    <div className="p-6">\n      <div className="flex justify-between items-center mb-6">\n        <h1 className="text-2xl font-bold">พนักงานทั้งหมด</h1>\n        <Link href="/employees/create" className="bg-blue-600 text-white px-4 py-2 rounded">\n          + เพิ่มพนักงาน\n        </Link>\n      </div>\n      <ul className="divide-y">\n        {employees.data.map(emp => (\n          <li key={emp.id} className="py-3 flex justify-between">\n            <span>{emp.employee_code} - {emp.first_name}</span>\n            <Link href={`/employees/${emp.id}`} className="text-blue-600">ดูรายละเอียด</Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n',
      filename: 'resources/js/Pages/Employees/Index.tsx',
      mockOutput: 'Rendered Inertia React Page with Server Props'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ใช้แท็ก <a> ธรรมดาแทนคอมโพเนนต์ <Link> ของ Inertia',
          en: 'Using standard <a> tags instead of Inertia <Link> components'
        },
        why: {
          th: 'การใช้แท็ก <a> จะทำให้เบราว์เซอร์รีเฟรชหน้าเว็บทั้งหน้าใหม่ทั้งหมด สูญเสียข้อดีของ SPA และโหลดช้าลงอย่างมาก',
          en: 'Standard anchor tags trigger full document reloads, discarding client state and breaking SPA fluidity.'
        },
        badCode: '// ❌ รีเฟรชหน้าทั้งหน้า: สูญเสียความเป็น SPA\n<a href="/employees">รายชื่อพนักงาน</a>',
        goodCode: '// ✓ ถูกต้อง: เปลี่ยนหน้าแบบ SPA รวดเร็วและราบรื่น\n<Link href="/employees">รายชื่อพนักงาน</Link>',
        solution: {
          th: 'Import { Link } from "@inertiajs/react" และใช้งานแทนแท็ก <a> เสมอ',
          en: 'Always import and use the Inertia <Link> component for internal navigations.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-inertia-02-1',
        question: {
          th: 'เมื่อใช้ Inertia::render("Employees/Index", ["title" => "HR Portal"]) ข้อมูลส่งถึง React ได้อย่างไร?',
          en: 'How does data dispatched from Inertia::render reach the React component?'
        },
        options: [
          { id: 'a', text: { th: 'ส่งตรงเข้าสู่ Props ของหน้า Index.tsx ทันทีโดยไม่ต้องใช้ useEffect หรือ fetch()', en: 'Delivered directly as component props into Index.tsx without useEffect or fetch' } },
          { id: 'b', text: { th: 'ต้องเขียน axios.get("/api/title") มาดึงอีกรอบ', en: 'Requires a secondary axios.get call' } },
          { id: 'c', text: { th: 'บันทึกผ่าน Bluetooth', en: 'Transmitted via Bluetooth' } },
          { id: 'd', text: { th: 'ต้องเก็บลงใน LocalStorage ก่อน', en: 'Requires temporary LocalStorage caching' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Inertia เชื่อม Controller สู่ React Props โดยตรง ข้อมูลที่ส่งใน Inertia::render จะกลายเป็น Props ของหน้านั้นทันที',
          en: 'Inertia injects controller payloads directly into React component props, eliminating client fetch boilerplate.'
        }
      }
    ],
    summary: {
      th: [
        'โฟลเดอร์ resources/js/Pages คือที่อยู่ของคอมโพเนนต์หน้าจอ React ใน Inertia',
        'Laravel Controller ส่งข้อมูลตรงเข้าสู่ Props ของ React โดยไม่ต้องเขียน API เพิ่ม',
        'ใช้ <Link> แทน <a> เสมอเพื่อรักษาประสบการณ์การทำงานแบบ Single-Page App (SPA)'
      ],
      en: [
        'resources/js/Pages hosts Inertia view components.',
        'Laravel controllers pass state directly into React props without intermediate API layers.',
        'Always navigate using <Link> to preserve seamless SPA speed.'
      ]
    }
  },

  'inertia-03-forms-useform': {
    id: 'inertia-03-forms-useform',
    trackId: 'inertia',
    category: 'Forms & State',
    level: 6,
    levelLabel: 'Level 6: Inertia Forms',
    durationMinutes: 24,
    title: {
      th: '03 การจัดการฟอร์มด้วย useForm Hook ใน Inertia 3',
      en: '03 Inertia 3 useForm Hook & Error Handling'
    },
    description: {
      th: 'เจาะลึก useForm Hook ของ Inertia: การจัดการ Form State, ฟังก์ชัน post/put/delete, สถานะ processing, การแสดง Server Validation Errors อัตโนมัติ, และการ Reset ฟอร์ม',
      en: 'Master Inertia 3 useForm hook: Reactive form state, post/put/delete methods, processing flags, automatic server error mapping, and form resets.'
    },
    objectives: {
      th: [
        'เข้าใจการทำงานของ useForm Hook ใน Inertia 3',
        'ผูกค่า data, setData และส่งฟอร์มด้วย post(route("employees.store"))',
        'แสดงข้อความ Validation Error จาก Laravel อัตโนมัติผ่าน errors object',
        'ควบคุมปุ่ม Submit ด้วย processing เพื่อป้องกันการกดส่งซ้ำ'
      ],
      en: [
        'Master the mechanics of Inertia useForm hook',
        'Bind form attributes via data/setData and dispatch using post()',
        'Render Laravel validation errors automatically via the errors dictionary',
        'Disable buttons during processing to prevent duplicate submissions'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'useForm คือ "Hook วิเศษสำหรับฟอร์มของ Inertia" ที่รวมทุกสิ่งที่ฟอร์มต้องการไว้ในที่เดียว ทั้งการเก็บข้อมูล (data), การส่งข้อมูล (post), การตรวจเช็คกำลังส่ง (processing), และข้อความแจ้งเตือน Error จาก Laravel (errors)',
        en: 'useForm is Inertia all-in-one form management hook encapsulating data bindings, submission dispatchers, loading flags, and server error handling.'
      },
      whyUseIt: {
        th: 'หากเขียน React ปกติ คุณต้องเขียน useState 3-4 ตัวและเขียน try-catch ดัก Error เอง แต่ useForm รับ Error จาก Laravel Form Request มาแสดงผลได้ในบรรทัดเดียว',
        en: 'Eliminates manually writing multiple useStates, try/catch blocks, and error parsing routines for every form.'
      },
      whenToUse: {
        th: 'ใช้ในทุกฟอร์มของโปรเจกต์ Inertia ทั้งสร้าง แก้ไข หรือลบข้อมูล',
        en: 'The standard form utility across all Inertia applications.'
      },
      howItWorks: {
        th: 'เมื่อสั่ง post("/employees"): Inertia ยิงคำขอไปหา Laravel -> หากผ่าน Laravel Redirect ไปหน้าใหม่ -> หากไม่ผ่าน Laravel ส่ง Validation Errors กลับมา -> errors ใน useForm อัปเดตและแสดงสีแดงบนจอทันที',
        en: 'Calling post() triggers an XHR request -> On success, Laravel redirects -> On failure, Laravel returns 422 errors which automatically populate the errors object.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรการส่งฟอร์มด้วย useForm ใน Inertia 3',
        en: 'Inertia useForm Full Lifecycle'
      },
      flow: [
        { title: '1. form.post()', sub: 'Inertia useForm ยิงคำขอ XHR', color: 'blue' },
        { title: '2. Laravel Validation', sub: 'StoreEmployeeRequest ตรวจสอบ rules()', color: 'purple' },
        { title: '3. Validation Error?', sub: 'หากไม่ผ่าน: ส่ง Error Object กลับ / processing = false', color: 'rose' },
        { title: '4. Automatic Binding', sub: 'errors.email แสดงข้อความ Error สีแดงใต้ช่องพิมพ์ทันที', color: 'emerald' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'เรียกใช้ useForm ใน Component',
          en: 'Initialize useForm'
        },
        content: {
          th: 'const { data, setData, post, processing, errors, reset } = useForm({ name: "", email: "" });',
          en: 'const { data, setData, post, processing, errors, reset } = useForm({ name: "", email: "" });.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียนฟังก์ชัน handleSubmit',
          en: 'Dispatch Form Submission'
        },
        content: {
          th: 'post("/employees", { onSuccess: () => reset() });',
          en: 'post("/employees", { onSuccess: () => reset() });.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import React from "react";\nimport { useForm } from "@inertiajs/react";\n\nexport default function CreateEmployee() {\n  const { data, setData, post, processing, errors, reset } = useForm({\n    employee_code: "",\n    first_name: "",\n    email: "",\n    department: "Engineering"\n  });\n\n  const submit = (e: React.FormEvent) => {\n    e.preventDefault();\n    post("/employees", {\n      onSuccess: () => reset()\n    });\n  };\n\n  return (\n    <form onSubmit={submit} className="max-w-md mx-auto space-y-4 p-6 bg-white rounded-xl shadow">\n      <div>\n        <label className="block text-xs font-bold mb-1">รหัสพนักงาน</label>\n        <input\n          value={data.employee_code}\n          onChange={e => setData("employee_code", e.target.value)}\n          className="w-full border p-2 rounded"\n        />\n        {errors.employee_code && <p className="text-red-500 text-xs mt-1">{errors.employee_code}</p>}\n      </div>\n\n      <div>\n        <label className="block text-xs font-bold mb-1">อีเมล</label>\n        <input\n          type="email"\n          value={data.email}\n          onChange={e => setData("email", e.target.value)}\n          className="w-full border p-2 rounded"\n        />\n        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}\n      </div>\n\n      <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white py-2 rounded">\n        {processing ? "กำลังบันทึกข้อมูล..." : "บันทึกพนักงานใหม่"}\n      </button>\n    </form>\n  );\n}\n',
      filename: 'resources/js/Pages/Employees/Create.tsx',
      mockOutput: 'Inertia useForm with real-time error mapping active'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'พยายามใช้ axios.post() ในหน้า Inertia แทนที่จะใช้ post() ของ useForm',
          en: 'Using axios.post() instead of Inertia useForm post() method'
        },
        why: {
          th: 'การใช้ axios จะไม่ได้รับประโยชน์จากการส่งข้อมูลแบบ Inertia และไม่สามารถอัปเดต Props หรือรับ Server Validation Errors เข้าสู่ errors object อัตโนมัติได้',
          en: 'axios bypasses Inertia protocol, losing automatic flash message propagation and server validation error bindings.'
        },
        badCode: '// ❌ ไม่แนะนำใน Inertia\naxios.post("/employees", data).then(...);',
        goodCode: '// ✓ ถูกต้อง: ใช้ post() ของ useForm\npost("/employees");',
        solution: {
          th: 'ใช้เมธอด post, put, patch หรือ delete จาก useForm เสมอ',
          en: 'Always dispatch form mutations through Inertia useForm helper methods.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-inertia-03-1',
        question: {
          th: 'เมื่อ Laravel Form Request ตรวจพบว่าข้อมูลไม่ถูกต้อง Inertia useForm จะรับข้อความ Error มาอย่างไร?',
          en: 'When Laravel validation fails, how does Inertia useForm receive the error messages?'
        },
        options: [
          { id: 'a', text: { th: 'Inertia จะนำ Error มาใส่ในตัวแปร errors ให้อัตโนมัติโดยผู้ใช้สามารถเรียก errors.field_name ได้ทันที', en: 'Inertia automatically populates the errors object, accessible via errors.fieldName' } },
          { id: 'b', text: { th: 'ส่งเป็นข้อความ SMS เข้ามือถือ', en: 'Dispatches an SMS notification' } },
          { id: 'c', text: { th: 'หน้าเว็บจะปิดตัวเองทันที', en: 'Closes the browser window' } },
          { id: 'd', text: { th: 'ต้องเปิดดูใน Terminal ของเซิร์ฟเวอร์เท่านั้น', en: 'Requires manual terminal inspection' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Inertia ดักจับ HTTP 422 Validation Error จาก Laravel และแมปเข้าสู่ errors object ใน React Component ให้โดยอัตโนมัติ',
          en: 'Inertia intercepts HTTP 422 responses and binds field errors directly into the reactive errors dictionary.'
        }
      }
    ],
    summary: {
      th: [
        'useForm คือเครื่องมือจัดการฟอร์มที่ดีที่สุดสำหรับระบบ Laravel + React',
        'จัดการ State, การส่งข้อมูล, การแจ้งเตือนกำลังโหลด (processing) ครบในตัว',
        'รับข้อความ Validation Error จาก Laravel ได้อย่างแม่นยำและแสดงผลได้ทันที'
      ],
      en: [
        'useForm is the premier form engine for Laravel and React monoliths.',
        'Integrates state, dispatchers, and processing flags out of the box.',
        'Binds Laravel server validation errors to reactive React UI seamlessly.'
      ]
    }
  },

  'inertia-04-shared-data-validation': {
    id: 'inertia-04-shared-data-validation',
    trackId: 'inertia',
    category: 'Middleware & Auth',
    level: 6,
    levelLabel: 'Level 6: Shared Props',
    durationMinutes: 20,
    title: {
      th: '04 ข้อมูลส่วนกลาง (Shared Data) และ Flash Messages ใน Inertia 3',
      en: '04 Inertia 3 Shared Data & Flash Messages'
    },
    description: {
      th: 'แชร์ข้อมูลส่วนกลางสู่ทุกหน้าจอ React โดยไม่ต้องส่งซ้ำๆ: HandleInertiaRequests Middleware, ข้อมูลผู้ใช้ล็อกอิน (auth.user), ข้อความแจ้งเตือน Flash Messages, และการใช้ usePage Hook',
      en: 'Share global state effortlessly across all React pages: HandleInertiaRequests middleware, authenticated user contexts, flash notifications, and the usePage hook.'
    },
    objectives: {
      th: [
        'เข้าใจการทำงานของ HandleInertiaRequests Middleware ใน Laravel',
        'แชร์ข้อมูล auth.user และ flash message สู่ทุกหน้าของ React อัตโนมัติ',
        'ดึงข้อมูลส่วนกลางใน React Component ใดๆ ด้วย usePage() Hook',
        'สร้างคอมโพเนนต์ Toast Notification แจ้งเตือนเมื่อทำงานสำเร็จ'
      ],
      en: [
        'Understand HandleInertiaRequests middleware in Laravel',
        'Share auth.user and flash notifications across every React page view',
        'Consume global props anywhere in the React tree using usePage()',
        'Construct global toast notification components responding to flash states'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Shared Data ใน Inertia คือ "ข้อมูลส่วนกลางที่ Laravel ส่งให้ทุกหน้าจอ React อัตโนมัติ" เช่น ข้อมูลว่าใครกำลังล็อกอินอยู่ หรือข้อความแจ้งเตือนสีเขียว "บันทึกสำเร็จ!" ทำให้คุณไม่ต้องส่งข้อมูลเหล่านี้ใน Controller ทุกๆ ตัว',
        en: 'Shared data represents global attributes provided by Laravel middleware to every React page view automatically, such as current user identity and flash alerts.'
      },
      whyUseIt: {
        th: "ป้องกันการเขียนโค้ดซ้ำซาก หากไม่มี Shared Data คุณจะต้องพิมพ์ส่งข้อมูล ['user' => Auth::user()] ในทุกๆ Controller Action ทั้ง 50 หน้าของระบบ",
        en: 'Prevents repetitively passing authenticated user and session metadata across dozens of individual controller actions.'
      },
      whenToUse: {
        th: 'ใช้สำหรับข้อมูลที่ทุกหน้าต้องเข้าถึง เช่น ข้อมูลผู้ใช้ล็อกอิน, การตั้งค่าระบบ, รายชื่อเมนู, และ Flash Messages',
        en: 'Ideal for universally needed data: authenticated sessions, organization settings, menus, and flash toasts.'
      },
      howItWorks: {
        th: 'Laravel รัน HandleInertiaRequests middleware -> รวบรวมข้อมูลใน share() -> ผนวกเข้ากับ Props ของหน้าจอ -> ใน React สามารถเรียก usePage().props.auth.user ได้จากทุกที่',
        en: 'HandleInertiaRequests gathers data in share() -> Attaches to response payload -> React reads attributes via usePage().props.'
      }
    },
    diagram: {
      title: {
        th: 'การแชร์ข้อมูลส่วนกลางผ่าน HandleInertiaRequests',
        en: 'Inertia Shared Data Architecture'
      },
      flow: [
        { title: '1. HandleInertiaRequests', sub: 'Laravel Middleware ประกาศ share()', color: 'blue' },
        { title: '2. Global Attributes', sub: 'auth.user, flash.success, flash.error', color: 'purple' },
        { title: '3. Inertia Response', sub: 'ส่งรวมกับ Props เฉพาะของหน้านั้น', color: 'emerald' },
        { title: '4. usePage() in React', sub: 'const { auth, flash } = usePage().props;', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'กำหนดค่าใน HandleInertiaRequests Middleware',
          en: 'Configure HandleInertiaRequests'
        },
        content: {
          th: 'ใน app/Http/Middleware/HandleInertiaRequests.php กำหนด share() ให้ส่ง auth และ flash',
          en: 'Inside app/Http/Middleware/HandleInertiaRequests.php, populate share() with auth and flash objects.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เรียกใช้ใน React ด้วย usePage()',
          en: 'Consume in React via usePage()'
        },
        content: {
          th: 'import { usePage } from "@inertiajs/react"; const { auth, flash } = usePage().props;',
          en: 'import { usePage } from "@inertiajs/react"; const { auth, flash } = usePage().props;.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nnamespace App\\Http\\Middleware;\n\nuse Illuminate\\Http\\Request;\nuse Inertia\\Middleware;\n\nclass HandleInertiaRequests extends Middleware\n{\n    public function share(Request $request): array\n    {\n        return [\n            ...parent::share($request),\n            "auth" => [\n                "user" => $request->user() ? [\n                    "id"    => $request->user()->id,\n                    "name"  => $request->user()->name,\n                    "email" => $request->user()->email,\n                    "role"  => $request->user()->role,\n                ] : null,\n            ],\n            "flash" => [\n                "success" => fn () => $request->session()->get("success"),\n                "error"   => fn () => $request->session()->get("error"),\n            ],\n        ];\n    }\n}\n',
      filename: 'app/Http/Middleware/HandleInertiaRequests.php',
      mockOutput: 'Global Auth and Flash props configured'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ส่งข้อมูลความลับ เช่น Password Hash หรือ API Secret ใน HandleInertiaRequests::share()',
          en: 'Exposing password hashes or API secrets inside HandleInertiaRequests::share()'
        },
        why: {
          th: 'ข้อมูลทุกตัวที่อยู่ใน share() จะถูกส่งเป็น JSON ไปยังหน้าจอ React ของผู้ใช้ หากใส่รหัสผ่านหรือ Secret Keys ผู้ใช้งานสามารถเปิดดูใน Browser Inspect ได้ทันที',
          en: 'All attributes in share() are delivered as client JSON payloads. Leaking password hashes or API tokens exposes credentials.'
        },
        badCode: '// ❌ อันตราย: อย่าแชร์ Model User ทั้งตัวโดยตรง\n"user" => $request->user()',
        goodCode: '// ✓ ปลอดภัย: เลือกเฉพาะฟิลด์ที่จำเป็นต้องแสดงบนหน้าจอเท่านั้น\n"user" => $request->user() ? $request->user()->only("id", "name", "email", "role") : null',
        solution: {
          th: 'เลือกแชร์เฉพาะคอลัมน์ที่จำเป็นสำหรับ UI เท่านั้นด้วย only()',
          en: 'Strictly filter shared model properties using only() or resource mappers.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-inertia-04-1',
        question: {
          th: 'ใน React Component ของ Inertia เราสามารถดึงข้อมูลส่วนกลาง (เช่น auth.user) ที่แชร์มาจาก Middleware ได้ด้วย Hook ใด?',
          en: 'Which Inertia hook retrieves shared global props inside any React component?'
        },
        options: [
          { id: 'a', text: { th: 'usePage()', en: 'usePage()' } },
          { id: 'b', text: { th: 'useGlobalState()', en: 'useGlobalState()' } },
          { id: 'c', text: { th: 'useServer()', en: 'useServer()' } },
          { id: 'd', text: { th: 'useDatabase()', en: 'useDatabase()' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'usePage() เป็น Hook ของ Inertia ที่ให้สิทธิ์เข้าถึง Props ทั้งหมดของหน้าปัจจุบัน รวมถึงข้อมูลที่แชร์มาจาก Middleware',
          en: 'usePage() grants access to current page props and middleware-shared attributes anywhere in the component tree.'
        }
      }
    ],
    summary: {
      th: [
        'HandleInertiaRequests Middleware ทำหน้าที่แชร์ข้อมูลส่วนกลางสู่ทุกหน้าจอ React',
        'แชร์ auth.user และ flash messages เพื่อให้ Navbar และระบบแจ้งเตือนทำงานได้ทุกที่',
        'ใช้ usePage().props ใน React เพื่อดึงข้อมูลส่วนกลางมาแสดงผลอย่างสะดวกสบาย'
      ],
      en: [
        'HandleInertiaRequests centrally distributes global state to all React components.',
        'Shares authentication status and flash toasts universally across the application.',
        'usePage().props provides instant access to global context without prop-drilling.'
      ]
    }
  },

  'inertia-05-fullstack-flow': {
    id: 'inertia-05-fullstack-flow',
    trackId: 'inertia',
    category: 'Full-Stack Integration',
    level: 7,
    levelLabel: 'Level 7: Architecture Flow',
    durationMinutes: 25,
    title: {
      th: '05 วงจรการทำงานเต็มรูปแบบ Laravel + React 19 + Inertia 3',
      en: '05 Full-Stack Monolith Flow: Laravel 11, Inertia 3 & React 19'
    },
    description: {
      th: 'เชื่อมโยงทุกสิ่งเข้าด้วยกัน: การเดินทางของข้อมูลแบบ End-to-End ตั้งแต่ Route -> Controller -> Inertia View -> React Form Submit -> Validation -> DB Transaction -> Partial Reload พร้อมเครื่องมือจำลอง Inertia Flow แบบ Interactive',
      en: 'Connect the complete architecture: End-to-end data lifecycle across routes, controllers, Inertia views, form submissions, validations, transactions, and partial reloads with the live flow simulator.'
    },
    objectives: {
      th: [
        'อธิบายวงจรชีวิตของคำขอตั้งแต่ต้นจนจบในสถาปัตยกรรม Monolith SPA',
        'เข้าใจการทำงานของ Partial Reloads (only: ["employees"]) เพื่อประหยัด Bandwidth',
        'ทดลองจำลองและสังเกตการเดินทางของข้อมูลใน Interactive Flow Simulator',
        'พร้อมสร้างแอปพลิเคชันระดับ Production ด้วยความมั่นใจ'
      ],
      en: [
        'Trace complete end-to-end request lifecycles in the modern monolith SPA pattern',
        'Master Partial Reloads (only: ["employees"]) for optimal network efficiency',
        'Experiment with the interactive Inertia Flow Simulator',
        'Build production-ready full-stack applications with architectural clarity'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'สถาปัตยกรรม Full-Stack Monolith (Laravel + React + Inertia) คือ "การรวมข้อดีของสองโลกเข้าด้วยกัน": คุณได้ความเร็วและความสะดวกในการพัฒนาแบบ Monolith ไม่ต้องทำ API แยก แต่ผู้ใช้งานได้รับประสบการณ์ที่ลื่นไหลแบบ Single Page Application (SPA) 100%',
        en: 'The modern monolith combines the developer productivity of classic server frameworks with the fluid client-side responsiveness of modern React SPAs.'
      },
      whyUseIt: {
        th: 'ลดเวลาการพัฒนาลงกว่า 50% เมื่อเทียบกับการแยกทีม Frontend/Backend ไม่ต้องออกแบบ REST API สองรอบ และหมดปัญหา CORS, JWT Refresh Token หรือ API Versioning',
        en: 'Halves development overhead by eliminating redundant API contracts, CORS headaches, token rotation routines, and fragmented repos.'
      },
      whenToUse: {
        th: 'เหมาะที่สุดสำหรับระบบ SaaS, Backoffice, CRM, ERP และเว็บแอปพลิเคชันที่ต้องการความเร็วในการพัฒนาและประสิทธิภาพสูงสุด',
        en: 'The optimal architectural choice for SaaS platforms, enterprise backoffices, CRMs, and complex web applications.'
      },
      howItWorks: {
        th: 'กดปุ่มบน React -> useForm ส่งคำขอ XHR -> Laravel ตรวจสอบสิทธิ์และบันทึก DB -> Laravel สั่ง return redirect()->back()-> Inertia ดึงข้อมูลใหม่เฉพาะส่วนที่เปลี่ยนมาแสดงผลทันที',
        en: 'React triggers useForm -> Inertia fires XHR -> Laravel processes domain logic -> Laravel issues back redirect -> Inertia merges updated props into active React view.'
      }
    },
    diagram: {
      title: {
        th: 'การเดินทางของข้อมูลแบบสมบูรณ์ในระบบ Laravel + React + Inertia',
        en: 'End-to-End Modern Monolith Data Flow'
      },
      flow: [
        { title: '1. React Page', sub: 'ผู้ใช้กรอกข้อมูลใน useForm และกด Submit', color: 'blue' },
        { title: '2. Laravel Route & FormRequest', sub: 'ตรวจสอบความถูกต้องของข้อมูล (Validation)', color: 'purple' },
        { title: '3. Action & DB Save', sub: 'บันทึกข้อมูลลงฐานข้อมูลผ่าน Eloquent', color: 'emerald' },
        { title: '4. Inertia Partial Reload', sub: 'อัปเดตเฉพาะข้อมูลตารางใน React หน้าจอเดิม ไม่มีการกระพริบ', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'การส่งข้อมูลและการตอบกลับแบบ Inertia',
          en: 'Inertia Round-trip Lifecycle'
        },
        content: {
          th: 'React Form -> POST /employees -> EmployeeController::store -> redirect()->route("employees.index") พร้อม flash message',
          en: 'React Form -> POST /employees -> EmployeeController::store -> redirect()->route("employees.index") with flash payload.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'Partial Reloads เพื่อประสิทธิภาพสูงสุด',
          en: 'Partial Reloads for Scale'
        },
        content: {
          th: 'ใช้ router.reload({ only: ["employees"] }) เพื่อขอเฉพาะข้อมูลพนักงานโดยไม่ต้องดึงข้อมูล auth หรือเมนูซ้ำ',
          en: 'Leverage router.reload({ only: ["employees"] }) to fetch updated entity datasets without reloading heavy surrounding layouts.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\n// ใน EmployeeController.php\npublic function store(StoreEmployeeRequest $request, CreateEmployeeAction $action)\n{\n    // 1. ประมวลผลและบันทึกข้อมูล\n    $action->execute($request->validated());\n\n    // 2. Inertia Redirect: ส่งผู้ใช้กลับไปยังหน้ารายการพร้อม Flash Message\n    return redirect()->route("employees.index")->with("success", "บันทึกข้อมูลพนักงานสำเร็จ!");\n}\n',
      filename: 'app/Http/Controllers/EmployeeController.php',
      mockOutput: 'Redirect response delivered via X-Inertia header'
    },
    demoType: 'inertia-flow',
    commonMistakes: [
      {
        mistake: {
          th: 'สั่ง return response()->json(...) ใน Controller ของ Inertia แทนที่จะสั่ง redirect หรือ Inertia::render',
          en: 'Returning raw response()->json() instead of redirect or Inertia::render'
        },
        why: {
          th: 'Inertia คาดหวังจะได้ Inertia Response หรือ Redirect Response หากตอบกลับเป็น JSON ดิบๆ หน้าจอ React จะแสดงข้อมูล JSON เปล่าๆ แทนที่จะสลับหน้าจออย่างสวยงาม',
          en: 'Inertia protocols require redirect or Inertia view responses; emitting raw JSON leaves the client UI in an unhandled state.'
        },
        badCode: '// ❌ ผิดธรรมเนียม Inertia: อย่า return json เปล่าๆ หลัง Save\nreturn response()->json(["status" => "ok"]);',
        goodCode: '// ✓ ถูกต้อง: redirect กลับหน้ารายการพร้อม flash message\nreturn redirect()->route("employees.index")->with("success", "บันทึกสำเร็จ");',
        solution: {
          th: 'หลังการสร้างหรือแก้ไขข้อมูล ให้สั่ง redirect() กลับไปยังหน้าที่ต้องการเสมอ',
          en: 'Always return redirect()->route() or redirect()->back() after form mutations.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-inertia-05-1',
        question: {
          th: 'ในสถาปัตยกรรม Laravel + Inertia + React เมื่อ Controller บันทึกข้อมูลสำเร็จ ควรส่งสิ่งใดตอบกลับผู้ใช้?',
          en: 'In Laravel + Inertia + React, what should a controller return after successfully persisting a form?'
        },
        options: [
          { id: 'a', text: { th: 'สั่ง redirect() กลับไปยังหน้ารายการหรือหน้าเดิม พร้อม flash message', en: 'A redirect() call to target route with flash session message' } },
          { id: 'b', text: { th: 'ปิดการเชื่อมต่ออินเทอร์เน็ต', en: 'Terminating the network socket' } },
          { id: 'c', text: { th: 'ส่งไฟล์ .exe ให้ผู้ใช้ดาวน์โหลด', en: 'Prompting a binary executable download' } },
          { id: 'd', text: { th: 'รีสตาร์ทเครื่องคอมพิวเตอร์เซิร์ฟเวอร์', en: 'Rebooting the server hardware' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Inertia ทำตามรูปแบบ Post/Redirect/Get (PRG) ดั้งเดิม เมื่อ Controller redirect ทาง Inertia จะดึงข้อมูลหน้าใหม่มารีเฟรชให้ทันทีโดยไม่ต้องโหลดหน้าใหม่',
          en: 'Inertia follows the Post/Redirect/Get paradigm; redirect responses trigger an automated client SPA transition.'
        }
      }
    ],
    summary: {
      th: [
        'Laravel 11 + React 19 + Inertia 3 คือคอมโบ Full-Stack ที่ทรงพลังที่สุดในยุคปัจจุบัน',
        'ทำงานร่วมกันอย่างแนบแน่น: Controller สั่งการ -> Inertia เชื่อมต่อ -> React แสดงผลแบบ SPA',
        'คุณสามารถทดลองเล่นกับเครื่องมือจำลอง Inertia Flow Simulator ได้ที่แถบด้านข้าง!'
      ],
      en: [
        'Laravel 11 + React 19 + Inertia 3 delivers peak full-stack developer velocity.',
        'Seamless cohesion: Laravel orchestrates, Inertia bridges, and React renders fluid SPAs.',
        'Interact with the live, animated Inertia Flow Simulator in the adjacent panel!'
      ]
    }
  }

};
