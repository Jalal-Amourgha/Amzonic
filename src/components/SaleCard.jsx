import { useState } from "react";
import { heart, eye } from "../assets/icons";
import { useGlobalContext } from "../context/AppContext";

const SaleCard = ({
  img,
  label,
  newPrice,
  oldPrice,
  full,
  empty,
  half,
  rate,
  percent,
  wish,
}) => {
  const { myWishlist, updateWishlist, setShowPopup } = useGlobalContext();
  const updateList = () => {
    updateWishlist([
      ...myWishlist,
      { img: img, name: label, price: newPrice, cart: false },
    ]);
    setShowPopup(true);
  };

  const addToCart = () => {
    updateWishlist([
      ...myWishlist,
      { img: img, name: label, price: newPrice, cart: true },
    ]);
    setShowPopup(true);
  };

  const fullStars = Array.from({ length: full }, (_, index) => index);
  const emptyStars = Array.from({ length: empty }, (_, index) => index);
  const halfStars = Array.from({ length: half }, (_, index) => index);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (label) => {
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="relative ">
      {percent !== null ? (
        <div className="absolute top-[10px] left-[10px] z-10 bg-main-color px-2 py-1 text-white rounded-lg">
          -{percent}%
        </div>
      ) : (
        ""
      )}
      <div
        className="bg-gray relative flex items-center justify-center w-full h-[270px] rounded-md cursor-pointer"
        onMouseEnter={() => handleMouseEnter(label)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={img} alt="item img" />
        {hoveredItem === label ? (
          <div
            className="absolute bottom-0 left-0 bg-black text-white text-center w-full py-2 rounded-b-lg"
            onClick={addToCart}
          >
            Add To Cart
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-2">
        <h1 className="font-medium">{label}</h1>
        <h1 className="text-main-color font-bold text-xl my-3">
          ${newPrice}
          {oldPrice !== "" ? (
            <span className="ml-2 text-[#7D8184] line-through">
              ${oldPrice}
            </span>
          ) : (
            ""
          )}
        </h1>
        <ul className="flex">
          {fullStars.map((star) => (
            <li key={star}>
              <i className="fa-solid fa-star text-[#FFAD33] mr-2"></i>
            </li>
          ))}
          {halfStars.map((star) => (
            <li key={star}>
              <i className="fa-solid fa-star-half-stroke text-[#FFAD33] mr-2"></i>
            </li>
          ))}
          {emptyStars.map((star) => (
            <li key={star}>
              <i className="fa-solid fa-star text-[#7D8184] mr-2"></i>
            </li>
          ))}
          <li className="font-medium text-[#7D8184]">({rate})</li>
        </ul>
      </div>
      <div className="absolute top-[10px] right-[10px]">
        {wish == "no" ? (
          ""
        ) : (
          <div
            className="h-[30px] w-[30px] bg-white rounded-full mb-2 flex justify-center items-center hover:bg-green-400 hover:text-white cursor-pointer"
            onClick={updateList}
          >
            <i className="fa-regular fa-heart"></i>
          </div>
        )}
        <div className="h-[30px] w-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer">
          <img src={eye} alt="heart icon" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
