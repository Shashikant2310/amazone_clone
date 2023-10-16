import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { emptyCart } from "../assets/index";
import {
  deleteItem,
  resetCart,
  increseQuantity,
  decreseQuantity,
} from "../redux/amazonSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState(null);
  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [products]);
  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-2">
          <div className=" col-span-4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-medium text-2xl">Shopping Cart</h1>
              <h2 className="font-normal text-xl">3 Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {products.map((item) => (
              <div className="flex items-center select-none hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="w-24 object-cover"
                      src={item.image}
                      alt="products"
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-base">{item.title}</span>
                    <span className="text-red-500 text-xs">
                      {item.category}
                    </span>
                    <a
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="font-semibold cursor-pointer hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center w-1/5">
                  {/* svg */}
                  <svg
                    onClick={() => dispatch(decreseQuantity(item.id))}
                    class="fill-current cursor-pointer text-gray-600 w-4 h-3 flex items-center"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <p className="font-titleFont mx-4 text-base font-semibold text-amazon_blue">
                    {item.quantity}
                  </p>
                  {/* svg */}
                  <svg
                    onClick={() => dispatch(increseQuantity(item.id))}
                    class="fill-current cursor-pointer text-gray-600 w-4 h-3 flex items-center"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center  w-1/5 font-semibold text-base">
                  ${item.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-base">
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-around font-semibold text-indigo-600 text-sm mt-10">
              <Link to="/">
                <div className="flex items-center h-full">
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </div>
              </Link>
              <div>
                <button
                  onClick={() => dispatch(resetCart())}
                  className="bg-red-500 font-semibold hover:bg-red-600 py-2 px-4 text-sm text-white uppercase duration-300 w-full"
                >
                  Clear cart
                </button>
              </div>
            </div>
          </div>

          <div className="px-8 py-10">
            <h1 className="font-medium text-2xl">Order Summary</h1>

            <div className="border-t mt-8">
              <div className="flex font-semibold items-center gap-4 py-6 text-sm uppercase">
                <span>Total cost</span>
                <span className="text-xl">${totalPrice}</span>
              </div>
              <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
