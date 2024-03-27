import { useGlobalContext } from "../context/AppContext";
const CategoryBox = ({ icon, name, categorySelected }) => {
  const { category, setCategory } = useGlobalContext();
  return (
    <div className="col" onClick={() => setCategory(categorySelected)}>
      <div
        className={`h-[145px] max-w-[170px] flex justify-center items-center flex-col border border-b-color rounded-md text-center text-black hover:bg-main-color hover:text-white hover:border-main-color duration-500 cursor-pointer 54 ${
          category === categorySelected ? "selected" : ""
        }`}
      >
        <i className={`${icon} text-4xl mb-3`}></i>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CategoryBox;
