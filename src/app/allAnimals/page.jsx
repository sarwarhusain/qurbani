import { data } from "@/lib/data";
import AllAnimals from "./AllAnimals";

const AllAnimalsRoot = async () => {
  const animalData = await data();
  return <AllAnimals animalData={animalData} />;
};

export default AllAnimalsRoot;
