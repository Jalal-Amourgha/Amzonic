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

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  useEffect(() => {
    if (windowSize > 1340) {
      setElementsInPage(6);
    } else if (windowSize < 1340 && windowSize > 1000) {
      setElementsInPage(5);
    } else if (windowSize < 1000 && windowSize > 810) {
      setElementsInPage(4);
    } else if (windowSize < 810 && windowSize > 600) {
      setElementsInPage(3);
    } else if (windowSize < 600 && windowSize > 400) {
      setElementsInPage(2);
    }
  }, [windowSize]);

  return (
    <section>
      <div className="container">
        <SectionTitle title="Categories" />
        <div className="flex justify-between mb-5">
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
