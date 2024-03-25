import { useState } from "react";
import { SectionTitle, SaleCard, Button, Arrows } from "../components";
import { sales, time } from "../constants";

const Sales = () => {
  const [startIndex, setStartIndex] = useState(0);
  const elementsPerPage = 4;

  const handleClickNext = () => {
    if (startIndex + elementsPerPage < 6) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (startIndex - 1 >= 1) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(0);
    }
  };

  return (
    <section className="mt-10 ">
      <div className="container">
        <SectionTitle title="Today's" />
        <div className="flex justify-between items-center my-10">
          <h1 className="text-[35px] font-semibold">Flash Sales</h1>
          <div className="hidden md:flex">
            {time.map((time) => (
              <div key={time.value} className="flex items-center mr-10">
                <div className="text-center mr-[25px]">
                  <p className="font-normal">{time.time}</p>
                  <h1 className="text-[30px] font-semibold ">{time.value}</h1>
                </div>
                {time.id != 4 ? (
                  <h1 className="text-[30px] font-semibold text-main-color">
                    :
                  </h1>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <Arrows prev={handleClickPrev} next={handleClickNext} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-x-10">
          {sales.slice(startIndex, startIndex + elementsPerPage).map((sale) => (
            <SaleCard
              key={sale.label}
              img={sale.img}
              label={sale.label}
              newPrice={sale.price}
              oldPrice={sale.oldPrice}
              full={sale.full}
              empty={sale.empty}
              half={sale.half}
              rate={sale.rate}
              percent={sale.percent}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button label="Show More" />
        </div>
      </div>
    </section>
  );
};

export default Sales;
