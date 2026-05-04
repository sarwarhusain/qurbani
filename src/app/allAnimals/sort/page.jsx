"use client";

import { useState } from "react";

const Sort = ({ animalData }) => {
  const [sort, setSort] = useState("");
  let sortedData = [...(animalData || [])];
  if (sort === "price") {
    sortedData.sort((a, b) => {
      return a.price - b.price;
    });
  }
  return (
    <div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li onClick={() => setSort("price")}>
          <a>Sort by Price</a>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
