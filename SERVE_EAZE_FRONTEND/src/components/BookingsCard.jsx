import React from 'react'
import { Link } from 'react-router-dom'


function BookingsCard({id,provider,service,date,amount,status}) {
  return (
    <div className="p-8 space-y-6">
        <div key={id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                {provider.charAt(0)}
            </div>
            <div>
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="text-sm text-slate-500">with {provider}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{date}</p>
            </div>
            </div>
            <div className="text-right space-y-2">
            <p className="text-2xl font-bold text-primary">{amount}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                {status}
            </span>
            <div className="flex gap-2 mt-3">
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90">
                View Details
                </button>
                <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800">
                Cancel
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BookingsCard