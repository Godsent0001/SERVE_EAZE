import { useState } from "react";

const BookingCard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
         <div className="lg:w-96">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-primary">$25</span>
                <span className="text-slate-500 text-sm">/hour session</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Available Times</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['2:00 PM', '3:30 PM', '5:00 PM', '7:00 PM'].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-primary text-white'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

               
                <button
                  onClick={() => alert('Booking confirmed!')}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Book Now
                </button>

                <button
                  onClick={() => navigate('/chat')}
                  className="w-full py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Message Alex
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">schedule</span>
                  <span>Usually responds in 1 hour</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                  <span>Main Library or your dorm</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-xl">cancel</span>
                  <span>Free cancellation 24h before</span>
                </div>
              </div>
            </div>
          </div> 
  );
};

export default BookingCard;
