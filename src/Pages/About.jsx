import Footer from "./Footer";
import Navbar from "./Shared/Navbar";
import aboutbg from "../../images/undraw_team_spirit_re_yl1v.svg"


const About = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <h1 className="text-2xl p-5 text-center text-yellow-400 font-bold">About us</h1>
            <div className="flex flex-col p-2 lg:p-0 lg:flex-row">
            <div className="flex-1">
             <img src={aboutbg} alt=""  />
            </div>
            <div className="flex-1">
                <p className="text-xl">Welcome to the premier destination for all your festive event management needs! At [Your Company Name], we specialize in turning ordinary occasions into extraordinary celebrations. Whether it's a grand wedding, a lively cultural festival, a corporate holiday party, or a milestone birthday bash, we're here to make your events truly memorable. With our expert team, creativity, and attention to detail, we transform your visions into a reality that will leave you and your guests in awe.</p>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;