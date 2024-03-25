import { sales } from "../constants";
import { Button, SaleCard } from "../components";

const JustForYou = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-medium">Just For You</h1>
          <Button label="See All" border={true} />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 md:gap-10 xl:gap-x-10 md:gap-y-10">
          {sales.map((sale, index) =>
            index < 4 ? (
              <SaleCard
                key={index}
                img={sale.img}
                label={sale.label}
                newPrice={sale.price}
                oldPrice={sale.oldPrice}
                rate={sale.rate}
                full={sale.full}
                half={sale.half}
                empty={sale.empty}
                percent={sale.percent}
                wish="no"
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default JustForYou;
