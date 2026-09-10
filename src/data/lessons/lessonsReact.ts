import { Lesson } from '../../types';

export const LESSONS_REACT: Record<string, Lesson> = {
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


  'react-03-hooks-deep-dive': {
    id: 'react-03-hooks-deep-dive',
    trackId: 'react',
    category: 'React Core',
    level: 5,
    levelLabel: 'Level 5: Hooks Mastery',
    durationMinutes: 24,
    title: {
      th: '03 เจาะลึก React Hooks: useEffect, useMemo, useCallback & useRef',
      en: '03 React Hooks Mastery: Effects, Memoization & Refs'
    },
    description: {
      th: 'เข้าใจวงจรชีวิตและการทำงานขั้นสูงของ Hooks: การป้องกัน Infinite Re-renders, การจดจำค่าด้วย useMemo/useCallback, และการสร้าง Custom Hook ใช้ซ้ำ',
      en: 'Master React Hooks internals: Effect cleanup, dependency arrays, performance memoization with useMemo/useCallback, and crafting reusable custom hooks.'
    },
    objectives: {
      th: [
        'เข้าใจ Dependency Array ของ useEffect และกลไก Cleanup Function',
        'ใช้ useMemo เพื่อป้องกันการคำนวณที่หนักหน่วงซ้ำซ้อนโดยไม่จำเป็น',
        'ใช้ useCallback เพื่อรักษา Reference ของฟังก์ชันที่ส่งเป็น Props',
        'สร้าง Custom Hook เช่น useDebounce หรือ useLocalStorage อย่างถูกต้อง'
      ],
      en: [
        'Master useEffect dependency arrays and teardown cleanup functions',
        'Leverage useMemo to cache expensive computations',
        'Utilize useCallback to stabilize function references passed to memoized children',
        'Develop production custom hooks (e.g. useDebounce, useLocalStorage)'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'React Hooks คือ "ฟังก์ชันพิเศษที่ขึ้นต้นด้วย use" ซึ่งช่วยให้ Component สามารถเข้าถึงความสามารถของ React เช่น การจำค่า (State), การติดต่อโลกภายนอก (Side Effects), และการจดจำผลลัพธ์ (Cache)',
        en: 'React Hooks are specialized functions prefixed with "use" that grant functional components access to state, side-effects, and memoized values.'
      },
      whyUseIt: {
        th: 'ทำให้เขียนโค้ดได้กระชับกว่า Class Component ในอดีตมาก และสามารถรวม Logic ที่เกี่ยวข้องกัน (เช่น ดึงข้อมูล API) ออกมาเป็น Custom Hook แล้วแชร์ให้ Component อื่นใช้ต่อได้ทันที',
        en: 'Eliminates verbose legacy class components and allows domain logic (e.g., API fetching or media listeners) to be cleanly packaged into reusable custom hooks.'
      },
      whenToUse: {
        th: 'ใช้เมื่อต้องการติดต่อ API, จับการคลิกนอกกรอบ (Click Outside), จับเวลา (Timer) หรือดักจับการพิมพ์ (Debounce)',
        en: 'Applied whenever connecting to asynchronous external systems, manipulating DOM nodes, or optimizing performance.'
      },
      howItWorks: {
        th: 'React ติดตามลำดับการเรียก Hook ภายใน Component Fiber Node ในทุกรอบการ Render ดังนั้น กฎเหล็กคือต้องเรียก Hook ที่ Top-Level ของ Component เสมอ ห้ามเรียกใน if หรือ for loop',
        en: 'React tracks hook invocations using a linked list keyed to the component fiber. Hooks must always be invoked unconditionally at the top level.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรชีวิตของ useEffect และ Cleanup',
        en: 'useEffect Lifecycle & Teardown Flow'
      },
      flow: [
        { title: '1. Component Render', sub: 'วาดหน้าจอ React DOM', color: 'blue' },
        { title: '2. Run Effect', sub: 'ยิง fetch() หรือเปิด WebSocket connection', color: 'purple' },
        { title: '3. Props/State เปลี่ยน', sub: 'React ทำการ Re-render รอบใหม่', color: 'emerald' },
        { title: '4. Run Cleanup', sub: 'รัน return () => ws.close() ก่อนเริ่มรอบใหม่', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'กฎเหล็กของ Dependency Array ใน useEffect',
          en: 'Dependency Array Discipline'
        },
        content: {
          th: '[] ทำงานรอบเดียวตอนเมานต์, [id] ทำงานเมื่อ id เปลี่ยนค่า, และถ้าไม่มี Array จะรันทุกรอบที่เรนเดอร์ (อันตราย!)',
          en: '[] runs once on mount, [id] triggers whenever id changes, and omitting the array executes on every single render (infinite loop risk).'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'สร้าง Custom Hook: useDebounce',
          en: 'Building Custom useDebounce Hook'
        },
        content: {
          th: 'หน่วงเวลาการค้นหาเพื่อไม่ให้ยิง API ถี่เกินไปเมื่อผู้ใช้พิมพ์แป้นพิมพ์อย่างรวดเร็ว',
          en: 'Debounce search query updates to throttle excessive API requests during rapid keystrokes.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import { useState, useEffect } from "react";\n\n// Custom Hook: หน่วงเวลาค่า input\nexport function useDebounce<T>(value: T, delayMs: number = 300): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delayMs);\n\n    // Cleanup Function: ยกเลิกตัวจับเวลาเดิมเมื่อผู้ใช้พิมพ์ตัวถัดไป\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [value, delayMs]);\n\n  return debouncedValue;\n}\n',
      filename: 'src/hooks/useDebounce.ts',
      mockOutput: 'Debounced search query ready'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'อัปเดต State ภายใน useEffect โดยไม่ได้ใส่ Dependency Array หรือใส่ตัวแปร State นั้นเข้าไปใน Dependency',
          en: 'Mutating state inside useEffect without dependency array or with the state itself'
        },
        why: {
          th: 'จะทำให้เกิดลูปมรณะ (Infinite Re-render Loop) คือ เมื่อ State เปลี่ยน Effect จะรัน แล้วใน Effect ดันไปเปลี่ยน State อีก ทำให้เบราว์เซอร์ค้างทันที',
          en: 'Creates an infinite render loop where state mutation triggers the effect, which immediately mutates state again.'
        },
        badCode: '// ❌ เบราว์เซอร์ค้างแน่นอน: Infinite Loop!\nuseEffect(() => {\n  setCount(count + 1);\n});',
        goodCode: '// ✓ ถูกต้อง: ระบุ Dependency ชัดเจน หรือใช้ Functional Update\nuseEffect(() => {\n  const timer = setInterval(() => setCount(c => c + 1), 1000);\n  return () => clearInterval(timer);\n}, []);',
        solution: {
          th: 'ใส่ Dependency Array เสมอ และใช้ Functional Updates setCount(prev => prev + 1) เพื่อไม่ต้องพึ่งพาตัวแปรภายนอก',
          en: 'Always provide dependency arrays and use functional state updates setCount(prev => prev + 1).'
        }
      }
    ],
    quiz: [
      {
        id: 'q-react-03-1',
        question: {
          th: 'ใน React useEffect ฟังก์ชันที่ return ออกมาจาก callback ทำหน้าที่อะไร?',
          en: 'What is the purpose of the function returned from a React useEffect callback?'
        },
        options: [
          { id: 'a', text: { th: 'เป็น Cleanup Function สำหรับเคลียร์ Event Listener หรือ Timer ก่อน Component Unmount', en: 'A cleanup function to tear down event listeners, timers, or abort controllers' } },
          { id: 'b', text: { th: 'รีเฟรชหน้าเว็บทั้งหน้า', en: 'Performs a full page reload' } },
          { id: 'c', text: { th: 'บันทึกข้อมูลลงฐานข้อมูล MySQL ทันที', en: 'Saves directly to MySQL database' } },
          { id: 'd', text: { th: 'แปลง JSX เป็น HTML', en: 'Transpiles JSX into HTML' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'Cleanup Function จะถูกเรียกก่อนที่ Effect รอบถัดไปจะรัน หรือเมื่อ Component ถูกถอดออกจากหน้าจอ เพื่อป้องกัน Memory Leak',
          en: 'The cleanup function is invoked before re-running the effect or on component unmount to prevent memory leaks.'
        }
      }
    ],
    summary: {
      th: [
        'React Hooks ให้ความสามารถทรงพลังแก่ Functional Components',
        'จัดการ Dependency Array อย่างเคร่งครัดเพื่อป้องกัน Infinite Re-render',
        'Custom Hooks ช่วยให้คุณดึง Logic ออกมาใช้ซ้ำข้าม Component ได้อย่างสง่างาม'
      ],
      en: [
        'Hooks unlock reactive state and lifecycle management in functional components.',
        'Strict dependency array management is critical to prevent runaway re-renders.',
        'Custom hooks encapsulate domain behavior for clean cross-component reuse.'
      ]
    }
  },

  'react-04-forms-validation': {
    id: 'react-04-forms-validation',
    trackId: 'react',
    category: 'Forms & UI',
    level: 5,
    levelLabel: 'Level 5: Forms',
    durationMinutes: 22,
    title: {
      th: '04 การจัดการฟอร์มและการตรวจสอบข้อมูลใน React',
      en: '04 React Form State & Validation Architecture'
    },
    description: {
      th: 'ออกแบบฟอร์มที่เสถียร: Controlled Components, การจัดการ Multi-input Form State, Real-time Validation, การแสดงข้อความ Error, และสถานะการส่ง (Submitting, Disabled)',
      en: 'Design resilient form architectures: Controlled inputs, multi-field state management, real-time client-side validation, error states, and submitting indicators.'
    },
    objectives: {
      th: [
        'เข้าใจความแตกต่างระหว่าง Controlled vs Uncontrolled Components',
        'จัดการฟอร์มหลายฟิลด์ด้วย Object State ก้อนเดียวอย่างมีระเบียบ',
        'สร้างระบบ Client-side Validation ตรวจสอบความถูกต้องก่อนกด Submit',
        'จัดการ Loading State และป้องกันการกดส่งซ้ำ (Double Submit)'
      ],
      en: [
        'Master controlled vs uncontrolled component paradigms',
        'Manage complex multi-field form state using normalized objects',
        'Implement instant client-side validation feedbacks',
        'Handle submitting states to prevent duplicate payloads'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'Controlled Form คือ "ฟอร์มที่ค่าในช่องพิมพ์ถูกผูกติดกับ State ของ React 100%" ทุกครั้งที่ผู้ใช้พิมพ์ ตัวอักษรจะเข้าไปอัปเดต State ก่อน แล้ว React จึงสะท้อนค่านั้นกลับมาแสดงในช่องพิมพ์',
        en: 'Controlled forms synchronize input values directly with React state, making React the single source of truth for all form values.'
      },
      whyUseIt: {
        th: 'ทำให้เราสามารถตรวจสอบข้อมูลได้ทันทีแบบ Real-time เช่น เช็ครหัสผ่านว่ายาวเกิน 8 ตัวหรือไม่ พร้อมปิดปุ่ม Submit หากยังกรอกข้อมูลไม่ครบถ้วน',
        en: 'Enables instant inline validation, conditional field rendering, and precise button disabled states.'
      },
      whenToUse: {
        th: 'ใช้ในฟอร์มของระบบธุรกิจทุกรูปแบบ เช่น ฟอร์มพนักงาน ฟอร์มคำสั่งซื้อ และฟอร์มตั้งค่าโปรไฟล์',
        en: 'Standard UI pattern for all enterprise input interfaces and transactional forms.'
      },
      howItWorks: {
        th: 'input มี value={form.email} และ onChange={handleChange} -> เมื่อพิมพ์ handleChange อัปเดต state -> ตรวจสอบข้อผิดพลาดใน errors state -> แสดงตัวหนังสือสีแดงใต้ช่องพิมพ์ทันที',
        en: 'Input binds value={state} and onChange={handler} -> Keystrokes mutate state -> Validation updates error dictionary -> Error hints render inline.'
      }
    },
    diagram: {
      title: {
        th: 'วงจรข้อมูลของ Controlled Component ใน React',
        en: 'Controlled Component Data Cycle'
      },
      flow: [
        { title: '1. Keystroke', sub: 'ผู้ใช้พิมพ์ตัวอักษรลงช่อง Input', color: 'blue' },
        { title: '2. onChange Event', sub: 'ยิงฟังก์ชัน handleChange(e)', color: 'purple' },
        { title: '3. setState & Validate', sub: 'อัปเดต formData และเช็คกฎ Validation', color: 'emerald' },
        { title: '4. Re-render UI', sub: 'แสดงค่าล่าสุดพร้อมข้อความ Error (ถ้ามี)', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'สร้าง State รวมสำหรับฟอร์ม',
          en: 'Unified Form State Object'
        },
        content: {
          th: 'ใช้ useState({ name: "", email: "", department: "IT" }) ก้อนเดียวเพื่อจัดการทุกฟิลด์',
          en: 'Maintain a single state object: useState({ name: "", email: "", department: "IT" }).'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'เขียน handleChange แบบไดนามิก',
          en: 'Dynamic Input Change Handler'
        },
        content: {
          th: 'ใช้ [e.target.name]: e.target.value เพื่ออัปเดตฟิลด์ใดๆ ได้ในฟังก์ชันเดียว',
          en: 'Use computed property names [e.target.name]: e.target.value to handle all inputs with one function.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import React, { useState } from "react";\n\nexport function EmployeeForm({ onSubmit }: { onSubmit: (data: any) => Promise<void> }) {\n  const [form, setForm] = useState({ name: "", email: "", department: "Engineering" });\n  const [errors, setErrors] = useState<Record<string, string>>({});\n  const [isSubmitting, setIsSubmitting] = useState(false);\n\n  const validate = () => {\n    const errs: Record<string, string> = {};\n    if (!form.name.trim()) errs.name = "กรุณากรอกชื่อพนักงาน";\n    if (!form.email.includes("@")) errs.email = "รูปแบบอีเมลไม่ถูกต้อง";\n    setErrors(errs);\n    return Object.keys(errs).length === 0;\n  };\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault();\n    if (!validate()) return;\n    setIsSubmitting(true);\n    try {\n      await onSubmit(form);\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className="space-y-4">\n      <input\n        name="name"\n        value={form.name}\n        onChange={e => setForm({ ...form, name: e.target.value })}\n        className="border p-2 rounded w-full"\n      />\n      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}\n      <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded">\n        {isSubmitting ? "กำลังบันทึก..." : "บันทึกข้อมูล"}\n      </button>\n    </form>\n  );\n}\n',
      filename: 'src/components/EmployeeForm.tsx',
      mockOutput: 'Controlled EmployeeForm ready'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'ลืมใส่ e.preventDefault() ใน handleSubmit ทำให้หน้าเว็บรีเฟรชทั้งหน้า',
          en: 'Omitting e.preventDefault() in handleSubmit, causing full browser reload'
        },
        why: {
          th: 'พฤติกรรมดั้งเดิมของเบราว์เซอร์เมื่อ Submit ฟอร์มคือการยิง HTTP POST และโหลดหน้าใหม่ ทำให้ React State ทั้งหมดในเครื่องหายไป',
          en: 'Default browser behavior on form submission performs a page navigation, wiping client state.'
        },
        badCode: 'const handleSubmit = (e) => {\n  // ❌ ลืม e.preventDefault()\n  sendData(form);\n};',
        goodCode: 'const handleSubmit = (e: React.FormEvent) => {\n  e.preventDefault(); // ✓ ดักการรีเฟรชหน้า\n  sendData(form);\n};',
        solution: {
          th: 'เรียก e.preventDefault() ที่บรรทัดแรกของฟังก์ชัน handleSubmit เสมอ',
          en: 'Always invoke e.preventDefault() at the start of submit handlers.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-react-04-1',
        question: {
          th: 'ทำไม Controlled Component ใน React จึงต้องผูกทั้ง value และ onChange เข้าด้วยกัน?',
          en: 'Why must a React controlled component bind both value and onChange simultaneously?'
        },
        options: [
          { id: 'a', text: { th: 'เพื่อให้ React ควบคุมค่าในช่องพิมพ์อย่างสมบูรณ์ และอัปเดต State ทันทีที่ผู้ใช้พิมพ์', en: 'To ensure React serves as single source of truth, synchronizing state with user input' } },
          { id: 'b', text: { th: 'เพื่อทำให้หน้าเว็บโหลดเร็วขึ้น 50 เท่า', en: 'To accelerate page load speeds 50x' } },
          { id: 'c', text: { th: 'เพื่อให้ช่องพิมพ์เปลี่ยนเป็นปุ่มกด', en: 'To transform input fields into buttons' } },
          { id: 'd', text: { th: 'เพื่อปิดการทำงานของ CSS', en: 'To disable CSS stylesheets' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'value แสดงค่าตาม State ของ React และ onChange ทำหน้าที่รับ Event การพิมพ์เพื่อไปอัปเดต State นั้นให้ตรงกัน',
          en: 'value dictates what is displayed based on React state, while onChange propagates keystrokes back into state.'
        }
      }
    ],
    summary: {
      th: [
        'Controlled Components มอบอำนาจให้ React เป็น Single Source of Truth',
        'จัดการฟอร์มแบบ Multi-input ด้วย Object State และ [e.target.name]: e.target.value',
        'ใส่ e.preventDefault() เสมอ และควบคุมปุ่มด้วยสถานะ isSubmitting เพื่อป้องกัน Double Submit'
      ],
      en: [
        'Controlled components establish React state as the single source of truth.',
        'Manage multi-field forms cleanly with computed property names in state.',
        'Always invoke e.preventDefault() and guard actions with isSubmitting disabled states.'
      ]
    }
  },

  'react-05-react19-compiler-features': {
    id: 'react-05-react19-compiler-features',
    trackId: 'react',
    category: 'React 19 Next-Gen',
    level: 5,
    levelLabel: 'Level 5: React 19 Core',
    durationMinutes: 25,
    title: {
      th: '05 ฟีเจอร์ใหม่ใน React 19: Actions, useActionState & useOptimistic',
      en: '05 Modern React 19: Actions, useActionState & useOptimistic'
    },
    description: {
      th: 'ก้าวสู่ยุคใหม่ของ React 19: ระบบ Actions สำหรับจัดการ Form Submission แบบอัตโนมัติ, useActionState, useOptimistic สำหรับอัปเดต UI ทันทีไม่ต้องรอเซิร์ฟเวอร์, และ React Compiler',
      en: 'Master React 19 innovations: Form Actions, useActionState for pending states, useOptimistic for instant UI feedback, and React Compiler automatic memoization.'
    },
    objectives: {
      th: [
        'เข้าใจแนวคิด Actions ใน React 19 และการทำงานกับ Form element โดยตรง',
        'ใช้งาน Hook ใหม่ useActionState สำหรับจัดการ State และ Loading อัตโนมัติ',
        'ใช้งาน useOptimistic เพื่อแสดงผลลัพธ์ล่วงหน้าทันที (Optimistic UI)',
        'เข้าใจหน้าที่ของ React Compiler ที่ช่วยลดการเขียน useMemo / useCallback'
      ],
      en: [
        'Understand React 19 native action functions in HTML forms',
        'Implement useActionState for automatic pending and error management',
        'Build lightning-fast interfaces using useOptimistic feedback',
        'Understand React Compiler automatic fine-grained memoization'
      ]
    },
    zeroStart: {
      whatIsIt: {
        th: 'React 19 คือ "ก้าวกระโดดครั้งใหญ่ที่สุดของ React" ที่ยกเลิกความยุ่งยากแบบเดิม โดยมีระบบ Actions จัดการฟอร์ม และมี React Compiler ที่ช่วยจำค่า Memoization ให้อัตโนมัติโดยที่คุณไม่ต้องเขียน useMemo หรือ useCallback เองอีกต่อไป',
        en: 'React 19 represents a major evolution: native form actions, optimistic state primitives, and the React Compiler automatically memoizing render trees.'
      },
      whyUseIt: {
        th: 'ลดโค้ด Boilerplate ของฟอร์มลงกว่า 60% จัดการสถานะกำลังโหลด (Pending) และ Error ได้ในตัว และทำให้หน้าเว็บตอบสนองทันใจผู้ใช้ในระดับเสี้ยววินาที',
        en: 'Slashes form boilerplate by over 60%, automates pending and error states, and delivers instant perceived UI responsiveness.'
      },
      whenToUse: {
        th: 'ใช้ในโปรเจกต์สมัยใหม่ทุกตัวที่สร้างด้วย React 19 หรือใช้ร่วมกับ Inertia.js 3',
        en: 'Adopt across modern React 19 projects and modern full-stack monoliths.'
      },
      howItWorks: {
        th: 'ส่งฟังก์ชัน async เข้าไปใน action={formAction} ของ <form> -> React 19 จัดการ Pending State และป้องกันการกดส่งซ้ำให้อัตโนมัติ -> useOptimistic ปรับหน้าจอทันทีขณะที่ข้อมูลกำลังเดินทางไปเซิร์ฟเวอร์',
        en: 'Pass async handlers into form action attribute -> React 19 tracks pending transitions natively -> useOptimistic updates UI immediately while async request resolves.'
      }
    },
    diagram: {
      title: {
        th: 'การทำงานของ useOptimistic ใน React 19',
        en: 'React 19 Optimistic UI Flow'
      },
      flow: [
        { title: '1. User Action', sub: 'ผู้ใช้กดถูกใจ (Like) หรือเพิ่มข้อมูล', color: 'blue' },
        { title: '2. useOptimistic', sub: 'หน้าจอเปลี่ยนสถานะเป็นถูกใจทันที (0ms)', color: 'emerald' },
        { title: '3. Background Server', sub: 'ส่ง HTTP Request ไปยัง Laravel ในเบื้องหลัง', color: 'purple' },
        { title: '4. Settle / Rollback', sub: 'หากสำเร็จ ยืนยันข้อมูล / หากล้มเหลว ย้อนกลับสถานะเดิมอัตโนมัติ', color: 'rose' }
      ],
      type: 'linear'
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          th: 'ใช้ useActionState จัดการฟอร์ม',
          en: 'Adopt useActionState for Form Transitions'
        },
        content: {
          th: 'const [state, formAction, isPending] = useActionState(updateEmployee, initialState);',
          en: 'const [state, formAction, isPending] = useActionState(updateEmployee, initialState);.'
        }
      },
      {
        stepNumber: 2,
        title: {
          th: 'ใช้ useOptimistic เพื่อประสบการณ์ผู้ใช้ที่รวดเร็ว',
          en: 'Apply useOptimistic for Zero-Latency Feel'
        },
        content: {
          th: 'const [optimisticList, setOptimistic] = useOptimistic(list, (current, item) => [...current, item]);',
          en: 'const [optimisticList, setOptimistic] = useOptimistic(list, (current, item) => [...current, item]);.'
        }
      }
    ],
    primaryCode: {
      language: 'typescript',
      code: 'import React, { useActionState, useOptimistic } from "react";\n\ninterface Todo { id: number; title: string; isPending?: boolean; }\n\nexport function TodoList({ initialTodos, addTodoServer }: { initialTodos: Todo[], addTodoServer: (title: string) => Promise<Todo> }) {\n  const [optimisticTodos, setOptimisticTodos] = useOptimistic(\n    initialTodos,\n    (current, newTitle: string) => [\n      ...current,\n      { id: Date.now(), title: newTitle, isPending: true }\n    ]\n  );\n\n  const [state, formAction, isPending] = useActionState(async (_: any, formData: FormData) => {\n    const title = formData.get("title") as string;\n    setOptimisticTodos(title); // อัปเดตหน้าจอทันทีไม่ต้องรอเซิร์ฟเวอร์!\n    await addTodoServer(title);\n    return null;\n  }, null);\n\n  return (\n    <form action={formAction} className="space-y-4">\n      <input name="title" placeholder="ใส่งานใหม่..." className="border p-2 rounded" />\n      <button type="submit" disabled={isPending} className="bg-cyan-600 text-white px-4 py-2 rounded">\n        {isPending ? "กำลังเพิ่ม..." : "เพิ่มงาน"}\n      </button>\n      <ul>\n        {optimisticTodos.map(t => (\n          <li key={t.id} className={t.isPending ? "opacity-50 italic" : ""}>\n            {t.title} {t.isPending && "(กำลังส่งไปยังเซิร์ฟเวอร์...)"}\n          </li>\n        ))}\n      </ul>\n    </form>\n  );\n}\n',
      filename: 'src/components/React19TodoList.tsx',
      mockOutput: 'React 19 Action and Optimistic UI Active'
    },
    demoType: 'none',
    commonMistakes: [
      {
        mistake: {
          th: 'พยายามใช้ useOptimistic นอกขอบเขตของ Action หรือ Transition',
          en: 'Attempting to call useOptimistic setter outside of an action transition'
        },
        why: {
          th: 'React กำหนดว่า setOptimistic ต้องถูกเรียกภายในฟังก์ชัน Transition หรือ Action เท่านั้น มิฉะนั้น React จะเตือนและไม่สามารถ Rollback ได้',
          en: 'React requires optimistic state updates to execute within a startTransition or form action context.'
        },
        badCode: '// ❌ เรียกดื้อๆ นอก Action\nconst onClick = () => {\n  setOptimistic(newItem); // React Error\n};',
        goodCode: '// ✓ เรียกภายใน Action หรือ startTransition\nconst [state, formAction] = useActionState(async () => {\n  setOptimistic(newItem);\n  await saveApi();\n}, null);',
        solution: {
          th: 'เรียก setOptimistic ภายใน Action ของ useActionState เสมอ',
          en: 'Always invoke the optimistic dispatcher inside a form action or transition callback.'
        }
      }
    ],
    quiz: [
      {
        id: 'q-react-05-1',
        question: {
          th: 'ประโยชน์หลักของ Hook useOptimistic ใน React 19 คืออะไร?',
          en: 'What is the primary benefit of useOptimistic in React 19?'
        },
        options: [
          { id: 'a', text: { th: 'แสดงการเปลี่ยนแปลงบนหน้าจอทันทีโดยไม่ต้องรอผลลัพธ์ตอบกลับจากเซิร์ฟเวอร์ และคืนค่าเดิมอัตโนมัติหากเซิร์ฟเวอร์ล้มเหลว', en: 'Reflects changes immediately on screen before server response, rolling back automatically on failure' } },
          { id: 'b', text: { th: 'ทำให้คอมพิวเตอร์กินไฟน้อยลง', en: 'Decreases battery power consumption' } },
          { id: 'c', text: { th: 'ลบไฟล์ที่ไม่จำเป็นในเครื่องออก', en: 'Cleans up local disk space' } },
          { id: 'd', text: { th: 'เปลี่ยนสีไอคอนอัตโนมัติ', en: 'Auto-tints application icons' } }
        ],
        correctOptionId: 'a',
        explanation: {
          th: 'useOptimistic ช่วยมอบประสบการณ์การใช้งานที่เร็วที่สุดให้ผู้ใช้ โดยแสดงผลลัพธ์ที่คาดหวังทันที และจะย้อนคืนค่าเดิมอัตโนมัติถ้าเกิดข้อผิดพลาด',
          en: 'useOptimistic optimizes perceived speed by immediately projecting the expected result, rolling back if errors occur.'
        }
      }
    ],
    summary: {
      th: [
        'React 19 นำเสนอ Form Actions ที่เรียบง่ายและทรงพลัง',
        'useActionState ช่วยจัดการ Pending State และ Error ได้ในบรรทัดเดียว',
        'useOptimistic มอบประสบการณ์ UI ความเร็วสูงระดับ 0ms และ React Compiler ช่วยลดโค้ด Memoization ซ้ำซ้อน'
      ],
      en: [
        'React 19 transforms form lifecycles through native action primitives.',
        'useActionState cleanly encapsulates async states, pending flags, and error responses.',
        'useOptimistic delivers instant perceived responsiveness with automatic error rollbacks.'
      ]
    }
  }

};
