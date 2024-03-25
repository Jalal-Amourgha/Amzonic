import { billingInformations, paymethods } from "../constants";
import { useGlobalContext } from "../context/AppContext";
import { CartTotal, Button } from "../components";
import { useState } from "react";

const BillingDetails = () => {
  const { myWishlist } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section>
      <div className="container">
        <h1 className="text-[30px] font-semibold mb-5">Billing Details</h1>
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="my-20 md:my-0">
            {billingInformations.map((input, index) => (
              <div key={index} className="mb-5">
                <p className="text-b-color text-md">
                  {input.label}
                  {input.optional ? (
                    ""
                  ) : (
                    <span className="text-main-color">*</span>
                  )}
                </p>
                <input
                  type={input.type}
                  className="p-2 w-[100%] md:w-[60%] bg-[#eeeeee] rounded-md"
                />
              </div>
            ))}
            <div className="flex items-center mt-5">
              <input
                type="checkbox"
                className="accent-main-color h-[20px] w-[20px] mr-3"
              />
              <p className="text-xl">
                Save this information for faster check-out next time
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              {myWishlist.map((product) =>
                product.cart ? (
                  <div key={product.name} className="flex justify-between mb-5">
                    <div className="flex items-center">
                      <img
                        src={product.img}
                        className="w-[50px] mr-3"
                        alt={product.name}
                      />
                      <h1>{product.name}</h1>
                    </div>

                    <h1 className="font-semibold">${product.price}</h1>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <CartTotal billig={true} />
            <div className="mt-5">
              {paymethods.map((method) => (
                <div
                  key={method.name}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id={method.option}
                      name="option"
                      value={method.option}
                      className="accent-black h-[20px] w-[20px]"
                      checked={selectedOption === method.option}
                      onChange={handleOptionChange}
                    />
                    <label
                      htmlFor={method.option}
                      className="text-xl font-medium ml-2"
                    >
                      {method.name}
                    </label>
                  </div>
                  {method.icons ? (
                    <div className="flex items-center">
                      {method.icons.map((icon, index) => (
                        <img
                          src={icon.icon}
                          className={`w-[40px] ${index !== 2 ? "mr-3" : ""}`}
                          key={index}
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <Button label="Place Order" border={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingDetails;
