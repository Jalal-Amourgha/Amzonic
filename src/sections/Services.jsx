import { services } from "../constants";
import { SectionTitle } from "../components";

const Services = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title="Our Services" />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-5  rounded-md  cursor-pointer duration-300 hover:bg-black hover:text-white"
            >
              <div className="flex justify-center items-center m-auto bg-black w-[70px] h-[70px] rounded-full border-[8px] border-[#d7d7d7]">
                <img
                  src={service.icon}
                  className="h-[40px] w-[40px] block m-auto"
                  alt="service icon"
                />
              </div>
              <h1 className="font-bold text-xl mt-5 mb-3 uppercase">
                {service.title}
              </h1>
              <p>{service.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
