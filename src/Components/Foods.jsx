import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Foods = () => {
  const foods = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const food = foods.find((foods) => foods.id === intId);
  console.log(food);
  const foody = food.foods;
  console.log(foody);
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center mt-3">{food.name}: Our Foods Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 p-6 mt-5 gap-5">
        {foody.map((food) => (
          <div key={food.id} className="">
            <div className="card lg:h-[55vh] card-compact shadow-xl mt-4 bg-yellow-300">
              <div>
              <figure className="p-5">
                <img src={food.img} alt="Shoes" className="h-3/4 rounded-lg "/>
              </figure>
              </div>
              <div className="card-body mx-auto">
                <h2 className=" font-bold text-2xl">Name: {food.name}</h2>
                <h2 className="text-xl  ">Price: {food.price}Tk</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
