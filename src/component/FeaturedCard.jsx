import Image from "next/image";
const FeaturedCard = ({ feature }) => {
  console.log(feature);
  return (
    <div className="relative card bg-base-100 w-96 shadow-sm">
      <p className="absolute top-5 right-5 text-white">Age:{feature.age}</p>
      <figure>
        <Image
          className="rounded-2xl"
          width={300}
          height={300}
          src={feature.image}
          alt={feature.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {feature.name}
          <div className="badge ">{feature.category}</div>
        </h2>
        <p>{feature.description}</p>
        <p>{feature.location}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
