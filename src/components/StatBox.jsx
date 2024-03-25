import { useState } from "react";

const StatBox = ({ icon, value, label }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (label) => {
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div
      className="text-center px-5 py-8 border-[1px] border-b-color rounded-md hover:bg-main-color hover:text-white duration-500 cursor-pointer"
      onMouseEnter={() => handleMouseEnter(label)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-[80px] h-[80px] flex justify-center items-center border-[8px] border-[#d7d7d7] rounded-full cursor-pointer my-5 mx-auto duration-500 ${
          hoveredItem !== null ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <i className={`${icon} text-[36px]`}></i>
      </div>
      <h1 className="text-4xl font-bold my-4">{value}</h1>
      <p className="text-[16x]">{label}</p>
    </div>
  );
};

export default StatBox;
