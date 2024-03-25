import { WishlistCard } from "../components";
import { useGlobalContext } from "../context/AppContext";

const DisplayWishlist = () => {
  const { myWishlist } = useGlobalContext();
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {myWishlist.map((wishlist) =>
            wishlist.cart !== true ? (
              <WishlistCard
                key={wishlist.name}
                img={wishlist.img}
                name={wishlist.name}
                price={wishlist.price}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DisplayWishlist;
