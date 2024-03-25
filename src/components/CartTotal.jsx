import { useState } from "react";
import { useGlobalContext } from "../context/AppContext";
import { Button } from "../components";
import { Link } from "react-router-dom";

const CartTotal = ({ billig }) => {
  const { getTotalPrice } = useGlobalContext();

  return (
    <div
      className={`${
        billig
          ? ""
          : "border-black border-[1px] w-[500px] p-4 rounded-md bg-white"
      }`}
    >
      {billig ? (
        ""
      ) : (
        <h1 className="text-2xl font-semibold mb-6">Cart Total </h1>
      )}

      <div className="flex justify-between items-center text-xl">
        <h1 className="font-medium">SubTotal:</h1>
        <h1 className="font-normal">${getTotalPrice()}</h1>
      </div>
      <div className="w-full h-[1px] bg-b-color my-5"></div>
      <div className="flex justify-between items-center text-xl">
        <h1 className="font-medium">Shipping:</h1>
        <h1 className="font-normal">
          {getTotalPrice() > 1000 ? "Free" : "$50"}
        </h1>
      </div>
      <div className="w-full h-[1px] bg-b-color my-5"></div>
      <div className="flex justify-between items-center text-xl">
        <h1 className="font-medium">Total:</h1>
        <h1 className="font-normal">
          ${getTotalPrice() < 1000 ? getTotalPrice() + 50 : getTotalPrice()}
        </h1>
      </div>
      {billig ? (
        ""
      ) : (
        <div className="text-center mt-5">
          <Link to="/billing">
            <Button label="Procees to checkout" border={false} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
