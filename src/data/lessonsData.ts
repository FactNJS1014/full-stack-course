import { Lesson } from '../types';

export const LESSONS_DATA: Record<string, Lesson> = {
  'zero-01-what-is-programming': {
    id: 'zero-01-what-is-programming',
    trackId: 'zero',
    category: 'Programming Basics',
    level: 0,
    levelLabel: 'Level 0: Absolute Beginner',
    durationMinutes: 15,
    title: {
      th: '0.1 การเขียนโปรแกรมคืออะไร? (What is Programming?)',
      en: '0.1 What is Programming & Software Development?'
    },
    description: {
      th: 'เริ่มต้นจากศูนย์อย่างแท้จริง ทำความเข้าใจว่าคอมพิวเตอร์เข้าใจคำสั่งได้อย่างไร โค้ดคืออะไร และโปรแกรมทำงานอย่างไร',
      en: 'Start from absolute zero. Understand how computers interpret instructions, what code is, and how programs execute.'
    },
    objectives: {
      th: [
        'เข้าใจความหมายของ Programming และ Software',
        'รู้ว่าคอมพิวเตอร์แปลงข้อความโค้ด (Source Code) เป็นการทำงานได้อย่างไร',
        'เข้าใจความแตกต่างระหว่างภาษาโปรแกรม (PHP, TypeScript, Python)',
        'พร้อมก้าวสู่การเขียนโค้ดบรรทัดแรกอย่างมั่นใจ'
      ],
      en: [
        'Understand what programming and software actually are',
        'Learn how computers turn source code into machine execution',
        'Recognize the differences between programming languages (PHP, TypeScript, Python)',
        'Gain confidence to write your very first line of code'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'การเขียนโปรแกรม (Programming) คือ "การเขียนชุดคำสั่งทีละขั้นตอน (Algorithm)" เพื่อบอกให้คอมพิวเตอร์ทำงานตามเป้าหมายที่เราต้องการ เช่น การคำนวณเงินเดือน การแสดงรายชื่อสินค้า หรือการส่งอีเมลยืนยัน',
        en: 'Programming is writing step-by-step instructions (an algorithm) directing a computer to perform tasks such as computing salaries, rendering product catalogs, or dispatching verification emails.'
      },
      whyUseIt: {
        th: 'มนุษย์ทำงานซ้ำๆ ได้ช้าและมีโอกาสผิดพลาด (Human Error) แต่คอมพิวเตอร์สามารถทำงานคำนวณซับซ้อนได้หลายพันล้านครั้งต่อวินาทีอย่างแม่นยำ 24/7 โดยไม่เหน็ดเหนื่อย',
        en: 'Humans work slowly and make mistakes with repetitive tasks, whereas computers can execute billions of logical steps per second with 100% accuracy 24/7 without fatigue.'
      },
      whenToUse: {
        th: 'ใช้เมื่อต้องการสร้างระบบอัตโนมัติ เว็บไซต์ แอปพลิเคชัน หรือแก้ปัญหาที่มีขั้นตอนชัดเจน เช่น ระบบสั่งอาหาร ระบบธนาคาร หรือระบบจัดการสต็อกสินค้า',
        en: 'Used whenever you need to automate workflows, build websites, construct mobile/web apps, or solve structured problems like e-commerce, banking, or inventory control.'
      },
      howItWorks: {
        th: 'ผู้เขียนโค้ดพิมพ์ "Source Code" ด้วยภาษาที่มนุษย์อ่านเข้าใจ (เช่น PHP หรือ TypeScript) จากนั้นระบบ Interpreter หรือ Compiler จะแปลเป็น Machine Code (0 และ 1) เพื่อให้ CPU สั่งการฮาร์ดแวร์ทำงาน',
        en: 'Developers write human-readable source code (like PHP or TypeScript). An interpreter or compiler translates it into binary machine code (0s and 1s) for the CPU to execute.'
      }
    },
    diagram: {
      title: {
        th: 'กระบวนการแปลงโค้ดสู่การทำงานของคอมพิวเตอร์',
        en: 'Code Translation to Execution Flow'
      },
      flow: [
        { title: '1. Human Idea', sub: 'ต้องการคำนวณราคาสินค้า', color: 'blue' },
        { title: '2. Source Code', sub: '$total = $price * $qty;', color: 'emerald' },
        { title: '3. Interpreter/Compiler', sub: 'แปลเป็นไบนารี 0101', color: 'purple' },
        { title: '4. CPU Execution', sub: 'ประมวลผลลัพธ์ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'ทำความรู้จักตัวแปร (Variables): กล่องเก็บข้อมูล',
          en: 'Understanding Variables: Data Boxes'
        },
        content: {
          th: 'คอมพิวเตอร์ต้องมีที่จำข้อมูล เช่น จำชื่อผู้ใช้ จำยอดเงินในกระเป๋า เราจึงสร้าง "ตัวแปร" ขึ้นมาเปรียบเสมือนกล่องที่มีป้ายชื่อติดไว้',
          en: 'Computers need memory to hold data like a username or wallet balance. We create variables, which act like labeled boxes holding specific values.'
        },
        codeSnippet: {
          language: 'php',
          code: `$userName = "Alex";\n$accountBalance = 1500;\n\necho "Hello " . $userName . ", balance: $" . $accountBalance;`,
          filename: 'variable_demo.php',
          mockOutput: 'Hello Alex, balance: $1500'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เงื่อนไข (Conditionals): การตัดสินใจของโปรแกรม',
          en: 'Conditionals: How Programs Make Decisions'
        },
        content: {
          th: 'โปรแกรมฉลาดเพราะสามารถตัดสินใจได้ด้วย if/else เช่น ถ้ามียอดเงินพอ ให้สั่งซื้อสำเร็จ ถ้าไม่พอ ให้แจ้งเตือนเติมเงิน',
          en: 'Software is powerful because of if/else logic: if a user has sufficient funds, complete the order; otherwise, display an insufficient funds warning.'
        },
        codeSnippet: {
          language: 'typescript',
          code: `const balance = 1500;\nconst itemPrice = 450;\n\nif (balance >= itemPrice) {\n  console.log("Payment Approved! Enjoy your order.");\n} else {\n  console.log("Insufficient Funds.");\n}`,
          filename: 'checkout.ts',
          mockOutput: 'Payment Approved! Enjoy your order.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      filename: 'first_program.php',
      code: `<?php\n// ประกาศตัวแปรเก็บข้อมูล\n$developer = "Natt";\n$frameworks = ["Laravel", "React 19", "Inertia 3", "NestJS"];\n\necho "Welcome " . $developer . " to Full-Stack Academy!\\n";\n\nforeach ($frameworks as $fw) {\n    echo "- Learning: " . $fw . "\\n";\n}`,
      mockOutput: "Welcome Natt to Full-Stack Academy!\n- Learning: Laravel\n- Learning: React 19\n- Learning: Inertia 3\n- Learning: NestJS",
      explanations: [
        {
          lines: '1-2',
          explanation: {
            th: 'แท็ก <?php บอกให้เซิร์ฟเวอร์รู้ว่าโค้ดต่อจากนี้คือภาษา PHP และเครื่องหมาย // คือคอมเมนต์สำหรับอธิบาย',
            en: 'The <?php tag informs the interpreter that PHP code begins here. // denotes comments for documentation.'
          }
        },
        {
          lines: '3-4',
          explanation: {
            th: '$developer ประกาศตัวแปรเก็บข้อความ (String) ส่วน $frameworks เก็บชุดข้อมูลแบบ Array',
            en: '$developer declares a string variable, and $frameworks stores a list of elements in an array.'
          }
        },
        {
          lines: '6',
          explanation: {
            th: 'echo ใช้สำหรับส่งผลลัพธ์ออกมาแสดงผล เครื่องหมาย . ใช้เชื่อมต่อข้อความ (Concatenation)',
            en: 'echo prints output, and the dot (.) operator concatenates strings together.'
          }
        },
        {
          lines: '8-10',
          explanation: {
            th: 'foreach วนลูปหยิบเทคโนโลยีใน Array ออกมาแสดงทีละตัวจนครบ',
            en: 'foreach iterates through the array, printing each technology sequentially.'
          }
        }
      ]
    },
    demoType: 'none',
    exercises: [
      {
        id: 'ex-01-var',
        title: {
          th: 'แบบฝึกหัดที่ 1: ประกาศตัวแปรคำนวณราคาสุทธิ',
          en: 'Exercise 1: Declare Variables for Total Price'
        },
        instructions: {
          th: 'จงสร้างตัวแปร $price = 100 และ $vat = 7 แล้วคำนวณผลรวมเก็บใน $total จากนั้น echo ค่า $total',
          en: 'Create $price = 100 and $vat = 7, calculate their sum into $total, and echo $total.'
        },
        starterCode: `<?php\n$price = 100;\n$vat = 7;\n// เขียนโค้ดคำนวณ $total ที่นี่\n`,
        solutionCode: `<?php\n$price = 100;\n$vat = 7;\n$total = $price + $vat;\necho $total;`,
        language: 'php',
        hint: {
          th: 'ใช้เครื่องหมายบวก (+) ระหว่าง $price และ $vat',
          en: 'Use the addition operator (+) between $price and $vat'
        }
      }
    ],
    challenge: {
      id: 'ch-01-discount',
      title: {
        th: 'โจทย์ท้าทาย: ระบบคำนวณส่วนลดตามเงื่อนไข',
        en: 'Challenge: Conditional Discount Calculation'
      },
      difficulty: 'Easy',
      description: {
        th: 'เขียนระบบตรวจสอบว่า ถ้าซื้อสินค้าเกิน 1,000 บาท ให้ลด 10% ถ้าไม่ถึงให้จ่ายราคาเต็ม',
        en: 'Build logic where orders over $1,000 receive a 10% discount, otherwise full price applies.'
      },
      requirements: {
        th: [
          'ประกาศตัวแปร $cartTotal',
          'ใช้ if/else ตรวจสอบยอดซื้อ',
          'พิมพ์ยอดที่ต้องจ่ายจริงหลังหักส่วนลด'
        ],
        en: [
          'Declare $cartTotal variable',
          'Use if/else to evaluate total order',
          'Print final payable amount after discount'
        ]
      }
    },
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมเครื่องหมายเซมิโคลอน (;) ท้ายบรรทัดใน PHP',
          en: 'Missing semicolon (;) at the end of statements in PHP'
        },
        why: {
          th: 'PHP ต้องใช้เซมิโคลอนเพื่อรู้ว่าคำสั่งบรรทัดนั้นจบแล้ว หากลืมจะเกิด Parse Error ทันที',
          en: 'PHP relies on semicolons to delimit statements. Omitting it triggers a syntax parse error.'
        },
        badCode: `$name = "John"\necho $name`,
        goodCode: `$name = "John";\necho $name;`,
        solution: {
          th: 'ตรวจสอบให้แน่ใจว่าทุกคำสั่งจบด้วยเครื่องหมาย ; เสมอ',
          en: 'Always verify every statement terminates with a semicolon.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-01-1',
        question: {
          th: 'ข้อใดอธิบายความหมายของ "ตัวแปร" (Variable) ได้ถูกต้องที่สุด?',
          en: 'Which statement best describes a "Variable"?'
        },
        options: [
          { id: 'a', text: { th: 'พื้นที่เก็บข้อมูลในหน่วยความจำที่มีชื่อกำกับ', en: 'A named storage location in memory for holding data' } },
          { id: 'b', text: { th: 'จอภาพคอมพิวเตอร์สำหรับแสดงผลลัพธ์', en: 'A computer screen used to display output' } },
          { id: 'c', text: { th: 'สายเคเบิลเชื่อมต่ออินเทอร์เน็ต', en: 'A physical network cable' } },
          { id: 'd', text: { th: 'ปุ่มกดบนคีย์บอร์ด', en: 'A key on a keyboard' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'ตัวแปรทำหน้าที่เปรียบเสมือนกล่องหรือพื้นที่จำข้อมูลในแรมที่มีป้ายชื่อกำกับ เพื่อเรียกใช้และแก้ไขค่าได้',
          en: 'A variable acts like a labeled box in memory storing values that can be referenced and updated.'
        }
      },
      {
        id: 'q-01-2',
        question: {
          th: 'ในภาษา PHP สัญลักษณ์ใดใช้ขึ้นต้นชื่อตัวแปรเสมอ?',
          en: 'In PHP, which symbol always prefixes variable names?'
        },
        options: [
          { id: 'a', text: { th: 'เครื่องหมาย @', en: '@ symbol' } },
          { id: 'b', text: { th: 'เครื่องหมาย #', en: '# symbol' } },
          { id: 'c', text: { th: 'เครื่องหมาย $ (Dollar sign)', en: '$ (Dollar sign)' } },
          { id: 'd', text: { th: 'เครื่องหมาย &', en: '& symbol' } }
        ],
        correctOptionId: 'c',
        explanation: {
          th: 'ตัวแปรใน PHP ต้องขึ้นต้นด้วย $ เสมอ เช่น $name, $age',
          en: 'All PHP variables must start with the dollar sign $, e.g., $name, $age.'
        }
      }
    ],
    summary: {
      th: [
        'Programming คือการเขียนคำสั่งทีละขั้นตอนให้คอมพิวเตอร์ทำงานแทนมนุษย์',
        'ตัวแปร (Variables) ใช้สำหรับเก็บข้อมูล เช่น ข้อความ ตัวเลข หรือชุดข้อมูล',
        'เงื่อนไข (Conditionals เช่น if/else) ช่วยให้โปรแกรมตัดสินใจเลือกเส้นทางได้',
        'การทำความเข้าใจ Logic พื้นฐานคือหัวใจสำคัญที่สุดก่อนต่อยอดสู่ Framework ระดับสูง'
      ],
      en: [
        'Programming is crafting algorithmic instructions for computers to execute automated tasks.',
        'Variables hold data in memory such as strings, numbers, or collections.',
        'Conditionals (if/else) allow software to make branching decisions.',
        'Mastering core logic is the foundation before learning frameworks like Laravel, React, or NestJS.'
      ]
    }
  },

  'zero-02-web-architecture': {
    id: 'zero-02-web-architecture',
    trackId: 'zero',
    category: 'Web Basics',
    level: 0,
    levelLabel: 'Level 0: Absolute Beginner',
    durationMinutes: 20,
    title: {
      th: '0.2 สถาปัตยกรรมเว็บ: Frontend, Backend, Client, Server',
      en: '0.2 Web Architecture: Frontend, Backend, Client & Server'
    },
    description: {
      th: 'เจาะลึกโครงสร้างโลกของเว็บ ทำความเข้าใจว่าเบราว์เซอร์คุยกับเซิร์ฟเวอร์อย่างไร และทำไมเราถึงต้องมีทั้ง React, Laravel และ NestJS',
      en: 'Dive deep into how the web works: browser-to-server communication and why modern apps use React, Laravel, and NestJS.'
    },
    objectives: {
      th: [
        'แยกแยะบทบาทของ Client (Frontend) และ Server (Backend) ได้อย่างแม่นยำ',
        'เข้าใจหน้าที่ของ Web Browser, HTTP Protocol และ Database',
        'เข้าใจว่า React ทำหน้าที่อะไร และ Laravel/NestJS ทำหน้าที่อะไรในระบบ',
        'เห็นภาพรวมระบบ Full-Stack ตั้งแต่วินาทีที่ผู้ใช้พิมพ์ URL'
      ],
      en: [
        'Distinguish clearly between Client (Frontend) and Server (Backend)',
        'Understand Web Browsers, HTTP protocols, and Databases',
        'Recognize what React does versus what Laravel or NestJS handles',
        'Visualize the full end-to-end flow when a user visits a website'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'สถาปัตยกรรมเว็บ (Web Architecture) คือรูปแบบการแบ่งหน้าที่ระหว่าง "ฝั่งผู้ใช้" (Client หรือ Frontend เช่น หน้าเว็บ React บนเบราว์เซอร์) กับ "ฝั่งเซิร์ฟเวอร์" (Server หรือ Backend เช่น Laravel / NestJS ที่คุยกับฐานข้อมูล)',
        en: 'Web Architecture is the division of labor between the user-facing side (Client/Frontend, e.g., React in browser) and the server-facing side (Server/Backend, e.g., Laravel or NestJS talking to a database).'
      },
      whyUseIt: {
        th: 'เพราะเราไม่สามารถเก็บรหัสผ่าน หรือฐานข้อมูลลูกค้าไว้บนเครื่องของผู้ใช้ได้ (อันตรายมาก) ต้องเก็บไว้บนเซิร์ฟเวอร์ที่ปลอดภัย ส่วนเบราว์เซอร์มีหน้าที่เพียงแสดงผลหน้าจอสวยๆ และรับคำสั่งจากผู้ใช้',
        en: 'We cannot store passwords or company database records directly on user laptops (extreme security risk). Critical data lives safely on the backend server, while browsers focus on UI presentation and user interactions.'
      },
      whenToUse: {
        th: 'ใช้ในทุกเว็บแอปพลิเคชัน ไม่ว่าจะเป็น Facebook, YouTube, Netflix, หรือระบบ ERP ภายในองค์กร',
        en: 'Used across every web application in existence, from Facebook and YouTube to enterprise ERPs.'
      },
      howItWorks: {
        th: '1) ผู้ใช้กดปุ่มใน React -> 2) เบราว์เซอร์ส่ง HTTP Request ไปหา Laravel/NestJS -> 3) เซิร์ฟเวอร์ดึงข้อมูลจาก Database -> 4) ส่ง HTTP Response (เช่น ข้อมูล JSON) กลับมาให้ React แสดงผล',
        en: '1) User interacts in React -> 2) Browser sends HTTP request to Laravel/NestJS -> 3) Backend queries database -> 4) Returns HTTP response (like JSON) back to React to render.'
      }
    },
    diagram: {
      title: {
        th: 'สถาปัตยกรรม Client-Server และ Full-Stack Flow',
        en: 'Client-Server & Full-Stack Lifecycle'
      },
      flow: [
        { title: 'Browser (React 19)', sub: 'UI Components & State', color: 'cyan' },
        { title: 'HTTP Request', sub: 'GET /api/products', color: 'blue' },
        { title: 'Server (Laravel / NestJS)', sub: 'Routing, Auth, Business Logic', color: 'red' },
        { title: 'Database (PostgreSQL / MySQL)', sub: 'Tables, Rows, Indexes', color: 'emerald' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'Frontend (Client): สิ่งที่ผู้ใช้มองเห็นและสัมผัสได้',
          en: 'Frontend (Client): The Visible Interface'
        },
        content: {
          th: 'สร้างด้วย HTML (โครงสร้าง), CSS (ความสวยงาม) และ JavaScript/React (การโต้ตอบ) รันอยู่บน Browser ของผู้ใช้',
          en: 'Crafted with HTML (structure), CSS (presentation), and JavaScript/React (interactivity), executing entirely in the user browser.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'Backend (Server): สมองและหัวใจความปลอดภัย',
          en: 'Backend (Server): The Brain & Security Center'
        },
        content: {
          th: 'เขียนด้วย PHP (Laravel) หรือ TypeScript (NestJS) รันอยู่บนเครื่อง Server ทำหน้าที่ตรวจสอบสิทธิ์ (Auth), คิดคำนวณเงิน, และติดต่อฐานข้อมูล',
          en: 'Written in PHP (Laravel) or TypeScript (NestJS), executing on secure cloud servers to verify identity, process business rules, and read/write databases.'
        }
      }
    ],
    primaryCode: {
      language: 'json',
      filename: 'sample_api_response.json',
      code: `{\n  "status": "success",\n  "statusCode": 200,\n  "data": {\n    "user": {\n      "id": 101,\n      "name": "Sarah Connor",\n      "role": "Lead Architect",\n      "authenticated": true\n    }\n  },\n  "timestamp": "2026-09-10T06:52:00Z"\n}`,
      mockOutput: 'JSON parsed successfully. User ID: 101, Role: Lead Architect',
      explanations: [
        {
          lines: '1-3',
          explanation: {
            th: 'โครงสร้าง JSON มาตรฐานมี status และ statusCode เพื่อบอกว่าสำเร็จหรือไม่',
            en: 'Standard JSON wrapper containing status and HTTP statusCode indicating outcome.'
          }
        },
        {
          lines: '4-10',
          explanation: {
            th: 'ก้อน data บรรจุข้อมูลผู้ใช้ที่ฝั่ง Backend ส่งมาให้ Frontend นำไปแสดงบนหน้าจอ',
            en: 'The data payload holds user properties sent by backend for frontend rendering.'
          }
        }
      ]
    },
    demoType: 'api-request',
    exercises: [
      {
        id: 'ex-02-arch',
        title: {
          th: 'แบบฝึกหัดที่ 2: วิเคราะห์บทบาท Frontend vs Backend',
          en: 'Exercise 2: Frontend vs Backend Role Analysis'
        },
        instructions: {
          th: 'ข้อใดเป็นหน้าที่ของ Backend: A) จัดสีปุ่มให้เป็นสีน้ำเงิน B) ตัดเงินจากบัตรเครดิตและบันทึกยอดลงฐานข้อมูล',
          en: 'Which task belongs to the Backend: A) Styling a button blue B) Charging a credit card and writing to database'
        },
        starterCode: `// ตอบว่า A หรือ B`,
        solutionCode: `// คำตอบคือ B เพราะการตัดเงินและความปลอดภัยต้องทำบน Server`,
        language: 'javascript'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ใส่ Database Password หรือ API Secret ไว้ในโค้ดฝั่ง React',
          en: 'Hardcoding Database Passwords or API Secrets inside React frontend code'
        },
        why: {
          th: 'โค้ด React ถูกส่งไปรันที่เครื่องผู้ใช้ ทุกคนสามารถกด F12 Inspect ดูรหัสผ่านฐานข้อมูลได้ทันที!',
          en: 'React code ships directly to client browsers. Anyone can inspect sources via DevTools and steal database credentials!'
        },
        solution: {
          th: 'ความลับและกุญแจฐานข้อมูลทั้งหมดต้องอยู่บนเซิร์ฟเวอร์ฝั่ง Laravel/NestJS ผ่านไฟล์ .env เท่านั้น',
          en: 'All secrets and database credentials must remain strictly inside server-side Laravel/NestJS .env files.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-02-1',
        question: {
          th: 'ทำไมเราจึงไม่ควรเขียนโค้ดเชื่อมต่อฐานข้อมูลตรงจาก React ในเบราว์เซอร์?',
          en: 'Why shouldn’t React connect directly to a database from the browser?'
        },
        options: [
          { id: 'a', text: { th: 'เพราะเบราว์เซอร์จะช้าเกินไป', en: 'Because browsers are too slow' } },
          { id: 'b', text: { th: 'เพราะเรื่องความปลอดภัย ใครก็ดู Source Code และขโมยรหัสผ่าน DB ได้', en: 'Because security is compromised: anyone can inspect client code and steal DB credentials' } },
          { id: 'c', text: { th: 'เพราะ React ไม่รองรับตัวเลข', en: 'Because React doesn’t support numbers' } },
          { id: 'd', text: { th: 'เพราะฐานข้อมูลไม่เปิดทำการเวลากลางคืน', en: 'Because databases shut down at night' } }
        ],
        correctOptionId: 'b',
        explanation: {
          th: 'โค้ดที่รันบนเบราว์เซอร์ผู้ใช้เปิดเผยได้ทั้งหมด การเชื่อมต่อฐานข้อมูลต้องทำผ่านเซิร์ฟเวอร์ที่มีระบบป้องกันเท่านั้น',
          en: 'Client-side code is completely public to the user. Database connections must always run on a secure server.'
        }
      }
    ],
    summary: {
      th: [
        'Client (Frontend/React) = หน้าตา การกดปุ่ม และประสบการณ์ผู้ใช้',
        'Server (Backend/Laravel/NestJS) = สมอง ความปลอดภัย ฐานข้อมูล และตรรกะทางธุรกิจ',
        'HTTP Request/Response คือภาษากลางที่ Client และ Server ใช้สื่อสารแลกเปลี่ยนข้อมูล',
        'Inertia 3 และ REST API คือสะพานเชื่อมที่ทำให้สองฝั่งทำงานร่วมกันได้อย่างไร้รอยต่อ'
      ],
      en: [
        'Client (Frontend/React) = User interface, interactions, and responsive experience.',
        'Server (Backend/Laravel/NestJS) = Business logic, authentication, database storage, and security.',
        'HTTP Request/Response is the universal protocol connecting client and server.',
        'Inertia 3 and REST APIs are the architectural bridges orchestrating both sides seamlessly.'
      ]
    }
  },

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

  'react-01-intro-jsx': {
    id: 'react-01-intro-jsx',
    trackId: 'react',
    category: 'React 19 Basics',
    level: 5,
    levelLabel: 'Level 5: React 19',
    durationMinutes: 20,
    title: {
      th: 'React 19 จาก 0 & JSX Components',
      en: 'React 19 from Zero & JSX Components'
    },
    description: {
      th: 'เรียนรู้ React 19 เวอร์ชันใหม่ล่าสุด เข้าใจว่า Component คืออะไร ทำไมต้องใช้ JSX และ Virtual DOM ทำงานอย่างไร',
      en: 'Learn modern React 19 from scratch. Understand components, JSX syntax, and modern rendering principles.'
    },
    objectives: {
      th: [
        'เข้าใจว่า React คืออะไร และทำไมจึงเป็น UI Library ยอดนิยมอันดับ 1',
        'เข้าใจแนวคิด Component: การแบ่ง UI ออกเป็นชิ้นส่วนย่อยที่ใช้ซ้ำได้',
        'เขียน JSX ได้อย่างถูกต้อง เข้าใจข้อบังคับเรื่อง Single Root และ className',
        'เข้าใจวิธีการส่งค่า Props เพื่อกำหนดคุณสมบัติให้ Component'
      ],
      en: [
        'Understand what React is and why it dominates modern frontend engineering',
        'Master component thinking: breaking UI into reusable modular blocks',
        'Write valid JSX respecting single-root and className rules',
        'Pass and consume component props effectively'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'React คือ JavaScript Library สำหรับสร้างหน้าจอผู้ใช้ (User Interface) โดยเราจะแบ่งหน้าเว็บออกเป็น "Component" เล็กๆ เหมือนตัวต่อเลโก้ เช่น ปุ่มกด, การ์ดสินค้า, แถบเมนูด้านบน',
        en: 'React is a JavaScript library for building user interfaces by composing small, isolated pieces called Components—like Lego bricks—such as buttons, cards, and navbars.'
      },
      whyUseIt: {
        th: 'การเขียน HTML/JS แบบเดิม (Vanilla JS) เมื่อข้อมูลเปลี่ยน เราต้องเขียนคำสั่ง document.getElementById() มาแก้ DOM เองทีละจุดซึ่งช้าและเสี่ยงต่อบั๊ก React คำนวณและอัปเดตหน้าจอให้เราโดยอัตโนมัติเมื่อข้อมูล (State) เปลี่ยน',
        en: 'In vanilla JS, modifying UI requires manual DOM mutations (getElementById, innerHTML), which easily breaks. React automatically re-renders affected UI parts when state changes.'
      },
      whenToUse: {
        th: 'ใช้เมื่อสร้างเว็บที่มีการโต้ตอบสูง เช่น ฟอร์มกรอกข้อมูล แดชบอร์ดที่มีกราฟ ระบบแชท หรือเมื่อใช้งานร่วมกับ Laravel + Inertia',
        en: 'Used when building highly interactive interfaces: forms, dashboards, charts, chat systems, or modern Laravel + Inertia monoliths.'
      },
      howItWorks: {
        th: 'เราเขียนฟังก์ชันที่ return หน้าตา HTML ออกมา (เรียกว่า JSX) React จะนำไปวาดบนหน้าจอ และเมื่อข้อมูลเปลี่ยน React 19 Compiler จะช่วยอัปเดตเฉพาะจุดที่เปลี่ยนอย่างรวดเร็ว',
        en: 'We write functions that return JSX describing what the UI should look like. React paints it, and when data updates, React re-renders just the modified DOM elements.'
      }
    },
    diagram: {
      title: {
        th: 'โครงสร้างต้นไม้ Component Tree ใน React',
        en: 'React Component Hierarchy Tree'
      },
      flow: [
        { title: 'App Layout', sub: 'โครงสร้างหลักของหน้า', color: 'blue' },
        { title: 'Sidebar & Header', sub: 'แถบนำทางและชื่อผู้ใช้', color: 'purple' },
        { title: 'EmployeeTable', sub: 'ตารางแสดงรายชื่อ', color: 'cyan' },
        { title: 'StatusBadge & Button', sub: 'ปุ่มและป้ายสถานะย่อย', color: 'emerald' }
      ],
      type: 'layers'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง Component ชิ้นแรก: ฟังก์ชันที่ return JSX',
          en: 'Building Your First Component: Function Returning JSX'
        },
        content: {
          th: 'ใน React Component คือฟังก์ชัน JavaScript ธรรมดาที่ชื่อขึ้นต้นด้วยตัวพิมพ์ใหญ่ (PascalCase) และ return โครงสร้าง JSX ออกมา',
          en: 'In React, a component is simply a JavaScript function capitalized in PascalCase that returns JSX.'
        },
        codeSnippet: {
          language: 'tsx',
          code: `export function Greeting({ name }: { name: string }) {\n  return (\n    <div className="p-4 bg-emerald-50 text-emerald-900 rounded-lg">\n      <h2 className="font-bold">Welcome, {name}!</h2>\n      <p>Start your full-stack journey today.</p>\n    </div>\n  );\n}`,
          filename: 'Greeting.tsx',
          mockOutput: 'Renders: Welcome, Alex! Start your full-stack journey today.'
        }
      }
    ],
    primaryCode: {
      language: 'tsx',
      filename: 'src/components/UserCard.tsx',
      code: `import React from 'react';\n\ninterface UserCardProps {\n  name: string;\n  role: string;\n  status: 'active' | 'inactive';\n}\n\nexport function UserCard({ name, role, status }: UserCardProps) {\n  return (\n    <div className="border border-slate-200 rounded-xl p-4 shadow-sm">\n      <div className="flex items-center justify-between">\n        <div>\n          <h3 className="font-semibold text-slate-800">{name}</h3>\n          <p className="text-sm text-slate-500">{role}</p>\n        </div>\n        <span className={\`px-2.5 py-1 text-xs font-medium rounded-full \${\n          status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'\n        }\`}>\n          {status}\n        </span>\n      </div>\n    </div>\n  );\n}`,
      mockOutput: 'Card rendered: Sarah Connor | Lead Architect | [active]',
      explanations: [
        {
          lines: '3-7',
          explanation: {
            th: 'TypeScript Interface กำหนดชนิดข้อมูลของ Props ที่ Component นี้ต้องการ (Type-Safety)',
            en: 'TypeScript interface enforces compile-time type safety on received props.'
          }
        },
        {
          lines: '9',
          explanation: {
            th: 'รับ Props แบบ Destructuring ({ name, role, status }) ทำให้เรียกใช้ตัวแปรได้กระชับ',
            en: 'Props destructuring extracts name, role, and status directly in the function arguments.'
          }
        },
        {
          lines: '17-21',
          explanation: {
            th: 'ใช้ Ternary Operator เลือกว่าถ้า status === "active" ให้ใส่คลาสสีเขียว ถ้าไม่ใช่ให้เป็นสีเทา',
            en: 'Ternary expression conditionally applies green pill styling for active status, gray for inactive.'
          }
        }
      ]
    },
    demoType: 'counter',
    exercises: [
      {
        id: 'ex-react-badge',
        title: {
          th: 'แบบฝึกหัด: สร้าง Badge Component',
          en: 'Exercise: Create a Badge Component'
        },
        instructions: {
          th: 'เขียนฟังก์ชัน Component ชื่อ Badge รับ prop text: string แล้ว return <span className="badge">{text}</span>',
          en: 'Create a component named Badge taking text: string and returning <span className="badge">{text}</span>.'
        },
        starterCode: `export function Badge({ text }: { text: string }) {\n  // return JSX ที่นี่\n}`,
        solutionCode: `export function Badge({ text }: { text: string }) {\n  return <span className="badge">{text}</span>;\n}`,
        language: 'tsx'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'ใช้ class แทน className ใน JSX',
          en: 'Using class instead of className in JSX'
        },
        why: {
          th: 'ใน JavaScript คำว่า class เป็นคำสงวน (Reserved Keyword) สำหรับการสร้าง OOP Class ใน JSX จึงต้องใช้ className เสมอ',
          en: 'class is a reserved JavaScript keyword for classes. JSX mandates className for HTML CSS classes.'
        },
        badCode: `<div class="p-4">Hello</div>`,
        goodCode: `<div className="p-4">Hello</div>`,
        solution: {
          th: 'เปลี่ยนทุกจุดที่เคยเขียน class ใน HTML ให้เป็น className ใน React JSX',
          en: 'Always use className when styling elements in React JSX.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-react-01-1',
        question: {
          th: 'ข้อใดคือเหตุผลที่ชื่อฟังก์ชันของ React Component ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ (PascalCase)?',
          en: 'Why must React component names start with an uppercase letter (PascalCase)?'
        },
        options: [
          { id: 'a', text: { th: 'เพื่อให้ React แยกแยะได้ว่าไม่ใช่แท็ก HTML ธรรมดา (เช่น div, p)', en: 'To allow React to distinguish custom components from native HTML elements (like div, p)' } },
          { id: 'b', text: { th: 'เพื่อทำให้เว็บไซต์โหลดเร็วกว่า', en: 'To make the website load faster' } },
          { id: 'c', text: { th: 'เป็นข้อบังคับของภาษา CSS', en: 'It is a CSS constraint' } },
          { id: 'd', text: { th: 'ไม่มีผลอะไร จะเขียนตัวพิมพ์เล็กก็ได้', en: 'No reason, lowercase works fine' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'ใน JSX แท็กตัวพิมพ์เล็กเช่น <div> จะถูกถือว่าเป็น HTML Element ดั้งเดิม ส่วนตัวพิมพ์ใหญ่เช่น <UserCard /> React จะรู้ว่าเป็น Component ของเรา',
          en: 'Lowercase tags like <div> are treated as native HTML, while capitalized tags like <UserCard /> represent custom React components.'
        }
      }
    ],
    summary: {
      th: [
        'React Component คือก้อนตัวต่อ UI ที่แบ่งการทำงานเป็นสัดส่วนและใช้ซ้ำได้',
        'JSX รวมพลังของ HTML และ JavaScript ไว้ด้วยกัน',
        'Props คือข้อมูลที่ส่งจาก Component แม่ลงไปให้ Component ลูกแบบ Read-Only',
        'ใน React 19 สถาปัตยกรรมทำงานร่วมกับ Server Actions และ Inertia 3 ได้อย่างราบรื่น'
      ],
      en: [
        'React components are reusable building blocks composing the entire user interface.',
        'JSX brings the declarative syntax of HTML together with the full power of JavaScript.',
        'Props pass data down the tree as immutable attributes from parent to child.',
        'React 19 seamlessly integrates with Server Actions and modern Inertia 3 architectures.'
      ]
    }
  },

  'react-02-props-state': {
    id: 'react-02-props-state',
    trackId: 'react',
    category: 'React 19 Basics',
    level: 5,
    levelLabel: 'Level 5: React 19',
    durationMinutes: 25,
    title: {
      th: 'React State & useState Hook อย่างลึกซึ้ง',
      en: 'React State & useState Hook Deep Dive'
    },
    description: {
      th: 'เข้าใจหัวใจของการทำ Interactive UI ด้วย State การทำงานของ useState Hook และกฎความไม่เปลี่ยนแปลง (Immutability)',
      en: 'Master interactive state management using the useState hook, batching, and immutability rules.'
    },
    objectives: {
      th: [
        'เข้าใจความแตกต่างอย่างชัดเจนระหว่าง Props (จากภายนอก) กับ State (ภายใน)',
        'ใช้ useState Hook จัดการข้อมูลตัวเลข ข้อความ บูลีน และ Array',
        'เข้าใจกฎ Immutability: ห้ามแก้ไขค่าใน State ตรงๆ (No Mutation)',
        'สร้างปุ่ม Counter, ฟิลด์ค้นหา และรายการที่เพิ่ม/ลบได้จริง'
      ],
      en: [
        'Distinguish clearly between Props (passed down) and State (local memory)',
        'Use useState with primitives, booleans, objects, and arrays',
        'Understand the cardinal rule of immutability in React state',
        'Construct interactive counters, live filters, and dynamic lists'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'State คือ "ความจำเฉพาะตัว" ของ Component เช่น ตัวเลขบนปุ่มนับสถิติ ข้อความที่ผู้ใช้กำลังพิมพ์ในช่องค้นหา หรือสถานะเปิด/ปิดของหน้าต่าง Modal',
        en: 'State is a component’s private memory: a live counter value, draft text in an input, or whether a modal dialog is currently open.'
      },
      whyUseIt: {
        th: 'ถ้าเราใช้ตัวแปรธรรมดา เช่น let count = 0; เมื่อเปลี่ยนค่า count = count + 1; หน้าจอจะไม่ยอมอัปเดต เพราะ React ไม่รู้ว่ามีการเปลี่ยนค่า แต่เมื่อใช้ useState() React จะรับรู้และสั่งวาดหน้าจอใหม่ทันที',
        en: 'Modifying a normal variable (let count = 0; count++) will not update the screen because React is not notified. Calling the setState updater function triggers an immediate, efficient UI re-render.'
      },
      whenToUse: {
        th: 'ใช้เมื่อข้อมูลบนหน้าจอมีการเปลี่ยนแปลงตามการกระทำของผู้ใช้ (คลิก, พิมพ์, เลื่อน, เลือกตัวกรอง)',
        en: 'Used whenever UI content responds to user interaction: clicks, typing, toggles, filters, and paginations.'
      },
      howItWorks: {
        th: 'const [count, setCount] = useState(0); -> count คือค่าปัจจุบัน -> setCount คือฟังก์ชันเปลี่ยนค่า -> เมื่อเรียก setCount(count + 1) -> React สั่ง Render ใหม่พร้อมค่าใหม่',
        en: 'const [count, setCount] = useState(0) declares state. count holds the value; setCount triggers a re-render with the updated value.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรการทำงานของ React State Re-render',
        en: 'React State Re-render Lifecycle'
      },
      flow: [
        { title: '1. User Action', sub: 'ผู้ใช้กดปุ่ม [+] เพิ่มจำนวน', color: 'blue' },
        { title: '2. Call Updater', sub: 'setCount(prev => prev + 1)', color: 'emerald' },
        { title: '3. React Schedules', sub: 'คำนวณส่วนต่างใน Virtual DOM', color: 'purple' },
        { title: '4. DOM Painted', sub: 'หน้าจอแสดงเลข 1 ทันที', color: 'cyan' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'การประกาศ State พื้นฐาน',
          en: 'Declaring Basic State with useState'
        },
        content: {
          th: 'useState จะคืนค่าออกมาเป็น Array 2 ตัว: ตัวแรกคือค่าปัจจุบัน ตัวที่สองคือฟังก์ชันสำหรับเปลี่ยนค่านั้น',
          en: 'useState returns a tuple: the current state value, and a dispatcher function to update it.'
        },
        codeSnippet: {
          language: 'tsx',
          code: `import { useState } from 'react';\n\nexport function SimpleCounter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button \n      onClick={() => setCount(count + 1)}\n      className="px-4 py-2 bg-blue-600 text-white rounded-lg"\n    >\n      Count: {count}\n    </button>\n  );\n}`,
          mockOutput: 'Clicking button increments count: 0 -> 1 -> 2'
        }
      }
    ],
    primaryCode: {
      language: 'tsx',
      filename: 'src/components/InteractiveCounter.tsx',
      code: `import React, { useState } from 'react';\n\nexport function InteractiveCounter() {\n  const [count, setCount] = useState<number>(0);\n  const [step, setStep] = useState<number>(1);\n\n  const handleIncrement = () => setCount(prev => prev + step);\n  const handleDecrement = () => setCount(prev => Math.max(0, prev - step));\n  const handleReset = () => setCount(0);\n\n  return (\n    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm max-w-sm">\n      <h3 className="text-lg font-bold text-slate-800 mb-2">Live React Counter</h3>\n      <div className="text-4xl font-extrabold text-blue-600 my-4 text-center">{count}</div>\n      <div className="flex gap-2 justify-center mb-4">\n        <button onClick={handleDecrement} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold">-</button>\n        <button onClick={handleReset} className="px-4 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-sm">Reset</button>\n        <button onClick={handleIncrement} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold">+</button>\n      </div>\n      <div className="text-xs text-slate-500 text-center">Step size: {step}</div>\n    </div>\n  );\n}`,
      mockOutput: 'Interactive Counter ready: buttons increment/decrement/reset live',
      explanations: [
        {
          lines: '4-5',
          explanation: {
            th: 'ประกาศ state 2 ตัว: count สำหรับตัวเลข และ step สำหรับขนาดการบวกครั้งละกี่หน่วย',
            en: 'Declares two state variables: count for current tally, step for increment size.'
          }
        },
        {
          lines: '7-9',
          explanation: {
            th: 'ใช้ Updater Function (prev => prev + step) เพื่อให้ได้ค่าล่าสุดเสมอ แม้มีการคลิกรัวๆ',
            en: 'Using functional updates (prev => prev + step) ensures safe state calculation under rapid clicks.'
          }
        }
      ]
    },
    demoType: 'counter',
    exercises: [
      {
        id: 'ex-react-toggle',
        title: {
          th: 'แบบฝึกหัด: สร้างปุ่ม Toggle เปิด/ปิด',
          en: 'Exercise: Create a Toggle Button'
        },
        instructions: {
          th: 'สร้าง State boolean ชื่อ isOpen (เริ่มต้นเป็น false) เมื่อคลิกปุ่มให้สลับค่าจริง/เท็จ',
          en: 'Create boolean state isOpen (default false). Toggling the button flips the boolean.'
        },
        starterCode: `export function Toggle() {\n  const [isOpen, setIsOpen] = useState(false);\n  return (\n    <button onClick={() => {/* เขียนสลับค่า */}}>\n      {isOpen ? 'Open' : 'Closed'}\n    </button>\n  );\n}`,
        solutionCode: `export function Toggle() {\n  const [isOpen, setIsOpen] = useState(false);\n  return (\n    <button onClick={() => setIsOpen(prev => !prev)}>\n      {isOpen ? 'Open' : 'Closed'}\n    </button>\n  );\n}`,
        language: 'tsx'
      }
    ],
    commonMistakes: [
      {
        mistake: {
          th: 'แก้ไขค่า Array หรือ Object ใน State ตรงๆ เช่น items.push("new")',
          en: 'Mutating array or object state directly (e.g., items.push("new"))'
        },
        why: {
          th: 'React เปรียบเทียบตำแหน่ง Reference ในหน่วยความจำ ถ้าเรา push() ลง array เดิม React จะมองว่ายังเป็นตัวเดิมและ "ไม่อัปเดตหน้าจอ"',
          en: 'React checks object identity by reference. Direct array mutation keeps the same pointer, so React skips re-rendering.'
        },
        badCode: `const [list, setList] = useState([]);\n// ❌ ผิด ห้ามทำ\nlist.push("item");\nsetList(list);`,
        goodCode: `// ✅ ถูกต้อง สร้าง Array ก้อนใหม่ด้วย Spread Operator\nsetList(prev => [...prev, "item"]);`,
        solution: {
          th: 'ใช้ Spread Operator ([...items]) หรือเมธอดที่สร้าง Array ใหม่เสมอ เช่น .map() หรือ .filter()',
          en: 'Always create new references using spread operator ([...items]) or immutability helpers.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-react-02-1',
        question: {
          th: 'เมื่อเราเรียกฟังก์ชัน updater จาก useState อะไรจะเกิดขึ้น?',
          en: 'What happens when you invoke the updater function from useState?'
        },
        options: [
          { id: 'a', text: { th: 'รีเฟรชหน้าเว็บทั้งหน้าใหม่หมด', en: 'The entire browser page reloads from scratch' } },
          { id: 'b', text: { th: 'React รับรู้การเปลี่ยนแปลงและคำนวณ Render หน้าจอเฉพาะจุดที่เกี่ยวข้องใหม่', en: 'React schedules a re-render to update the affected DOM components efficiently' } },
          { id: 'c', text: { th: 'ปิดเบราว์เซอร์อัตโนมัติ', en: 'The browser window automatically closes' } },
          { id: 'd', text: { th: 'ส่งอีเมลแจ้งเตือนผู้ดูแลระบบ', en: 'An email alert is dispatched to administrators' } }
        ],
        correctOptionId: 'b',
        explanation: {
          th: 'ฟังก์ชัน Updater ของ useState ส่งสัญญาณให้ React นำค่าใหม่ไปคำนวณและอัปเดตหน้าจอโดยไม่ต้องรีเฟรชหน้าเว็บ',
          en: 'The state updater triggers React’s reconciliation engine to paint updated values smoothly without a full page refresh.'
        }
      }
    ],
    summary: {
      th: [
        'State คือข้อมูลภายใน Component ที่เปลี่ยนค่าได้และทำให้เกิดการวาดหน้าจอใหม่',
        'useState คือ Hook พื้นฐานที่สุดสำหรับการจัดการ Local State',
        'ห้าม Mutate State ตรงๆ ต้องสร้าง Object/Array ก้อนใหม่เสมอ (Immutability)',
        'ใช้ Functional Update (prev => prev + 1) เมื่อค่าใหม่ขึ้นอยู่กับค่าเดิม'
      ],
      en: [
        'State is local component memory that triggers reactive re-renders upon updates.',
        'useState is the foundational React hook for local state management.',
        'Never mutate state directly; always provide fresh references (immutability).',
        'Use functional updaters (prev => prev + 1) whenever new state derives from prior state.'
      ]
    }
  },

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
  }
};
