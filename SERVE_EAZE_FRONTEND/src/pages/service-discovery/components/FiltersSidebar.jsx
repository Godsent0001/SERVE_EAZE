const FiltersSidebar = () => {
  return (
      <aside className="w-full md:w-64 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">Filters</h3>
              <button className="text-primary text-xs font-semibold hover:underline">Clear All</button>
            </div>
            <div className="space-y-6">
              {/* Category */}
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Category</p>
                <div className="space-y-2">
                  {['Tutoring', 'Errands', 'Cleaning', 'Technical Support'].map((category, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        defaultChecked={idx === 0}
                        className="rounded text-primary focus:ring-primary bg-slate-100 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
                        type="checkbox"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Price Range ($)</p>
                <div className="flex items-center gap-2">
                  <input
                    className="w-full text-xs rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-2"
                    placeholder="Min"
                    type="number"
                  />
                  <span className="text-slate-400">-</span>
                  <input
                    className="w-full text-xs rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-2"
                    placeholder="Max"
                    type="number"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Minimum Rating</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary">
                    {[1, 2, 3, 4].map((star) => (
                      <span key={star} className="material-symbols-outlined text-sm fill-1">star</span>
                    ))}
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">4.0+</span>
                  </div>
                </div>
              </div>

              {/* Campus Zone */}
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Campus Zone</p>
                <select className="w-full text-sm rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-2">
                  <option>All Zones</option>
                  <option>North Quad</option>
                  <option>Central Library</option>
                  <option>Engineering Block</option>
                  <option>Student Dorms</option>
                  <option>South Campus</option>
                </select>
              </div>

              <button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                Apply Filters
              </button>
            </div>
          </div>
        </aside>
  );
};

export default FiltersSidebar;
