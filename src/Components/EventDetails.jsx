import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Footer";

const EventDetails = () => {
    const details = useLoaderData()
    const {id}= useParams()
    const Intid= parseInt(id)
    const detail = details.find((details)=> details.id ===Intid);
    console.log(detail);
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex flex-col lg:flex-row gap-6 p-4 bg-yellow-200">
               <div className="flex-1">
               <img src={detail.image} alt=""  className="w-full mx-auto rounded-lg" />
               <h1 className="text-2xl font-bold text-center">{detail.name}</h1>
               </div>
                <div className="flex-1 ">
                <p className="text-xl font-bold">{detail.description}</p>
                <p className="text-xl font-bold text-[] mt-5 text-yellow-600">Event: {detail.event}</p>
                <div className="flex flex-row gap-5 mt-5">
                <p className="border p-3 bg-[#D3B714] rounded-lg w-40 text-center text-white font-bold">Entry: {detail.ticket_price}</p>
                <Link to={`/foods/${detail.id}`}>
                <button className="btn bg-[#5F6B33] text-white hover:bg-[#5F6B33]">Get Foods</button></Link>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EventDetails;