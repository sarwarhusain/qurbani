export const data = async () => {
  const res = await fetch("https://qurbani-five.vercel.app/data.json", );
  const animalData = await res.json();
  return animalData;
};
