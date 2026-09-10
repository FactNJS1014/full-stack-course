import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/common/SearchModal';
import { NotesDrawer } from './components/common/NotesDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { CurriculumOverviewPage } from './pages/CurriculumOverviewPage';
import { TrackPage } from './pages/TrackPage';
import { LessonView } from './pages/LessonView';
import { ProjectsPage } from './pages/ProjectsPage';
import { CheatsheetsPage } from './pages/CheatsheetsPage';
import { InteractiveToolsPage } from './pages/InteractiveToolsPage';

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500 selection:text-white transition-colors duration-200">
          <Navbar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/curriculum" element={<CurriculumOverviewPage />} />
              <Route path="/curriculum/:trackId" element={<TrackPage />} />
              <Route path="/lesson/:lessonId" element={<LessonView />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectsPage />} />
              <Route path="/tools" element={<InteractiveToolsPage />} />
              <Route path="/tools/:toolId" element={<InteractiveToolsPage />} />
              <Route path="/demo/employee-management" element={<InteractiveToolsPage />} />
              <Route path="/cheatsheets" element={<CheatsheetsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <Footer />

          {/* Global Modals & Drawers */}
          <SearchModal />
          <NotesDrawer />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
