// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

// const ProviderDashboard = () => {
//   const stats = [
//     { label: 'Total Earnings', value: '$1,245', icon: 'account_balance_wallet', change: '+12%' },
//     { label: 'Active Bookings', value: '8', icon: 'event', change: '+3' },
//     { label: 'Completed Jobs', value: '45', icon: 'task_alt', change: '+5' },
//     { label: 'Avg Rating', value: '4.9', icon: 'star', change: '★' }
//   ];

//   const bookings = [
//     { id: 1, client: 'Sarah M.', service: 'Calculus Tutoring', date: 'Today, 2:00 PM', status: 'confirmed', amount: '$25' },
//     { id: 2, client: 'James K.', service: 'Calculus Tutoring', date: 'Tomorrow, 4:00 PM', status: 'pending', amount: '$25' },
//     { id: 3, client: 'Emily R.', service: 'Calculus Tutoring', date: 'Jan 20, 10:00 AM', status: 'confirmed', amount: '$35' }
//   ];

//   return (
//     <div className="bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="flex h-screen overflow-hidden">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between py-6">
//           <div className="flex flex-col gap-8 px-6">
//             <Link to="/" className="flex items-center gap-3">
//               <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
//                 <span className="material-symbols-outlined">school</span>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold leading-none">Serve-Eaze</h1>
//                 <p className="text-xs text-slate-500 dark:text-slate-400">Provider Portal</p>
//               </div>
//             </Link>
//             <nav className="flex flex-col gap-1">
//               {[
//                 { icon: 'dashboard', label: 'Dashboard', active: true },
//                 { icon: 'list_alt', label: 'My Listings' },
//                 { icon: 'account_balance_wallet', label: 'Wallet',link: '' },
//                 { icon: 'chat_bubble', label: 'Messages', badge: 3 },
//                 { icon: 'settings', label: 'Settings' }
//               ].map((item, idx) => (
//                 <Link
//                 to="/chat"
//                   key={idx}
//                   className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${item.active ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  
//                 >
//                   <span className="material-symbols-outlined">{item.icon}</span>
//                   <span className="text-sm font-medium">{item.label}</span>
//                   {item.badge && (
//                     <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">{item.badge}</span>
//                   )}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//           <div className="px-6 flex flex-col gap-4">
//             <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
//               <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Account Status</p>
//               <div className="flex items-center gap-2">
//                 <div className="size-2 bg-green-500 rounded-full"></div>
//                 <p className="text-sm font-medium">Verified Provider</p>
//               </div>
//             </div>
//             <Link to="/seeker/dashboard" className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg text-sm font-bold transition-colors text-center">
//               Switch to Seeker
//             </Link>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto">
//           <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-black tracking-tight">Good morning, Alex!</h2>
//               <p className="text-sm text-slate-500 dark:text-slate-400">Campus services are booming today.</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <button className="p-2 bg-white dark:bg-slate-900 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800">
//                 <span className="material-symbols-outlined">notifications</span>
//               </button>
//               <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">A</div>
//             </div>
//           </header>

//           <div className="p-8 space-y-8">
//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {stats.map((stat, idx) => (
//                 <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className={`size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary`}>
//                       <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
//                     </div>
//                     <span className="text-sm font-bold text-green-600">{stat.change}</span>
//                   </div>
//                   <p className="text-3xl font-black mb-1">{stat.value}</p>
//                   <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Upcoming Bookings */}
//             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
//               <h3 className="text-xl font-bold mb-6">Upcoming Bookings</h3>
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                     <div className="flex items-center gap-4">
//                       <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
//                         {booking.client.charAt(0)}
//                       </div>
//                       <div>
//                         <p className="font-bold">{booking.client}</p>
//                         <p className="text-sm text-slate-500">{booking.service}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold text-primary">{booking.amount}</p>
//                       <p className="text-sm text-slate-500">{booking.date}</p>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
//                       {booking.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProviderDashboard;


import Sidebar from '../../components/Sidebar';
import Header from '../../components/DashboardHeader';
import StatsGrid from '../../components/StatsCard';
import UpcomingBookings from './components/UpcomingBookings';
import { providerPortal, providerLinks, providerStats, providerBookings, providerBottomAction } from './data/provider.mock';

const ProviderDashboard = () => (
  <div className="bg-background-light dark:bg-background-dark min-h-screen">
    <div className="flex h-screen overflow-hidden">
      <Sidebar portal={providerPortal} links={providerLinks} bottomAction={providerBottomAction} />
      <main className="flex-1 overflow-y-auto">
        <Header title="Good morning, Alex!" subtitle="Campus services are booming today." avatarLetter="A" />
        <div className="p-8 space-y-8">
          <StatsGrid stats={providerStats} />
          <UpcomingBookings bookings={providerBookings} />
        </div>
      </main>
    </div>
  </div>
);

export default ProviderDashboard;
