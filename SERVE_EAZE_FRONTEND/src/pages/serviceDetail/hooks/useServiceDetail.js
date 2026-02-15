// import { useEffect, useState } from "react";
// import { getServiceById } from "../api/serviceApi";

// const useServiceDetails = (id) => {
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     getServiceById(id).then((data) => setService(data));
//   }, [id]);

//   return service;
// };

// export default useServiceDetails;


import { useEffect, useState } from "react";
import { getServiceById } from "../api/serviceApi";

const useServiceDetails = (id) => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getServiceById(id).then((data) => {
      setService(data);
      setLoading(false);
    });
  }, [id]);

  return { service, loading };
};

export default useServiceDetails;
