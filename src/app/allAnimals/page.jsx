import AnimalCard from "@/component/AnimalCard";
import { data } from "@/lib/data";

const AllAnimals = async () => {
  const animalData = await data();

  return (
    <div>
      <h2>All Animals{animalData.length}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        {animalData.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
