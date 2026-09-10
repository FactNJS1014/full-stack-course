import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Circle,
  FileText,
  Clock,
  BookOpen,
  Share2,
  Check,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  Award,
  Zap,
  Code2,
  Target,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LESSONS_DATA } from '../data/lessonsData';
import { TRACKS } from '../data/curriculum';
import { CodeBlock } from '../components/common/CodeBlock';
import { DiagramView } from '../components/common/DiagramView';
import { Sidebar } from '../components/layout/Sidebar';

// Interactive Demos
import { EmployeeCrudDemo } from '../components/demos/EmployeeCrudDemo';
import { ReactCounterDemo } from '../components/demos/ReactCounterDemo';
import { InertiaFlowDemo } from '../components/demos/InertiaFlowDemo';
import { NestJsApiDemo } from '../components/demos/NestJsApiDemo';
import { PermissionMatrixDemo } from '../components/demos/PermissionMatrixDemo';

export const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const {
    language,
    completedLessons,
    toggleComplete,
    bookmarkedLessons,
    toggleBookmark,
    openNotesForLesson,
    notes,
    saveQuizScore,
    quizScores
  } = useApp();

  const lesson = lessonId ? LESSONS_DATA[lessonId] : null;

  // Quiz state: map question index to selected option ID
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [sharedToast, setSharedToast] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
          {language === 'th' ? 'ไม่พบบทเรียนที่คุณค้นหา' : 'Lesson Not Found'}
        </h2>
        <p className="text-slate-500 mb-6 text-sm">
          {language === 'th' ? 'กรุณาตรวจสอบรหัสบทเรียนหรือกลับสู่หน้าหลักสูตร' : 'Please check the URL or browse the curriculum.'}
        </p>
        <Link
          to="/curriculum"
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-500 transition-colors"
        >
          {language === 'th' ? 'กลับไปหน้าหลักสูตร' : 'Back to Curriculum'}
        </Link>
      </div>
    );
  }

  const isCompleted = completedLessons.includes(lesson.id);
  const isBookmarked = bookmarkedLessons.includes(lesson.id);
  const hasNotes = !!notes[lesson.id]?.text;

  // Find track and module info
  const track = TRACKS.find(t => t.id === lesson.trackId);
  const module = track?.modules.find(m => m.lessonIds.includes(lesson.id));

  // Determine prev and next lessons across all tracks/modules
  let prevLessonId: string | null = null;
  let nextLessonId: string | null = null;
  if (track) {
    const allLessonIds = track.modules.flatMap(m => m.lessonIds);
    const currIndex = allLessonIds.indexOf(lesson.id);
    if (currIndex > 0) prevLessonId = allLessonIds[currIndex - 1];
    if (currIndex >= 0 && currIndex < allLessonIds.length - 1) nextLessonId = allLessonIds[currIndex + 1];
  }

  // Quiz handler
  const handleQuizAnswer = (qIndex: number, optionId: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: optionId }));
  };

  const handleQuizSubmit = () => {
    if (!lesson.quiz || lesson.quiz.length === 0) return;
    let correctCount = 0;
    lesson.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionId) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / lesson.quiz.length) * 100);
    setQuizSubmitted(true);
    saveQuizScore(lesson.id, percentage, lesson.quiz.length);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      {/* Track hierarchical Sidebar */}
      <Sidebar currentTrackId={lesson.trackId} className="hidden lg:flex" />

      {/* Main Lesson Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-8 overflow-y-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 flex-wrap">
          <Link to="/curriculum" className="hover:text-blue-600 dark:hover:text-blue-400">
            {language === 'th' ? 'หลักสูตร' : 'Curriculum'}
          </Link>
          <span>/</span>
          {track && (
            <Link to={`/curriculum/${track.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {language === 'th' ? track.title.th : track.title.en}
            </Link>
          )}
          {module && (
            <>
              <span>/</span>
              <span className="text-slate-700 dark:text-slate-300 font-semibold truncate max-w-[200px]">
                {language === 'th'
                  ? (module.name?.th || (module as any).title?.th || '').split(':')[0]
                  : (module.name?.en || (module as any).title?.en || '').split(':')[0]}
              </span>
            </>
          )}
        </div>

        {/* Lesson Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                {lesson.levelLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {lesson.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.durationMinutes} min read & practice</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {language === 'th' ? lesson.title.th : lesson.title.en}
          </h1>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'th' ? lesson.description.th : lesson.description.en}
          </p>

          {/* Action Toolbar */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* Mark Complete */}
              <button
                onClick={() => toggleComplete(lesson.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 ${
                  isCompleted
                    ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-white' : 'text-slate-400'}`} />
                <span>
                  {isCompleted
                    ? (language === 'th' ? 'เรียนจบแล้ว ✓' : 'Completed ✓')
                    : (language === 'th' ? 'ทำเครื่องหมายว่าเรียนจบ' : 'Mark as Completed')}
                </span>
              </button>

              {/* Bookmark */}
              <button
                onClick={() => toggleBookmark(lesson.id)}
                className={`p-2 rounded-xl border text-xs font-semibold transition-colors ${
                  isBookmarked
                    ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Bookmark Lesson"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              {/* Take Notes */}
              <button
                onClick={() => openNotesForLesson(lesson.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                  hasNotes ? 'text-blue-600 dark:text-blue-400 border-blue-400' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'th' ? 'จดบันทึก' : 'Notes'}</span>
                {hasNotes && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
              </button>
            </div>

            {/* Share Link */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {sharedToast ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{sharedToast ? (language === 'th' ? 'คัดลอกลิงก์แล้ว' : 'Copied Link') : (language === 'th' ? 'แชร์' : 'Share')}</span>
            </button>
          </div>
        </div>

        {/* Section 1: 4 Core Pillars (Zero-Start Concept) */}
        {lesson.zeroStart && (
          <section className="mb-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'th' ? 'แก่นแท้ 4 เสาหลัก (Core Conceptual Pillars)' : 'Core Conceptual Pillars'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* What is it? */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'th' ? '1. อะไรคือสิ่งนี้? (What is it?)' : '1. What is it?'}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'th' ? lesson.zeroStart.whatIsIt.th : lesson.zeroStart.whatIsIt.en}
                </p>
              </div>

              {/* Why use it? */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                  <Zap className="w-4 h-4" />
                  <span>{language === 'th' ? '2. ทำไมต้องใช้? (Why use it?)' : '2. Why use it?'}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'th' ? lesson.zeroStart.whyUseIt.th : lesson.zeroStart.whyUseIt.en}
                </p>
              </div>

              {/* When to use? */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{language === 'th' ? '3. ใช้เมื่อไหร่? (When to use?)' : '3. When to use?'}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'th' ? lesson.zeroStart.whenToUse.th : lesson.zeroStart.whenToUse.en}
                </p>
              </div>

              {/* How it works? */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                  <Target className="w-4 h-4" />
                  <span>{language === 'th' ? '4. ทำงานอย่างไร? (How it works?)' : '4. How it works?'}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'th' ? lesson.zeroStart.howItWorks.th : lesson.zeroStart.howItWorks.en}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Learning Objectives */}
        {lesson.objectives && (
          <section className="mb-10 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'th' ? 'เป้าหมายการเรียนรู้ในบทนี้ (Key Objectives)' : 'Key Learning Objectives'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(language === 'th' ? lesson.objectives.th : lesson.objectives.en).map((obj, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-blue-100 dark:border-blue-950/60 bg-blue-50/40 dark:bg-blue-950/20 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Architecture Diagram (If Present) */}
        {lesson.diagram && (
          <section className="mb-10">
            <DiagramView
              title={lesson.diagram.title}
              flow={lesson.diagram.flow}
              type={lesson.diagram.type}
            />
          </section>
        )}

        {/* Section 4: Live Interactive Simulator Embedding (If Present) */}
        {lesson.demoType && lesson.demoType !== 'none' && (
          <section className="mb-10">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  {language === 'th' ? 'การจำลองเสมือนจริงในเบราว์เซอร์' : 'Live Interactive Simulator'}
                </h2>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Interactive
              </span>
            </div>

            {lesson.demoType === 'employee-crud' && <EmployeeCrudDemo />}
            {lesson.demoType === 'counter' && <ReactCounterDemo />}
            {lesson.demoType === 'inertia-flow' && <InertiaFlowDemo />}
            {lesson.demoType === 'nestjs-api' && <NestJsApiDemo />}
            {lesson.demoType === 'permission-matrix' && <PermissionMatrixDemo />}
          </section>
        )}

        {/* Section 5: Primary Production Code Block */}
        {lesson.primaryCode && (
          <section className="mb-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'th' ? 'โค้ดตัวอย่างหลัก (Primary Code Implementation)' : 'Primary Code Implementation'}
              </h2>
            </div>

            <CodeBlock snippet={lesson.primaryCode} />
          </section>
        )}

        {/* Section 6: Step-by-Step Implementation Guide */}
        {lesson.steps && lesson.steps.length > 0 && (
          <section className="mb-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'th' ? 'ขั้นตอนการลงมือปฏิบัติ (Step-by-Step Guide)' : 'Step-by-Step Implementation Guide'}
              </h2>
            </div>

            <div className="space-y-4">
              {lesson.steps.map(step => (
                <div
                  key={step.stepNumber}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-mono font-bold text-xs flex items-center justify-center border border-purple-500/30">
                      0{step.stepNumber}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'th' ? step.title.th : step.title.en}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
                    {language === 'th' ? step.content.th : step.content.en}
                  </p>

                  {step.codeSnippet && (
                    <div className="mt-3 pl-10">
                      <CodeBlock snippet={step.codeSnippet} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 7: Common Mistakes & Best Practice Fixes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section className="mb-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'th' ? 'ข้อผิดพลาดที่พบบ่อยและวิธีแก้ (Common Pitfalls & Fixes)' : 'Common Pitfalls & Fixes'}
              </h2>
            </div>

            <div className="space-y-4">
              {lesson.commonMistakes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20 space-y-3"
                >
                  <div className="flex items-start gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{language === 'th' ? item.mistake.th : item.mistake.en}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      {language === 'th' ? 'ทำไมจึงผิด: ' : 'Why: '}
                    </strong>
                    {language === 'th' ? item.why.th : item.why.en}
                  </p>

                  {/* Bad vs Good Code Comparison */}
                  {(item.badCode || item.goodCode) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {item.badCode && (
                        <div>
                          <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1 block">
                            ✕ Bad / Vulnerable
                          </span>
                          <pre className="p-3 rounded-xl bg-slate-950 border border-rose-900/50 text-rose-300 font-mono text-[11px] overflow-x-auto">
                            {item.badCode}
                          </pre>
                        </div>
                      )}
                      {item.goodCode && (
                        <div>
                          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1 block">
                            ✓ Correct / Best Practice
                          </span>
                          <pre className="p-3 rounded-xl bg-slate-950 border border-emerald-900/50 text-emerald-300 font-mono text-[11px] overflow-x-auto">
                            {item.goodCode}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                    <strong>{language === 'th' ? 'แนวทางแก้ไข: ' : 'Solution: '}</strong>
                    {language === 'th' ? item.solution.th : item.solution.en}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 8: Interactive Knowledge Quiz */}
        {lesson.quiz && lesson.quiz.length > 0 && (
          <section className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {language === 'th' ? 'แบบทดสอบวัดความเข้าใจ (Interactive Quiz)' : 'Knowledge Check Quiz'}
                </h3>
              </div>

              {quizScores[lesson.id] !== undefined && (
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800">
                  Score: {quizScores[lesson.id]}%
                </span>
              )}
            </div>

            <div className="space-y-6">
              {lesson.quiz.map((q, qIndex) => {
                const userSelectedId = selectedAnswers[qIndex];

                return (
                  <div key={q.id || qIndex} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                    <div className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                      <span className="text-slate-400 font-mono">Q{qIndex + 1}.</span>
                      <span>{language === 'th' ? q.question.th : q.question.en}</span>
                    </div>

                    <div className="space-y-2 mb-3">
                      {q.options.map(opt => {
                        const isChosen = userSelectedId === opt.id;
                        const isCorrect = opt.id === q.correctOptionId;

                        let styleClasses = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500';

                        if (quizSubmitted) {
                          if (isCorrect) {
                            styleClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold';
                          } else if (isChosen && !isCorrect) {
                            styleClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 line-through';
                          }
                        } else if (isChosen) {
                          styleClasses = 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-bold';
                        }

                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleQuizAnswer(qIndex, opt.id)}
                            disabled={quizSubmitted}
                            className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${styleClasses}`}
                          >
                            <span>{language === 'th' ? opt.text.th : opt.text.en}</span>
                            {quizSubmitted && isCorrect && <Check className="w-4 h-4 text-emerald-500" />}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {language === 'th' ? 'คำอธิบาย: ' : 'Explanation: '}
                        </span>
                        {language === 'th' ? q.explanation.th : q.explanation.en}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Action Buttons */}
            <div className="mt-6 flex justify-end gap-2">
              {quizSubmitted ? (
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {language === 'th' ? 'ลองทำใหม่อีกครั้ง' : 'Retry Quiz'}
                </button>
              ) : (
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(selectedAnswers).length < lesson.quiz.length}
                  className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 disabled:opacity-50"
                >
                  {language === 'th' ? 'ส่งคำตอบและตรวจคะแนน' : 'Submit Answers'}
                </button>
              )}
            </div>
          </section>
        )}

        {/* Section 9: Key Summary Takeaways */}
        {lesson.summary && (
          <section className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border border-blue-200/50 dark:border-blue-900/40">
            <h3 className="font-bold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              {language === 'th' ? 'สรุปประเด็นสำคัญ (Summary & Takeaways)' : 'Summary & Key Takeaways'}
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {(language === 'th' ? lesson.summary.th : lesson.summary.en).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 10: Previous & Next Lesson Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          {prevLessonId && LESSONS_DATA[prevLessonId] ? (
            <Link
              to={`/lesson/${prevLessonId}`}
              className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-white dark:bg-slate-900 transition-all flex items-center gap-3 text-left max-w-xs"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 group-hover:text-blue-500 transition-all" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                  {language === 'th' ? 'บทก่อนหน้า' : 'Previous'}
                </span>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {language === 'th' ? LESSONS_DATA[prevLessonId].title.th : LESSONS_DATA[prevLessonId].title.en}
                </div>
              </div>
            </Link>
          ) : <div />}

          {nextLessonId && LESSONS_DATA[nextLessonId] ? (
            <Link
              to={`/lesson/${nextLessonId}`}
              className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-white dark:bg-slate-900 transition-all flex items-center gap-3 text-right max-w-xs ml-auto"
            >
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                  {language === 'th' ? 'บทถัดไป' : 'Next'}
                </span>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {language === 'th' ? LESSONS_DATA[nextLessonId].title.th : LESSONS_DATA[nextLessonId].title.en}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-500 transition-all" />
            </Link>
          ) : <div />}
        </div>
      </main>
    </div>
  );
};
