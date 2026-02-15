// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   const stats = [
//     { label: 'Total Users', value: '1,234', icon: 'people', change: '+12%' },
//     { label: 'Active Providers', value: '456', icon: 'work', change: '+8%' },
//     { label: 'Total Revenue', value: '$45.2K', icon: 'payments', change: '+15%' },
//     { label: 'Bookings Today', value: '89', icon: 'event', change: '+23' }
//   ];

//   return (
//     <div className="bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="flex h-screen overflow-hidden">
//         <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6">
//           <div className="px-6 mb-8">
//             <Link to="/" className="flex items-center gap-3">
//               <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
//                 <span className="material-symbols-outlined">admin_panel_settings</span>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold">Serve-Eaze</h1>
//                 <p className="text-xs text-slate-500">Admin Portal</p>
//               </div>
//             </Link>
//           </div>
//           <nav className="flex-1 px-6 space-y-1">
//             {[
//               { icon: 'dashboard', label: 'Dashboard', active: true },
//               { icon: 'people', label: 'Users' },
//               { icon: 'work', label: 'Providers' },
//               { icon: 'list_alt', label: 'Services' },
//               { icon: 'payments', label: 'Transactions' },
//               { icon: 'report', label: 'Reports' },
//               { icon: 'settings', label: 'Settings' }
//             ].map((item, idx) => (
//               <a
//                 key={idx}
//                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${item.active ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
//                 href="#"
//               >
//                 <span className="material-symbols-outlined">{item.icon}</span>
//                 <span className="text-sm font-medium">{item.label}</span>
//               </a>
//             ))}
//           </nav>
//         </aside>

//         <main className="flex-1 overflow-y-auto">
//           <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4">
//             <h2 className="text-2xl font-black">Admin Dashboard</h2>
//             <p className="text-sm text-slate-500">Platform overview and management</p>
//           </header>

//           <div className="p-8 space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {stats.map((stat, idx) => (
//                 <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
//                       <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
//                     </div>
//                     <span className="text-sm font-bold text-green-600">{stat.change}</span>
//                   </div>
//                   <p className="text-3xl font-black mb-1">{stat.value}</p>
//                   <p className="text-sm text-slate-500">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
//                 <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
//                 <div className="space-y-3">
//                   {[
//                     { text: 'New provider registered: Alex Chen', time: '5 mins ago' },
//                     { text: 'Service completed: Laundry Service', time: '15 mins ago' },
//                     { text: 'New booking: Calculus Tutoring', time: '1 hour ago' }
//                   ].map((activity, idx) => (
//                     <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                       <p className="text-sm">{activity.text}</p>
//                       <span className="text-xs text-slate-500">{activity.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
//                 <h3 className="text-xl font-bold mb-4">Top Providers</h3>
//                 <div className="space-y-3">
//                   {[
//                     { name: 'Alex Chen', earnings: '$1,245', rating: 4.9 },
//                     { name: 'Sarah Williams', earnings: '$980', rating: 4.8 },
//                     { name: 'Marcus Chen', earnings: '$856', rating: 5.0 }
//                   ].map((provider, idx) => (
//                     <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                       <div className="flex items-center gap-3">
//                         <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
//                           {provider.name.charAt(0)}
//                         </div>
//                         <div>
//                           <p className="font-bold text-sm">{provider.name}</p>
//                           <p className="text-xs text-slate-500">★ {provider.rating}</p>
//                         </div>
//                       </div>
//                       <p className="font-bold text-primary">{provider.earnings}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import Sidebar from '../../components/Sidebar';
import Header from '../../components/DashboardHeader';
import StatsGrid from '../../components/StatsCard';
import RecentActivity from './components/RecentActivity';
import TopProviders from './components/TopProviders';
import { adminStats, adminActivities, adminTopProviders, adminLinks, adminPortal } from './data/admin.mock';

const AdminDashboard = () => (
  <div className="bg-background-light dark:bg-background-dark min-h-screen">
    <div className="flex h-screen overflow-hidden">
      <Sidebar portal={adminPortal} links={adminLinks} />
      <main className="flex-1 overflow-y-auto">
        <Header title="Admin Dashboard" subtitle="Platform overview and management" avatarLetter="A" />
        <div className="p-8 space-y-8">
          <StatsGrid stats={adminStats} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity activities={adminActivities} />
            <TopProviders providers={adminTopProviders} />
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminDashboard;
