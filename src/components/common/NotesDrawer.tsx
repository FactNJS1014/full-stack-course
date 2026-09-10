import React, { useState, useEffect } from 'react';
import { X, Save, FileText, Trash2, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LESSONS_DATA } from '../../data/lessonsData';

export const NotesDrawer: React.FC = () => {
  const {
    notesDrawerOpen,
    setNotesDrawerOpen,
    activeNoteLessonId,
    notes,
    saveNote,
    language
  } = useApp();

  const [currentText, setCurrentText] = useState('');
  const [savedAlert, setSavedAlert] = useState(false);

  // When drawer opens or active lesson changes, load note
  useEffect(() => {
    if (activeNoteLessonId && notes[activeNoteLessonId]) {
      setCurrentText(notes[activeNoteLessonId].text);
    } else {
      setCurrentText('');
    }
  }, [activeNoteLessonId, notes]);

  if (!notesDrawerOpen) return null;

  const currentLesson = activeNoteLessonId ? LESSONS_DATA[activeNoteLessonId] : null;
  const currentTitle = currentLesson
    ? (language === 'th' ? currentLesson.title.th : currentLesson.title.en)
    : (language === 'th' ? 'สมุดบันทึกทั่วไป' : 'General Notes');

  const handleSave = () => {
    if (activeNoteLessonId) {
      saveNote(activeNoteLessonId, currentTitle, currentText);
      setSavedAlert(true);
      setTimeout(() => setSavedAlert(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {language === 'th' ? 'บันทึกความเข้าใจ (My Notes)' : 'Lesson Notes'}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-1">{currentTitle}</p>
            </div>
          </div>
          <button
            onClick={() => setNotesDrawerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note Body */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          <textarea
            value={currentText}
            onChange={e => setCurrentText(e.target.value)}
            placeholder={
              language === 'th'
                ? 'จดสรุปความเข้าใจ โค้ดที่ต้องจำ หรือไอเดียต่อยอดที่นี่...'
                : 'Write your notes, key takeaways, code reminders here...'
            }
            className="flex-1 w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-sans leading-relaxed"
          />

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              {currentText.length} characters
            </span>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-sm active:scale-95 transition-all"
            >
              {savedAlert ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>{language === 'th' ? 'บันทึกแล้ว!' : 'Saved!'}</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>{language === 'th' ? 'บันทึกลงเครื่อง' : 'Save Note'}</span>
                </>
              )}
            </button>
          </div>

          {/* List of other notes saved */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {language === 'th' ? 'โน้ตบทเรียนอื่นที่บันทึกไว้' : 'All Saved Notes'}
            </h4>
            <div className="space-y-1.5 max-h-40 overflow-y-auto">
              {Object.values(notes).map((item: any) => (
                <div
                  key={item.lessonId}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs"
                >
                  <div className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {item.lessonTitle}
                  </div>
                  <p className="text-slate-500 line-clamp-2 mt-0.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
