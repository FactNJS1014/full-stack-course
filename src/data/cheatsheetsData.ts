import { CheatSheetCategory } from '../types';

export const CHEATSHEETS_DATA: CheatSheetCategory[] = [
  {
    id: 'laravel',
    title: 'Laravel 11 Cheat Sheet',
    items: [
      {
        name: 'Route Basics',
        desc: { th: 'กำหนดเส้นทาง URL แบบ GET, POST, PUT, DELETE', en: 'Basic routing endpoints' },
        language: 'php',
        code: `Route::get('/users', [UserController::class, 'index']);\nRoute::post('/users', [UserController::class, 'store']);\nRoute::get('/users/{id}', [UserController::class, 'show']);\nRoute::put('/users/{id}', [UserController::class, 'update']);\nRoute::delete('/users/{id}', [UserController::class, 'destroy']);`
      },
      {
        name: 'Resource Route',
        desc: { th: 'สร้าง 7 RESTful Routes อัตโนมัติในบรรทัดเดียว', en: 'Auto-generate 7 RESTful endpoints' },
        language: 'php',
        code: `Route::resource('employees', EmployeeController::class);`
      },
      {
        name: 'Eloquent CRUD',
        desc: { th: 'คำสั่งดึง สร้าง อัปเดต และลบข้อมูลด้วย Eloquent', en: 'Core Eloquent ORM operations' },
        language: 'php',
        code: `// Create\n$user = User::create(['name' => 'Alice', 'email' => 'alice@demo.com']);\n\n// Read\n$users = User::where('active', 1)->orderBy('name')->get();\n$user = User::findOrFail($id);\n\n// Update\n$user->update(['name' => 'Alicia']);\n\n// Delete\n$user->delete();`
      },
      {
        name: 'Form Request Validation',
        desc: { th: 'กฎการตรวจสอบข้อมูลยอดนิยม', en: 'Common validation rules' },
        language: 'php',
        code: `public function rules(): array\n{\n    return [\n        'name' => 'required|string|max:255',\n        'email' => 'required|email|unique:users,email',\n        'age' => 'nullable|integer|min:18',\n        'role' => 'required|in:admin,editor,user',\n    ];\n}`
      },
      {
        name: 'Inertia Render',
        desc: { th: 'ส่งข้อมูลจาก Laravel เข้าหา React Page', en: 'Render Inertia React page with props' },
        language: 'php',
        code: `return Inertia::render('Employees/Index', [\n    'employees' => Employee::latest()->paginate(10),\n    'filters' => request()->only(['search', 'department']),\n]);`
      }
    ]
  },
  {
    id: 'react',
    title: 'React 19 Cheat Sheet',
    items: [
      {
        name: 'useState Hook',
        desc: { th: 'จัดการ State ภายใน Component พร้อม Type', en: 'Local state management with TypeScript' },
        language: 'tsx',
        code: `const [count, setCount] = useState<number>(0);\n\n// Functional update (safe for rapid clicks)\nsetCount(prev => prev + 1);`
      },
      {
        name: 'useEffect Hook',
        desc: { th: 'จัดการ Side Effects และ Cleanup', en: 'Side effects and cleanup lifecycle' },
        language: 'tsx',
        code: `useEffect(() => {\n  const handler = () => console.log('Window resized');\n  window.addEventListener('resize', handler);\n  \n  return () => window.removeEventListener('resize', handler);\n}, []);`
      },
      {
        name: 'Controlled Input Form',
        desc: { th: 'ฟอร์มแบบ Controlled Component', en: 'Standard controlled input binding' },
        language: 'tsx',
        code: `const [query, setQuery] = useState('');\n\n<input\n  type="text"\n  value={query}\n  onChange={e => setQuery(e.target.value)}\n  className="border rounded px-3 py-2"\n/>`
      },
      {
        name: 'React 19 useActionState',
        desc: { th: 'จัดการ Form Action และสถานะ Pending ใน React 19', en: 'React 19 form actions and pending state' },
        language: 'tsx',
        code: `import { useActionState } from 'react';\n\nconst [state, formAction, isPending] = useActionState(async (prev, formData) => {\n  const res = await updateProfile(formData);\n  return res;\n}, null);`
      }
    ]
  },
  {
    id: 'inertia',
    title: 'Inertia 3 Cheat Sheet',
    items: [
      {
        name: 'Inertia Link',
        desc: { th: 'สลับหน้าแบบ SPA โดยไม่รีเฟรชเบราว์เซอร์', en: 'Seamless SPA navigation without full reload' },
        language: 'tsx',
        code: `import { Link } from '@inertiajs/react';\n\n<Link href="/employees" preserveState className="text-blue-600">\n  View Employees\n</Link>`
      },
      {
        name: 'useForm Hook',
        desc: { th: 'จัดการฟอร์ม Validation และ Processing ในที่เดียว', en: 'Form state, errors, and submission lifecycle' },
        language: 'tsx',
        code: `const { data, setData, post, processing, errors, reset } = useForm({\n  name: '',\n  email: '',\n});\n\nconst submit = (e: React.FormEvent) => {\n  e.preventDefault();\n  post('/users', {\n    onSuccess: () => reset(),\n  });\n};`
      },
      {
        name: 'Inertia Router Manual Visit',
        desc: { th: 'สั่งเปลี่ยนหน้าด้วยโค้ด JavaScript', en: 'Programmatic navigation with preserveState' },
        language: 'tsx',
        code: `import { router } from '@inertiajs/react';\n\nrouter.get('/products', { search: 'laptop', page: 2 }, {\n  preserveState: true,\n  replace: true,\n});`
      }
    ]
  },
  {
    id: 'nestjs',
    title: 'NestJS Cheat Sheet',
    items: [
      {
        name: 'Controller Scaffolding',
        desc: { th: 'โครงสร้าง Controller มาตรฐานพร้อม HTTP Decorators', en: 'Standard REST controller structure' },
        language: 'typescript',
        code: `@Controller('products')\nexport class ProductsController {\n  constructor(private readonly service: ProductsService) {}\n\n  @Get()\n  findAll() { return this.service.findAll(); }\n\n  @Post()\n  create(@Body() dto: CreateProductDto) { return this.service.create(dto); }\n}`
      },
      {
        name: 'Service with @Injectable',
        desc: { th: 'Service สำหรับตรรกะทางธุรกิจพร้อม Dependency Injection', en: 'Business logic provider class' },
        language: 'typescript',
        code: `@Injectable()\nexport class ProductsService {\n  private items: Product[] = [];\n\n  findAll(): Product[] {\n    return this.items;\n  }\n}`
      },
      {
        name: 'DTO & Validation Pipe',
        desc: { th: 'ตรวจสอบ Data Transfer Object ด้วย Decorator', en: 'Incoming payload validation rules' },
        language: 'typescript',
        code: `import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';\n\nexport class CreateProductDto {\n  @IsString()\n  @IsNotEmpty()\n  name: string;\n\n  @IsNumber()\n  @Min(0)\n  price: number;\n}`
      }
    ]
  }
];
