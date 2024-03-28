import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";
import BestSelling from "../sections/BestSelling";

const ViewProduct = () => {
  const { myWishlist, updateWishlist } = useGlobalContext();
  const location = useLocation();
  const data = location.state[0];
  const full = Array.from({ length: data.FullStars }, (_, index) => index);
  const half = Array.from({ length: data.HalfStars }, (_, index) => index);
  const empty = Array.from({ length: data.EmptyStars }, (_, index) => index);
  const productImgs = Array.from({ length: 4 }, (_, index) => index);
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    const count = quantity + 1;
    if (count > 10) {
      setQuantity(10);
    } else {
      setQuantity(count);
    }
  };

  const decrement = () => {
    const count = quantity - 1;
    if (count <= 0) {
      setQuantity(0);
    } else {
      setQuantity(count);
    }
  };

  const addToWishlist = () => {
    updateWishlist([
      ...myWishlist,
      { img: data.img, name: data.name, price: data.price, cart: false },
    ]);
  };

  const addToCart = () => {
    updateWishlist([
      ...myWishlist,
      { img: data.img, name: data.name, price: data.price, cart: true },
    ]);
  };

  return (
    <>
      <div className="container my-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
          <div className="flex">
            <div className="flex justify-between flex-col me-3">
              {productImgs.map((img, index) => (
                <div
                  key={index}
                  className="w-[100px] bg-gray p-2 rounded-md  hover:border cursor-pointer"
                >
                  <img src={data.img} alt="product img" />
                </div>
              ))}
            </div>
            <div className="bg-gray rounded-md w-full flex justify-center items-center">
              <img src={data.img} className="w-[250px]" alt="product img" />
            </div>
          </div>
          <div className="lg:px-10">
            <h1 className="text-2xl font-semibold mb-3">{data.name}</h1>
            <div className="flex items-center">
              {full.map((full, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star text-[#FFAD33] mr-2"
                ></i>
              ))}
              {half.map((full, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star-half-stroke text-[#FFAD33] mr-2"
                ></i>
              ))}
              {empty.map((full, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star text-[#7D8184] mr-2"
                ></i>
              ))}
              <p className="text-[#7D8184] text-lg">
                ({data.reviews} Reviews) |{" "}
                <span className="text-green-400">In Stock</span>
              </p>
            </div>
            <h1 className="text-2xl my-3">${data.price}.00</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              accusantium quo tempore tempora labore magni nobis facere
              consequuntur.
            </p>
            <div className="h-[1px] w-full bg-[#7d8184] my-4"></div>
            <div className="flex justify-between">
              <div className="flex border border-b-color rounded-md w-fit overflow-hidden">
                <div
                  className="py-2 px-4  hover:bg-main-color hover:text-white duration-300 cursor-pointer"
                  onClick={decrement}
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <h1 className="py-2 px-3 border-x border-b-color cursor-pointer">
                  {quantity}
                </h1>
                <div
                  className="py-2 px-3 hover:bg-main-color hover:text-white duration-300 cursor-pointer"
                  onClick={increment}
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div
                className="bg-main-color text-white py-2 px-4 rounded-md cursor-pointer"
                onClick={addToCart}
              >
                But Now
              </div>
              <div
                className="py-2 px-3 border border-b-color rounded-md hover:bg-main-color hover:text-white duration-300 cursor-pointer"
                onClick={addToWishlist}
              >
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="mt-5 border border-b-color rounded-md">
              <div className="flex items-center p-4 border-b border-b-color">
                <i className="fa-solid fa-truck-fast text-3xl me-4"></i>
                <div>
                  <h1>Free Delivery</h1>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <i className="fa-solid fa-arrows-rotate text-3xl me-4"></i>
                <div>
                  <h1>Return Delivery</h1>
                  <p>
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestSelling section="Related Item" />
    </>
  );
};

export default ViewProduct;
