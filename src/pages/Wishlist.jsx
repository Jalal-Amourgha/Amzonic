import { Underline, PageSection, Button } from "../components";
import { useGlobalContext } from "../context/AppContext";
import { JustForYou, DisplayWishlist } from "../sections";

const Wishlist = () => {
  const { numberOfWishlist, clearList } = useGlobalContext();

  return (
    <>
      <PageSection name="Wishlist" />
      <div className="container">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">
            Wishlist ({numberOfWishlist})
          </h1>
          <button
            className="py-3 px-4 border-[1px] rounded-md"
            onClick={clearList}
          >
            Clear List
          </button>
        </div>
      </div>
      <DisplayWishlist />
      <Underline />
      <JustForYou />
    </>
  );
};

export default Wishlist;
