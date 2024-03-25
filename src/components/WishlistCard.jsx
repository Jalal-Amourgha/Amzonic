import { useGlobalContext } from "../context/AppContext";

const WishlistCard = ({ img, name, price }) => {
  const { myWishlist, removeItem, updateWishlist } = useGlobalContext();

  const addToCart = () => {
    updateWishlist([
      ...myWishlist,
      { img: img, name: name, price: price, cart: true },
    ]);
  };

  return (
    <div className="relative">
      <div className="bg-gray relative flex items-center justify-center w-full h-[270px] rounded-md cursor-pointer">
        <img src={img} alt="product img" />

        <div
          className="absolute bottom-0 left-0 bg-black text-white text-center w-full py-2 rounded-b-lg"
          onClick={addToCart}
        >
          Add To Cart
        </div>
      </div>
      <div
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => removeItem(name)}
      >
        <i className="fa-regular fa-trash-can text-xl p-2 bg-white hover:bg-main-color hover:text-white duration-300 rounded-full"></i>
      </div>
      <h1 className="text-xl font-medium my-3">{name}</h1>
      <h1 className="text-main-color font-semibold text-xl">${price}</h1>
    </div>
  );
};

export default WishlistCard;
