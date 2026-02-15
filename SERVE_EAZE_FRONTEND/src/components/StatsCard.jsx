import React from 'react'

const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, idx) => (
      <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
          </div>
          <span className="text-sm font-bold text-green-600">{stat.change}</span>
        </div>
        <p className="text-3xl font-black mb-1">{stat.value}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
      </div>
    ))}
  </div>
);

export default StatsGrid;
