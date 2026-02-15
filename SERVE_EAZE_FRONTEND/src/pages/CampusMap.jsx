import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CampusMap = () => {
  const zones = [
    { id: 1, name: 'North Quad', providers: 45, color: 'bg-blue-500' },
    { id: 2, name: 'Central Library', providers: 67, color: 'bg-green-500' },
    { id: 3, name: 'Engineering Block', providers: 38, color: 'bg-orange-500' },
    { id: 4, name: 'Student Dorms', providers: 89, color: 'bg-purple-500' },
    { id: 5, name: 'South Campus', providers: 54, color: 'bg-red-500' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Header variant="authenticated" />

      <main className="max-w-[1440px] mx-auto p-4 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Campus Service Map</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Find providers near you on campus
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 h-[600px] flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-8xl text-primary mb-4 block">map</span>
              <h3 className="text-2xl font-bold mb-2">Interactive Campus Map</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Interactive map with provider locations coming soon
              </p>
              <div className="inline-grid grid-cols-2 gap-4">
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-left"
                  >
                    <div className={`size-3 ${zone.color} rounded-full mb-2`}></div>
                    <p className="font-bold text-sm">{zone.name}</p>
                    <p className="text-xs text-slate-500">{zone.providers} providers</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Zone List */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4">Campus Zones</h3>
              <div className="space-y-3">
                {zones.map((zone) => (
                  <Link
                    key={zone.id}
                    to="/services"
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-10 ${zone.color} rounded-lg flex items-center justify-center text-white`}>
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <p className="font-bold">{zone.name}</p>
                        <p className="text-xs text-slate-500">{zone.providers} providers nearby</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
                near_me
              </span>
              <h4 className="font-bold mb-2">Enable Location</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Get personalized recommendations based on your location
              </p>
              <button className="w-full py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90">
                Enable Location
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CampusMap;
