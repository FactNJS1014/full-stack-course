import { Lesson } from '../../types';

export const LESSONS_ZERO: Record<string, Lesson> = {
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
          code: '$userName = "Alex";\n$accountBalance = 1500;\n\necho "Hello " . $userName . ", balance: $" . $accountBalance;',
          filename: 'variable_demo.php',
          mockOutput: 'Hello Alex, balance: $1500'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เงื่อนไข (Conditions): การตัดสินใจของโปรแกรม',
          en: 'Conditionals: Making Logical Decisions'
        },
        content: {
          th: 'ระบบจะฉลาดขึ้นเมื่อสามารถตัดสินใจได้ เช่น ถ้าเงินพอให้หักเงิน ถ้าไม่พอให้แจ้งเตือน',
          en: 'Programs become smart through decisions: if balance is sufficient, approve transaction; otherwise, reject.'
        },
        codeSnippet: {
          language: 'php',
          code: 'if ($accountBalance >= 500) {\n    echo "Transaction Approved!";\n} else {\n    echo "Insufficient Funds";\n}',
          filename: 'condition_demo.php',
          mockOutput: 'Transaction Approved!'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\n\nfunction calculateFinalPrice(float $basePrice, float $discountPercent): float {\n    $discountAmount = $basePrice * ($discountPercent / 100);\n    return $basePrice - $discountAmount;\n}\n\n$final = calculateFinalPrice(1000, 15);\necho "Final Price: " . $final; // 850\n',
      filename: 'pricing_function.php',
      mockOutput: 'Final Price: 850'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'สับสนระหว่างเครื่องหมาย = (กำหนดค่า) กับ == หรือ === (เปรียบเทียบ)',
          en: 'Confusing assignment operator (=) with equality comparison (===)'
        },
        why: {
          th: 'การใช้ $x = 5 ใน if ($x = 5) จะเป็นการเปลี่ยนค่า $x ให้เป็น 5 ทันทีและทำให้เงื่อนไขเป็นจริงเสมอ ไม่ใช่การตรวจเช็ค',
          en: 'Writing $x = 5 inside an if statement assigns 5 to $x and evaluates to true, instead of comparing.'
        },
        badCode: 'if ($userRole = "admin") {\n  grantFullAccess();\n}',
        goodCode: 'if ($userRole === "admin") {\n  grantFullAccess();\n}',
        solution: {
          th: 'ใช้ === สำหรับการเปรียบเทียบค่าและ Type อย่างเคร่งครัดเสมอ',
          en: 'Always use strict equality === for condition comparisons.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-01-1',
        question: {
          th: 'หน้าที่หลักของ Source Code ในการพัฒนาซอฟต์แวร์คืออะไร?',
          en: 'What is the primary role of source code in software development?'
        },
        options: [
          { id: 'a', text: { th: 'เป็นคำสั่งที่มนุษย์อ่านเข้าใจเพื่อสั่งการคอมพิวเตอร์ผ่านตัวแปลภาษา', en: 'Human-readable instructions guiding computer execution via compiler/interpreter' } },
          { id: 'b', text: { th: 'เป็นรูปภาพสำหรับตกแต่งหน้าเว็บไซต์', en: 'Graphic assets for styling websites' } },
          { id: 'c', text: { th: 'เป็นสายสัญญาณเชื่อมต่ออินเทอร์เน็ต', en: 'Physical network cabling' } },
          { id: 'd', text: { th: 'เป็นชื่อยี่ห้อของเครื่องคอมพิวเตอร์', en: 'Brand manufacturer names' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Source Code คือชุดคำสั่งที่เขียนด้วยภาษาโปรแกรมเพื่อให้มนุษย์อ่านและพัฒนาต่อได้ จากนั้นจะถูกแปลเป็นภาษาเครื่องที่ CPU สั่งการได้',
          en: 'Source code is written in programming languages for human comprehension and later translated into machine binary for CPU execution.'
        }
      }
    ],
    summary: {
      th: [
        'โปรแกรมคือชุดคำสั่งที่แก้ปัญหาทีละขั้นตอนอย่างเป็นเหตุเป็นผล',
        'ตัวแปรคือกล่องความจำ เงื่อนไขคือการตัดสินใจ ฟังก์ชันคือเครื่องมือที่ทำงานซ้ำได้',
        'ในการพัฒนาเว็บจริง เราจะนำตรรกะเหล่านี้ไปต่อยอดใน Laravel, React และ NestJS'
      ],
      en: [
        'Programs are deterministic step-by-step algorithms solving structured problems.',
        'Variables hold data, conditions execute logic, and functions encapsulate reusable work.',
        'These core fundamentals directly bridge into modern Laravel, React 19, and NestJS development.'
      ]
    }
  },

  'zero-02-web-architecture': {
    id: 'zero-02-web-architecture',
    trackId: 'zero',
    category: 'Web Architecture',
    level: 0,
    levelLabel: 'Level 0: Architecture',
    durationMinutes: 18,
    title: {
      th: '0.2 สถาปัตยกรรมเว็บทำงานอย่างไร? (How the Web Works)',
      en: '0.2 How the Web Works: DNS, HTTP, Client & Server'
    },
    description: {
      th: 'เจาะลึกการเดินทางของข้อมูล เมื่อคุณพิมพ์ URL ในเบราว์เซอร์ ตั้งแต่ DNS, TCP Handshake, HTTP Request/Response จนถึงการเรนเดอร์หน้าจอ',
      en: 'Journey of a web request: From typing a URL in the browser through DNS, TCP handshake, HTTP request/response to rendering.'
    },
    objectives: {
      th: [
        'อธิบายกระบวนการทั้งหมดที่เกิดขึ้นเมื่อพิมพ์ URL จนกระทั่งหน้าเว็บแสดงผล',
        'เข้าใจความแตกต่างระหว่าง Frontend (Client) และ Backend (Server)',
        'เข้าใจหน้าที่ของ DNS และ IP Address',
        'พร้อมสำหรับเรียนรู้โปรโตคอล HTTP และ REST API'
      ],
      en: [
        'Map the complete lifecycle from browser URL to rendered page',
        'Differentiate Frontend client responsibilities from Backend server tasks',
        'Understand DNS domain name resolution and IP addressing',
        'Prepare for deep dives into HTTP protocol and REST APIs'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'สถาปัตยกรรมเว็บ (Web Architecture) คือ "แผนผังการเชื่อมต่อและการทำงานร่วมกัน" ของคอมพิวเตอร์ทั่วโลกผ่านอินเทอร์เน็ต โดยแบ่งเป็นฝั่งขอข้อมูล (Client) และฝั่งส่งข้อมูล (Server)',
        en: 'Web Architecture is the blueprint of interconnected computers collaborating over the internet, segmented into clients requesting resources and servers serving them.'
      },
      whyUseIt: {
        th: 'ช่วยให้ผู้ใช้งานนับพันล้านคนทั่วโลกสามารถเข้าถึงบริการ ฐานข้อมูล และระบบต่างๆ ได้จากอุปกรณ์ใดก็ได้ผ่านเบราว์เซอร์ โดยไม่ต้องติดตั้งโปรแกรมขนาดใหญ่ในเครื่อง',
        en: 'Enables billions of users to access remote services and databases securely from any browser without installing local native binaries.'
      },
      whenToUse: {
        th: 'เป็นสถาปัตยกรรมพื้นฐานของทุกระบบ SaaS, เว็บไซต์องค์กร, โมบายแอปพลิเคชัน และระบบ E-Commerce ทั่วโลก',
        en: 'Foundational structure behind every SaaS, enterprise web application, mobile backend, and global e-commerce portal.'
      },
      howItWorks: {
        th: 'เบราว์เซอร์แปลงโดเมนเป็น IP Address ผ่าน DNS -> ส่ง HTTP Request ผ่านอินเทอร์เน็ต -> เซิร์ฟเวอร์ประมวลผลดึงข้อมูลจาก Database -> ส่ง HTTP Response กลับมาให้เบราว์เซอร์วาดหน้าจอ (Render)',
        en: 'Browser resolves domain to IP via DNS -> Dispatches HTTP request -> Server processes logic & queries database -> Returns HTTP response -> Browser parses HTML/CSS/JS and renders.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรการส่งคำขอและการตอบกลับบนเว็บ (Web Request Cycle)',
        en: 'Full Web Request & Response Lifecycle'
      },
      flow: [
        { title: '1. Browser Request', sub: 'GET https://myapp.com/users', color: 'blue' },
        { title: '2. DNS Lookup', sub: 'แปลงโดเมนเป็น IP 142.250.x.x', color: 'purple' },
        { title: '3. Web Server & DB', sub: 'Laravel / NestJS ประมวลผลและดึง DB', color: 'emerald' },
        { title: '4. HTTP Response', sub: 'ส่ง HTTP 200 OK + JSON / HTML', color: 'rose' }
      ],
      type: 'client-server'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'DNS (Domain Name System): สมุดหน้าเหลืองของอินเทอร์เน็ต',
          en: 'DNS Resolution: Internet Directory'
        },
        content: {
          th: 'คอมพิวเตอร์คุยกันด้วยตัวเลข IP เช่น 142.250.196.46 แต่มนุษย์จำชื่ออย่าง google.com ได้ง่ายกว่า DNS จึงทำหน้าที่แปลงชื่อเป็น IP Address',
          en: 'Computers address each other via IP addresses, while humans prefer domains. DNS translates domain names into numerical IP addresses.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'HTTP Request & Response: โปรโตคอลการสื่อสาร',
          en: 'HTTP Request & Response Cycle'
        },
        content: {
          th: 'เมื่อรู้ IP แล้ว เบราว์เซอร์จะส่งข้อความตามแบบแผน HTTP Request ประกอบด้วย Method (เช่น GET/POST), Headers, และ Body จากนั้นเซิร์ฟเวอร์จะตอบกลับด้วย Status Code เช่น 200 OK',
          en: 'With the IP established, the client initiates an HTTP request containing method, headers, and payload. The server replies with status codes (e.g. 200 OK).'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// Browser Fetch Request in Modern JavaScript\nasync function fetchUserData(userId: number) {\n  const response = await fetch(`https://api.example.com/users/${userId}`, {\n    method: "GET",\n    headers: { "Accept": "application/json" }\n  });\n  \n  if (!response.ok) {\n    throw new Error(`HTTP Error: ${response.status}`);\n  }\n  \n  const user = await response.json();\n  console.log("User received:", user.name);\n  return user;\n}',
      filename: 'fetch_request.ts',
      mockOutput: 'User received: Alex Morgan'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'คิดว่าโค้ดที่รันบนเบราว์เซอร์สามารถเข้าถึงฐานข้อมูล MySQL/PostgreSQL ได้โดยตรง',
          en: 'Assuming client-side browser code can connect directly to SQL databases'
        },
        why: {
          th: 'เบราว์เซอร์ของผู้ใช้ไม่ปลอดภัยและไม่สามารถเปิดการเชื่อมต่อฐานข้อมูลระดับ Socket ได้ การใส่รหัสผ่านฐานข้อมูลในโค้ดฝั่งหน้าบ้านจะทำให้ถูกขโมยข้อมูลทันที',
          en: 'Browser environments are public. Embedding database credentials on the frontend exposes root passwords to malicious inspection.'
        },
        badCode: '// ❌ ห้ามทำเด็ดขาดบน React Component\nconst db = mysql.connect({ host: "localhost", user: "root", password: "123" });',
        goodCode: '// ✓ ถูกต้อง: React เรียก Backend API -> Backend ปลอดภัยจึงเข้าถึงฐานข้อมูล\nconst response = await fetch("/api/employees");\nconst data = await response.json();',
        solution: {
          th: 'ให้ React คุยกับ Backend (Laravel / NestJS) ผ่าน HTTP API เสมอ แล้วให้ Backend เป็นผู้เชื่อมต่อฐานข้อมูลอย่างปลอดภัย',
          en: 'Always route browser requests through protected backend endpoints (Laravel/NestJS) which communicate with the database.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-02-1',
        question: {
          th: 'หน้าที่หลักของ DNS (Domain Name System) ในระบบเครือข่ายคืออะไร?',
          en: 'What is the primary function of DNS on computer networks?'
        },
        options: [
          { id: 'a', text: { th: 'แปลงชื่อโดเมนที่มนุษย์เข้าใจเป็นหมายเลข IP Address ของเซิร์ฟเวอร์', en: 'Translate human-readable domain names into server IP addresses' } },
          { id: 'b', text: { th: 'เก็บไฟล์ภาพและวิดีโอของเว็บไซต์', en: 'Host video and image media assets' } },
          { id: 'c', text: { th: 'เร่งความเร็วการประมวลผลของ CPU ในเครื่องคอมพิวเตอร์', en: 'Overclock local CPU execution speeds' } },
          { id: 'd', text: { th: 'ตรวจสอบความถูกต้องของรหัสผ่านผู้ใช้งาน', en: 'Validate user authentication passwords' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'DNS ทำหน้าที่เหมือนสมุดโทรศัพท์ แปลงชื่ออย่าง domain.com ไปเป็นหมายเลข IP Address เพื่อให้เบราว์เซอร์ค้นหาเซิร์ฟเวอร์ปลายทางได้',
          en: 'DNS acts as the internet directory, translating domain names into IP addresses so packets reach destination servers.'
        }
      }
    ],
    summary: {
      th: [
        'สถาปัตยกรรมเว็บทำงานด้วยโมเดล Client-Server ผ่านอินเทอร์เน็ต',
        'DNS ทำหน้าที่แปลงชื่อเว็บเป็นหมายเลข IP เพื่อให้เบราว์เซอร์เชื่อมต่อไปยังเซิร์ฟเวอร์ถูกต้อง',
        'Frontend แสดงผล UI ส่วน Backend ประมวลผลตรรกะและปกป้องฐานข้อมูลอย่างปลอดภัย'
      ],
      en: [
        'Web architecture is anchored on the client-server paradigm communicating over TCP/IP.',
        'DNS translates human domains into routing IP addresses.',
        'Frontend focuses on rendering interfaces, while secure backend servers guard data persistence.'
      ]
    }
  },

  'zero-03-client-server-api': {
    id: 'zero-03-client-server-api',
    trackId: 'zero',
    category: 'Web Basics',
    level: 0,
    levelLabel: 'Level 0: Protocols',
    durationMinutes: 20,
    title: {
      th: '0.3 โมเดลไคลเอนต์-เซิร์ฟเวอร์ และ API (Client-Server & API)',
      en: '0.3 Client-Server Model & API Fundamentals'
    },
    description: {
      th: 'เรียนรู้โครงสร้างคำขอ HTTP Methods (GET, POST, PUT, DELETE), Status Codes, Request Headers และการสื่อสารผ่าน REST API อย่างมืออาชีพ',
      en: 'Deep dive into HTTP anatomy: Methods, Headers, Status Codes (200, 201, 400, 404, 500) and client-server REST communication.'
    },
    objectives: {
      th: [
        'เข้าใจหน้าที่ของ Client, Server และ API ในระบบคอมพิวเตอร์',
        'จำแนกความแตกต่างและสถานการณ์การใช้ HTTP Methods (GET, POST, PUT, DELETE)',
        'เข้าใจความหมายของ Status Code กลุ่ม 2xx, 3xx, 4xx, 5xx',
        'พร้อมทดลองจำลองการยิง HTTP Request ใน Simulator'
      ],
      en: [
        'Understand clear roles of clients, servers, and application programming interfaces',
        'Distinguish proper usage for GET, POST, PUT, and DELETE HTTP verbs',
        'Master HTTP status code families (2xx success, 4xx client errors, 5xx server faults)',
        'Test and simulate real HTTP request lifecycles'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'โมเดล Client-Server คือรูปแบบการออกแบบระบบที่แบ่งฝ่ายขอข้อมูล (Client เช่น เว็บ/แอป) ออกจากฝ่ายให้บริการข้อมูล (Server) โดยคุยกันผ่านข้อความมาตรฐานที่เรียกว่า "API"',
        en: 'The Client-Server architecture decouples consumers requesting services (clients) from providers managing data (servers), communicating through structured APIs.'
      },
      whyUseIt: {
        th: 'ช่วยให้ฐานข้อมูลและตรรกะทางธุรกิจถูกเก็บไว้ที่เดียวอย่างปลอดภัยบน Server ในขณะที่ Client หลายชนิด (เว็บ, iOS, Android) สามารถใช้ระบบร่วมกันได้พร้อมกัน',
        en: 'Centralizes business logic and database persistence securely while allowing heterogeneous clients (Web, iOS, Android) to consume identical services.'
      },
      whenToUse: {
        th: 'ใช้ในทุกแอปพลิเคชันสมัยใหม่ ตั้งแต่ระบบล็อกอิน โอนเงิน ไปจนถึงการส่งข้อความแชท',
        en: 'Standard model across modern cloud applications from authentication and financial transactions to streaming.'
      },
      howItWorks: {
        th: 'Client ส่ง Request (Method + URL + Headers + Body) -> Server ตรวจสอบสิทธิ์และประมวลผล -> Server ส่ง Response (Status Code + Headers + JSON Body) กลับมา',
        en: 'Client dispatches request with method, URI, headers, and body -> Server authenticates and executes -> Server returns status code, headers, and JSON payload.'
      }
    },
    diagram: {
      title: {
        th: 'แผนผังการทำงานของ REST API ระหว่าง Client และ Server',
        en: 'REST API Request-Response Lifecycle'
      },
      flow: [
        { title: '1. HTTP Request', sub: 'POST /api/employees + Body JSON', color: 'blue' },
        { title: '2. Route & Controller', sub: 'Laravel / NestJS ตรวจสอบข้อมูล', color: 'purple' },
        { title: '3. DB Insert', sub: 'บันทึกลงฐานข้อมูล PostgreSQL', color: 'emerald' },
        { title: '4. HTTP 201 Created', sub: 'ส่ง { success: true, id: 101 } กลับ', color: 'rose' }
      ],
      type: 'client-server'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'HTTP Verbs: กริยาบอกจุดประสงค์ของการร้องขอ',
          en: 'HTTP Methods: Intention Verbs'
        },
        content: {
          th: 'GET สำหรับอ่านข้อมูล, POST สำหรับสร้างข้อมูลใหม่, PUT/PATCH สำหรับแก้ไข, DELETE สำหรับลบ',
          en: 'GET retrieves resources, POST constructs new records, PUT/PATCH updates, and DELETE removes resources.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'HTTP Status Codes: รหัสสถานะบอกผลลัพธ์',
          en: 'HTTP Status Codes: Outcome Reporting'
        },
        content: {
          th: '200 OK (สำเร็จ), 201 Created (สร้างข้อมูลสำเร็จ), 400 Bad Request (ส่งข้อมูลผิด), 401 Unauthorized (ยังไม่ได้ล็อกอิน), 404 Not Found (ไม่พบข้อมูล), 500 Internal Server Error (เซิร์ฟเวอร์เกิดข้อผิดพลาด)',
          en: '200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, and 500 Internal Server Error.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: '// Modern Async HTTP Client using Fetch\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n}\n\nasync function createEmployee(payload: { name: string; email: string }) {\n  const res = await fetch("/api/employees", {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n      "Accept": "application/json"\n    },\n    body: JSON.stringify(payload)\n  });\n\n  if (res.status === 201) {\n    console.log("Employee created successfully!");\n    return await res.json();\n  }\n  throw new Error(`Failed with status ${res.status}`);\n}',
      filename: 'api_client.ts',
      mockOutput: 'Employee created successfully!'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ใช้ Method GET ในการบันทึกหรือลบข้อมูลในฐานข้อมูล',
          en: 'Using HTTP GET to modify or delete database records'
        },
        why: {
          th: 'GET ถูกออกแบบมาให้อ่านข้อมูลเท่านั้น (Idempotent & Safe) หากใช้ลบข้อมูล Web Crawler หรือบอทของ Search Engine อาจคลิกลิงก์และลบข้อมูลของคุณทั้งหมดได้โดยไม่รู้ตัว',
          en: 'GET must remain read-only. Automated search engine crawlers prefetching GET links could inadvertently wipe your database.'
        },
        badCode: '// ❌ อันตราย: GET ห้ามใช้ลบข้อมูล\n<a href="/employees/delete?id=5">ลบพนักงาน</a>',
        goodCode: '// ✓ ปลอดภัย: ใช้ DELETE หรือ POST พร้อม CSRF Token\n<form action="/employees/5" method="POST">\n  <input type="hidden" name="_method" value="DELETE" />\n  <button type="submit">ลบพนักงาน</button>\n</form>',
        solution: {
          th: 'ใช้ DELETE หรือ POST เสมอสำหรับการเปลี่ยนแปลงข้อมูลที่มีผลกระทบ',
          en: 'Always use proper HTTP methods (POST, PUT, DELETE) with protection against accidental mutation.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-03-1',
        question: {
          th: 'เมื่อเซิร์ฟเวอร์สร้างข้อมูลใหม่ลงในฐานข้อมูลสำเร็จ ควรตอบกลับด้วย HTTP Status Code ใดตามมาตรฐาน REST?',
          en: 'When a server successfully persists a new entity, which HTTP status code is standard?'
        },
        options: [
          { id: 'a', text: { th: '201 Created', en: '201 Created' } },
          { id: 'b', text: { th: '200 OK', en: '200 OK' } },
          { id: 'c', text: { th: '404 Not Found', en: '404 Not Found' } },
          { id: 'd', text: { th: '500 Server Error', en: '500 Server Error' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'HTTP 201 Created คือรหัสมาตรฐานสำหรับคำขอที่สร้าง Resource ใหม่ในเซิร์ฟเวอร์สำเร็จ',
          en: 'HTTP 201 Created represents the official REST standard for resource creation.'
        }
      }
    ],
    summary: {
      th: [
        'Client ร้องขอ และ Server ประมวลผลตอบกลับผ่านข้อความมาตรฐาน HTTP',
        'ใช้ Method ให้ตรงกับจุดประสงค์: GET สำหรับอ่าน, POST สำหรับสร้าง, PUT สำหรับแก้, DELETE สำหรับลบ',
        'Status code ช่วยให้ฝั่งหน้าบ้านรู้สถานะทันทีว่าคำขอสำเร็จหรือเกิดข้อผิดพลาดอะไร'
      ],
      en: [
        'Clients query, and servers process and respond over standardized HTTP contracts.',
        'Match HTTP verbs to actions: GET (read), POST (create), PUT (update), DELETE (remove).',
        'Status codes inform the client interface on success or actionable failure.'
      ]
    }
  },

  'zero-04-json-data': {
    id: 'zero-04-json-data',
    trackId: 'zero',
    category: 'Data Formats',
    level: 0,
    levelLabel: 'Level 0: Data Representation',
    durationMinutes: 15,
    title: {
      th: '0.4 โครงสร้างข้อมูล JSON และการแลกเปลี่ยนข้อมูล',
      en: '0.4 JSON Data Format & Serialization'
    },
    description: {
      th: 'เข้าใจรูปแบบข้อความ JSON ที่โปรแกรมทุกภาษาทั่วโลกใช้สื่อสารกัน การแปลง Array, Object, Serialization และ Deserialization ทั้งใน PHP และ TypeScript',
      en: 'Master JSON: syntax, nested keys, arrays, and bidirectional serialization in PHP (json_encode/decode) and JavaScript (JSON.parse/stringify).'
    },
    objectives: {
      th: [
        'เข้าใจโครงสร้างมาตรฐานของ JSON (Keys, Strings, Numbers, Booleans, Arrays, Objects)',
        'แปลงข้อมูลระหว่าง JavaScript Object และ JSON String (JSON.stringify, JSON.parse)',
        'แปลงข้อมูลระหว่าง PHP Array และ JSON (json_encode, json_decode)',
        'เขียนโครงสร้าง JSON Response ที่เป็นระเบียบสำหรับ REST API'
      ],
      en: [
        'Understand standard JSON primitives and grammar',
        'Serialize and deserialize JSON in TypeScript/JavaScript',
        'Encode and decode JSON in PHP arrays and objects',
        'Design standard API response envelopes'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'JSON (JavaScript Object Notation) คือ "รูปแบบข้อความธรรมดา (Text)" สำหรับจัดเก็บและแลกเปลี่ยนข้อมูลระหว่างระบบคอมพิวเตอร์ แม้จะมาจาก JavaScript แต่ปัจจุบันทุกภาษาโปรแกรมสามารถอ่านและเขียน JSON ได้อย่างง่ายดาย',
        en: 'JSON is an open standard, lightweight text format used for data interchange across computing platforms and programming languages.'
      },
      whyUseIt: {
        th: 'มนุษย์อ่านเข้าใจง่าย ขนาดไฟล์เล็ก และระบบคอมพิวเตอร์แปลง (Parse) ได้รวดเร็วมากเมื่อเทียบกับ XML หรือรูปแบบดั้งเดิม',
        en: 'Human-readable, lightweight footprint, and universally parseable across modern languages without overhead.'
      },
      whenToUse: {
        th: 'ใช้ใน REST API, การส่งค่า Payload ในฟอร์ม, การจัดเก็บ Configuration และการแลกเปลี่ยนข้อมูลระหว่าง Backend และ Frontend',
        en: 'Ubiquitous format in REST APIs, form submission payloads, config files, and full-stack bridges.'
      },
      howItWorks: {
        th: 'ฝั่งส่งแปลงตัวแปรเป็น JSON String (Serialize) -> ส่งผ่านอินเทอร์เน็ต -> ฝั่งรับแปลง JSON String กลับเป็น Object/Array ภายในภาษาของตัวเอง (Deserialize)',
        en: 'Origin serializes memory structures into a JSON string -> Transmits over HTTP -> Destination parses string into native language structures.'
      }
    },
    diagram: {
      title: {
        th: 'กระบวนการแปลงข้อมูลข้ามภาษาด้วย JSON',
        en: 'Cross-Language JSON Serialization Flow'
      },
      flow: [
        { title: '1. PHP Object/Array', sub: '$user = ["name" => "Alex"];', color: 'blue' },
        { title: '2. json_encode()', sub: 'แปลงเป็นข้อความ JSON Text', color: 'purple' },
        { title: '3. HTTP Transmission', sub: 'ส่งข้ามระบบผ่านเครือข่าย', color: 'emerald' },
        { title: '4. JSON.parse()', sub: 'React แปลงเป็น JS Object ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'กฎเหล็กของไวยากรณ์ JSON',
          en: 'Core Rules of JSON Syntax'
        },
        content: {
          th: 'Key ต้องใส่เครื่องหมายคำพูดคู่ " " เสมอ (ห้ามใช้ single quote) ห้ามมีคอมม่าตัวสุดท้าย (trailing comma) และรองรับค่า null, boolean, number, string, array, object',
          en: 'Keys must use double quotes ("key"), trailing commas are forbidden, and supported primitives are string, number, boolean, null, array, and object.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'การแปลงข้อมูลในภาษา PHP และ TypeScript',
          en: 'Parsing in PHP and TypeScript'
        },
        content: {
          th: 'ใน PHP ใช้ json_encode($data) และ json_decode($json, true) ใน JavaScript ใช้ JSON.stringify(data) และ JSON.parse(str)',
          en: 'Use json_encode/decode in PHP, and JSON.stringify/parse in TypeScript/JavaScript.'
        }
      }
    ],
    primaryCode: {
      language: 'json',
      code: '{\n  "status": "success",\n  "timestamp": "2026-09-10T12:00:00Z",\n  "data": {\n    "id": 101,\n    "name": "Sarah Jenkins",\n    "department": "Engineering",\n    "isActive": true,\n    "skills": ["Laravel", "React 19", "NestJS"],\n    "contact": {\n      "email": "sarah@academy.dev",\n      "phone": "+1-555-0199"\n    }\n  }\n}',
      filename: 'employee_response.json',
      mockOutput: 'Valid JSON Payload'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ใส่ Single Quote หรือมี Trailing Comma (คอมม่าตัวสุดท้าย) ใน JSON',
          en: 'Using single quotes or leaving a trailing comma in JSON'
        },
        why: {
          th: 'JSON Parser ในทุกภาษาจะพ่น Error SyntaxError ทันทีที่เจอเครื่องหมายคำพูดเดี่ยว หรือคอมม่าที่ไม่มีข้อมูลต่อท้าย',
          en: 'JSON specifications strictly mandate double quotes and forbid trailing commas, triggering SyntaxErrors.'
        },
        badCode: '{\\n  "name": "Alex", // ❌ ห้ามใช้ single quote\\n  "active": true, // ❌ ห้ามมีคอมม่าตัวสุดท้าย\\n}',
        goodCode: '{\n  "name": "Alex",\n  "active": true\n}',
        solution: {
          th: 'ใช้ Double Quote เท่านั้น และลบคอมม่าตัวสุดท้ายออกก่อนส่งข้อมูล',
          en: 'Always enforce double quotes and strip trailing commas.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-04-1',
        question: {
          th: 'ใน JavaScript คำสั่งใดใช้แปลง Object ในหน่วยความจำให้เป็นข้อความ JSON String?',
          en: 'In JavaScript, which method serializes a memory object into a JSON string?'
        },
        options: [
          { id: 'a', text: { th: 'JSON.stringify(object)', en: 'JSON.stringify(object)' } },
          { id: 'b', text: { th: 'JSON.parse(object)', en: 'JSON.parse(object)' } },
          { id: 'c', text: { th: 'object.toJson()', en: 'object.toJson()' } },
          { id: 'd', text: { th: 'JSON.encode(object)', en: 'JSON.encode(object)' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'JSON.stringify() แปลง JS Object เป็น JSON String ส่วน JSON.parse() แปลง JSON String กลับเป็น JS Object',
          en: 'JSON.stringify converts objects to strings; JSON.parse performs the reverse deserialization.'
        }
      }
    ],
    summary: {
      th: [
        'JSON คือภาษาข้อความสากลสำหรับการแลกเปลี่ยนข้อมูลระหว่างหน้าบ้านและหลังบ้าน',
        'มีโครงสร้างเรียบง่าย ประกอบด้วย Key-Value, Array และ Object ซ้อนกันได้',
        'เป็นรูปแบบข้อมูลหลักที่ใช้ใน REST API ของทั้ง Laravel และ NestJS'
      ],
      en: [
        'JSON serves as the lingua franca for client-server data exchange.',
        'Clean hierarchy composed of key-value attributes, primitives, and nested arrays/objects.',
        'Primary data interchange standard for Laravel, React 19, and NestJS APIs.'
      ]
    }
  },

  'zero-05-dev-environment': {
    id: 'zero-05-dev-environment',
    trackId: 'zero',
    category: 'Dev Tools',
    level: 0,
    levelLabel: 'Level 0: Setup',
    durationMinutes: 18,
    title: {
      th: '0.5 จัดสภาพแวดล้อมการพัฒนา (Dev Environment Setup)',
      en: '0.5 Modern Dev Environment: Node, PHP & Tools'
    },
    description: {
      th: 'ติดตั้งและตั้งค่าเครื่องมือที่จำเป็นสำหรับนักพัฒนา Full-Stack: Node.js LTS, PHP 8.3, Composer, VS Code และพื้นฐาน Terminal Shell',
      en: 'Configure professional full-stack development tooling: Node.js LTS, PHP 8.3 CLI, Composer, VS Code extensions, and command-line shell.'
    },
    objectives: {
      th: [
        'เข้าใจหน้าที่ของ Node.js, npm, PHP CLI และ Composer',
        'ใช้งานคำสั่งพื้นฐานใน Terminal (cd, ls, pwd, mkdir, cat)',
        'ติดตั้ง Extension สำคัญใน VS Code เพื่อเพิ่มความเร็วในการเขียนโค้ด',
        'พร้อมติดตั้งโปรเจกต์ Laravel และ React'
      ],
      en: [
        'Understand runtime and package manager roles (Node.js, npm, PHP, Composer)',
        'Execute core terminal commands with confidence',
        'Configure productivity extensions in modern code editors',
        'Prepare clean workstations for Laravel and React scaffolding'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'สภาพแวดล้อมการพัฒนา (Dev Environment) คือ "ชุดโปรแกรมและเครื่องมือ" ที่ติดตั้งอยู่ในคอมพิวเตอร์ของคุณเพื่อใช้เขียน คอมไพล์ ทดสอบ และรันโปรแกรมก่อนนำขึ้นเซิร์ฟเวอร์จริง',
        en: 'A development environment comprises the toolchain, compilers, interpreters, and editors configured locally to write and test software.'
      },
      whyUseIt: {
        th: 'หากไม่มีเครื่องมืออย่าง Node.js หรือ PHP ในเครื่อง คอมพิวเตอร์จะไม่สามารถอ่านคำสั่งของไฟล์โค้ดได้ และหากไม่มี Package Manager เราจะไม่สามารถดาวน์โหลด Library มาใช้งานได้',
        en: 'Without dedicated runtimes and package managers, source code cannot execute locally and dependencies cannot be automated.'
      },
      whenToUse: {
        th: 'ต้องติดตั้งและตั้งค่าเป็นสิ่งแรกก่อนเริ่มเขียนโปรเจกต์ซอฟต์แวร์ทุกประเภท',
        en: 'Required setup step before scaffolding any modern web application.'
      },
      howItWorks: {
        th: 'คุณเขียนโค้ดใน VS Code -> ใช้ Terminal สั่งรันด้วยคำสั่ง PHP หรือ Node.js -> ตัวรันประมวลผลและเปิดพอร์ต Local Server (เช่น http://localhost:3000) ให้ดูผลลัพธ์ผ่านเบราว์เซอร์',
        en: 'Developer edits code in editor -> Commands terminal runtimes -> Local dev server launches on localhost port -> Browser renders live preview.'
      }
    },
    diagram: {
      title: {
        th: 'โครงสร้างเครื่องมือสำหรับ Full-Stack Developer',
        en: 'Full-Stack Local Toolchain'
      },
      flow: [
        { title: '1. VS Code', sub: 'โปรแกรมแก้ไขโค้ดพร้อม Extensions', color: 'blue' },
        { title: '2. Terminal Shell', sub: 'พิมพ์คำสั่งสั่งการคอมพิวเตอร์', color: 'purple' },
        { title: '3. Package Managers', sub: 'Composer (PHP) & npm (Node)', color: 'emerald' },
        { title: '4. Local Dev Server', sub: 'localhost:3000 แสดงผลทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'Package Managers: Composer และ npm',
          en: 'Package Managers: Composer & npm'
        },
        content: {
          th: 'npm จัดการไลบรารีของฝั่ง JavaScript/React ส่วน Composer จัดการแพ็กเกจของฝั่ง PHP/Laravel ทั้งคู่ทำหน้าที่ดาวน์โหลดและติดตั้งโค้ดภายนอกอัตโนมัติ',
          en: 'npm manages JavaScript/Node ecosystems, while Composer governs PHP/Laravel libraries.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'คำสั่ง Terminal สำคัญที่ต้องรู้',
          en: 'Essential Terminal Commands'
        },
        content: {
          th: 'pwd (ดูโฟลเดอร์ปัจจุบัน), ls หรือ dir (ดูรายชื่อไฟล์), cd (เปลี่ยนโฟลเดอร์), mkdir (สร้างโฟลเดอร์ใหม่), rm (ลบไฟล์)',
          en: 'pwd (print current directory), ls (list files), cd (change directory), mkdir (make directory), and rm (remove files).'
        }
      }
    ],
    primaryCode: {
      language: 'bash',
      code: '# ตรวจสอบเวอร์ชันของเครื่องมือในเครื่อง\nnode -v          # v20.x.x หรือใหม่กว่า\nnpm -v           # v10.x.x\nphp -v           # PHP 8.3.x\ncomposer -v      # Composer 2.x\n\n# สร้างโฟลเดอร์และทดสอบโปรเจกต์\nmkdir my-academy-project\ncd my-academy-project\n',
      filename: 'terminal_check.sh',
      mockOutput: 'PHP 8.3.6 (cli) / node v20.12.0'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมเพิ่ม Path ของ PHP หรือ Node.js ลงใน System Environment Variables',
          en: 'Not configuring executable binaries in system PATH variables'
        },
        why: {
          th: 'ทำให้เมื่อพิมพ์ php หรือ npm ใน Terminal แล้วเกิดข้อผิดพลาด "command not found"',
          en: 'Causes shell to throw "command not found" because it cannot locate binaries.'
        },
        badCode: '$ php -v\ncommand not found: php',
        goodCode: '$ which php\n/usr/local/bin/php\n$ php -v\nPHP 8.3.6',
        solution: {
          th: 'ตรวจสอบ path การติดตั้งและใช้ Node Version Manager (nvm) หรือ Homebrew/Chocolatey เพื่อจัดการอัตโนมัติ',
          en: 'Utilize automated managers like nvm, Homebrew, or package managers to set PATH exports.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-05-1',
        question: {
          th: 'ในการพัฒนา Laravel 11 เครื่องมือใดทำหน้าที่ดาวน์โหลดและจัดการแพ็กเกจของภาษา PHP?',
          en: 'In Laravel development, which package manager downloads and updates PHP dependencies?'
        },
        options: [
          { id: 'a', text: { th: 'Composer', en: 'Composer' } },
          { id: 'b', text: { th: 'npm', en: 'npm' } },
          { id: 'c', text: { th: 'Docker', en: 'Docker' } },
          { id: 'd', text: { th: 'Git', en: 'Git' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Composer คือตัวจัดการแพ็กเกจและ Dependency อย่างเป็นทางการของภาษา PHP',
          en: 'Composer is the industry standard dependency management utility for PHP.'
        }
      }
    ],
    summary: {
      th: [
        'สภาพแวดล้อมการพัฒนาที่ดีคือจุดเริ่มต้นของการเขียนโค้ดที่รวดเร็วและปลอดภัย',
        'Node.js และ npm ดูแลฝั่ง JavaScript/React ส่วน PHP และ Composer ดูแลฝั่ง Laravel',
        'Terminal คือเครื่องมือสำคัญที่นักพัฒนาใช้สั่งการคอมพิวเตอร์อย่างมีประสิทธิภาพ'
      ],
      en: [
        'A configured toolchain streamlines productive development.',
        'Node/npm powers frontend toolchains, while PHP/Composer drives backend engines.',
        'Terminal fluency is indispensable for professional engineering workflows.'
      ]
    }
  },

  'zero-06-git-basics': {
    id: 'zero-06-git-basics',
    trackId: 'zero',
    category: 'Version Control',
    level: 0,
    levelLabel: 'Level 0: Collaboration',
    durationMinutes: 20,
    title: {
      th: '0.6 ระบบควบคุมเวอร์ชัน Git & GitHub พื้นฐาน',
      en: '0.6 Git Version Control & GitHub Essentials'
    },
    description: {
      th: 'เรียนรู้ระบบบันทึกประวัติโค้ด Git: Working Directory, Staging Area, Commit, Branch, Merge, Pull Request และการกู้คืนโค้ดเมื่อเกิดปัญหา',
      en: 'Master version control workflows: staging, commits, branches, merges, GitHub repositories, and history traversal.'
    },
    objectives: {
      th: [
        'เข้าใจแนวคิดของ Version Control System (VCS) และความปลอดภัยของโค้ด',
        'ใช้คำสั่งพื้นฐาน: git init, git add, git commit, git status, git log',
        'เข้าใจระบบ Branching สำหรับพัฒนาฟีเจอร์แยกโดยไม่กระทบโค้ดหลัก',
        'สร้าง Pull Request และทำงานร่วมกันใน GitHub'
      ],
      en: [
        'Understand version control principles and code safeguards',
        'Operate git init, add, commit, status, and log commands',
        'Create isolated feature branches and merge safely into main',
        'Collaborate via GitHub pull requests'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Git คือ "ระบบบันทึกประวัติการเปลี่ยนแปลงของโค้ด (Time Machine)" ที่ช่วยให้คุณย้อนเวลากลับไปดูโค้ดเก่าได้ทุกเวอร์ชัน และช่วยให้โปรแกรมเมอร์หลายคนทำงานบนไฟล์เดียวกันได้โดยไม่เขียนทับกัน',
        en: 'Git is a distributed version control system acting like a time machine, recording immutable commits and orchestrating collaboration across teams.'
      },
      whyUseIt: {
        th: 'ป้องกันปัญหาโค้ดหาย ลบไฟล์ผิด หรือแก้งานจนพังแล้วย้อนกลับไม่ได้ ทำให้คุณกล้าทดลองและทำงานร่วมกับคนอื่นได้อย่างมั่นใจ',
        en: 'Prevents catastrophic accidental overwrites, allowing safe experimentation and seamless branch merging.'
      },
      whenToUse: {
        th: 'ใช้กับทุกไฟล์ในโปรเจกต์ซอฟต์แวร์ตั้งแต่วินาทีแรกที่เริ่มสร้างโปรเจกต์',
        en: 'Mandatory standard on every single software repository worldwide.'
      },
      howItWorks: {
        th: 'แก้ไขไฟล์ (Working Directory) -> เลือกไฟล์ที่จะบันทึกด้วย git add (Staging Area) -> บันทึกเป็นจุดเช็คพอยต์ด้วย git commit -> อัปโหลดขึ้นคลาวด์ด้วย git push',
        en: 'Edit files locally -> Stage snapshots via git add -> Commit snapshots with messages -> Push to remote repositories like GitHub.'
      }
    },
    diagram: {
      title: {
        th: '3 สถานะหลักของ Git (Working, Staging, Repository)',
        en: 'Git Three-Tier Lifecycle'
      },
      flow: [
        { title: '1. Working Tree', sub: 'ไฟล์ที่กำลังแก้ไขใน VS Code', color: 'blue' },
        { title: '2. git add .', sub: 'ย้ายเข้าสู่ Staging Area พร้อมบันทึก', color: 'purple' },
        { title: '3. git commit', sub: 'บันทึกเป็นก้าวประวัติศาสตร์ถาวร', color: 'emerald' },
        { title: '4. git push', sub: 'ส่งขึ้น GitHub Cloud ทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'เริ่มต้นโปรเจกต์และ Commit แรก',
          en: 'Initializing and Staging First Commit'
        },
        content: {
          th: 'ใช้ git init เพื่อเริ่มระบบ จากนั้นใช้ git add . และ git commit -m "ข้อความอธิบายการเปลี่ยนแปลง"',
          en: 'Initialize with git init, stage files via git add ., and commit with descriptive messages.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'Branching: แยกสายการทำงานอย่างปลอดภัย',
          en: 'Branching for Parallel Work'
        },
        content: {
          th: 'สร้าง Branch ใหม่ด้วย git checkout -b feature/login เมื่อทำเสร็จแล้วจึงรวมกลับเข้า main ด้วย git merge',
          en: 'Isolate feature development via git checkout -b feature/name and merge back into main upon review.'
        }
      }
    ],
    primaryCode: {
      language: 'bash',
      code: '# เริ่มต้นและบันทึกโค้ด\ngit init\ngit add .\ngit commit -m "feat: initial commit with project scaffold"\n\n# สร้าง Branch ฟีเจอร์ใหม่\ngit checkout -b feature/employee-crud\n\n# ดูสถานะและประวัติ\ngit status\ngit log --oneline -n 5\n',
      filename: 'git_workflow.sh',
      mockOutput: '[main (root-commit) a1b2c3d] feat: initial commit'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมสร้างไฟล์ .gitignore แล้วเผลอ Commit โฟลเดอร์ node_modules หรือไฟล์ .env ที่มีรหัสผ่านขึ้น GitHub',
          en: 'Forgetting .gitignore and committing node_modules or sensitive .env secrets'
        },
        why: {
          th: 'node_modules มีขนาดใหญ่หลายร้อยเมกะไบต์ทำให้ Repository บวมช้า และไฟล์ .env มีรหัสผ่านฐานข้อมูลที่อาจถูกแฮกเกอร์ขโมยไปได้',
          en: 'node_modules bloats repository size unnecessarily, and .env leaks production database credentials publicly.'
        },
        badCode: '// ❌ เผลอ git add .env ขึ้น GitHub\ngit add .env\ngit commit -m "add config"',
        goodCode: '# ✓ ระบุใน .gitignore เสมอ\nnode_modules/\n.env\nvendor/',
        solution: {
          th: 'ใส่ node_modules, vendor และ .env ไว้ใน .gitignore เสมอ และเก็บเฉพาะ .env.example ไว้ใน Git',
          en: 'Always maintain a strict .gitignore and commit only .env.example templates.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-06-1',
        question: {
          th: 'คำสั่งใดใช้ย้ายการเปลี่ยนแปลงทั้งหมดเข้าสู่ Staging Area เพื่อเตรียมพร้อมสำหรับการ Commit?',
          en: 'Which Git command stages all modified files into the Staging Area?'
        },
        options: [
          { id: 'a', text: { th: 'git add .', en: 'git add .' } },
          { id: 'b', text: { th: 'git commit', en: 'git commit' } },
          { id: 'c', text: { th: 'git push', en: 'git push' } },
          { id: 'd', text: { th: 'git init', en: 'git init' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'git add . นำไฟล์ที่ถูกแก้ไขในโฟลเดอร์ปัจจุบันทั้งหมดเข้าสู่ Staging Area เพื่อเตรียม Commit',
          en: 'git add . stages current directory changes into the index for commit execution.'
        }
      }
    ],
    summary: {
      th: [
        'Git คือระบบ Time Machine บันทึกประวัติและช่วยให้การทำงานร่วมกันปลอดภัย',
        'กระบวนการมาตรฐาน: แก้ไขไฟล์ -> git add -> git commit -> git push',
        'สร้างไฟล์ .gitignore เสมอเพื่อป้องกันการ Commit ไฟล์ขนาดใหญ่หรือรหัสผ่านขึ้นระบบ'
      ],
      en: [
        'Git provides version control and safe collaboration workflows.',
        'Standard cycle: edit files -> git add -> git commit -> git push.',
        'Always protect secrets and dependencies with rigorous .gitignore configurations.'
      ]
    }
  },

  'zero-07-php-from-zero': {
    id: 'zero-07-php-from-zero',
    trackId: 'zero',
    category: 'PHP Language',
    level: 0,
    levelLabel: 'Level 0: Language Core',
    durationMinutes: 22,
    title: {
      th: '0.7 ปูพื้นฐานภาษา PHP 8.3 สมัยใหม่',
      en: '0.7 Modern PHP 8.3 Fundamentals'
    },
    description: {
      th: 'เรียนรู้ภาษา PHP 8.3 ยุคใหม่: Data Types, Type Hinting, Associative Arrays, Match Expression, Arrow Functions, Classes และ Object-Oriented Programming พื้นฐาน',
      en: 'Master modern PHP 8.3: Type safety, associative arrays, match expressions, arrow functions, and OOP classes preparing for Laravel.'
    },
    objectives: {
      th: [
        'เขียนไวยากรณ์ PHP 8.3 สมัยใหม่พร้อม Type Declarations',
        'จัดการ Associative Arrays สำหรับส่งค่าเข้าสู่ระบบ',
        'เข้าใจ Class, Property, Constructor และ Method ใน OOP',
        'พร้อมก้าวสู่การเรียนรู้ Laravel 11 Framework'
      ],
      en: [
        'Write modern PHP 8.3 with strict type declarations',
        'Manipulate associative and indexed arrays with precision',
        'Understand Object-Oriented fundamentals (Classes, Properties, Methods)',
        'Transition confidently into Laravel 11 Framework architecture'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'PHP 8.3 คือ "ภาษาโปรแกรมฝั่งเซิร์ฟเวอร์ (Server-Side Language)" ที่รวดเร็ว ปลอดภัย และเป็นรากฐานของเว็บกว่า 75% ทั่วโลก มีระบบ Type Safety และความสามารถระดับ Enterprise เทียบเท่าภาษาชั้นนำ',
        en: 'PHP 8.3 is a high-performance, strictly typed server-side language powering over 75% of the web and the foundation of Laravel.'
      },
      whyUseIt: {
        th: 'เป็นภาษาหลักของ Laravel Framework มีระบบจัดการคำขอเว็บที่ตรงไปตรงมา และมีฟังก์ชันในตัวสำหรับการจัดการ Database, Arrays และ JSON อย่างยอดเยี่ยม',
        en: 'Native backbone of Laravel, offering straightforward request execution models and built-in primitives for databases and JSON.'
      },
      whenToUse: {
        th: 'ใช้ในการพัฒนา Backend Web Applications, REST APIs, ระบบ E-Commerce และ ERP ขององค์กร',
        en: 'Ideal for robust web applications, enterprise backends, and full-stack services.'
      },
      howItWorks: {
        th: 'PHP Interpreter รับคำขอจาก Web Server -> รันไฟล์สคริปต์แบบ Just-In-Time (JIT) -> ส่งผลลัพธ์ข้อความหรือ JSON กลับไปยังเบราว์เซอร์',
        en: 'PHP runtime executes scripts with JIT compiler -> Interfaces with databases -> Emits HTTP responses back to the browser.'
      }
    },
    diagram: {
      title: {
        th: 'กระบวนการประมวลผลของ PHP 8.3',
        en: 'PHP 8.3 Execution Pipeline'
      },
      flow: [
        { title: '1. PHP Script', sub: 'declare(strict_types=1);', color: 'blue' },
        { title: '2. PHP Engine & JIT', sub: 'คอมไพล์เป็น Opcode และ JIT Machine Code', color: 'purple' },
        { title: '3. Data Operations', sub: 'คำนวณตรรกะและเชื่อมต่อฐานข้อมูล', color: 'emerald' },
        { title: '4. HTTP Output', sub: 'ส่ง JSON Payload กลับทันที', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'ระบบ Type Safety ใน PHP 8.3',
          en: 'Strict Typing in PHP 8.3'
        },
        content: {
          th: 'ใส่ declare(strict_types=1); ที่หัวไฟล์เสมอ และระบุ Type ของตัวแปร พารามิเตอร์ และ Return Value อย่างชัดเจน เช่น string, int, float, bool, array',
          en: 'Declare strict types at script headers and annotate parameter types and return signatures explicitly.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'Constructor Property Promotion: OOP แบบสั้นกระชับ',
          en: 'Constructor Property Promotion in OOP'
        },
        content: {
          th: 'ใน PHP 8+ เราสามารถประกาศ Property และรับค่าใน __construct() ได้พร้อมกันในบรรทัดเดียว ไม่ต้องเขียนซ้ำซ้อน',
          en: 'PHP 8+ enables declaring and assigning class properties directly inside constructor arguments in one line.'
        }
      }
    ],
    primaryCode: {
      language: 'php',
      code: '<?php\ndeclare(strict_types=1);\n\nclass Employee {\n    public function __construct(\n        public int $id,\n        public string $name,\n        public string $department,\n        public float $salary\n    ) {}\n\n    public function getSummary(): string {\n        return "Employee #{$this->id}: {$this->name} ({$this->department}) - $" . number_format($this->salary, 2);\n    }\n}\n\n$emp = new Employee(101, "Alex Morgan", "Engineering", 75000.00);\necho $emp->getSummary();\n',
      filename: 'modern_employee.php',
      mockOutput: 'Employee #101: Alex Morgan (Engineering) - $75,000.00'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ declare(strict_types=1); ทำให้ PHP พยายามแปลง Type อัตโนมัติ (Type Coercion) จนเกิดบั๊กซ่อนเร้น',
          en: 'Omitting declare(strict_types=1), allowing silent type coercion bugs'
        },
        why: {
          th: 'หากไม่ประกาศ strict_types เมื่อส่ง string "123" เข้าฟังก์ชันที่ต้องการ int PHP จะแอบแปลงให้โดยไม่เตือน ซึ่งอาจทำให้ข้อมูลผิดพลาดในการคำนวณเงิน',
          en: 'Without strict types, passing "123" to an int parameter coerces silently, risking precision defects in financial calculations.'
        },
        badCode: '<?php\n// ❌ ไม่มี strict_types\nfunction transfer(int $amount) { ... }\ntransfer("1000 baht"); // อาจไม่เกิด Fatal Error ทันที',
        goodCode: '<?php\ndeclare(strict_types=1);\n// ✓ ปลอดภัย: จะเกิด TypeError ทันทีถ้าส่งข้อมูลผิด Type\nfunction transfer(int $amount): void { ... }',
        solution: {
          th: 'ใส่ declare(strict_types=1); ที่บรรทัดแรกของไฟล์ PHP เสมอ',
          en: 'Always enforce declare(strict_types=1); as the very first declaration in PHP scripts.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-zero-07-1',
        question: {
          th: 'ความสามารถ Constructor Property Promotion ใน PHP 8+ ช่วยอำนวยความสะดวกอย่างไร?',
          en: 'What convenience does Constructor Property Promotion introduce in PHP 8+?'
        },
        options: [
          { id: 'a', text: { th: 'ประกาศตัวแปร Property และรับค่าเข้าสู่ Class ได้พร้อมกันในพารามิเตอร์ Constructor', en: 'Declares and assigns class properties directly inside the constructor parameter list' } },
          { id: 'b', text: { th: 'ลบฐานข้อมูลทั้งหมดเมื่อปิดโปรแกรม', en: 'Drops all databases upon script exit' } },
          { id: 'c', text: { th: 'เปลี่ยนภาษา PHP ให้เป็น JavaScript', en: 'Converts PHP scripts into JavaScript' } },
          { id: 'd', text: { th: 'ไม่ต้องใส่เซมิโคลอนท้ายบรรทัดอีกต่อไป', en: 'Removes the requirement for semicolons' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Constructor Property Promotion ช่วยลด Boilerplate Code โดยประกาศ public/private หน้าพารามิเตอร์ใน __construct() เพื่อสร้าง Property ทันที',
          en: 'Constructor Property Promotion eliminates redundant property boilerplate by declaring visibility modifiers in constructor arguments.'
        }
      }
    ],
    summary: {
      th: [
        'PHP 8.3 มีระบบ Strict Typing ที่แข็งแกร่ง ปลอดภัย และเหมาะสำหรับระบบ Enterprise',
        'Constructor Property Promotion ช่วยให้เขียน Class แบบ OOP ได้สั้น กระชับ และอ่านง่าย',
        'ความรู้พื้นฐานนี้คือรากฐานที่สำคัญที่สุดก่อนต่อยอดไปสู่ Laravel Models และ Controllers'
      ],
      en: [
        'PHP 8.3 delivers rigorous typing and high performance for enterprise backends.',
        'Constructor Property Promotion drastically simplifies OOP class design.',
        'These core paradigms are the prerequisite foundation for mastering Laravel Eloquent and Controllers.'
      ]
    }
  }
};
