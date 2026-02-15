import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaTshirt, FaCut, FaShoppingBag, FaUtensils, FaDumbbell, FaPen, FaBroom } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 transition-colors duration-300">
      <Header />
      
      <main className="max-w-[1280px] mx-auto">
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-8 flex-1 max-w-[600px]">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="material-symbols-outlined text-sm">school</span> Built for Campus
                </span>
                <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                  Simplify Your <span className="text-primary">Campus Life</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Connect with trusted student providers for the help you need, right where you live. From laundry to calculus, we've got you covered.
                </p>
              </div>
              <SearchBar />
            </div>
            <div className="flex-1 w-full lg:w-1/2">
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCryMMQLYa7D7By4pXswGCFAecRijJQco8gOQ5m0PdwbgwKuPY2mlm6hwQlH1Ntq-cihBrf4NOlbDkXztU654wFcox95hc3LiilM29U1ZlBcDITQKwykn3tEh-mpdsOdZySll_2nDqLAWRjnCQPLCL7-nq5SX48jXp5OH5169wmCTXF95fixeEtfJ-zulchYSQH3O3iddxJHJExqJv_YHHhQkxnlSSUiCuo0HQQNRwa_5NKTgpGqv7ej8oL04stIalEWMVFEg-DLjU")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-4">
                    <div
                      className="size-12 rounded-full bg-slate-200 overflow-hidden"
                      style={{
                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDu0vvHndchUSZH7Tq36kHKOuy5aJTHJWxEMnUG8JKpH1sIwZkgQ_Q2JoO962S0MErxOJCzd16YnDGODlDUB_qQdTFHVY4AWRS98brrGO7SZM74lPlq50RVRL1D8thun0zns_KBH0yxnawj6wWfqn3Nzq5fJ6WHfZAmrf7K30l5WPJEeIzA51F-pGEiQzd6G_-oMV9vVn_Frq5wwLRmOOpOAARUPD9ddoTS5qAxMdrI77kKHbkc07LOFoD0g7x48UjfhCXg_pBcMe4")',
                        backgroundSize: 'cover'
                      }}
                    />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Alex Johnson</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Verified Math Tutor • 4.9 ★</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-primary font-bold">From $15/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid Section */}
        <section className="px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Explore Categories</h2>
              <p className="text-slate-500 dark:text-slate-400">Find exactly what you need in seconds</p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="text-primary font-bold text-sm flex items-center gap-1 hover:underline fleche-hover"
            >
              View all
              <span className="fleche-wrap" aria-hidden>
                <svg className="fleche-1" viewBox="0 0 46 40" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/></svg>
              </span>
            </button>
          </div>
          <div className="relative">
            <div className="slider-nav-container hidden md:block">
              <div className="slider-nav-buttons">
                <button className="slider-nav-item slider-nav-item-next" id="slider-selection-next" aria-label="Next">
                  <div className="slider-nav-item-icon-container">
                    <span className="slider-nav-item-icon-1">
                      <svg className="icon icon-fleche" viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/></svg>
                    </span>
                  </div>
                </button>
                <button className="slider-nav-item slider-nav-item-prev" id="slider-selection-prev" aria-label="Previous">
                  <div className="slider-nav-item-icon-container">
                    <span className="slider-nav-item-icon-1">
                      <svg className="icon icon-fleche rotate-180" viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg"><path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/></svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="ml-0 md:ml-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Cards */}
            {[
              { icon: FaBook, title: 'Tutoring', count: '234 providers', color: 'bg-blue-500' },
              { icon: FaTshirt, title: 'Laundry', count: '89 providers', color: 'bg-purple-500' },
              { icon: FaCut, title: 'Barbing', count: '45 providers', color: 'bg-orange-500' },
              { icon: FaShoppingBag, title: 'Errands', count: '156 providers', color: 'bg-green-500' },
              { icon: FaUtensils, title: 'Cooking', count: '67 providers', color: 'bg-red-500' },
              { icon: FaDumbbell, title: 'Fitness', count: '98 providers', color: 'bg-yellow-500' },
              { icon: FaPen, title: 'Writing', count: '112 providers', color: 'bg-pink-500' },
              { icon: FaBroom, title: 'Cleaning', count: '78 providers', color: 'bg-teal-500' }
            ].map((category, index) => (
              <Link
                key={index}
                to="/services"
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className={`size-14 ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{category.count}</p>
              </Link>
            ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Providers */}
        <section className="px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Top Rated Providers</h2>
              <p className="text-slate-500 dark:text-slate-400">Trusted by students like you</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Provider Cards */}
            {[
              {
                name: 'Sarah Williams',
                service: 'Calculus & Physics Tutor',
                rating: 5.0,
                price: '$20/hr',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0pXJ3kULX67qdH0k3w-R-5YMtLCPKjJNpRJLQg3Q7y5_ByY0M6RXSy56pJVZ3L0B9XVfMRx7_4lnQZs3Bur5tO8qBL-8B-4LsZA1SEmpUZnpGmhwqh8_uqZ7Y5CJRKPYcvE6QnD5q2mWtAhDlKxFMLqB2J4s-wlKROlRYFmKqnWGU2fDEPj_L9iOg_tTx0hZPirgXxBCOlq9y5N7fzWGjWj5eFpGPhtlSg0YxqNO9mFdD9pz3T20sWjlqg1mQ0CYl1pCjDhSlQ',
                tags: ['STEM', 'Flexible Hours']
              },
              {
                name: 'Marcus Chen',
                service: 'Professional Laundry & Folding',
                rating: 5.0,
                price: '$12/load',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjOPsLJKH8RHgQkh7q3l-2S-kPJL5nEQhGpQmWHZy8gCVFJ7WnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qBQhGpQnqYFGH4BPc3QJ5nLZxRkW9XmHLhQ8RqJ0PJ7rHQmFZH0kX7qB',
                tags: ['Delivery', 'Eco-Friendly']
              },
              {
                name: 'David Okoro',
                service: 'Elite Dorm Cuts',
                rating: 4.8,
                price: '$25/cut',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvBa2dmjIwN6vY7rDE97W4d8F_A78jEpypjWnlSWVVDUYZ8hRJ2HmpdSMSq2pbwMP2cvafliG1GqyEhiCWXdnwpXrUoY-rJL7823P4IfXWCr3t_0-wx37O9MbdWL51tqsTAfVahCGW9HaFT30VHP2NsqdZJPljl-E8BNFXxBp-LieAJLuoo-kdnBIon22wCocnHA8zoKfBGPTqhVJkupHxz8S4xKL_p-W2WkzeL0ouY54RkKLV522jS7BoFkwt5hD-3Z_CqK7fMIk',
                tags: ['Grooming', 'On-Demand']
              }
            ].map((provider, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden group hover:shadow-2xl transition-all">
                <div className="h-40 bg-slate-100 relative" style={{ backgroundImage: `url("${provider.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    {provider.price}
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 size-16 rounded-2xl border-4 border-white dark:border-slate-800 bg-slate-200 overflow-hidden shadow-lg" style={{ backgroundImage: `url("${provider.image}")`, backgroundSize: 'cover' }} />
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xl font-bold">{provider.name}</h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <span className="material-symbols-outlined text-sm fill-current">star</span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{provider.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">{provider.service}</p>
                    <div className="flex items-center gap-2 mb-6">
                      {provider.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-[10px] font-bold uppercase rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/service/1')}
                      className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 pb-20">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-white flex flex-col items-center text-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-10 -mb-10"></div>
            <h2 className="text-3xl md:text-5xl font-black max-w-[700px] relative z-10">
              Have a Skill? Earn While You Study.
            </h2>
            <p className="text-lg opacity-90 max-w-[600px] relative z-10">
              Join 500+ student providers making an average of $300/week by helping their peers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-4">
              <button
                onClick={() => navigate('/provider/dashboard')}
                className="px-8 py-4 bg-white text-primary font-black rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Become a Provider
              </button>
              <button className="px-8 py-4 bg-primary border-2 border-white/30 text-white font-black rounded-xl hover:bg-white/10 transition-all">
                Learn How It Works
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
