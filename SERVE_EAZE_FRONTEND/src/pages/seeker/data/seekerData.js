export const seekerPortal = { icon: 'search', label: 'Seeker' };

export const seekerLinks = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'event', label: 'My Bookings' },
  { icon: 'favorite', label: 'Favorites' },
  { icon: 'chat_bubble', label: 'Messages', badge: 2 },
  { icon: 'settings', label: 'Settings' }
];

export const seekerBookings = [
  { id: 1, provider: 'Alex Chen', service: 'Calculus Tutoring', date: 'Today, 2:00 PM', status: 'upcoming', amount: '$25' },
  { id: 2, provider: 'Marcus Chen', service: 'Laundry Service', date: 'Tomorrow, 10:00 AM', status: 'confirmed', amount: '$15' }
];

export const seekerBottomAction = {
  icon: 'search',
  label: 'Switch to Provider ',
  link: '/provider/dashboard'
};
