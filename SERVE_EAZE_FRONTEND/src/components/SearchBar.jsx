import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      <div className="flex w-full bg-white dark:bg-slate-800 shadow-xl rounded-xl p-2 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center pl-4 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 21l-4.35-4.35"></path>
            <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
          </svg>
          <span className="sr-only">Search</span>
        </div>
        <input
          className="w-full px-4 py-4 bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 font-medium"
          placeholder="e.g. Calculus Tutoring or Laundry"
          type="text"
        />
        <button
          onClick={() => navigate('/services')}
          className="bg-primary text-white font-bold px-8 rounded-lg hover:bg-primary/90 transition-all"
        >
          Search
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 items-center text-sm">
        <span className="text-slate-400">Popular:</span>
        <Link to="/services" className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          Barbing
        </Link>
        <Link to="/services" className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          Tutoring
        </Link>
        <Link to="/services" className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          Errands
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
