import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link to="/" className="text-slate-500 text-sm font-medium hover:text-primary">
        Home
      </Link>
      <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-white text-sm font-semibold">
        Search Results
      </span>
    </div>
  );
};

export default Breadcrumbs;
