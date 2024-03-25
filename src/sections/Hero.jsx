import { heroImg } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="h-[100vh] w-full   bg-[#e3e3e1]">
      <div className="container h-full">
        <div className="pt-10 h-full grid grid-cols-1 md:grid-cols-2">
          <div className="h-full flex justify-center items-center">
            <div>
              <h1 className="text-[50px] font-semibold leading-[50px]">
                Get up to 30% Off
                <br />
                New Arrivals
              </h1>
              <p className="text-xl my-10">
                Welcome to Amazonic! Discover curated collections that redefine
                style and quality. Elevate your shopping experience today.
              </p>
              <button className="py-4 w-[150px] md:w-[250px] bg-main-color rounded-md text-white text-xl">
                Shop Now <i className="fa-solid fa-arrow-right  ml-3"></i>
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end ">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
