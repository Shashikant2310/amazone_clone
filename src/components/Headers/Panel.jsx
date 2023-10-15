import React from "react";
import { LuMenu } from "react-icons/lu";

const Panel = () => {
  return (
    <div className="h-10 bg-amazon_light text-white text-sm flex items-center gap-2 px-4">
      <p className="flex items-center gap-1">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center px-2 cursor-pointer">
        Todays deals
      </p>
      <p className="hidden md:inline-flex items-center px-2 cursor-pointer">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center px-2 cursor-pointer">
        Registery
      </p>
      <p className="hidden md:inline-flex items-center px-2 cursor-pointer">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center px-2 cursor-pointer">
        Sell
      </p>
      <p className=" text-amazon_yellow hover:text-red-600 flex items-center px-2 cursor-pointer">
        sign Out
      </p>
    </div>
  );
};

export default Panel;
