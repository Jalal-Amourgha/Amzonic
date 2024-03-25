import { useState } from "react";
import { PageSection, Button } from "../components";
import { contact, contactInputs } from "../constants";

const Contact = () => {
  const [selectedInput, setSelectedInput] = useState("");

  const handelLog = () => {
    setHaveAccount(true);
  };

  const handleInputChange = (input) => {
    setSelectedInput(input);
  };
  return (
    <section>
      <PageSection name="Contact" />
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="contact-boxes basis-full box-shadow lg:basis-1/3 rounded-md p-5 md:p-7  mb-10 lg:mb-0 lg:mr-10">
            {contact.map((box, index) => (
              <div key={index}>
                <div className="flex items-center mb-7 ">
                  <div className="w-[48px] h-[48px] bg-main-color flex justify-center items-center mr-2 rounded-full">
                    <img
                      src={box.img}
                      className="w-[26px] h-[26px] m-auto block"
                    />
                  </div>
                  <h1 className="font-medium text-2xl">{box.label}</h1>
                </div>
                <div>
                  {box.informations.map((information, index) => (
                    <p key={index} className="mb-5 text-xl font-normal">
                      {information.label}
                    </p>
                  ))}
                </div>
                {box.line ? (
                  <div className="h-[1px] w-full bg-b-color my-10 "></div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div className="contact-boxes basis-full box-shadow lg:basis-2/3 rounded-md p-5 md:p-7">
            <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 gap-x-5 mb-6">
              {contactInputs.map((input) => (
                <div key={input.label}>
                  <input
                    type={input.type}
                    placeholder={input.label}
                    className={`${
                      selectedInput === input.label
                        ? "border-[1px] border-main-color placeholder:text-main-color"
                        : ""
                    } w-full bg-[#eeeeee] p-3 outline-none text-[18px] rounded-md`}
                    onClick={() => handleInputChange(input.label)}
                  />
                </div>
              ))}
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                cols="30"
                rows="10"
                className={`${
                  selectedInput === "message"
                    ? "border-[1px] border-main-color placeholder:text-main-color"
                    : ""
                } w-full bg-[#eeeeee] p-3 outline-none text-[18px] rounded-md`}
                onClick={() => handleInputChange("message")}
              ></textarea>
            </div>
            <div className="text-end ">
              <Button label="Send Message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
