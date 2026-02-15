import { Link } from 'react-router-dom';

const Sidebar = ({ portal, links, bottomAction }) => {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between py-6">
      <div className="flex flex-col gap-8 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">{portal.icon}</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">Serve-Eaze</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{portal.label} Portal</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.link || '#'}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                item.active
                  ? 'bg-primary/10 text-primary border-l-4 border-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Action */}
      {bottomAction && (
       
        <div className="px-6">
             <Link to= {bottomAction.link} className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg text-sm font-bold transition-colors text-center block">
               {bottomAction.label}
            </Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

 