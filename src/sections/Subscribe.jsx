import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#ffdddd] p-2 md:p-10 mt-[100px] text-center">
      <div className="container">
        <h1 className="text-2xl font-semibold  md:max-w-[600px] md:m-auto">
          Subscribe to get information, latest news and other interesting offers
          about Amazonic
        </h1>
        <div className="flex justify-center mt-10">
          <div className="relative">
            <input
              type="text"
              className="p-2 md:py-4 md:px-10 text-lg me-3 outline-none rounded-md"
              placeholder="Your email"
            />
            <div className="absolute top-[35%] left-3">
              <i className="fa-regular fa-envelope text-[#9ca3af] text-lg"></i>
            </div>
          </div>
          <button className="p-2 md:p-4 bg-main-color text-white text-lg rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
