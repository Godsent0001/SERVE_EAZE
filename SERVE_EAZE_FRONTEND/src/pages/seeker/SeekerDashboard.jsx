// import { Link } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';
// import DashboardHeader from '../../components/DashboardHeader';
// import BookingsCard from '../../components/BookingsCard';
// import { bookings } from '../../components/serveeazeMockData';
// import { useState } from 'react';

// const SeekerDashboard = () => {

//   const [bookedService, setBookedService] = useState(bookings)

//   return (
//     <div className="bg-background-light dark:bg-background-dark min-h-screen">
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar/>

//         <main className="flex-1 overflow-y-auto">
//           <DashboardHeader
//             title = "Track your scheduled services"
//             subtitle = "My Bookings"
//           />

//           {
//             bookedService.map((booked,id)=> (
             
//                <BookingsCard 
//                 // id = {booked.id}
//                 provider={booked.providerId}
//                 service={booked.serviceId}
//                 date={booked.scheduledAt}
//                 amount={booked.paymentStatus}
//                 status={booked.status}

//                 />

//             ))
       
//           }
          
         
          
//         </main>
//       </div>
//     </div>
//   );
// };  

// export default SeekerDashboard;


import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import MyBookings from './components/MyBookings';
import { seekerPortal, seekerLinks, seekerBookings, seekerBottomAction } from './data/seekerData';

const SeekerDashboard = () => (
  <div className="bg-background-light dark:bg-background-dark min-h-screen">
    <div className="flex h-screen overflow-hidden">
      <Sidebar portal={seekerPortal} links={seekerLinks} bottomAction={seekerBottomAction}/>
      <main className="flex-1 overflow-y-auto">
        <Header title="My Bookings" subtitle="Track your scheduled services" avatarLetter="J" />
        <div className="p-8 space-y-6">
          <MyBookings bookings={seekerBookings} />
        </div>
      </main>
    </div>
  </div>
);

export default SeekerDashboard;

