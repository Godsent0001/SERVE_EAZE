# Serve-Eaze Quick Start Guide

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A terminal/command prompt
- A code editor (VS Code recommended)

## 🚀 Installation & Setup

### Step 1: Navigate to Project Directory

Open your terminal and navigate to the project folder:

```bash
cd serve-eaze
```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- React 18
- React Router DOM
- Vite
- Tailwind CSS
- And other dependencies

**⏱️ This may take 1-2 minutes**

### Step 3: Start Development Server

Once installation is complete, start the development server:

```bash
npm run dev
```

You should see output similar to:
```
  VITE v5.0.8  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

🎉 **You should now see the Serve-Eaze home page!**

## 🧭 Exploring the Application

### Main Routes to Try:

1. **Home Page** - `http://localhost:3000/`
   - Browse services and categories
   - Search functionality
   - Featured providers

2. **Service Discovery** - Click "Explore Services" or go to `http://localhost:3000/services`
   - Filter by category, price, rating
   - View provider cards
   - Switch between grid and map view

3. **Service Details** - Click any service card
   - View provider profile
   - Book appointments
   - Read reviews
   - Message provider

4. **Login** - Click "Sign In" button
   - Test the login form
   - (No backend yet, so it just redirects)

5. **Register** - Click "Register" button
   - Choose between Seeker and Provider
   - Test registration flow

6. **Provider Dashboard** - Go to `http://localhost:3000/provider/dashboard`
   - View earnings and statistics
   - Manage bookings
   - Track performance

7. **Seeker Dashboard** - Go to `http://localhost:3000/seeker/dashboard`
   - View your bookings
   - Track service history

8. **Chat** - Go to `http://localhost:3000/chat`
   - Test messaging interface
   - View conversation list

9. **Campus Map** - Go to `http://localhost:3000/map`
   - See campus zones
   - Provider distribution

10. **Admin Dashboard** - Go to `http://localhost:3000/admin`
    - Platform statistics
    - User management view

## 🛠️ Development Tips

### Hot Module Replacement (HMR)

Vite provides instant updates. When you edit any file:
1. Save the file
2. The browser will automatically update without full reload
3. Your state is preserved

### Making Changes

Try editing a component:

1. Open `src/pages/Home.jsx`
2. Change the heading text
3. Save the file
4. See instant updates in the browser!

### Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx   # Navigation header
│   └── Footer.jsx   # Site footer
├── pages/           # Page components
│   ├── Home.jsx
│   ├── ServiceDiscovery.jsx
│   ├── ServiceDetails.jsx
│   └── ... (other pages)
├── App.jsx          # Main routing
└── main.jsx         # Entry point
```

## 🎨 Customization

### Change Primary Color

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#137fec',  // Change this hex color
  ...
}
```

### Add New Pages

1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in Header or Footer

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, Vite will automatically try 3001, 3002, etc.

Or specify a different port:
```bash
npm run dev -- --port 3001
```

### Clear Cache

If you encounter issues:
```bash
rm -rf node_modules
rm -rf package-lock.json
npm install
```

### Tailwind Styles Not Working

Make sure you've imported the CSS:
- Check `src/main.jsx` imports `src/index.css`
- Check `src/index.css` has Tailwind directives

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

To preview the production build:
```bash
npm run preview
```

## 🔗 Next Steps

1. **Add Backend API**
   - Create API endpoints
   - Connect to database
   - Add authentication

2. **Add Features**
   - Payment processing
   - Email notifications
   - Real-time updates
   - File uploads

3. **Deploy**
   - Vercel (recommended)
   - Netlify
   - AWS
   - Your own server

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## 💡 Tips for Learning

1. **Start Small**: Modify existing components before creating new ones
2. **Use DevTools**: Chrome React DevTools are helpful
3. **Read the Code**: Each page is well-commented
4. **Experiment**: Break things and fix them - that's how you learn!

## 🆘 Need Help?

If you encounter issues:
1. Check the console for errors (F12 in browser)
2. Read error messages carefully
3. Check the README.md for more details
4. Google the error message

---

Happy coding! 🚀
