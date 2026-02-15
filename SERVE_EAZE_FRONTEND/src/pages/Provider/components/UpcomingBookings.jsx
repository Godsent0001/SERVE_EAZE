// const UpcomingBookings = ({ bookings }) => (
//   <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
//     <h3 className="text-xl font-bold mb-6">Upcoming Bookings</h3>
//     <div className="space-y-4">
//       {bookings.map(booking => (
//         <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//           <div className="flex items-center gap-4">
//             <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
//               {booking.client.charAt(0)}
//             </div>
//             <div>
//               <p className="font-bold">{booking.client}</p>
//               <p className="text-sm text-slate-500">{booking.service}</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <p className="font-bold text-primary">{booking.amount}</p>
//             <p className="text-sm text-slate-500">{booking.date}</p>
//           </div>
//           <span className={`px-3 py-1 rounded-full text-xs font-bold ${
//             booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
//           }`}>
//             {booking.status}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default UpcomingBookings;

// src/pages/Provider/components/UpcomingBookings.jsx
import React from 'react';

const UpcomingBookings = ({ bookings }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
      <h3 className="text-xl font-bold mb-6">Upcoming Bookings</h3>
      <div className="space-y-4">
        {bookings.map(booking => (
          <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {booking.client.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{booking.client}</p>
                <p className="text-sm text-slate-500">{booking.service}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-primary">{booking.amount}</p>
              <p className="text-sm text-slate-500">{booking.date}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBookings;

