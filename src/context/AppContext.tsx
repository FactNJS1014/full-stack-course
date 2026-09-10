import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme, UserNote, UserProgress } from '../types';
import { LESSONS_DATA } from '../data/lessonsData';
import { CURRICULUM_TRACKS } from '../data/curriculum';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  completedLessons: string[];
  toggleCompleteLesson: (lessonId: string) => void;
  toggleComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  bookmarks: string[];
  bookmarkedLessons: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  notes: Record<string, UserNote>;
  saveNote: (lessonId: string, lessonTitle: string, text: string) => void;
  getNote: (lessonId: string) => string;
  quizScores: Record<string, number>;
  saveQuizScore: (lessonId: string, score: number, totalQuestions?: number) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  notesDrawerOpen: boolean;
  setNotesDrawerOpen: (open: boolean) => void;
  activeNoteLessonId: string | null;
  openNoteForLesson: (lessonId: string) => void;
  openNotesForLesson: (lessonId: string) => void;
  totalLessonsCount: number;
  overallProgressPercentage: number;
  progressPercentage: number;
  resetAllProgress: () => void;
}

const STORAGE_KEY = 'lrna_academy_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: ['zero-01-what-is-programming'], // default 1 completed for immediate onboarding feel
  currentLessonId: 'zero-01-what-is-programming',
  quizScores: { 'zero-01-what-is-programming': 100 },
  bookmarks: ['fullstack-02-laravel-react-inertia-crud'],
  notes: {
    'zero-01-what-is-programming': {
      lessonId: 'zero-01-what-is-programming',
      lessonTitle: '0.1 การเขียนโปรแกรมคืออะไร?',
      text: 'Variables are like labeled boxes. Always end PHP statements with semicolons!',
      updatedAt: new Date().toISOString()
    }
  },
  projectStatus: {
    'proj-01-employee-crud': 'in_progress'
  },
  settings: {
    theme: 'dark',
    language: 'th',
    fontSize: 'normal'
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultProgress, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return defaultProgress;
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [notesDrawerOpen, setNotesDrawerOpen] = useState(false);
  const [activeNoteLessonId, setActiveNoteLessonId] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore quota errors
    }
  }, [progress]);

  // Sync theme to document element
  useEffect(() => {
    if (progress.settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [progress.settings.theme]);

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setTheme = (theme: Theme) => {
    setProgress(prev => ({
      ...prev,
      settings: { ...prev.settings, theme }
    }));
  };

  const toggleTheme = () => {
    setTheme(progress.settings.theme === 'dark' ? 'light' : 'dark');
  };

  const setLanguage = (language: Language) => {
    setProgress(prev => ({
      ...prev,
      settings: { ...prev.settings, language }
    }));
  };

  const toggleLanguage = () => {
    setLanguage(progress.settings.language === 'th' ? 'en' : 'th');
  };

  const toggleCompleteLesson = (lessonId: string) => {
    setProgress(prev => {
      const exists = prev.completedLessons.includes(lessonId);
      const updated = exists
        ? prev.completedLessons.filter(id => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        completedLessons: updated
      };
    });
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  };

  const toggleBookmark = (id: string) => {
    setProgress(prev => {
      const exists = prev.bookmarks.includes(id);
      const updated = exists
        ? prev.bookmarks.filter(b => b !== id)
        : [...prev.bookmarks, id];
      return {
        ...prev,
        bookmarks: updated
      };
    });
  };

  const isBookmarked = (id: string) => {
    return progress.bookmarks.includes(id);
  };

  const saveNote = (lessonId: string, lessonTitle: string, text: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [lessonId]: {
          lessonId,
          lessonTitle,
          text,
          updatedAt: new Date().toISOString()
        }
      }
    }));
  };

  const getNote = (lessonId: string) => {
    return progress.notes[lessonId]?.text || '';
  };

  const saveQuizScore = (lessonId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [lessonId]: score
      }
    }));
  };

  const openNoteForLesson = (lessonId: string) => {
    setActiveNoteLessonId(lessonId);
    setNotesDrawerOpen(true);
  };

  const resetAllProgress = () => {
    setProgress({
      ...defaultProgress,
      completedLessons: [],
      quizScores: {},
      bookmarks: [],
      notes: {}
    });
  };

  // Compute stats
  const totalLessonsCount = Object.keys(LESSONS_DATA).length;
  const overallProgressPercentage = totalLessonsCount > 0
    ? Math.round((progress.completedLessons.length / totalLessonsCount) * 100)
    : 0;

  return (
    <AppContext.Provider
      value={{
        theme: progress.settings.theme,
        setTheme,
        toggleTheme,
        darkMode: progress.settings.theme === 'dark',
        toggleDarkMode: toggleTheme,
        language: progress.settings.language,
        setLanguage,
        toggleLanguage,
        completedLessons: progress.completedLessons,
        toggleCompleteLesson,
        toggleComplete: toggleCompleteLesson,
        isLessonCompleted,
        bookmarks: progress.bookmarks,
        bookmarkedLessons: progress.bookmarks,
        toggleBookmark,
        isBookmarked,
        notes: progress.notes,
        saveNote,
        getNote,
        quizScores: progress.quizScores,
        saveQuizScore,
        searchOpen,
        setSearchOpen,
        notesDrawerOpen,
        setNotesDrawerOpen,
        activeNoteLessonId,
        openNoteForLesson,
        openNotesForLesson: openNoteForLesson,
        totalLessonsCount,
        overallProgressPercentage,
        progressPercentage: overallProgressPercentage,
        resetAllProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
