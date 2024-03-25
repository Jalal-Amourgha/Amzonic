import { languages } from "../constants";

const TopHeader = () => {
  return (
    <section className="bg-black py-3 text-white">
      <div className="container  flex justify-between">
        <div></div>
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="underline font-bold ml-3">Shop Now</span>
        </p>
        <select name="languages" className="select">
          {languages.map((language) => (
            <option
              key={language.id}
              id={language.id}
              className="bg-black cursor-pointer text-white"
            >
              {language.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default TopHeader;
