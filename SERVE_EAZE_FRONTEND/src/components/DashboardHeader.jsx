import React from 'react'

function DashboardHeader({title,subtitle}) {
  return (
    <div>
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-black tracking-tight">{title}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 bg-white dark:bg-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">J</div>
            </div>
        </header>
    </div>
  )
}

export default DashboardHeader