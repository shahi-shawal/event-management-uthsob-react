
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const State = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div className=" shadow flex flex-col lg:flex-row lg:h-[30vh] lg:w-full">
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Event</div>
    <div className="stat-value">500+</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Event viewers</div>
    <div className="stat-value text-yellow-400">7,200</div>
    <div className="stat-desc text-yellow-400">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Event coming</div>
    <div className="stat-value">20+</div>
    <div className="stat-desc">↘ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default State;