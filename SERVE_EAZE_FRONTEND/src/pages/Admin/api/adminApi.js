export const fetchAdminData = async () => {
  // mock API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        stats: [],
        activities: [],
        topProviders: []
      });
    }, 500);
  });
};
