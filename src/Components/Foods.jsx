import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";


const Foods = () => {
    const foods = useLoaderData()
    const {id}= useParams()
    const intId = parseInt(id)
    const food= foods.find((foods)=> foods.id === intId)
    console.log(food);
    return (
        <div>
            <Navbar></Navbar>
            <h1>Comming Foods</h1>
        </div>
    );
};

export default Foods;