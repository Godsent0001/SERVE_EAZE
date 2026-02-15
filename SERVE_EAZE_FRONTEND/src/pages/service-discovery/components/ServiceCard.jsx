




const ServiceCard = ({ service, navigate }) => {

  const shortDescription =
    service.description.length > 80
      ? service.description.substring(0, 80) + "..."
      : service.description;
  return (
    <div
      className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border hover:shadow-xl transition-all cursor-pointer"
      onClick={() => navigate(`/service/${service.id}`)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${service.image}")` }}
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg">{service.name}</h3>
        <p className="text-xs text-slate-500">{service.department}</p>

        <p className="text-sm mt-3">{shortDescription}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-bold">
            ${service.price}/{service.unit}
          </span>

          <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
