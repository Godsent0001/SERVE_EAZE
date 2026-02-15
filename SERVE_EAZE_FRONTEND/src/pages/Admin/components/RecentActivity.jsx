const RecentActivity = ({ activities }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
    <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
    <div className="space-y-3">
      {activities.map((activity, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <p className="text-sm">{activity.text}</p>
          <span className="text-xs text-slate-500">{activity.time}</span>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity;