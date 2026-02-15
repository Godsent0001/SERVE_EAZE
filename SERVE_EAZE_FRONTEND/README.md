# Serve-Eaze - Campus Services Marketplace

A modern web application connecting students with service providers on campus. Built with React, Vite, and Tailwind CSS.

## Features

- **Service Discovery**: Browse and search for campus services
- **Booking System**: Book services with providers
- **Provider Dashboard**: Manage listings, bookings, and earnings
- **Seeker Dashboard**: Track bookings and favorites
- **Real-time Chat**: Communicate with providers
- **Admin Panel**: Platform management and analytics
- **Campus Map**: Location-based service discovery
- **Responsive Design**: Works on desktop, tablet, and mobile

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: Google Material Symbols

## Project Structure

```
serve-eaze/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── ServiceDiscovery.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── ProviderDashboard.jsx
│   │   ├── SeekerDashboard.jsx
│   │   ├── Chat.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── CampusMap.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Routes

- `/` - Home page
- `/services` - Service discovery and search
- `/service/:id` - Service details and booking
- `/provider/dashboard` - Provider management dashboard
- `/seeker/dashboard` - Seeker bookings dashboard
- `/chat` - In-app messaging
- `/admin` - Admin control panel
- `/map` - Campus map with service locations
- `/login` - User login
- `/register` - User registration

## Key Features by Page

### Home Page
- Hero section with search
- Category grid
- Featured providers
- Call-to-action sections

### Service Discovery
- Advanced filters (category, price, rating, location)
- Grid/Map view toggle
- Service cards with provider info

### Service Details
- Image gallery
- Provider information
- Booking calendar
- Reviews and ratings
- Direct messaging

### Provider Dashboard
- Earnings overview
- Active bookings
- Service management
- Analytics

### Seeker Dashboard
- Booking history
- Upcoming services
- Favorites
- Messages

### Chat System
- Real-time messaging interface
- Online status indicators
- File attachments
- Conversation history

### Admin Dashboard
- Platform statistics
- User management
- Transaction monitoring
- Activity logs

### Campus Map
- Interactive zone display
- Provider distribution
- Location-based filtering

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: '#137fec',  // Main brand color
  'background-light': '#f6f7f8',
  'background-dark': '#101922',
}
```

### Fonts

The app uses the Lexend font family. To change it, update:
- `index.html` (Google Fonts link)
- `tailwind.config.js` (fontFamily config)

## Development Tips

1. **Hot Module Replacement**: Vite provides fast HMR for instant feedback
2. **Component Structure**: Keep components small and reusable
3. **State Management**: Currently uses local state; consider adding Context API or Redux for complex state
4. **API Integration**: Add API calls in a separate `services` directory
5. **Authentication**: Implement proper auth flow with JWT or OAuth

## Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Payment processing
- [ ] Advanced search filters
- [ ] Review system
- [ ] Rating algorithm
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Progressive Web App (PWA)
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@serve-eaze.com or join our Discord community.

---

Built with ❤️ for campus communities
