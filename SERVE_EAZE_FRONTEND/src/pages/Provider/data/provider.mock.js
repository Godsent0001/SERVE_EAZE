export const providerPortal = { icon: 'school', label: 'Provider' };

export const providerLinks = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'list_alt', label: 'My Listings' },
  { icon: 'account_balance_wallet', label: 'Wallet' },
  { icon: 'chat_bubble', label: 'Messages', badge: 3 },
  { icon: 'settings', label: 'Settings' }
];

export const providerStats = [
  { label: 'Total Earnings', value: '$1,245', icon: 'account_balance_wallet', change: '+12%' },
  { label: 'Active Bookings', value: '8', icon: 'event', change: '+3' },
  { label: 'Completed Jobs', value: '45', icon: 'task_alt', change: '+5' },
  { label: 'Avg Rating', value: '4.9', icon: 'star', change: '★' }
];

export const providerBookings = [
  { id: 1, client: 'Sarah M.', service: 'Calculus Tutoring', date: 'Today, 2:00 PM', status: 'confirmed', amount: '$25' },
  { id: 2, client: 'James K.', service: 'Calculus Tutoring', date: 'Tomorrow, 4:00 PM', status: 'pending', amount: '$25' },
  { id: 3, client: 'Emily R.', service: 'Calculus Tutoring', date: 'Jan 20, 10:00 AM', status: 'confirmed', amount: '$35' }
];

export const providerBottomAction = {
  icon: 'add_circle',
  label: 'Create New Listing',
  link: '/seeker/dashboard'
};

