import { useState, useEffect } from 'react';
import { fetchAdminData } from '../api/adminApi';

export const useAdminData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminData().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
