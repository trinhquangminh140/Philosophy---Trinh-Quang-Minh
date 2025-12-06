import React, { useState, useEffect } from 'react';
import { generateFlashcards } from '../utils';
import { RefreshCw, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface CardData {
  question: string;
  answer: string;
  tags: string[];
  chapter: string;
}

const FlashcardView: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const initDeck = () => {
    setCards(generateFlashcards(10));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    initDeck();
  }, []);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 200);
  };
  
  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 200);
  };

  if (cards.length === 0) return <div className="p-8 text-center">Loading...</div>;

  const currentCard = cards[currentIndex];

  return (
    <div className="max-w-2xl mx-auto h-full flex flex-col justify-center items-center py-6">
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-700">Flashcards</h2>
        <button 
          onClick={initDeck}
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          <RotateCcw size={16} /> Làm mới
        </button>
      </div>

      <div className="relative w-full aspect-[4/3] perspective-1000 group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`} style={{transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
            
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center" style={{backfaceVisibility: 'hidden'}}>
                <span className="absolute top-4 left-4 text-xs font-bold text-slate-300 uppercase tracking-widest">Question</span>
                <span className="absolute top-4 right-4 text-xs font-mono text-blue-500 bg-blue-50 px-2 py-1 rounded">{currentCard.chapter}</span>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">{currentCard.question}</h3>
                <p className="mt-6 text-slate-400 text-sm animate-pulse">(Nhấn để lật)</p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl text-white flex flex-col items-center justify-center p-8 text-center rotate-y-180" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                 <span className="absolute top-4 left-4 text-xs font-bold text-blue-200 uppercase tracking-widest">Answer</span>
                <p className="text-lg leading-relaxed font-medium">{currentCard.answer}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {currentCard.tags.map(t => (
                        <span key={t} className="text-xs bg-white/20 px-2 py-1 rounded-full text-white/90">{t}</span>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="flex items-center gap-8 mt-8">
        <button onClick={handlePrev} className="p-3 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
            <ChevronLeft size={24} />
        </button>
        <span className="text-slate-500 font-medium font-mono">
            {currentIndex + 1} / {cards.length}
        </span>
        <button onClick={handleNext} className="p-3 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
            <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default FlashcardView;
