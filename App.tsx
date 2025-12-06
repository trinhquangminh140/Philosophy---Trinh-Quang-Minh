import React, { useState } from 'react';
import { ViewState } from './types';
import CourseView from './components/CourseView';
import SearchView from './components/SearchView';
import FlashcardView from './components/FlashcardView';
import QuizView from './components/QuizView';
import { downloadMarkdown } from './utils';
import { Book, Search, BrainCircuit, PenTool, Download, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.COURSE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case ViewState.COURSE: return <CourseView />;
      case ViewState.SEARCH: return <SearchView />;
      case ViewState.FLASHCARDS: return <FlashcardView />;
      case ViewState.QUIZ: return <QuizView />;
      default: return <CourseView />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all ${
        currentView === view 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'text-slate-600 hover:bg-blue-50'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-full">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
            <BrainCircuit size={28} />
            <span>Triết Học Toolkit</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Mác - Lênin (Kaggle Dataset)</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem view={ViewState.COURSE} icon={Book} label="Nội dung bài học" />
          <NavItem view={ViewState.SEARCH} icon={Search} label="Tra cứu khái niệm" />
          <NavItem view={ViewState.FLASHCARDS} icon={BrainCircuit} label="Flashcards" />
          <NavItem view={ViewState.QUIZ} icon={PenTool} label="Trắc nghiệm" />
        </nav>

        <div className="p-4 border-t border-slate-100">
            <button 
                onClick={downloadMarkdown}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 transition-all border border-slate-200 hover:border-slate-300"
            >
                <Download size={20} />
                <span className="font-medium text-sm">Tải về Markdown</span>
            </button>
        </div>
      </aside>

      {/* Mobile Header & Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />
      
      <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
         <div className="p-4 flex justify-between items-center border-b">
            <span className="font-bold text-lg text-blue-700">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}><X size={24} className="text-slate-500" /></button>
         </div>
         <nav className="flex-1 p-4 space-y-2">
            <NavItem view={ViewState.COURSE} icon={Book} label="Nội dung" />
            <NavItem view={ViewState.SEARCH} icon={Search} label="Tra cứu" />
            <NavItem view={ViewState.FLASHCARDS} icon={BrainCircuit} label="Flashcards" />
            <NavItem view={ViewState.QUIZ} icon={PenTool} label="Trắc nghiệm" />
         </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full w-full relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-30">
             <div className="flex items-center gap-2 text-blue-700 font-bold">
                <BrainCircuit size={24} />
                <span>Triết Học Toolkit</span>
             </div>
             <button onClick={() => setMobileMenuOpen(true)} className="text-slate-600">
                <Menu size={24} />
             </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
