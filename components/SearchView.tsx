import React, { useState } from 'react';
import { searchConcepts } from '../utils';
import { Search, Tag } from 'lucide-react';

const SearchView: React.FC = () => {
  const [query, setQuery] = useState('');
  const results = query ? searchConcepts(query) : [];

  return (
    <div className="max-w-3xl mx-auto h-full flex flex-col">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm"
            placeholder="Tìm kiếm khái niệm, từ khóa..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        {query === '' ? (
          <div className="text-center text-slate-400 mt-12">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p>Nhập từ khóa để tìm kiếm trong nội dung khóa học.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center text-slate-500 mt-12">
            <p>Không tìm thấy kết quả nào cho "{query}".</p>
          </div>
        ) : (
          <div className="space-y-4">
             <p className="text-sm text-slate-500 mb-2">Tìm thấy {results.length} kết quả</p>
            {results.map((item) => (
              <div key={item.key} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-blue-700">{item.title}</h3>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{item.chapterId}</span>
                </div>
                <p className="text-slate-700 mb-3">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-100">
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
