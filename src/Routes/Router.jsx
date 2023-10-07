import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";


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
    }
]
}])

export default Router;