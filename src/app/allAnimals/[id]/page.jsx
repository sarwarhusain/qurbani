import Booking from "@/component/Booking";
import { data } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOff } from "react-icons/ci";
import { LiaBirthdayCakeSolid, LiaWeightHangingSolid } from "react-icons/lia";

const page = async ({ params }) => {
  const { id } = await params;
  const details = await data(id);

  const animal = details.find((item) => item.id == id); //check the current id and the upcoming id is same
  return (
    <div className="container mx-auto max-w-7xl">
      <div className=" rounded-2xl overflow-hidden shadow-lg  hover:shadow-xl transition duration-300">
        <div className="relative w-full h-56">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">{animal.name}</h2>
          <p className="text-sm text-gray-600">
            {animal.breed} . {animal.type}
          </p>

          <p className="text-sm text-gray-600">{animal.description}</p>
          <div className="flex justify-between text-sm mt-2">
            <span className="flex justify-center items-center gap-1">
              <LiaWeightHangingSolid /> {animal.weight} Kg
            </span>
            <span className="flex justify-center items-center gap-1">
              <LiaBirthdayCakeSolid />
              {animal.age} yrs
            </span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="flex justify-center items-center gap-1">
              <CiLocationOff />
              {animal.location}
            </span>
            <span className="font-semibold text-green-600">
              ৳ {animal.price}
            </span>
          </div>

          <Link
            className="block text-center w-full mt-3 bg-gray-300 text-black py-2 rounded-lg hover:bg-[#ffd148] transition"
            href="/"
          >
            Home
          </Link>
        </div>
      </div>
      <div>
        <Booking />
      </div>
    </div>
  );
};

export default page;
