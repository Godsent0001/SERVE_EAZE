const TopProviders = ({ providers }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
    <h3 className="text-xl font-bold mb-4">Top Providers</h3>
    <div className="space-y-3">
      {providers.map((provider, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              {provider.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-sm">{provider.name}</p>
              <p className="text-xs text-slate-500">★ {provider.rating}</p>
            </div>
          </div>
          <p className="font-bold text-primary">{provider.earnings}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TopProviders;
