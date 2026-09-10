export type Language = 'th' | 'en';
export type Theme = 'dark' | 'light';

export type TrackId = 
  | 'zero' 
  | 'laravel' 
  | 'react' 
  | 'inertia' 
  | 'nestjs' 
  | 'fullstack' 
  | 'database' 
  | 'api' 
  | 'security' 
  | 'testing' 
  | 'architecture';

export interface CodeLineExplanation {
  lines: string;
  explanation: {
    th: string;
    en: string;
  };
}

export interface CodeSnippet {
  language: 'php' | 'typescript' | 'javascript' | 'tsx' | 'sql' | 'json' | 'bash' | 'dockerfile' | 'yaml';
  code: string;
  filename?: string;
  highlightLines?: number[];
  mockOutput?: string;
  explanations?: CodeLineExplanation[];
}

export interface QuizOption {
  id: string;
  text: {
    th: string;
    en: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: {
    th: string;
    en: string;
  };
  options: QuizOption[];
  correctOptionId: string;
  explanation: {
    th: string;
    en: string;
  };
}

export interface CommonMistake {
  mistake: {
    th: string;
    en: string;
  };
  why: {
    th: string;
    en: string;
  };
  badCode?: string;
  goodCode?: string;
  solution: {
    th: string;
    en: string;
  };
}

export interface ExerciseItem {
  id: string;
  title: {
    th: string;
    en: string;
  };
  instructions: {
    th: string;
    en: string;
  };
  starterCode?: string;
  solutionCode?: string;
  language?: string;
  hint?: {
    th: string;
    en: string;
  };
}

export interface ChallengeItem {
  id: string;
  title: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  difficulty: 'Easy' | 'Medium' | 'Hard';
  requirements: {
    th: string[];
    en: string[];
  };
}

export interface DiagramNode {
  title: string;
  sub: string;
  color?: string;
}

export interface LessonStep {
  stepNumber: number;
  title: {
    th: string;
    en: string;
  };
  content: {
    th: string;
    en: string;
  };
  codeSnippet?: CodeSnippet;
}

export interface Lesson {
  id: string;
  trackId: TrackId;
  category: string;
  level: number; // 0 to 10
  levelLabel: string;
  durationMinutes: number;
  title: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  objectives: {
    th: string[];
    en: string[];
  };
  zeroStart: {
    whatIsIt: {
      th: string;
      en: string;
    };
    whyUseIt: {
      th: string;
      en: string;
    };
    whenToUse: {
      th: string;
      en: string;
    };
    howItWorks: {
      th: string;
      en: string;
    };
  };
  diagram?: {
    title: {
      th: string;
      en: string;
    };
    flow: DiagramNode[];
    type?: 'linear' | 'cycle' | 'layers' | 'client-server';
  };
  steps: LessonStep[];
  primaryCode?: CodeSnippet;
  demoType?: 'counter' | 'employee-crud' | 'inertia-flow' | 'nestjs-api' | 'react-form' | 'permission-matrix' | 'api-request' | 'none';
  exercises?: ExerciseItem[];
  challenge?: ChallengeItem;
  commonMistakes: CommonMistake[];
  quiz: QuizQuestion[];
  summary: {
    th: string[];
    en: string[];
  };
}

export interface ProjectItem {
  id: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Capstone';
  title: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  duration?: string;
  techStack: string[];
  features: {
    th: string[];
    en: string[];
  };
  architecture: {
    th: string;
    en: string;
  };
  databaseDesign?: {
    tables: Array<{
      name: string;
      columns: string[];
    }>;
  };
  erdSchema?: {
    th: string;
    en: string;
  };
  erdTables?: string[];
  milestones?: Array<{
    id: string;
    title: { th: string; en: string };
    description: { th: string; en: string };
  }>;
  apiEndpoints?: Array<{
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
  }>;
  steps: Array<{
    step: number;
    title: { th: string; en: string };
    desc: { th: string; en: string };
  }>;
  demoRoute?: string;
}

export interface CheatSheetCategory {
  id: string;
  title: string;
  items: Array<{
    name: string;
    desc: { th: string; en: string };
    code: string;
    language: string;
  }>;
}

export interface UserNote {
  lessonId: string;
  lessonTitle: string;
  text: string;
  updatedAt: string;
}

export interface UserProgress {
  completedLessons: string[];
  currentLessonId: string;
  quizScores: Record<string, number>; // lessonId -> score percentage
  bookmarks: string[]; // lessonIds or snippetIds
  notes: Record<string, UserNote>; // lessonId -> UserNote
  projectStatus: Record<string, 'not_started' | 'in_progress' | 'completed'>;
  settings: {
    theme: Theme;
    language: Language;
    fontSize: 'normal' | 'large';
  };
}
