import { Button, Card } from "@heroui/react";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const Plan = () => {
  return (
    <div className="border rounded-2xl shadow border-gray-100 container mx-auto my-10 p-5">
      <Card className="w-full items-stretch md:flex-row my-2">
        <div className="flex gap-3 items-center justify-center ">
          <div className="border rounded-full p-5">
            <FaCheck className="text-3xl" />
          </div>
          <Card.Header className="gap-1">
            <Card.Title className="pr-8">Choose Your Qurbani</Card.Title>
            <Card.Description>
              Select your Qurbani from our extensive Collection
            </Card.Description>
          </Card.Header>
        </div>
      </Card>
      <Card className="w-full items-stretch md:flex-row">
        <div className="flex gap-3 items-center justify-center">
          <div className="border rounded-full p-5">
            <MdAttachMoney className="text-3xl" />
          </div>
          <Card.Header className="gap-1">
            <Card.Title className="pr-8">Pay at shop or online</Card.Title>
            <Card.Description>
              You can pay via card in our site or cash in our store
            </Card.Description>
          </Card.Header>
        </div>
      </Card>
      <Card className="w-full items-stretch md:flex-row my-2">
        <div className="flex gap-3 items-center justify-center">
          <div className="border rounded-full p-5">
            <CiDeliveryTruck className="text-3xl" />
          </div>
          <Card.Header className="gap-1">
            <Card.Title className="pr-8">
              Get delivered at your doorstep
            </Card.Title>
            <Card.Description>
              You will get your delivery at the right time at your place
            </Card.Description>
          </Card.Header>
        </div>
      </Card>
    </div>
  );
};

export default Plan;
