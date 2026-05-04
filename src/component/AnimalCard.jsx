"use client";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOff } from "react-icons/ci";
import { LiaBirthdayCakeSolid, LiaWeightHangingSolid } from "react-icons/lia";

const AnimalCard = ({ animal }) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg my-2 card border border-white/20  rounded-2xl p-4 transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-cyan-400/40">
      <div className="relative overflow-hidden w-full h-56">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover rounded-2xl mb-4 w-full"
        />
      </div>
      <div className="p-4 space-y-2 ">
        <h2 className="text-xl font-semibold">{animal.name}</h2>
        <p className="text-sm text-gray-600">
          {animal.breed}: {animal.type}
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
          <span className="font-semibold text-green-600">৳ {animal.price}</span>
        </div>

        <Link
          className="block text-center w-full mt-3 bg-gray-300 text-black py-2 rounded-lg hover:bg-[#ffd148] transition"
          href={`/allAnimals/${animal.id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
