import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../redux/amazonSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setDetails(location.state.product);
  }, []);
  return (
    <div>
      <div>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-100 mb-4">
                  <img
                    className="w-full h-full object-contain"
                    src={details.image}
                    alt="Product"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4 flex justify-center items-center">
                <div className="px-4 flex flex-col gap-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {details.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {details.description}
                  </p>
                  <div className="mr-4 mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-gray-600 text-xl font-medium dark:text-gray-300">
                      ${details.price}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: details.id,
                            title: details.title,
                            description: details.description,
                            price: details.price,
                            category: details.category,
                            image: details.image,
                            quantity: 1,
                          })
                        )
                      }
                      className=" bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-3 py-1 font-titleFont font-semibold text-lg"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
