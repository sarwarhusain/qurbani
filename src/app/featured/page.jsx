import FeaturedCard from "@/component/FeaturedCard";
import { data } from "@/lib/data";

const Featured = async () => {
  const features = await data();
  // console.log(features, "featured");
  return (
    <div className="my-10">
      <h2>Featured{features.length}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.slice(0, 4).map((feature) => (
          <FeaturedCard key={feature.id} feature={feature}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
