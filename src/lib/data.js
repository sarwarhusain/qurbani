export const data = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const animalData = await res.json();
  return animalData;
};


