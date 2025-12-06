import React, { useState } from 'react';
import { generateQuiz } from '../utils';
import { QuizItem } from '../types';
import { CheckCircle, XCircle, RefreshCw, Eye } from 'lucide-react';

const QuizView: React.FC = () => {
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [key, setKey] = useState(0); // To force re-render on new quiz

  const startQuiz = () => {
    setQuiz(generateQuiz(5, 3));
    setAnswers({});
    setShowResults(false);
    setKey(prev => prev + 1);
  };

  // Init on mount
  React.useEffect(() => {
    startQuiz();
  }, []);

  const handleSelect = (qIndex: number, option: string) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    let total = 0;
    quiz.forEach((q, idx) => {
        if (q.type === 'mcq') {
            total++;
            if (answers[idx] === q.answer) score++;
        }
    });
    return { score, total };
  };

  if (quiz.length === 0) return null;

  const { score, total } = calculateScore();

  return (
    <div key={key} className="max-w-3xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Trắc nghiệm & Tự luận</h1>
        <button 
            onClick={startQuiz}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold"
        >
            <RefreshCw size={16} /> Tạo đề mới
        </button>
      </div>

      <div className="space-y-8">
        {quiz.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-600 font-bold rounded-full text-sm">
                    {idx + 1}
                </span>
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-800">{item.question}</h3>
                    {item.type === 'mcq' && item.options && (
                        <div className="mt-4 space-y-2">
                            {item.options.map((opt, optIdx) => {
                                const isSelected = answers[idx] === opt;
                                const isCorrect = opt === item.answer;
                                const showCorrectness = showResults && isCorrect;
                                const showWrong = showResults && isSelected && !isCorrect;

                                let borderClass = "border-slate-200";
                                let bgClass = "hover:bg-slate-50";
                                
                                if (showResults) {
                                    if (isCorrect) {
                                        borderClass = "border-green-500 bg-green-50";
                                        bgClass = "";
                                    } else if (isSelected) {
                                        borderClass = "border-red-500 bg-red-50";
                                        bgClass = "";
                                    } else {
                                        bgClass = "opacity-50";
                                    }
                                } else if (isSelected) {
                                    borderClass = "border-blue-500 bg-blue-50";
                                }

                                return (
                                    <button
                                        key={optIdx}
                                        onClick={() => handleSelect(idx, opt)}
                                        disabled={showResults}
                                        className={`w-full text-left p-3 rounded-lg border ${borderClass} ${bgClass} transition-all flex justify-between items-center`}
                                    >
                                        <span>{opt}</span>
                                        {showCorrectness && <CheckCircle size={18} className="text-green-600" />}
                                        {showWrong && <XCircle size={18} className="text-red-600" />}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                    
                    {item.type === 'short' && (
                        <div className="mt-4">
                            {!showResults ? (
                                <textarea 
                                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    rows={3}
                                    placeholder="Nhập câu trả lời của bạn (để tự kiểm tra)..."
                                />
                            ) : (
                                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                    <p className="text-sm font-bold text-green-800 mb-1">Đáp án gợi ý:</p>
                                    <p className="text-green-900 mb-2">{item.answer}</p>
                                    <hr className="border-green-200 my-2" />
                                    <p className="text-xs text-green-700 font-semibold">Rubric chấm điểm:</p>
                                    <p className="text-xs text-green-700 italic">{item.rubric}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-4 mt-8 bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex justify-between items-center z-20">
        <div>
            {showResults && (
                <div className="text-lg font-bold">
                    Kết quả trắc nghiệm: <span className={score === total ? "text-green-600" : "text-blue-600"}>{score}/{total}</span>
                </div>
            )}
            {!showResults && <p className="text-slate-500 text-sm">Hoàn thành bài làm để xem kết quả.</p>}
        </div>
        {!showResults ? (
            <button 
                onClick={() => setShowResults(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
                Nộp bài & Xem đáp án
            </button>
        ) : (
            <button 
                onClick={startQuiz}
                className="px-6 py-2 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors"
            >
                Làm lại bài khác
            </button>
        )}
      </div>
    </div>
  );
};

export default QuizView;
