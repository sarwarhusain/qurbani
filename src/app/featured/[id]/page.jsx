import { data } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOff } from "react-icons/ci";
import { LiaBirthdayCakeSolid, LiaWeightHangingSolid } from "react-icons/lia";

const FeatureDet = async ({ params }) => {
  const { id } = await params;
  const featuredDetails = await data(id);
  const feature = featuredDetails.find((item) => item.id == id);
  return (
    <div>
      <div className="w-full rounded-2xl overflow-hidden shadow-lg  hover:shadow-xl transition duration-300">
        <div className="relative w-full h-56">
          <Image
            src={feature.image}
            alt={feature.name}
            fill
            
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">{feature.name}</h2>
          <p className="text-sm text-gray-600">
            {feature.breed} . {feature.type}
          </p>

          <p className="text-sm text-gray-600">{feature.description}</p>
          <div className="flex justify-between text-sm mt-2">
            <span className="flex justify-center items-center gap-1">
              <LiaWeightHangingSolid /> {feature.weight} Kg
            </span>
            <span className="flex justify-center items-center gap-1">
              <LiaBirthdayCakeSolid />
              {feature.age} yrs
            </span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="flex justify-center items-center gap-1">
              <CiLocationOff />
              {feature.location}
            </span>
            <span className="font-semibold text-green-600">
              ৳ {feature.price}
            </span>
          </div>
          <Link
            className="block text-center w-full mt-3 bg-gray-300 text-black py-2 rounded-lg hover:bg-[#ffd148] transition"
            href="/"
          >
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureDet;
