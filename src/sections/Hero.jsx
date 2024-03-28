import { heroImg } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="h-[100vh] w-full bg-bg-color">
      <div className="container h-full">
        <div className="pt-10 h-full grid grid-cols-1 md:grid-cols-2">
          <div className="h-full flex justify-center items-center">
            <div>
              <p className="text-xl font-semibold text-main-color mb-3">
                Tech Collection
              </p>
              <h1 className="text-4xl md:text-[55px] font-semibold leading-[1.2]">
                Discover the Latest
                <br />
                <span className="text-main-color">Tech</span>Trends
              </h1>
              <div className="md:max-w-[75%] my-7">
                <p className="text-xl">
                  Welcome to <span className="text-main-color">Tech</span> Shop!
                  Explore our handpicked selection of cutting-edge gadgets
                  designed to elevate your digital lifestyle. Whether you're a
                  tech enthusiast, gamer, or creative, we've got everything you
                  need. Start your journey with us today!
                </p>
              </div>
              <button className="py-4 w-[150px] md:w-[250px] bg-main-color rounded-md text-white text-xl">
                Shop Now <i className="fa-solid fa-arrow-right  ml-3"></i>
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end ">
            <img src={heroImg} className="max-w-full" alt="Hero img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
