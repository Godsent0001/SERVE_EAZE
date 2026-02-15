import React from 'react'

function ServiceHero({service}) {
  return (
      <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                        backgroundImage: `url("${service.image}")`
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                  Featured
                </div>
              </div>
        </div>

  )
}

export default ServiceHero