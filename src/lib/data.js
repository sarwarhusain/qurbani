export const data = async () => {
  const res = await fetch("https://qurbani-khaki.vercel.app/data.json", {
    cache: "no-store",
  });
  const animalData = await res.json();
  return animalData;
};
