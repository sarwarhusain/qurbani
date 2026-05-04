"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaLeaf, FaShieldAlt, FaHandshake } from "react-icons/fa";

const AboutCard = () => {
  return (
    <div className="max-w-4xl min-h-screen mx-auto my-10 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg animate__animated animate__fadeInUp">
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__pulse">
        About QurbaniHat
      </h2>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <div className="p-5 rounded-xl bg-white/20 hover:bg-white/30 transition duration-300 hover:-translate-y-2">
          <FaLeaf className="text-3xl text-green-500 mb-3" />
          <h3 className="font-semibold text-lg">100% Halal</h3>
          <p className="text-sm text-gray-600 mt-2">
            We ensure all animals are ethically raised and fully halal
            certified.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-5 rounded-xl bg-white/20 hover:bg-white/30 transition duration-300 hover:-translate-y-2">
          <FaShieldAlt className="text-3xl text-blue-500 mb-3" />
          <h3 className="font-semibold text-lg">Safe & Trusted</h3>
          <p className="text-sm text-gray-600 mt-2">
            Verified sellers and secure booking system for your peace of mind.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-5 rounded-xl bg-white/20 hover:bg-white/30 transition duration-300 hover:-translate-y-2">
          <FaHandshake className="text-3xl text-orange-500 mb-3" />
          <h3 className="font-semibold text-lg">Easy Booking</h3>
          <p className="text-sm text-gray-600 mt-2">
            Book your Qurbani animal instantly with a simple and fast process.
          </p>
        </div>
        <div>
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
