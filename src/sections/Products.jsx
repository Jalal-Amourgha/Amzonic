import { products } from "../constants";
import { SaleCard, Arrows, Button } from "../components";
import { useGlobalContext } from "../context/AppContext";

const Products = () => {
  const { category } = useGlobalContext();

  return (
    <section>
      <div className="container">
        <div className="grid grid-cold-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-16">
          {products.map((product) =>
            product.category === category ? (
              <SaleCard
                key={product.name}
                img={product.img}
                label={product.name}
                newPrice={product.price}
                oldPrice={product.oldPrice}
                full={product.startsFull}
                empty={product.starsEmpty}
                half={product.starsHalf}
                rate={product.rate}
                percent={product.percent}
              />
            ) : (
              ""
            )
          )}
        </div>
        <div className="text-center my-10">
          <Button label="View All Products" />
        </div>
      </div>
    </section>
  );
};

export default Products;
