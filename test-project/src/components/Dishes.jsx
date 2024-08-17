import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
  return (
    <section className=" container mx-auto py-16 px-8" id="dishes">
    <h2 className="text-3xl font-bold mb-8 text-center tracking-tighter lg:text-4xl">Our Dishes</h2> 

    <div className="grid grid-cols-1 gap-8 md:grid-cols-5">

      {DISHES.map((project, index) => (
        <DishCard key={index} project={project} /> 
      ))}
    </div>

    </section>
  );
};

export default Dishes;