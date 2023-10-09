import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgser from "../../../images/Colored Shapes (2).png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("/festive.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  });
  console.log(services);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className="bg-yellow-200">
      <h1   className="text-2xl font-bold text-center p-2 ">OUR UTHSHOB</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
        {services.map((service) => (
          <div key={service.id}>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card lg:h-[64vh]  shadow-xl">
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
                  <Link to={`/eventdetails/${service.id}`}><button className="btn  font-bold text-white bg-[#D3B714] border-[#D3B714] hover:bg-[#D3B714]">View Event</button></Link>
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
