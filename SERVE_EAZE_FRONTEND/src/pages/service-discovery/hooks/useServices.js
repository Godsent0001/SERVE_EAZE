import { useState, useEffect } from 'react';
import { fetchServices } from '../api/services.api';
import mockServices from '../../../components/services.mock';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.warn('Using mock data due to API error', error);
        setServices(mockServices);
      }
    };
    getServices();
  }, []);

  return { services };
};

export default useServices;
