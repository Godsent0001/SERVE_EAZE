import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold tracking-tight text-primary">
                Serve-Eaze
              </h2>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              The #1 marketplace for student services. Built by students, for students.
            </p>

            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">social_leaderboard</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Find Services
                </Link>
              </li>
              <li>
                <Link to="/provider/dashboard" className="hover:text-primary transition-colors">
                  Service Providers
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Safety Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact Support
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Report a Problem
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Campus Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2024 Serve-Eaze Marketplace Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-slate-400">
              <span className="material-symbols-outlined text-xs">public</span>
              Global Edition
            </span>
            <span className="flex items-center gap-2 text-xs text-slate-400">
              <span className="material-symbols-outlined text-xs">verified_user</span>
              256-bit Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
