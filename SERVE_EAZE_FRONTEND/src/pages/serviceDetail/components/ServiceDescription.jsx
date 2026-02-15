import React from 'react'

function ServiceDescription({service}) {
  return (
    <div className="py-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-xl font-bold dark:text-white">About this Service</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {service.description}
        </p>
        <ul className="grid grid-cols-2 gap-y-2 mt-4">
        {['Mechanism visualization', 'Practice exams included', 'Molecular kit provided', 'Group rates available'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
            {item}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default ServiceDescription