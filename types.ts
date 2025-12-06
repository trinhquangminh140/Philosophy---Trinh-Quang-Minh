export interface Concept {
  key: string;
  title: string;
  summary: string;
  tags: string[];
  references: string[];
}

export interface Section {
  id: string;
  title: string;
  concepts: Concept[];
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}

export interface Course {
  title: string;
  credits: number;
  duration_sessions: number;
  syllabus_notes: string;
  references: string[];
  chapters: Chapter[];
}

export enum ViewState {
  HOME = 'HOME',
  COURSE = 'COURSE',
  SEARCH = 'SEARCH',
  FLASHCARDS = 'FLASHCARDS',
  QUIZ = 'QUIZ',
}

export interface QuizItem {
  question: string;
  options?: string[]; // For MCQ
  answer: string;
  type: 'mcq' | 'short';
  rubric?: string; // For short answer
  userAnswer?: string;
}
