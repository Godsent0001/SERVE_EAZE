import React from 'react'

function ReviewSection() {
  return (
    <div className="py-8">
        <h3 className="text-xl font-bold dark:text-white mb-6">Student Reviews</h3>
        <div className="space-y-4">
        {[
            { name: 'Sarah M.', rating: 5, comment: 'Alex helped me go from a C to an A- in just 3 weeks. His explanations are crystal clear!', time: '2 weeks ago' },
            { name: 'James K.', rating: 5, comment: 'Best tutor I\'ve had. Very patient and knows exactly what professors look for.', time: '1 month ago' }
        ].map((review, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {review.name.charAt(0)}
                </div>
                <div>
                <p className="font-bold">{review.name}</p>
                <div className="flex items-center gap-2">
                    <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                    ))}
                    </div>
                    <span className="text-xs text-slate-500">{review.time}</span>
                </div>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{review.comment}</p>
            </div>
        ))}
        </div>
    </div>
          

  )
}

export default ReviewSection