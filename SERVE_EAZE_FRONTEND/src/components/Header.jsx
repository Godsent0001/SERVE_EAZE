import { Link, useNavigate } from 'react-router-dom';

const Header = ({ variant = 'default' }) => {
  const navigate = useNavigate();

  if (variant === 'authenticated') {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 md:px-10 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-8 flex-1">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">electric_bolt</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight hidden sm:block">
                Serve-Eaze
              </h2>
            </Link>

            <div className="flex-1 max-w-md hidden md:block">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-slate-400">
                  search
                </span>
                <input
                  className="w-full h-10 pl-10 pr-4 rounded-lg border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary placeholder:text-slate-500 text-sm"
                  placeholder="Search for tutors, errands, cleaning..."
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/services" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">
                Find Services
              </Link>
              <Link to="/seeker/dashboard" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">
                My Bookings
              </Link>
              <Link to="/provider/dashboard" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">
                Provider Dashboard
              </Link>
            </nav>

            <div className="flex gap-2">
              <button className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <Link to="/chat" className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">chat_bubble</span>
              </Link>
            </div>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-100 dark:border-slate-800 cursor-pointer"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrVS7X6_qvXqsu1FNiduV4u1_Ckr4akmJPy26RM16FgxqLftLdIvTD-5Wgi6Ve3aSWptzPApYrnGlnPk-CDhy_dl4pATDOGgws-yR88rngYdZVhQZrRcKNfD7WEIGrbpcYJSiXzzc0XoCywiQDBUm4ODDfpOjMj1mC2je2Kb8UIzIipSb-joIG3op3iwhqAk1nkCt1YPSucrv-agiy4YKLBTs6ys99ZiQ-PrHctr7KiK8scfV5hP8ULaUCg4VwDdMHKBzD4Lu8GsE")'
              }}
            />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#e7edf3] dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-primary">
            Serve-Eaze
          </h2>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Explore Services
          </Link>
          <Link to="/provider/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Become a Provider
          </Link>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="hidden sm:flex px-4 py-2 text-sm font-bold bg-[#e7edf3] dark:bg-slate-800 text-[#0d141b] dark:text-slate-50 rounded-lg hover:bg-[#d1dce7] transition-all"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 shadow-md shadow-primary/20 transition-all"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
