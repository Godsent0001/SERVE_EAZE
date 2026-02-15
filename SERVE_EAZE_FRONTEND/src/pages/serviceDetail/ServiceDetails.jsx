// import { useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import Breadcrumbs from '../../components/Breadcrumbs';

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const { service, loading } = useServiceDetails(id);

//   if (loading) return <p>Loading...</p>;
//   if (!service) return <p>Service not found</p>;
  
  // const navigate = useNavigate();
  // const [selectedDate, setSelectedDate] = useState('2024-01-15');
  // const [selectedTime, setSelectedTime] = useState('');

//   return (
//     <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200">
//       <Header variant="authenticated" />
      
      // <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-6">
      //   {/* Breadcrumbs */}
      //   <Breadcrumbs/>

      //   <div className="flex flex-col lg:flex-row gap-8">
      //     {/* Left Column: Service Details */}
      //     <div className="flex-1 min-w-0">
      //       {/* Hero Image */}
      //       <div className="space-y-4">
      //         <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 relative group">
      //           <div
      //             className="absolute inset-0 bg-cover bg-center"
      //             style={{
      //               backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaeSIjUK-LezUAHk1vEawM4LZEJeT-sOG6ocQiIfOX8CmRd_Pxza7G2jG1_VbIPE7QapyIlVbgWBmXMt7ykcbtGEvm3BULJ-QzzDnt-A2mvLKE71d516uYAUiDfdKL70CUTOuRe65FbiGBnLFpVZltU8DXkGEK68HMImmlqlMAOwCSP5KAyDIv31G-K_FWcem2RuD6k6BDhYK6ffFjzJ61y1_etwlyh8IworL5V3K13KQqwhpXR2j0B3ossT7V7_qoKqTYWQEu_hs")'
      //             }}
      //           />
      //           <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
      //             Featured
      //           </div>
      //         </div>
      //       </div>

      //       {/* Provider Info */}
      //       <div className="mt-8 pb-6 border-b border-slate-200 dark:border-slate-800">
      //         <div className="flex justify-between items-start">
      //           <div>
      //             <h1 className="text-3xl font-bold dark:text-white">{service.title} Tutoring by Alex Chen</h1>
      //             <div className="flex items-center gap-4 mt-2">
      //               <div className="flex items-center gap-1 text-primary">
      //                 <span className="material-symbols-outlined fill-1 text-lg">star</span>
      //                 <span className="font-bold">4.9</span>
      //                 <span className="text-slate-500 font-normal">(128 reviews)</span>
      //               </div>
      //               <span className="text-slate-300">|</span>
      //               <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
      //                 <span className="material-symbols-outlined text-lg">verified_user</span>
      //                 Campus Verified
      //               </div>
      //             </div>
      //           </div>
      //           <div className="flex flex-col items-center">
      //             <div
      //               className="size-16 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
      //               style={{
      //                 backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgD_wBhG3PAn7wuBgkRBhzc079Se1e0I8SJmQTgtLEPiltDOqbPIIH6VCC2g9UVWyrGTp8NB-47cgjXeFvxgXw2aN6YFqxJ3fsBb13A4QSb3a8neujDfjUsZSusXkeugWu9ewAJjJVmM-kxUC41KmhExKFSod28YBvRyWbkNchw0QLe7IEy4vFc9KJCWALObXzLeMB_AbGKuit9rfo2RSqFjrxHT7SsGacLtA7TFPfgXNleUBDkq1rSxTmBZIB6hm5LsmTMgAJ4lU")'
      //               }}
      //             />
      //             <span className="text-xs font-semibold mt-1">Senior, Chem-E</span>
      //           </div>
      //         </div>
      //       </div>

      //       {/* Description */}
      //       <div className="py-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
      //         <h3 className="text-xl font-bold dark:text-white">About this Service</h3>
      //         <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      //           Struggling with stereochemistry or reaction mechanisms? I've been there. As a Chemical Engineering senior who TA'd for Chem 201, I specialize in making complex reaction pathways intuitive. My sessions are tailored to your syllabus and upcoming midterm schedules.
      //         </p>
      //         <ul className="grid grid-cols-2 gap-y-2 mt-4">
      //           {['Mechanism visualization', 'Practice exams included', 'Molecular kit provided', 'Group rates available'].map((item, idx) => (
      //             <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
      //               <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
      //               {item}
      //             </li>
      //           ))}
      //         </ul>
      //       </div>

      //       {/* Reviews */}
      //       <div className="py-8">
      //         <h3 className="text-xl font-bold dark:text-white mb-6">Student Reviews</h3>
      //         <div className="space-y-4">
      //           {[
      //             { name: 'Sarah M.', rating: 5, comment: 'Alex helped me go from a C to an A- in just 3 weeks. His explanations are crystal clear!', time: '2 weeks ago' },
      //             { name: 'James K.', rating: 5, comment: 'Best tutor I\'ve had. Very patient and knows exactly what professors look for.', time: '1 month ago' }
      //           ].map((review, idx) => (
      //             <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
      //               <div className="flex items-center gap-3 mb-3">
      //                 <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
      //                   {review.name.charAt(0)}
      //                 </div>
      //                 <div>
      //                   <p className="font-bold">{review.name}</p>
      //                   <div className="flex items-center gap-2">
      //                     <div className="flex">
      //                       {[...Array(review.rating)].map((_, i) => (
      //                         <span key={i} className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
      //                       ))}
      //                     </div>
      //                     <span className="text-xs text-slate-500">{review.time}</span>
      //                   </div>
      //                 </div>
      //               </div>
      //               <p className="text-slate-600 dark:text-slate-400 text-sm">{review.comment}</p>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>

      //     {/* Right Column: Booking Card */}
      //     <div className="lg:w-96">
      //       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
      //         <div className="flex items-baseline gap-2 mb-6">
      //           <span className="text-4xl font-black text-primary">$25</span>
      //           <span className="text-slate-500 text-sm">/hour session</span>
      //         </div>

      //         <div className="space-y-4">
      //           <div>
      //             <label className="block text-sm font-bold mb-2">Select Date</label>
      //             <input
      //               type="date"
      //               value={selectedDate}
      //               onChange={(e) => setSelectedDate(e.target.value)}
      //               className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary"
      //             />
      //           </div>

      //           <div>
      //             <label className="block text-sm font-bold mb-2">Available Times</label>
      //             <div className="grid grid-cols-2 gap-2">
      //               {['2:00 PM', '3:30 PM', '5:00 PM', '7:00 PM'].map((time) => (
      //                 <button
      //                   key={time}
      //                   onClick={() => setSelectedTime(time)}
      //                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      //                     selectedTime === time
      //                       ? 'bg-primary text-white'
      //                       : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
      //                   }`}
      //                 >
      //                   {time}
      //                 </button>
      //               ))}
      //             </div>
      //           </div>

      //           <div>
      //             <label className="block text-sm font-bold mb-2">Session Duration</label>
      //             <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary">
      //               <option>1 hour - $25</option>
      //               <option>1.5 hours - $35</option>
      //               <option>2 hours - $45</option>
      //             </select>
      //           </div>

      //           <button
      //             onClick={() => alert('Booking confirmed!')}
      //             className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
      //           >
      //             Book Now
      //           </button>

      //           <button
      //             onClick={() => navigate('/chat')}
      //             className="w-full py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
      //           >
      //             <span className="material-symbols-outlined">chat</span>
      //             Message Alex
      //           </button>
      //         </div>

      //         <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 text-sm">
      //           <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
      //             <span className="material-symbols-outlined text-xl">schedule</span>
      //             <span>Usually responds in 1 hour</span>
      //           </div>
      //           <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
      //             <span className="material-symbols-outlined text-xl">location_on</span>
      //             <span>Main Library or your dorm</span>
      //           </div>
      //           <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
      //             <span className="material-symbols-outlined text-xl">cancel</span>
      //             <span>Free cancellation 24h before</span>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </main>

//       <Footer />
//     </div>
//   );
// };

// export default ServiceDetails;


import { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "./hooks/useServiceDetail";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from "../../components/Breadcrumbs";
import BookingCard from "./components/BookingCard";
import ServiceHero from "./components/ServiceHero";
import ProviderInfo from "./components/ProviderInfo";
import ServiceDescription from "./components/ServiceDescription";
import ReviewSection from "./components/ReviewSection";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const { service, loading } = useServiceDetails(id);

  if (loading) return <p>Loading...</p>;
  if (!service) return <p>Service not found</p>;


  return (
    <div>
    <Header/>
      
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs/>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Service Details */}
          <div className="flex-1 min-w-0">
            <ServiceHero service= {service}/>
            <ProviderInfo service={service} />
            <ServiceDescription service={service} />
            <ReviewSection />

          </div>

          {/* Right Column: Booking Card */}

          <BookingCard/>
        </div>
      </main>

    <Footer/>
    </div>

  );
};

export default ServiceDetailPage;
