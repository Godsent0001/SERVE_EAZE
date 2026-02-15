export const fetchProviderData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        stats: [],
        bookings: []
      });
    }, 500);
  });
};
