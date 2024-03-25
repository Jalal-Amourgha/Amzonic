const CategoryBox = ({ icon, name }) => {
  return (
    <div className="col">
      <div className="h-[145px] max-w-[170px] flex justify-center items-center flex-col border border-b-color rounded-md text-center text-black hover:bg-main-color hover:text-white hover:border-main-color duration-500 cursor-pointer">
        <i className={`${icon} text-4xl mb-3`}></i>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CategoryBox;
