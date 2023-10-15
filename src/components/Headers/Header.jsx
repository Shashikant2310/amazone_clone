import React from "react";
import { logo } from "../../assets/index";
import { cartIcon } from "../../assets/index";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="w-full h-full inline-flex justify-between items-center mx-auto gap-1 mdl:gap-3 px-4 ">
        <a
          href="/"
          className="px-2 border border-transparent hover:border-white duration-300 rounded cursor-pointer flex justify-center items-center h-[70%] "
        >
          <img className="w-28 object-cover mt-1" src={logo} alt="logoImage" />
        </a>
        <div className="px-2 border border-transparent hover:border-white duration-300 rounded cursor-pointer hidden xl:inline-flex gap-1 justify-center items-center h-[70%] ">
          <SlLocationPin />
          <div className="text-xs">
            <p>Delivery</p>
            <p className="text-shite uppercase font-bold">USA</p>
          </div>
        </div>
        <div className="h-10 flex-1 md:inline-flex justify-between items-center hidden relative">
          <input
            className="w-full h-full border-[3px] border-transparent focus-visible:border-amazon_yellow outline-none rounded-md px-2 placeholder:text-sm text-base text-black "
            type="text"
            placeholder="Search amazon.in"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex justify-center items-center absolute right-0 rounded-tr-md rounded-br-md ">
            <HiOutlineSearch />
          </span>
        </div>
        <Link to="/signin">
          <div className="px-2 text-xs text-gray-100 border border-transparent hover:border-white duration-300 rounded cursor-pointer flex flex-col justify-center h-[70%] ">
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        </Link>
        <div className="px-2 text-xs text-gray-100 border border-transparent hover:border-white duration-300 rounded cursor-pointer flex flex-col justify-center h-[70%] ">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
        </div>
        <a
          href="/cart"
          className=" relative border border-transparent hover:border-white duration-300 rounded cursor-pointer flex items-center h-[70%]  px-2"
        >
          <img
            className="w-auto h-8 object-cover"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-white font-bold text-xs mt-3">Cart</p>
          <span className="text-sm text-amazon_yellow font-semibold absolute top-2 left-[29px]">
            0
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
