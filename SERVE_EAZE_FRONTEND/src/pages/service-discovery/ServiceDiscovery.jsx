// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// const ServiceDiscovery = () => {
//   const navigate = useNavigate();
//   const [viewType, setViewType] = useState('grid');

//   const services = [
    // {
    //   id: 1,
    //   name: 'Alex Johnson',
    //   department: 'Computer Science Department',
    //   rating: 4.9,
    //   price: 25,
    //   unit: 'hr',
    //   description: 'Specializing in Python, Java, and Algorithm design for undergraduate courses.',
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFe2CwPfFudycZeIbpTcr9Wl_sqkRBQC0or5pvcIFS3XzW0VC1_8-J-w7-1de9kAh2a-jQLrczmUmBmok3gUGdzyj0aeOhUVsUvdbYXkkRn2gcQVuSa0MxQGxOCWzHfqD2I3NXafEugVaEctDzFDzQmq51ve5mnSIna_6oh_18nu0d1ztfDCrVo1CzTQAvISWEGYIYZ30XzQi0Lthb96esGF884jGw3-bF97Q2OyFN7ZwQmiX8bhourIABe5bwfaj_7diNn5KxdnQ',
    //   badge: 'Verified Provider',
    //   badgeType: 'verified'
    // },
    // {
    //   id: 2,
    //   name: 'Sarah Williams',
    //   department: 'Marketing Dept • 5 mins away',
    //   rating: 4.7,
    //   price: 10,
    //   unit: 'trip',
    //   description: 'Quick errand runner and package delivery within North Quad. I have a bike!',
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS7uCFsJgDb6Nb2biscOW-nibNmT0zeoVlxptxsUv_NaoBL4fDP4KreZVNfinnWv50a2Q4Bb8ewskL88YfTmncG79B4ndR0lPj5TX81GhSHEwih5sVt3EhI-xzY-bukZeicoeq3PhfppLFYL-pJRockKZxSVj2tsZbxtpdZ-v_FrIM_La8kKM6x7uCZ5WVGa3254M-WDxCQDTk78AaE92jLe5RQu9GLM2lOdd2mdCUP9WLoJbz3VH0ieYIjrduaGXzpRiHji2m-6I',
    //   badge: 'Fast Delivery',
    //   badgeType: 'fast'
    // },
    // {
    //   id: 3,
    //   name: 'Marcus Chen',
    //   department: 'Engineering Block • Available Now',
    //   rating: 5.0,
    //   price: 15,
    //   unit: 'load',
    //   description: 'Wash, dry, and fold service with eco-friendly detergent. Same-day turnaround!',
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjOPsLJKH8RHgQkh7q3l-2S-kPJL5nEQhGpQmWHZy8gCVFJ7WnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qB',
    //   badge: 'Top Rated',
    //   badgeType: 'verified'
    // },
    // {
    //   id: 4,
    //   name: 'Jessica Park',
    //   department: 'South Campus Dorms',
    //   rating: 4.8,
    //   price: 30,
    //   unit: 'session',
    //   description: 'Certified yoga instructor offering dorm-friendly morning sessions.',
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0pXJ3kULX67qdH0k3w-R-5YMtLCPKjJNpRJLQg3Q7y5_ByY0M6RXSy56pJVZ3L0B9XVfMRx7_4lnQZs3Bur5tO8qBL-8B-4LsZA1SEmpUZnpGmhwqh8_uqZ7Y5CJRKPYcvE6QnD5q2mWtAhDlKxFMLqB2J4s-wlKROlRYFmKqnWGU2fDEPj_L9iOg_tTx0hZPirgXxBCOlq9y5N7fzWGjWj5eFpGPhtlSg0YxqNO9mFdD9pz3T20sWjlqg1mQ0CYl1pCjDhSlQ',
    //   badge: 'New',
    //   badgeType: 'new'
    // },
    // {
    //   id: 5,
    //   name: 'David Okoro',
    //   department: 'Central Library Area',
    //   rating: 4.8,
    //   price: 25,
    //   unit: 'cut',
    //   description: 'Licensed apprentice bringing the shop to you. Specializing in fades and edge-ups.',
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvBa2dmjIwN6vY7rDE97W4d8F_A78jEpypjWnlSWVVDUYZ8hRJ2HmpdSMSq2pbwMP2cvafliG1GqyEhiCWXdnwpXrUoY-rJL7823P4IfXWCr3t_0-wx37O9MbdWL51tqsTAfVahCGW9HaFT30VHP2NsqdZJPljl-E8BNFXxBp-LieAJLuoo-kdnBIon22wCocnHA8zoKfBGPTqhVJkupHxz8S4xKL_p-W2WkzeL0ouY54RkKLV522jS7BoFkwt5hD-3Z_CqK7fMIk',
    //   badge: 'Verified Provider',
    //   badgeType: 'verified'
    // },
    // {
    //   id: 6,
    //   name: 'Emily Rodriguez',
    //   department: 'North Quad • Online',
    //   rating: 4.9,
    //   price: 18,
    //   unit: 'hr',
    //   description: 'Spanish and French tutoring with conversation practice. All levels welcome!',
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFe2CwPfFudycZeIbpTcr9Wl_sqkRBQC0or5pvcIFS3XzW0VC1_8-J-w7-1de9kAh2a-jQLrczmUmBmok3gUGdzyj0aeOhUVsUvdbYXkkRn2gcQVuSa0MxQGxOCWzHfqD2I3NXafEugVaEctDzFDzQmq51ve5mnSIna_6oh_18nu0d1ztfDCrVo1CzTQAvISWEGYIYZ30XzQi0Lthb96esGF884jGw3-bF97Q2OyFN7ZwQmiX8bhourIABe5bwfaj_7diNn5KxdnQ',
    //   badge: 'Top Rated',
    //   badgeType: 'verified'
    // }
//   ];

//   return (
//     <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
//       <Header variant="authenticated" />
      
//       <main className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-10">
//         {/* Sidebar Navigation (Filters) */}
        // <aside className="w-full md:w-64 flex flex-col gap-6">
        //   <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 sticky top-24">
        //     <div className="flex items-center justify-between mb-4">
        //       <h3 className="text-slate-900 dark:text-white text-lg font-bold">Filters</h3>
        //       <button className="text-primary text-xs font-semibold hover:underline">Clear All</button>
        //     </div>
        //     <div className="space-y-6">
        //       {/* Category */}
        //       <div>
        //         <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Category</p>
        //         <div className="space-y-2">
        //           {['Tutoring', 'Errands', 'Cleaning', 'Technical Support'].map((category, idx) => (
        //             <label key={idx} className="flex items-center gap-3 cursor-pointer group">
        //               <input
        //                 defaultChecked={idx === 0}
        //                 className="rounded text-primary focus:ring-primary bg-slate-100 border-slate-300 dark:bg-slate-800 dark:border-slate-700"
        //                 type="checkbox"
        //               />
        //               <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
        //                 {category}
        //               </span>
        //             </label>
        //           ))}
        //         </div>
        //       </div>

        //       {/* Price Range */}
        //       <div>
        //         <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Price Range ($)</p>
        //         <div className="flex items-center gap-2">
        //           <input
        //             className="w-full text-xs rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-2"
        //             placeholder="Min"
        //             type="number"
        //           />
        //           <span className="text-slate-400">-</span>
        //           <input
        //             className="w-full text-xs rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-2"
        //             placeholder="Max"
        //             type="number"
        //           />
        //         </div>
        //       </div>

        //       {/* Rating */}
        //       <div>
        //         <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Minimum Rating</p>
        //         <div className="flex flex-col gap-2">
        //           <div className="flex items-center gap-2 text-primary">
        //             {[1, 2, 3, 4].map((star) => (
        //               <span key={star} className="material-symbols-outlined text-sm fill-1">star</span>
        //             ))}
        //             <span className="material-symbols-outlined text-sm">star</span>
        //             <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">4.0+</span>
        //           </div>
        //         </div>
        //       </div>

        //       {/* Campus Zone */}
        //       <div>
        //         <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Campus Zone</p>
        //         <select className="w-full text-sm rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-2">
        //           <option>All Zones</option>
        //           <option>North Quad</option>
        //           <option>Central Library</option>
        //           <option>Engineering Block</option>
        //           <option>Student Dorms</option>
        //           <option>South Campus</option>
        //         </select>
        //       </div>

        //       <button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
        //         Apply Filters
        //       </button>
        //     </div>
        //   </div>
        // </aside>

//         {/* Main Content Area */}
//         <div className="flex-1 flex flex-col gap-4">
//           {/* Breadcrumbs & Search Info */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div className="flex flex-wrap items-center gap-2">
//               <Link to="/" className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary">
//                 Home
//               </Link>
//               <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
//               <span className="text-slate-900 dark:text-white text-sm font-semibold">Search Results</span>
//             </div>

//             {/* View Toggle */}
          //   <div className="flex h-10 w-full sm:w-auto items-center rounded-lg bg-slate-200 dark:bg-slate-800 p-1">
          //     <label
          //       className={`flex cursor-pointer h-full grow sm:grow-0 sm:w-32 items-center justify-center gap-2 rounded-lg px-3 transition-all ${
          //         viewType === 'grid'
          //           ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
          //           : 'text-slate-500 dark:text-slate-400'
          //       } text-sm font-semibold`}
          //     >
          //       <span className="material-symbols-outlined text-lg">grid_view</span>
          //       <span className="truncate">Grid View</span>
          //       <input
          //         checked={viewType === 'grid'}
          //         className="hidden"
          //         name="view-type"
          //         type="radio"
          //         value="grid"
          //         onChange={() => setViewType('grid')}
          //       />
          //     </label>
          //     <label
          //       className={`flex cursor-pointer h-full grow sm:grow-0 sm:w-32 items-center justify-center gap-2 rounded-lg px-3 transition-all ${
          //         viewType === 'map'
          //           ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
          //           : 'text-slate-500 dark:text-slate-400'
          //       } text-sm font-semibold`}
          //     >
          //       <span className="material-symbols-outlined text-lg">map</span>
          //       <span className="truncate">Map View</span>
          //       <input
          //         checked={viewType === 'map'}
          //         className="hidden"
          //         name="view-type"
          //         type="radio"
          //         value="map"
          //         onChange={() => setViewType('map')}
          //       />
          //     </label>
          //   </div>
          // </div>

//           {/* Section Header */}
//           <div className="pt-2">
//             <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">
//               {services.length} Service Providers near Main Library
//             </h2>
//             <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Recommended results for "Calculus Tutoring"</p>
//           </div>

//           {/* Grid of Listings */}
//           {viewType === 'grid' ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
//               {services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer"
//                   onClick={() => navigate(`/service/${service.id}`)}
//                 >
//                   <div className="relative h-48 w-full overflow-hidden">
//                     <div
//                       className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                       style={{ backgroundImage: `url("${service.image}")` }}
//                     />
//                     <div
//                       className={`absolute top-3 ${
//                         service.badgeType === 'fast' ? 'right-3 bg-primary' : 'left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-primary/20'
//                       } px-2 py-1 rounded text-[10px] font-bold uppercase ${
//                         service.badgeType === 'fast' ? 'text-white' : 'text-primary'
//                       }`}
//                     >
//                       {service.badge}
//                     </div>
//                   </div>
//                   <div className="p-5">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <h3 className="text-slate-900 dark:text-white font-bold text-lg">{service.name}</h3>
//                         <p className="text-slate-500 dark:text-slate-400 text-xs">{service.department}</p>
//                       </div>
//                       <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-1.5 py-0.5 rounded">
//                         <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
//                         <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">{service.rating}</span>
//                       </div>
//                     </div>
//                     <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">{service.description}</p>
//                     <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
//                       <div className="flex flex-col">
//                         <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
//                           {service.unit === 'hr' ? 'Rate' : 'Starts at'}
//                         </span>
//                         <span className="text-primary font-bold text-lg">
//                           ${service.price}
//                           <span className="text-xs font-medium text-slate-500">/{service.unit}</span>
//                         </span>
//                       </div>
//                       <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
//                         View Profile
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 h-[600px] flex items-center justify-center">
//               <div className="text-center">
//                 <span className="material-symbols-outlined text-6xl text-primary mb-4">map</span>
//                 <h3 className="text-xl font-bold mb-2">Map View</h3>
//                 <p className="text-slate-500 dark:text-slate-400">
//                   Interactive campus map with provider locations
//                 </p>
//                 <button
//                   onClick={() => navigate('/map')}
//                   className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all"
//                 >
//                   View Full Map
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ServiceDiscovery;

// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// import FiltersSidebar from "./components/FiltersSidebar";
// import Breadcrumbs from "./components/Breadcrumbs";
// import ViewToggle from "./components/ViewToggle";
// import ServiceGrid from "./components/ServiceGrid";
// import MapView from "./components/MapView";
// import useServices from "./hooks/useServices";

// const ServiceDiscovery = () => {
//   const [viewType, setViewType] = useState("grid");
//   const { services, loading, error } = useServices();

//   if (loading) return <p>Loading services...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       {viewType === "grid"
//         ? <ServiceGrid services={services} />
//         : <MapView />
//       }
//     </>
//   );
// };

// React & Router
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Global components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Service Discovery components
import FiltersSidebar from './components/FiltersSidebar';
import Breadcrumbs from '../../components/Breadcrumbs';
import ViewToggle from './components/ViewToggle';
import ServiceGrid from './components/ServiceGrid';
import MapView from './components/MapView';

// Hooks
import useServices from './hooks/useServices';

const ServiceDiscovery = () => {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState('grid');

  // Fetch services using hook (can also use mock data if hook not ready)
  const { services } = useServices();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header variant="authenticated" />

      <main className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-10">
        {/* Sidebar */}
        <FiltersSidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* View toggle */}
          <ViewToggle viewType={viewType} setViewType={setViewType} />

          {/* Section header */}
          <div className="pt-2">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">
              {services.length} Service Providers near Main Library
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Recommended results for "Calculus Tutoring"
            </p>
          </div>

          {/* Listings */}
          {viewType === 'grid' ? (
            <ServiceGrid services={services} navigate={navigate} />
          ) : (
            <MapView navigate={navigate} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDiscovery;

