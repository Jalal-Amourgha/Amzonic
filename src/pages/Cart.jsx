import { PageSection, CartBar, CartTotal, Button } from "../components";
import { CartItems } from "../sections";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

const Cart = () => {
  return (
    <>
      <PageSection name="Cart" />
      <CartBar />
      <CartItems />
      <div className="container">
        <div className="flex justify-between">
          <Link to="/">
            <Button label="Back To Shop" border={true} />
          </Link>
          <Button label="Update Cart" border={true} />
        </div>
        <div className="mt-10">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-[300px] outline-none p-3 mr-3 border-[1px] border-b-color rounded-md"
          />
          <button className="py-3 px-5 bg-main-color rounded-md text-white outline-none">
            Apply Coupon
          </button>
        </div>
      </div>

      <div className="container flex justify-end">
        <CartTotal billig={false} />
      </div>
    </>
  );
};

export default Cart;
