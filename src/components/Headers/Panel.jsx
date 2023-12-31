import React from "react";
import { LuMenu } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../redux/amazonSlice";
import { useNavigate } from "react-router-dom";

const Panel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignOut() {
    dispatch(userSignOut());
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  }
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
      <button onClick={handleSignOut}>
        <p className=" text-amazon_yellow hover:text-red-600 flex items-center px-2 cursor-pointer">
          sign Out
        </p>
      </button>
    </div>
  );
};

export default Panel;
