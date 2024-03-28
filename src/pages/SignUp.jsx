import { signupImg } from "../assets/images";
import { google } from "../assets/icons";
import { signup, login } from "../constants";
import { useState } from "react";
import { Button } from "../components";

const SignUp = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [selectedInput, setSelectedInput] = useState("");

  const handelLog = () => {
    setHaveAccount(true);
  };

  const handleInputChange = (input) => {
    setSelectedInput(input);
  };

  return (
    <section className="mt-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block">
            <img
              src={signupImg}
              className="m-auto rounded-md mb-10"
              alt="signup img"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[370px] block  m-auto">
              {haveAccount ? (
                <div className="flex justify-between items-center mb-3">
                  <h1 className="text-3xl font-medium">Log in to Exclusive</h1>
                  <i
                    className="fa-solid fa-arrow-left text-main-color text-3xl cursor-pointer"
                    onClick={(prev) => setHaveAccount(!prev)}
                  ></i>
                </div>
              ) : (
                <h1 className="text-3xl font-medium mb-3">Create an account</h1>
              )}

              <p className="mb-10">
                {login
                  ? "Enter your details below"
                  : "Enter your details below"}
              </p>
              {haveAccount
                ? login.map((input) => (
                    <div key={input.placeholder}>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className={`border-b-[1px] outline-none text-md py-2 mb-5 w-full ${
                          selectedInput === input.type
                            ? "border-main-color placeholder:text-main-color"
                            : "border-[#7D8184]"
                        }`}
                        onClick={() => handleInputChange(input.type)}
                      />
                    </div>
                  ))
                : signup.map((input) => (
                    <div key={input.placeholder}>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        className={`border-b-[1px] outline-none text-md py-2 mb-5 w-full ${
                          selectedInput === input.type
                            ? "border-main-color placeholder:text-main-color"
                            : "border-[#7D8184]"
                        }`}
                        onClick={() => handleInputChange(input.type)}
                      />
                    </div>
                  ))}

              {haveAccount ? (
                <div className="flex justify-between items-center">
                  <Button label="Log in" />
                  <div className="text-main-color cursor-pointer">
                    Forgot Password?
                  </div>
                </div>
              ) : (
                <div>
                  <button className="bg-main-color text-white w-full border-none outline-none p-3 rounded-md">
                    Create Account
                  </button>
                  <div className="w-full border-[1px] border-[#7d8184] rounded-md flex justify-center items-center cursor-pointer p-3 mt-5">
                    <img
                      src={google}
                      className="w-[22px] h-[22px] mr-[12px]"
                      alt="google icon"
                    />
                    Sign up with Google
                  </div>
                  <p className="text-[#7d8184] text-center mt-6">
                    Already have account?{" "}
                    <span
                      className="font-bold underline cursor-pointer hover:text-main-color"
                      onClick={handelLog}
                    >
                      Log in
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
