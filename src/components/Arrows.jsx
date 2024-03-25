const Arrows = ({ next, prev }) => {
  return (
    <div className="flex items-center">
      <div className="cursor-pointer" onClick={prev}>
        <i className="fa-solid fa-arrow-left text-2xl p-3 md:p-4 hover:bg-main-color hover:text-white duration-500	 bg-gray rounded-full mr-5"></i>
      </div>
      <div className="cursor-pointer" onClick={next}>
        <i className="fa-solid fa-arrow-right text-2xl p-3 md:p-4 hover:bg-main-color hover:text-white duration-500 bg-gray rounded-full"></i>
      </div>
    </div>
  );
};

export default Arrows;
