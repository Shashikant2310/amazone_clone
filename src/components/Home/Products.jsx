import axios from "axios";
import React, { useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10">
      {productData.map((item) => (
        <div
          key={item.id}
          className="w-full bg-white text-black p-4 hover:shadow-xl border border-gray-300 rounded-lg group overflow-hidden"
        >
          <div className="w-full h-[120px] md:h-[260px] relative">
            <img
              className="w-full h-full object-contain scale-90 hover:scale-100 transition-transform duration-300"
              src={item.image}
              width={300}
              height={300}
              alt="productImage"
            />
            <div className="w-12 h-24 border border-gray-400 rounded-md absolute bottom-10 right-0 flex flex-col justify-center items-center translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
              <span className="w-full h-full text-xl flex justify-center items-center border-b border-gray-300 bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                <HiShoppingCart />
              </span>
              <span className="w-full h-full text-xl flex justify-center items-center border-b border-gray-300 bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                <FaHeart />
              </span>
            </div>
          </div>
          <hr />
          <div className="px-2 flex flex-col gap-2">
            <p className="text-xs text-gray-500 tracking-wide">
              {item.category}
            </p>
            <p className="text-base font-medium">
              {item.title.substring(0, 20)}
            </p>
            <p className="flex  items-center gap-2">
              <span className=" text-amazon_blue font-semibold">
                ${item.price}
              </span>
            </p>
            <p className=" hidden md:block text-xs text-gray-600 text-justify">
              {item.description.substring(0, 100)}
            </p>
            <div className="flex text-yellow-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    image: item.image,
                    quantity: 1,
                  })
                )
              }
              className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
