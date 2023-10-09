import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import EventDetails from "../Components/EventDetails";
import Foods from "../Components/Foods";
import Login from "../Components/Login ";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import Booking from "../Pages/Booking";
import About from "../Pages/About";


const Router = createBrowserRouter([{
    path:"/",
    element:<Mainlayout></Mainlayout>,
    children:[{
        path:"/",
        element:<Home></Home>,
    },
    {
        path:"/about",
        element:<About></About>
    },
    {
        path:"/services",
        element:<Service></Service>
    },
    {
        path:"/eventdetails/:id",
        element:<PrivateRoute>
            <EventDetails></EventDetails>
        </PrivateRoute>,
        loader:()=> fetch("/festive.json")
    },
    {
        path:"/foods/:id",
        element:<Foods></Foods>,
        loader:()=> fetch("/festive.json")

    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/booking",
        element:<Booking></Booking>

    }

]
}])

export default Router;