import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/AppContext";

const CartItems = () => {
  const { myWishlist, removeItem, quantities, setQuantities, getTotalPrice } =
    useGlobalContext();

  useEffect(() => {
    const initialQuantities = {};
    myWishlist.forEach((item) => {
      if (item.cart) {
        initialQuantities[item.name] = 1;
      }
    });
    setQuantities(initialQuantities);
  }, [myWishlist]);

  const handleQuantityChange = (itemName, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: quantity,
    }));
  };

  return (
    <section className="mt-10">
      <div className="container">
        <div className="">
          {myWishlist.map((item) =>
            item.cart ? (
              <div
                key={item.name}
                className="grid grid-cols-4 gap-x-5 mb-10 p-3 rounded-md h-[80px] cursor-pointer box-shadow"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    className="w-[100px] h-[60px] "
                    alt="product img"
                  />
                  <div
                    className="absolute top-0 left-0 z-10 h-[20px] w-[20px] flex justify-center items-center bg-main-color text-white rounded-full cursor-pointer"
                    onClick={() => removeItem(item.name)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
                <h1 className="m-auto text-xl font-semibold">${item.price}</h1>
                <div className="m-auto">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={quantities[item.name] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.name, parseInt(e.target.value))
                    }
                    className="p-1 w-[50px] text-xl text-center outline-none border-[1px] border-b-color rounded-md"
                  />
                </div>
                <h1 className="text-end my-auto text-xl font-semibold">
                  ${item.price * (quantities[item.name] || 1)}
                </h1>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CartItems;
