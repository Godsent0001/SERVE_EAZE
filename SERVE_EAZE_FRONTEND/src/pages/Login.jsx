import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background-light to-purple-50 dark:from-background-dark dark:to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">layers</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight">Serve-Eaze</h2>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-slate-600 dark:text-slate-400">Sign in to continue to your account</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-primary font-medium hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-600 dark:text-slate-400">Don't have an account? </span>
            <Link to="/register" className="text-primary font-bold hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
