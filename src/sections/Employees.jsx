import { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import { employees } from "../constants";

const Employees = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [counter, setCounter] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [elementsInPage, setElementsInPage] = useState(3);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton((prevButton) => (prevButton + 1) % 3);
      setStartIndex((prevButton) => prevButton + 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (startIndex === 9) {
      setStartIndex(0);
    }
  }, [activeButton]);

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
    if (windowSize > 1140) {
      setElementsInPage(3);
      setCounter(3);
    } else if (windowSize < 1000 && windowSize > 810) {
      setElementsInPage(2);
      setCounter(2);
    } else if (windowSize < 600) {
      setElementsInPage(1);
      setCounter(1);
    }
  }, [windowSize]);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 lg:gap-20 mt-20">
          {employees
            .slice(startIndex, startIndex + elementsInPage)
            .map((employee) => (
              <EmployeeCard
                key={employee.name}
                img={employee.img}
                name={employee.name}
                job={employee.job}
                socials={employee.socials}
              />
            ))}
        </div>

        <div className="mt-10 flex justify-center items-start">
          <div
            className={`h-[15px] w-[15px] rounded-full ${
              activeButton === 0 ? "bg-main-color" : " bg-b-color"
            } cursor-pointer`}
          ></div>
          <div
            className={`h-[15px] w-[15px] rounded-full mx-5 ${
              activeButton === 1 ? "bg-main-color" : " bg-b-color"
            } cursor-pointer`}
          ></div>
          <div
            className={`h-[15px] w-[15px] rounded-full ${
              activeButton === 2 ? "bg-main-color" : " bg-b-color"
            } cursor-pointer`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Employees;
