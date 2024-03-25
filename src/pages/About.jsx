import { aboutImg } from "../assets/images";
import { PageSection, StatBox, Underline } from "../components";
import { stats } from "../constants";
import { Employees, Services } from "../sections";

const About = () => {
  return (
    <section>
      <PageSection name="About" />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="m-auto order-2 md:order-1">
            <h1 className="text-4xl font-bold mb-8">Our Story</h1>
            <p className="text-xl leading-8 mb-5">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-xl leading-8 mb-5">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={aboutImg} className="max-w-full" alt="about img" />
          </div>
        </div>
        <Underline />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-20 md:gap-x-6 mt-[80px]">
          {stats.map((stat) => (
            <StatBox
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
        <Underline />
        <Employees />
        <Underline />
        <Services />
      </div>
    </section>
  );
};

export default About;
