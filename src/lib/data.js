export const data = async () => {
  const res = await fetch("https://qurbani-taupe.vercel.app/data.json");
  const animalData = await res.json();
  return animalData;
};
