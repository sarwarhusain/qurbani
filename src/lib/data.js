export const data = async () => {
  const res = await fetch("https://qurbani-three.vercel.app/data.json");
  const animalData = await res.json();
  return animalData;
};
