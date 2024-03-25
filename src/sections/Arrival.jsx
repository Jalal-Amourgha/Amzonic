import { arrival1, arrival2, arrival3, arrival4 } from "../assets/images";
import { SectionTitle } from "../components";

const Arrival = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title="Featured" />
        <h1 className="text-[35px] font-medium mb-10">New Arrival</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={arrival1}
              className="w-full cursor-pointer"
              alt="arrival img"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <img
                src={arrival2}
                className="w-full cursor-pointer"
                alt="arrival img"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <img
                  src={arrival3}
                  className="w-full cursor-pointer"
                  alt="arrival img"
                />
              </div>
              <div>
                <img
                  src={arrival4}
                  className="w-full cursor-pointer"
                  alt="arrival img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
