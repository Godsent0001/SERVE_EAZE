import { useNavigate } from "react-router-dom";

const MapView = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border p-8 h-[600px] flex items-center justify-center">
      <div className="text-center">
        <span className="material-symbols-outlined text-6xl text-primary mb-4">map</span>
        <h3 className="text-xl font-bold mb-2">Map View</h3>
        <p className="text-slate-500">Interactive campus map with provider locations</p>

        <button
          onClick={() => navigate('/map')}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-bold"
        >
          View Full Map
        </button>
      </div>
    </div>
  );
};

export default MapView;
