import { useState, useEffect } from 'react';
import { fetchProviderData } from '../api/providerApi';

export const useProviderData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviderData().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
