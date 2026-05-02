import Image from "next/image";
import React from "react";

const CattleGreat = () => {
  return (
    <div className="container mx-auto card bg-base-100 w-full">
      <h2 className="text-2xl font-semibold">What make our cattle great?</h2>
      <p>Learn why you should choose our cattle</p>
      <figure className=" p-2 ">
        <Image
          width={1000}
          height={1000}
          src="https://i.postimg.cc/3Jd4H459/alpine-mountain-with-cows-france-spring.jpg"
          alt="cows"
          className="rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Farming practices</h2>
        <p>
          The crucial aspect to great quality meat is in the nurturing of the
          livestock. We at Bengal Meat, practice all-natural processes in the
          upbringing of the cattle, its food habit and habitat. So, all cattle
          in our farm grow up in freedom & comfort, they eat & drink to their
          desire, always live in a clean environment and periodically get
          checked for any diseases. All these together support in making the
          cattle stress free, which help greatly in producing the best quality
          meat.
        </p>
      </div>
    </div>
  );
};

export default CattleGreat;
