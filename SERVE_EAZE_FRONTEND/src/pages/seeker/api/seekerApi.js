export const fetchSeekerData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        bookings: []
      });
    }, 500);
  });
};
