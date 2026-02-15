import { useState, useEffect } from 'react';
import { fetchSeekerData } from '../api/seekerApi';

export const useSeekerData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeekerData().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
