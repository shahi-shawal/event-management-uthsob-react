import { useEffect, useState } from "react";

const Services = () => {
    const [services, setservices]=useState([])
    useEffect(()=>{
        fetch("/festive.json")
        .then(res=> res.json())
        .then(data => setservices(data))
    })
    console.log(services);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-4">Our Uthshob</h1>
        </div>
    );
};

export default Services;