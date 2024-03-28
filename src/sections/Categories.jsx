import { useState, useEffect } from "react";
import { SectionTitle, CategoryBox, Arrows } from "../components";
import { categories } from "../constants";

const Categories = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [elementsInPage, setElementsInPage] = useState(6);

  const handleClickNext = () => {
    if (startIndex + elementsInPage < 9) {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1340) {
        setElementsInPage(6);
      } else if (window.innerWidth < 1340 && window.innerWidth > 1000) {
        setElementsInPage(5);
      } else if (window.innerWidth < 1000 && window.innerWidth > 810) {
        setElementsInPage(4);
      } else if (window.innerWidth < 810 && window.innerWidth > 600) {
        setElementsInPage(3);
      } else if (window.innerWidth < 600 && window.innerWidth > 400) {
        setElementsInPage(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="container">
        <SectionTitle title="Categories" />
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-medium">Browse By Category</h1>
          <Arrows prev={handleClickPrev} next={handleClickNext} />
        </div>
        <div className="flex justify-between items-center">
          {categories
            .slice(startIndex, startIndex + elementsInPage)
            .map((category) => (
              <CategoryBox
                key={category.label}
                icon={category.icon}
                name={category.label}
                categorySelected={category.category}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
