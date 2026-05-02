import { data } from "@/lib/data";

const Animals = async () => {
  const userData = await data();
  console.log(userData);

  return (
    <div>
      <h2>All Animals{userData.length}</h2>
      {userData.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default Animals;
