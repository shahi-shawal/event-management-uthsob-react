
import Footer from "./Footer";
import Banner from "./Shared/Banner";
import EventVideo from "./Shared/EventVideo";
import Navbar from "./Shared/Navbar";
import Services from "./Shared/Services";
import State from "./Shared/State";
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <EventVideo></EventVideo>
            <State></State>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;