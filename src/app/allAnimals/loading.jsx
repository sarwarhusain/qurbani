import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center my-20 ">
      <span className="loading loading-spinner loading-xl text-pink-500"></span>
    </div>
  );
};

export default loading;
