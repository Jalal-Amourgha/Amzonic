import { cartbar } from "../constants";

const CartBar = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-4 rounded-md p-4 box-shadow">
          {cartbar.map((section) => (
            <h1
              key={section.name}
              className={`text-xl font-medium text-${section.positon}`}
            >
              {section.name}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartBar;
