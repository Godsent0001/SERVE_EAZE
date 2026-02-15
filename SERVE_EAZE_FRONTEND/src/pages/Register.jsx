import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'seeker'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-slate-600 dark:text-slate-400">Join the campus marketplace</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">University Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@university.edu"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Create a secure password"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">I want to</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.userType === 'seeker' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800'}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="seeker"
                    checked={formData.userType === 'seeker'}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="sr-only"
                  />
                  <span className="material-symbols-outlined text-3xl block mb-2 text-primary">search</span>
                  <p className="font-bold text-sm">Find Services</p>
                </label>
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.userType === 'provider' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800'}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="provider"
                    checked={formData.userType === 'provider'}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="sr-only"
                  />
                  <span className="material-symbols-outlined text-3xl block mb-2 text-primary">work</span>
                  <p className="font-bold text-sm">Offer Services</p>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-600 dark:text-slate-400">Already have an account? </span>
            <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
