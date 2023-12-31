import banner from '/images/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div >
        <div className="hero min-h-screen" style={{backgroundImage:`url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Let the festival be colorful with us</h1>
      <p className="mb-5">It’s such a joy to celebrate the holidays with you. Sending you our love and gratitude always.</p>
      <button className="btn bg-[#D3B714] font-bold">Explore UTHSHOB</button>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default Banner;