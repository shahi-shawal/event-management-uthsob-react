import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import EventDetails from "../Components/EventDetails";
import Foods from "../Components/Foods";


const Router = createBrowserRouter([{
    path:"/",
    element:<Mainlayout></Mainlayout>,
    children:[{
        path:"/",
        element:<Home></Home>,
    },
    {
        path:"/services",
        element:<Service></Service>
    },
    {
        path:"/eventdetails/:id",
        element:<EventDetails></EventDetails>,
        loader:()=> fetch("/festive.json")
    },
    {
        path:"/foods/:id",
        element:<Foods></Foods>,
        loader:()=> fetch("/festive.json")

    }
]
}])

export default Router;