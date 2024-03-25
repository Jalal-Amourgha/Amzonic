import { Underline, Popup } from "../components";
import { useGlobalContext } from "../context/AppContext";
import {
  Hero,
  Sales,
  Categories,
  BestSelling,
  Services,
  BigOffer,
  Arrival,
  Products,
} from "../sections";

const Home = () => {
  const { showPopup } = useGlobalContext();
  return (
    <>
      <Hero />
      <Sales />
      <Underline />
      <Categories />
      <Underline />
      <BestSelling />
      <Underline />
      <BigOffer />
      <Underline />
      <Products />
      <Underline />
      <Services />
      <Underline />
      <Arrival />
      {showPopup ? <Popup /> : ""}
    </>
  );
};

export default Home;
