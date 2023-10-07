import { Outlet } from "react-router-dom";


const Mainlayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;