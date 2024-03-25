import { SectionTitle, Button, SaleCard } from "../components";
import { bestSelling } from "../constants";

const BestSelling = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title="This Month" />
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium">Best Selling Products</h1>
          <Button label="View All" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-10 mt-10">
          {bestSelling.map((product) => (
            <SaleCard
              key={product.label}
              img={product.img}
              label={product.label}
              newPrice={product.price}
              oldPrice={product.oldPrice}
              full={product.full}
              empty={product.empty}
              half={product.half}
              rate={product.rate}
              percent={product.percent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
