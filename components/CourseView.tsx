import React from 'react';
import { COURSE_DATA } from '../data';
import { BookOpen, Tag } from 'lucide-react';

const CourseView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{COURSE_DATA.title}</h1>
        <p className="text-slate-600 italic">{COURSE_DATA.syllabus_notes}</p>
      </div>

      <div className="space-y-12">
        {COURSE_DATA.chapters.map((chapter) => (
          <div key={chapter.id} className="relative">
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur py-3 border-b border-blue-100 mb-4">
              <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">{chapter.id}</span>
                {chapter.title}
              </h2>
            </div>
            
            <div className="space-y-6 pl-4">
              {chapter.sections.map((section) => (
                <div key={section.id}>
                  <h3 className="text-lg font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-slate-400" />
                    {section.title}
                  </h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    {section.concepts.map((concept) => (
                      <div key={concept.key} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                        <h4 className="font-bold text-slate-800 mb-2">{concept.title}</h4>
                        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                          {concept.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {concept.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                              <Tag size={10} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseView;
