import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-bg-color py-5 md:p-10 mt-[100px] text-center">
      <div className="container">
        <h1 className="text-2xl font-semibold  md:max-w-[600px] md:m-auto">
          Subscribe to get information, latest news and other interesting offers
          about Amazonic
        </h1>
        <div className="flex justify-center mt-10">
          <div className="relative">
            <input
              type="text"
              className="py-3 pl-[30px]  md:px-10 text-lg me-3 outline-none rounded-md"
              placeholder="Your email"
            />
            <div className="absolute top-[16px] left-[8px]">
              <i className="fa-regular fa-envelope text-[#9ca3af] text-lg"></i>
            </div>
          </div>
          <button className=" p-3 bg-main-color text-white text-lg rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
