import { products } from "../constants";
import { SectionTitle, SaleCard, Arrows, Button } from "../components";

const Products = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title="Our Products" />
        <div className="flex justify-between items-center">
          <h1 className="text-[30px] font-medium">Explore Our Products</h1>
          <Arrows />
        </div>
        <div className="grid grid-cold-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-16">
          {products.map((product) => (
            <SaleCard
              key={product.name}
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
        <div className="text-center my-10">
          <Button label="View All Products" />
        </div>
      </div>
    </section>
  );
};

export default Products;
