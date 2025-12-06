import { COURSE_DATA } from './data';
import { Concept, QuizItem } from './types';

// Flatten concepts
const getAllConcepts = (): { concept: Concept; chapterId: string; sectionId: string }[] => {
  const all: { concept: Concept; chapterId: string; sectionId: string }[] = [];
  COURSE_DATA.chapters.forEach(ch => {
    ch.sections.forEach(sec => {
      sec.concepts.forEach(c => {
        all.push({ concept: c, chapterId: ch.id, sectionId: sec.id });
      });
    });
  });
  return all;
};

// Search Logic
export const searchConcepts = (query: string) => {
  const normalizedQuery = query.toLowerCase();
  const all = getAllConcepts();
  
  return all.filter(({ concept }) => {
    const haystack = `${concept.title} ${concept.summary} ${concept.tags.join(' ')}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  }).map(({ concept, chapterId, sectionId }) => ({
    ...concept,
    chapterId,
    sectionId
  }));
};

// Flashcard Generator
export const generateFlashcards = (count: number = 10) => {
  const all = getAllConcepts();
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(item => ({
    question: `Hỏi: ${item.concept.title} — tóm tắt ngắn?`,
    answer: item.concept.summary,
    tags: item.concept.tags,
    chapter: item.chapterId
  }));
};

// Quiz Generator
export const generateQuiz = (mcqCount: number = 5, shortCount: number = 3): QuizItem[] => {
  const all = getAllConcepts();
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  
  const quizItems: QuizItem[] = [];
  
  // MCQ
  for (let i = 0; i < mcqCount; i++) {
    if (i >= shuffled.length) break;
    const current = shuffled[i];
    
    // Distractors from other concepts
    const others = all.filter(c => c.concept.key !== current.concept.key);
    const distractors = [...others].sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(o => o.concept.summary);
      
    const options = [current.concept.summary, ...distractors].sort(() => 0.5 - Math.random());
    
    quizItems.push({
      type: 'mcq',
      question: `(MCQ) Khái niệm nào phù hợp với tiêu đề: '${current.concept.title}'?`,
      answer: current.concept.summary,
      options: options
    });
  }
  
  // Short Answer
  const shortBase = shuffled.slice(mcqCount, mcqCount + shortCount);
  shortBase.forEach(item => {
    quizItems.push({
      type: 'short',
      question: `(Short) Trình bày ngắn gọn về: ${item.concept.title}`,
      answer: item.concept.summary,
      rubric: "3-5 câu, nêu định nghĩa/ý chính, ví dụ/ý nghĩa phương pháp luận."
    });
  });
  
  return quizItems;
};

export const downloadMarkdown = () => {
  let md = `# ${COURSE_DATA.title}\n\n`;
  md += `${COURSE_DATA.syllabus_notes}\n\n`;
  
  COURSE_DATA.chapters.forEach(ch => {
    md += `## ${ch.id}. ${ch.title}\n\n`;
    ch.sections.forEach(sec => {
      md += `### ${sec.title}\n\n`;
      sec.concepts.forEach(c => {
        md += `**${c.title}**\n\n`;
        md += `${c.summary}\n\n`;
        if (c.tags.length) md += `*Tags:* ${c.tags.join(', ')}\n\n`;
      });
    });
  });
  
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'TrietHoc_Toolkit.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
