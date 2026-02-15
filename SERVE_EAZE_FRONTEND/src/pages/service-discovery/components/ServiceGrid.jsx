import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

const ServiceGrid = ({ services }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} navigate={navigate} />
      ))}
    </div>
  );
};

export default ServiceGrid;
