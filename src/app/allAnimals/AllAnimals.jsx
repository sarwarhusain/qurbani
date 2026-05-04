"use client";
import AnimalCard from "@/component/AnimalCard";
import Booking from "@/component/Booking";
import React, { useState } from "react";

const AllAnimals = ({ animalData }) => {
  const [sort, setSort] = useState("");
  let sortedData = [...animalData];
  if (sort === "price") {
    sortedData.sort((a, b) => a.price - b.price);
  }
  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold text-3xl">All Animals is Here</h2>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li onClick={() => setSort("price")}>
          <a>Sort by Price</a>
        </li>
      </ul>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sortedData.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
      <Booking />
    </div>
  );
};

export default AllAnimals;
