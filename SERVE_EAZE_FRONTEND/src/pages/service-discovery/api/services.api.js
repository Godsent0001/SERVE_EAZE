// Example API function (replace base URL with your backend)
export const fetchServices = async () => {
  try {
    const response = await fetch('/api/services'); // change to your real endpoint
    if (!response.ok) throw new Error('Failed to fetch services');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};
