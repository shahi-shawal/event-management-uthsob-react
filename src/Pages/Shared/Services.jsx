import { useEffect, useState } from "react";

const Services = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("/festive.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  });
  console.log(services);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4 mb-6">Our Uthshob</h1>
      <div className="grid grid-cols-1 md: grid-cols-3 gap-5">
        {services.map((service) => (
          <div key={service.id}>
            <div className="card h-[64vh] bg-[#9E9E23] shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={service.image}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description.slice(0,80)}...</p>
                <div className="card-actions">
                  <button className="btn  font-bold text-white bg-[#D3B714] border-[#D3B714] hover:bg-[#D3B714]">View Event</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
