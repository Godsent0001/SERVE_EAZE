import React from 'react'

function ProviderInfo({service}) {
  return (
            <div className="mt-8 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold dark:text-white">{service.title} Tutoring by {service.provider}</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined fill-1 text-lg">star</span>
                      <span className="font-bold">4.9</span>
                      <span className="text-slate-500 font-normal">(128 reviews)</span>
                    </div>
                    <span className="text-slate-300">|</span>
                    <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      Campus Verified
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="size-16 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgD_wBhG3PAn7wuBgkRBhzc079Se1e0I8SJmQTgtLEPiltDOqbPIIH6VCC2g9UVWyrGTp8NB-47cgjXeFvxgXw2aN6YFqxJ3fsBb13A4QSb3a8neujDfjUsZSusXkeugWu9ewAJjJVmM-kxUC41KmhExKFSod28YBvRyWbkNchw0QLe7IEy4vFc9KJCWALObXzLeMB_AbGKuit9rfo2RSqFjrxHT7SsGacLtA7TFPfgXNleUBDkq1rSxTmBZIB6hm5LsmTMgAJ4lU")'
                    }}
                  />
                  <span className="text-xs font-semibold mt-1">Senior, Chem-E</span>
                </div>
              </div>
            </div>
  )
}

export default ProviderInfo