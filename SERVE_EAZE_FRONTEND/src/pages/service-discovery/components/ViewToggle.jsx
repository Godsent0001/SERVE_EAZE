const ViewToggle = ({ viewType, setViewType }) => {
  return (
    <div className="flex h-10 w-full sm:w-auto items-center rounded-lg bg-slate-200 dark:bg-slate-800 p-1">
      {/* Grid View */}
      <label
        className={`flex cursor-pointer h-full grow sm:grow-0 sm:w-32 items-center justify-center gap-2 rounded-lg px-3 transition-all ${
          viewType === 'grid'
            ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
            : 'text-slate-500 dark:text-slate-400'
        } text-sm font-semibold`}
      >
        <span className="material-symbols-outlined text-lg">grid_view</span>
        <span className="truncate">Grid View</span>
        <input
          type="radio"
          name="view-type"
          value="grid"
          checked={viewType === 'grid'}
          onChange={() => setViewType('grid')}
          className="hidden"
        />
      </label>

      {/* Map View */}
      <label
        className={`flex cursor-pointer h-full grow sm:grow-0 sm:w-32 items-center justify-center gap-2 rounded-lg px-3 transition-all ${
          viewType === 'map'
            ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
            : 'text-slate-500 dark:text-slate-400'
        } text-sm font-semibold`}
      >
        <span className="material-symbols-outlined text-lg">map</span>
        <span className="truncate">Map View</span>
        <input
          type="radio"
          name="view-type"
          value="map"
          checked={viewType === 'map'}
          onChange={() => setViewType('map')}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ViewToggle;
